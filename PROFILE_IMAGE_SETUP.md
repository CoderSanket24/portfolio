# How to Add Your Profile Image

## Step 1: Add Your Image to Assets
1. Place your profile image in the `src/assets/` folder
2. Name it something like `profile.jpg` or `sanket-profile.png`

## Step 2: Update the Hero Component
In `src/components/hero.tsx`, find this line:
```typescript
const profileImageUrl = "/api/placeholder/128/128"; // Change this to your image path
```

Replace it with:
```typescript
// Option 1: Import the image (recommended)
import profileImage from "../assets/your-image-name.jpg";
const profileImageUrl = profileImage;

// Option 2: Use public folder path
const profileImageUrl = "/your-image-name.jpg"; // if image is in public folder
```

## Step 3: Image Requirements
- **Size**: Recommended 400x400px or larger (square aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution for crisp display
- **Background**: Consider using an image with a clean background

## Example Implementation:
```typescript
import profileImage from "../assets/sanket-profile.jpg";

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const profileImageUrl = profileImage; // Your actual image
  
  // ... rest of component
};
```

## Current Features:
✅ Automatic fallback to "S" initial if image fails to load
✅ Hover animation (image scales on hover)
✅ Gradient border around the image
✅ Floating animation
✅ Responsive design