# PowerShell script to push Horizon Palms Dental changes to GitHub

Write-Host "Pushing Horizon Palms Dental changes to GitHub..." -ForegroundColor Green
Write-Host ""

# Navigate to project directory
Set-Location "C:\Users\Joseph P. Guido\OneDrive - Avalon IT Services Incorporated\Client Data\Linda Nguyen DDS\Data\horizon-palms-dental-clean"

Write-Host "Checking Git status..." -ForegroundColor Yellow
git status
Write-Host ""

Write-Host "Adding all changes..." -ForegroundColor Yellow
git add .
Write-Host ""

Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Fix image loading issues with Next.js Image optimization

- Updated Next.js configuration with proper image optimization settings
- Converted all HTML img tags to Next.js Image components
- Added priority loading for above-the-fold images
- Configured modern image formats (WebP, AVIF)
- Set up proper domain configuration for production"
Write-Host ""

Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin master
Write-Host ""

Write-Host "Done! Check your Vercel dashboard for deployment status." -ForegroundColor Green
Write-Host "Visit https://horizonpalmsdental.com to verify images are loading." -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
