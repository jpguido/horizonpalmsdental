@echo off
echo Pushing Horizon Palms Dental changes to GitHub...
echo.

REM Navigate to project directory
cd /d "C:\Users\Joseph P. Guido\OneDrive - Avalon IT Services Incorporated\Client Data\Linda Nguyen DDS\Data\horizon-palms-dental-clean"

echo Checking Git status...
git status
echo.

echo Adding all changes...
git add .
echo.

echo Committing changes...
git commit -m "Fix image loading issues with Next.js Image optimization

- Updated Next.js configuration with proper image optimization settings
- Converted all HTML img tags to Next.js Image components
- Added priority loading for above-the-fold images
- Configured modern image formats (WebP, AVIF)
- Set up proper domain configuration for production"
echo.

echo Pushing to GitHub...
git push origin master
echo.

echo Done! Check your Vercel dashboard for deployment status.
echo Visit https://horizonpalmsdental.com to verify images are loading.
pause
