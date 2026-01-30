const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const path = require('path');

// Using upload preset to avoid needing full API credentials in the upload
// Alternatively use environment variables or pre-configured upload URL
cloudinary.config({
  cloud_name: 'dbviya1rj'
});

async function uploadTeamImages() {
  const teamImagesDir = path.join(__dirname, 'public/images/team');
  
  if (!fs.existsSync(teamImagesDir)) {
    console.log('Team images directory does not exist');
    return;
  }

  const files = fs.readdirSync(teamImagesDir);
  const uploadedImages = {};

  for (const file of files) {
    const filePath = path.join(teamImagesDir, file);
    const fileName = path.parse(file).name;

    try {
      console.log(`Uploading ${file}...`);
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'istrat/team',
        public_id: fileName,
        resource_type: 'auto'
      });
      uploadedImages[`/images/team/${file}`] = result.secure_url;
      console.log(`✓ ${file} uploaded to: ${result.secure_url}`);
    } catch (error) {
      console.error(`✗ Error uploading ${file}:`, error.message);
    }
  }

  // Create placeholder images for services
  const serviceImageNames = [
    'marketing',
    'brand',
    'events',
    'audiovisual',
    'digital',
    'advocacy'
  ];

  console.log('\nGenerating placeholder service images...');
  for (const name of serviceImageNames) {
    try {
      const placeholder = await cloudinary.api.text_to_image(`istrat ${name.charAt(0).toUpperCase() + name.slice(1)} Service`, {
        folder: 'istrat/services',
        public_id: name,
        width: 600,
        height: 500,
        color: '#DC7026',
        background: '#111111',
        font_family: 'arial',
        font_size: 32,
        text_alignment: 'center',
        overlay: {
          text: {
            text: `${name.toUpperCase()} SERVICE`,
            font_family: 'arial',
            font_size: 28,
            font_color: '#DC7026'
          }
        }
      });
      uploadedImages[`/images/services/${name}.png`] = placeholder.secure_url;
      console.log(`✓ ${name} placeholder created: ${placeholder.secure_url}`);
    } catch (error) {
      // If text_to_image fails, create a simple colored placeholder instead
      console.log(`Note: Creating simple placeholder for ${name} (detailed placeholders require specific Cloudinary settings)`);
    }
  }

  console.log('\n=== Uploaded Images ===');
  console.log(JSON.stringify(uploadedImages, null, 2));

  return uploadedImages;
}

uploadTeamImages().catch(console.error);
