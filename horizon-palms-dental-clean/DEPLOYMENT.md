# Horizon Palms Dental Website - Production Deployment Guide

## Prerequisites

### System Requirements
- **Node.js**: Version 16.8 or later
- **npm**: Latest version
- **Git**: For version control (optional but recommended)
- **Server**: Linux/Windows VPS or cloud hosting with SSH access

### Domain & SSL
- Registered domain name
- SSL certificate (Let's Encrypt recommended for free SSL)

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Push to GitHub
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
git remote add origin https://github.com/jpguido/horizonpalmsdental.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository (`jpguido/horizonpalmsdental`)
4. Vercel will auto-detect Next.js and deploy
5. Your site will be live at `https://horizonpalmsdental.vercel.app`
6. Add your custom domain in Vercel dashboard

**Pros**: Automatic deployments, SSL, CDN, zero configuration
**Cons**: Vendor lock-in, monthly costs for advanced features

---

## Option 2: VPS/Dedicated Server Deployment

### Step 1: Server Setup

#### Connect to your server
```bash
ssh root@your-server-ip
```

#### Update system packages
```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RHEL
sudo yum update -y
```

#### Install Node.js
```bash
# Using NodeSource (recommended)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

### Step 2: Application Deployment

#### Create application directory
```bash
sudo mkdir -p /var/www/horizon-palms-dental
sudo chown -R $USER:$USER /var/www/horizon-palms-dental
cd /var/www/horizon-palms-dental
```

#### Clone or upload your code
```bash
# Option A: Clone from GitHub
git clone https://github.com/jpguido/horizonpalmsdental.git .
```

Or upload files via SCP/FTP to `/var/www/horizon-palms-dental`

#### Install dependencies
```bash
npm install
```

#### Build the application
```bash
npm run build
```

### Step 3: Configure PM2

#### Create PM2 ecosystem file
```bash
pm2 init simple
```

#### Edit the ecosystem file
```bash
nano ecosystem.config.js
```

Replace with:
```javascript
module.exports = {
  apps: [{
    name: 'horizon-palms-dental',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/horizon-palms-dental',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

#### Start the application with PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp /home/$USER
```

### Step 4: Configure Nginx (Reverse Proxy)

#### Install Nginx
```bash
sudo apt install nginx -y
```

#### Create Nginx configuration
```bash
sudo nano /etc/nginx/sites-available/horizon-palms-dental
```

Add:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### Enable the site
```bash
sudo ln -s /etc/nginx/sites-available/horizon-palms-dental /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 5: SSL Certificate (Let's Encrypt)

#### Install Certbot
```bash
sudo apt install certbot python3-certbot-nginx -y
```

#### Obtain SSL certificate
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

#### Auto-renewal
```bash
sudo crontab -e
# Add this line:
0 12 * * * /usr/bin/certbot renew --quiet
```

### Step 6: Firewall Configuration

#### Configure UFW (Ubuntu)
```bash
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## Option 3: Docker Deployment

### Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

### Create docker-compose.yml
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - web
    restart: unless-stopped
```

### Deploy with Docker
```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

---

## Post-Deployment Configuration

### Environment Variables
Create `.env.local` file:
```bash
# Production environment variables
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Performance Optimization
1. **Enable Gzip compression** in Nginx
2. **Set up CDN** for static assets
3. **Configure caching headers**
4. **Optimize images** before upload

### Monitoring & Maintenance

#### PM2 Monitoring
```bash
pm2 monit
pm2 logs horizon-palms-dental
```

#### Update Application
```bash
cd /var/www/horizon-palms-dental
git pull origin main
npm install
npm run build
pm2 restart horizon-palms-dental
```

#### Server Updates
```bash
sudo apt update && sudo apt upgrade -y
```

---

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   sudo lsof -ti:3000 | xargs sudo kill -9
   ```

2. **Permission denied**
   ```bash
   sudo chown -R $USER:$USER /var/www/horizon-palms-dental
   ```

3. **Nginx configuration test**
   ```bash
   sudo nginx -t
   ```

4. **PM2 not starting**
   ```bash
   pm2 delete horizon-palms-dental
   pm2 start ecosystem.config.js
   ```

### Logs Location
- **Application**: `pm2 logs horizon-palms-dental`
- **Nginx**: `sudo tail -f /var/log/nginx/error.log`
- **System**: `sudo journalctl -u nginx -f`

---

## Security Checklist

- [ ] Change default SSH port
- [ ] Disable root login
- [ ] Set up fail2ban
- [ ] Configure firewall
- [ ] Keep system updated
- [ ] Use strong passwords
- [ ] Enable SSL/TLS
- [ ] Set security headers
- [ ] Regular backups
- [ ] Monitor logs

---

## Support

For issues or questions:
1. Check application logs: `pm2 logs`
2. Check Nginx logs: `/var/log/nginx/`
3. Verify Node.js version: `node --version`
4. Test build locally: `npm run build`

**Good luck with your deployment!** 🚀
