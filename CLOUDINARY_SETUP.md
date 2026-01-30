# Cloudinary Image Upload Instructions

Your website has been configured to use Cloudinary for image hosting. All image URLs have been updated to point to Cloudinary. Now you need to upload the actual images to complete the setup.

## Cloudinary Account Details
- **Cloud Name:** `dbviya1rj`
- **API Key:** `QPE3rgLBAVEevqkNKE3einXTPTU`
- **Base URL:** `https://res.cloudinary.com/dbviya1rj/image/upload`

## Images to Upload

### Team Images (from `public/images/team/`)
Upload these to the **`istrat/team/`** folder:
- `arnold_argano_bw.png`
- `erwyn_claudio_bw.png`
- `ric_lopez_bw.png`
- `eugenio_aguilar_bw.png`
- `ferdie_aboga_bw.png`
- `ela_teodosio_bw.png`
- `lou_bognot_bw.png`

### Service Images (Placeholder - Create Custom)
Upload to **`istrat/services/`** folder (you can create these as design images or use placeholders):
- `marketing` - For integrated marketing services
- `brand` - For brand development
- `events` - For event management
- `audiovisual` - For audio-visual production
- `digital` - For digital marketing
- `advocacy` - For advocacy relations

### Background Images (Create/Upload to `istrat/`)
- `creative-bg` - Background for creative section
- `video-thumb` - Video thumbnail placeholder

## Method 1: Upload via Cloudinary Dashboard (Easiest)

1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Log in with your account
3. Navigate to **Media Library**
4. Create folders:
   - Click the folder icon and create `istrat/team`
   - Create `istrat/services`
5. Upload files:
   - Select the team images from `public/images/team/`
   - Upload them to `istrat/team/`
   - Create or upload service images to `istrat/services/`

## Method 2: Upload via Script (Node.js)

Run this command after setting up your upload preset or getting proper API credentials:

```bash
# Upload all team images
for file in public/images/team/*.png; do
  curl -X POST \
    -F "file=@$file" \
    -F "folder=istrat/team" \
    -F "upload_preset=YOUR_UPLOAD_PRESET" \
    "https://api.cloudinary.com/v1_1/dbviya1rj/image/upload"
done
```

## Method 3: Using Cloudinary CLI

```bash
# Install Cloudinary CLI
npm install -g cloudinary-cli

# Configure
cloudinary auth set dbviya1rj QPE3rgLBAVEevqkNKE3einXTPTU

# Upload
cloudinary upload public/images/team -f istrat/team
```

## Current URL Patterns

Your site is configured to use these URL patterns. Once images are uploaded, they'll automatically display:

**Team Images:**
```
https://res.cloudinary.com/dbviya1rj/image/upload/w_400,h_400,c_fill,q_auto/istrat/team/{filename}
```

**Service Images:**
```
https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/{filename}
```

**Background Images:**
```
https://res.cloudinary.com/dbviya1rj/image/upload/w_1200,h_800,c_fill,q_auto/istrat/{filename}
```

## Next Steps

1. **Upload the team images** using one of the methods above
2. **Create or upload service images** (6 images for the 6 services)
3. **Create background images** if needed
4. **Commit and push** your code changes:
   ```bash
   git add .
   git commit -m "Configure Cloudinary for image hosting"
   git push origin main
   ```
5. **Redeploy to Vercel** - it should automatically trigger a new deployment
6. **Verify** that all images appear on your live site

## Troubleshooting

- **Images not showing:** Make sure the public_id (filename) matches exactly what's in the URL
- **404 errors:** Verify the folder path is correct (`istrat/team/`, `istrat/services/`, etc.)
- **Need different image sizes?** Modify the transformation parameters in the URLs:
  - `w_400,h_400` = width and height
  - `c_fill` = crop to fill
  - `q_auto` = auto quality

## Questions?

If you need help with:
- **Creating service images:** Use your brand colors (DC7026 orange, 111111 dark) 
- **Image dimensions:** Team=400x400px, Services=600x500px
- **Upload limits:** Free tier supports unlimited uploads

You can access your Cloudinary media library anytime at: https://cloudinary.com/console
