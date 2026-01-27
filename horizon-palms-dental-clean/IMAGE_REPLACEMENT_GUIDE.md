# Horizon Palms Dental - Image Replacement Guide

## Overview
This guide shows you all the image placeholders in your website that need to be replaced with actual photos. Each placeholder is clearly marked with comments in the code and has specific size requirements.

---

## 🏢 **1. Logo Placeholder**
**Location:** `src/components/Header.tsx` (Line ~15)
**Current Code:**
```tsx
{/* Logo placeholder - replace with actual logo */}
<div className="h-12 w-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center">
```

**Requirements:**
- **Size:** 48px × 48px (h-12 w-12)
- **Shape:** Circular (rounded-full)
- **Format:** PNG/SVG with transparent background recommended
- **Content:** Practice logo or monogram

---

## 👨‍⚕️ **2. Dr. Nguyen Headshot (Homepage)**
**Location:** `src/app/page.tsx` (Lines ~85-95)
**Current Code:**
```tsx
{/* Dr. Nguyen headshot placeholder */}
<div className="aspect-square bg-gradient-to-br from-green-100 to-stone-100 rounded-2xl flex items-center justify-center">
  <div className="text-center">
    <div className="w-48 h-48 bg-stone-200 rounded-full mx-auto mb-4 flex items-center justify-center">
      <span className="text-stone-400 text-sm">Dr. Nguyen Photo</span>
    </div>
```

**Requirements:**
- **Size:** 192px × 192px (w-48 h-48)
- **Shape:** Circular (rounded-full)
- **Format:** High-resolution portrait photo
- **Content:** Professional headshot of Dr. Nguyen

---

## 🏪 **3. Practice Photo (About Page)**
**Location:** `src/app/about/page.tsx` (Lines ~65-75)
**Current Code:**
```tsx
{/* Practice photo placeholder */}
<div className="aspect-video bg-gradient-to-br from-green-100 to-stone-100 rounded-2xl flex items-center justify-center">
  <div className="text-center">
    <div className="w-32 h-32 bg-stone-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
      <span className="text-stone-400 text-sm">Practice Photo</span>
    </div>
```

**Requirements:**
- **Size:** 128px × 128px (w-32 h-32)
- **Shape:** Square with rounded corners (rounded-lg)
- **Format:** Office interior or exterior photo
- **Content:** Photo of the dental office/waiting room

---

## 👩‍⚕️ **4. Dr. Nguyen Portrait Photo (About Page)**
**Location:** `src/app/about/page.tsx` (Lines ~105-115)
**Current Code:**
```tsx
{/* Dr. Nguyen portrait photo placeholder */}
<div className="bg-gradient-to-br from-green-100 to-stone-100 rounded-2xl p-8 flex flex-col items-center justify-center">
  <div className="w-full max-w-sm h-96 bg-stone-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
    <span className="text-stone-400 text-base">Dr. Nguyen Portrait Photo</span>
  </div>
```

**Requirements:**
- **Size:** 384px tall × max-width-sm (≈384px wide)
- **Shape:** Portrait rectangle with rounded corners (rounded-xl)
- **Format:** High-resolution portrait photo
- **Content:** **This is the large portrait photo you requested!** Professional portrait with partial body shot

---

## 🗺️ **5. Google Maps Placeholder (About Page)**
**Location:** `src/app/about/page.tsx` (Lines ~195-205)
**Current Code:**
```tsx
{/* Google Maps embed placeholder */}
<div className="aspect-video bg-stone-100 rounded-xl flex items-center justify-center mb-4">
  <div className="text-center">
    <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
      <MapPinIcon className="h-8 w-8 text-white" />
    </div>
    <p className="text-stone-600">Google Maps Integration</p>
    <p className="text-sm text-stone-500">5909 S Congress Ave, Lake Worth, FL 33462</p>
  </div>
</div>
```

**Requirements:**
- **Size:** Responsive (aspect-video - 16:9 ratio)
- **Content:** Replace with actual Google Maps embed code
- **Address:** 5909 S Congress Ave, Lake Worth, FL 33462

---

## 🗺️ **6. Google Maps Placeholder (Contact Page)**
**Location:** `src/app/contact/page.tsx` (Similar to About page)
**Current Code:**
```tsx
{/* Google Maps embed placeholder */}
<div className="aspect-video bg-stone-100 rounded-xl flex items-center justify-center mb-6">
```

**Requirements:**
- **Size:** Responsive (aspect-video - 16:9 ratio)
- **Content:** Replace with actual Google Maps embed code
- **Same address as above**

---

## 📋 **Summary of Image Replacements Needed**

| # | Location | Type | Size | Priority |
|---|----------|------|------|----------|
| 1 | Header | Logo | 48×48px | Medium |
| 2 | Homepage | Dr. Nguyen Headshot | 192×192px | High |
| 3 | About Page | Practice Photo | 128×128px | Medium |
| 4 | About Page | **Dr. Nguyen Portrait** | ≈384×384px | **HIGH** |
| 5 | About Page | Google Maps | 16:9 ratio | Low |
| 6 | Contact Page | Google Maps | 16:9 ratio | Low |

---

## 🔄 **How to Replace Images**

### **Option 1: Using Next.js Image Component**
Replace the placeholder divs with:
```tsx
import Image from 'next/image'

// Replace placeholder with:
<Image 
  src="/images/dr-nguyen-portrait.jpg" 
  alt="Dr. Linda Nguyen, DDS"
  width={384}
  height={384}
  className="rounded-xl object-cover"
/>
```

### **Option 2: Using Regular img Tag**
```tsx
<img 
  src="/images/dr-nguyen-portrait.jpg" 
  alt="Dr. Linda Nguyen, DDS"
  className="w-full max-w-sm h-96 rounded-xl object-cover"
/>
```

### **File Structure**
Add your images to the `public` folder:
```
public/
├── images/
│   ├── logo.png
│   ├── dr-nguyen-headshot.jpg
│   ├── dr-nguyen-portrait.jpg
│   ├── practice-photo.jpg
│   └── ...
```

---

## 🎯 **Priority Recommendations**

### **HIGH PRIORITY** (Replace First):
1. **Dr. Nguyen Portrait Photo** (About Page) - This is the large portrait you specifically requested!
2. **Dr. Nguyen Headshot** (Homepage) - Main hero section

### **MEDIUM PRIORITY**:
3. **Practice Logo** (Header) - Brand identity
4. **Practice Photo** (About Page) - Office showcase

### **LOW PRIORITY**:
5. **Google Maps Embeds** - Functional but not critical for launch

---

## 📸 **Photo Requirements Summary**

**For Dr. Nguyen Photos:**
- High resolution (minimum 800px wide)
- Professional lighting
- Clean background
- Consistent with dental practice branding
- Portrait orientation for the large photo

**For Practice Photo:**
- Well-lit office interior/exterior
- Clean, welcoming environment
- Shows professional setting

**For Logo:**
- Transparent background (PNG/SVG)
- Works on both light and dark backgrounds
- Scalable vector format preferred

---

## 🚀 **Ready to Replace?**

Once you have your photos:
1. Add them to the `public/images/` folder
2. Replace the placeholder `<div>` elements with `<img>` or `<Image>` tags
3. Update the `src` paths to point to your actual images
4. Test the responsive behavior

**Need help with the actual replacement code?** Let me know when you have the photos ready and I can help you implement them!
