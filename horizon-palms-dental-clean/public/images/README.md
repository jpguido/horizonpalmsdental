# Image Setup Instructions

## Current Image Configuration

Your website is now configured to use JPG images from the `/public/images/` folder.

## Required Images

### 1. Logo Image
- **File:** `logo.jpg`
- **Location:** Header (top left of every page)
- **Size:** 48×48px (will be displayed as circular)
- **Recommended:** Square logo with transparent background or white background

### 2. Dr. Nguyen Headshot
- **File:** `dr-nguyen-headshot.jpg`
- **Location:** Homepage hero section
- **Size:** 192×192px (will be displayed as circular)
- **Recommended:** Professional headshot, centered, good lighting

## How to Add Your Images

1. **Prepare your images:**
   - Save your logo as `logo.jpg`
   - Save Dr. Nguyen's headshot as `dr-nguyen-headshot.jpg`
   - Make sure they're high quality but optimized for web (under 500KB each)

2. **Copy images to the folder:**
   ```
   horizon-palms-dental-clean/public/images/
   ├── logo.jpg
   └── dr-nguyen-headshot.jpg
   ```

3. **Test the changes:**
   - The website will automatically detect the new images
   - Refresh your browser to see the changes

## Image Requirements

### Logo (`logo.jpg`)
- **Dimensions:** At least 96×96px (displays at 48×48px)
- **Format:** JPG, PNG, or WebP
- **Background:** Transparent or solid color that works with green gradient
- **Content:** Practice logo or monogram

### Dr. Nguyen Headshot (`dr-nguyen-headshot.jpg`)
- **Dimensions:** At least 384×384px (displays at 192×192px)
- **Format:** JPG, PNG, or WebP
- **Style:** Professional headshot
- **Background:** Clean, neutral background preferred
- **Orientation:** Portrait (head and shoulders)

## Code Changes Made

✅ **Header Logo:** Updated in `src/components/Header.tsx`
✅ **Homepage Headshot:** Updated in `src/app/page.tsx`

Both images now use:
```html
<img 
  src="/images/[filename].jpg" 
  alt="[description]"
  className="[size-classes] object-cover"
/>
```

## Next Steps

When you're ready to add more images (like the large portrait photo), refer to the `IMAGE_REPLACEMENT_GUIDE.md` file for detailed instructions on replacing the remaining placeholders.

## Troubleshooting

If images don't appear:
1. Check file names match exactly (case-sensitive)
2. Ensure files are in the correct `/public/images/` folder
3. Restart the development server: `npm run dev`
4. Check browser console for any error messages

Your website is ready for your photos! 🎉
