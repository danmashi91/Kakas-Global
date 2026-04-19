# Product Management Guide for KAKAS GLOBAL

## 📋 How to Add & Manage Products

### 1. **Adding New Products**
To add a new product, edit the file: `/data/products.ts`

#### Step-by-Step:
1. Open `data/products.ts`
2. Add a new product object to the `products` array
3. Follow this format:

```typescript
{
  id: 13, // Next available ID
  name: "Product Name",
  category: "category_id", // Use existing category or add new
  description: "Product description",
  forms: ["Form 1", "Form 2"],
  packaging: ["Packaging 1", "Packaging 2"],
  moq: "Minimum Order Quantity",
  season: "Harvest season",
  certifications: ["Cert 1", "Cert 2"],
  specifications: {
    // Optional specifications
    moistureContent: "≤ X%",
    purity: "≥ X%",
    // Add other relevant specs
  },
  priceRange: "$X - $Y/MT", // Optional
  leadTime: "X-Y weeks", // Optional
  origin: "State 1, State 2" // Optional
}
```

### 2. **Available Categories**
Use these category IDs:
- `"nuts"` - Nuts
- `"beans"` - Beans
- `"seeds"` - Seeds
- `"oils"` - Oils & Butter
- `"herbs"` - Herbs & Tea
- `"spices"` - Spices
- `"other"` - Other Products

To add a new category:
1. Add to `categories` array in `data/products.ts`
2. Update the category filter in the products page

### 3. **Product Specifications**
Common specification fields:
- `moistureContent` - Maximum moisture percentage
- `purity` - Minimum purity percentage
- `size` - Size grading
- `color` - Color description
- `shelfLife` - Shelf life in months
- `gingerolContent` - For ginger products
- `calorificValue` - For fuel products
- `ashContent` - For fuel products
- `proteinContent` - For protein-rich products
- `ffaContent` - For oils (Free Fatty Acid)

### 4. **Product Images**
Currently using gradient placeholders. To add real images:

1. Add images to `/public/products/` folder
2. Update the product object:
```typescript
images: ["/products/cashew-nuts.jpg", "/products/cashew-nuts-2.jpg"]
```

### 5. **Updating Existing Products**
1. Find the product by ID in `data/products.ts`
2. Update any field as needed
3. The changes will automatically reflect on the website

### 6. **Removing Products**
1. Remove the product object from the `products` array
2. Ensure no broken links remain

## 🎯 **Example: Adding "Black Pepper"**

```typescript
{
  id: 13,
  name: "Black Pepper",
  category: "spices",
  description: "Premium quality black pepper with high piperine content, sourced from Nigerian farms.",
  forms: ["Whole", "Ground", "Crushed"],
  packaging: ["25kg bags", "50kg bags", "Custom packaging"],
  moq: "5 MT",
  season: "Year-round",
  certifications: ["NAFDAC", "SON", "EU Compliant", "FDA"],
  specifications: {
    moistureContent: "≤ 12%",
    purity: "≥ 99%",
    piperineContent: "≥ 5%",
    shelfLife: "24 months"
  },
  priceRange: "$1,500 - $2,000/MT",
  leadTime: "2-4 weeks",
  origin: "Ondo, Ogun, Cross River States"
}
```

## 🔧 **Advanced Features**

### **Product Search & Filter**
- Products are automatically searchable by name, description, and category
- Filter by category using the category buttons
- Real-time search as you type

### **Request Quote Integration**
- Each product has a "Request Quote" button
- Pre-fills the product name in the quote form
- Links to `/request-quote?product=Product+Name`

### **Spec Sheets**
- "Spec Sheet" button on each product card
- Currently placeholder - can link to PDFs in `/public/specs/`

## 📊 **Product Data Structure**

```typescript
interface Product {
  id: number;                    // Unique identifier
  name: string;                  // Product name
  category: string;              // Category ID
  description: string;           // Product description
  forms: string[];               // Available forms
  packaging: string[];           // Packaging options
  moq: string;                   // Minimum Order Quantity
  season: string;                // Harvest/availability season
  certifications: string[];      // Quality certifications
  specifications?: {             // Technical specifications
    [key: string]: string;
  };
  images?: string[];             // Image paths
  priceRange?: string;           // Price range (indicative)
  leadTime?: string;             // Lead time for delivery
  origin?: string;               // Origin states
}
```

## 🚀 **Quick Actions**

### **Add 5 New Products:**
```bash
# 1. Open the products file
code data/products.ts

# 2. Copy-paste new products at the end of the array
# 3. Save and the website updates automatically
```

### **Update All Prices:**
```bash
# Edit each product's priceRange field
# Save and deploy
```

### **Add Product Images:**
```bash
# 1. Create folder
mkdir -p public/products

# 2. Add images
# 3. Update product objects with image paths
```

## 📱 **Testing Your Changes**

1. **Local Development:**
   ```bash
   npm run dev
   ```
   Open: http://localhost:3000/products

2. **Check:**
   - New products appear
   - Search works
   - Filters work
   - Request quote links work

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Add new products"
   git push origin main
   ```
   Vercel automatically deploys updates

## 🛠️ **Troubleshooting**

### **Product Not Appearing?**
- Check category matches exactly
- Ensure ID is unique
- Verify the product is in the `products` array

### **Search Not Working?**
- Check product name/description spelling
- Ensure search term is in lowercase comparison

### **Category Filter Not Working?**
- Verify category ID exists in `categories` array
- Check product has correct `category` value

## 📈 **Best Practices**

1. **Keep Descriptions Clear**
   - Focus on benefits for international buyers
   - Include key selling points
   - Mention quality standards

2. **Use Consistent MOQ Format**
   - Use "X MT" for metric tons
   - Be realistic about minimums

3. **Update Season Information**
   - Keep harvest seasons accurate
   - Note year-round availability

4. **Maintain Certification List**
   - Include all relevant certifications
   - Update as new certifications are obtained

5. **Regular Price Updates**
   - Update `priceRange` quarterly
   - Note it's indicative only

## 🔗 **Related Files**

- `/data/products.ts` - Main product data
- `/app/products/page.tsx` - Products page
- `/app/request-quote/page.tsx` - Quote form
- `/public/products/` - Product images
- `/public/specs/` - Specification sheets

## 🎉 **Congratulations!**
You now have a fully functional product management system. Add, update, or remove products anytime by editing `data/products.ts`.