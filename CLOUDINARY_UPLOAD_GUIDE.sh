#!/bin/bash
# Quick Upload Guide for Cloudinary Images
# This script creates a simple server to show upload progress

cat << 'EOF'

╔════════════════════════════════════════════════════════════════════╗
║           iStrat Website - Cloudinary Image Setup                  ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  Your code has been updated! Now upload these images to            ║
║  Cloudinary to complete the setup.                                 ║
║                                                                    ║
╠════════════════════════════════════════════════════════════════════╣
║  STEP 1: UPLOAD TEAM IMAGES                                        ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  Go to: https://cloudinary.com/console/media_library               ║
║                                                                    ║
║  1. Create folder: istrat/team                                     ║
║  2. Upload these 7 files from public/images/team/:                 ║
║     ☐ arnold_argano_bw.png                                         ║
║     ☐ erwyn_claudio_bw.png                                         ║
║     ☐ ric_lopez_bw.png                                             ║
║     ☐ eugenio_aguilar_bw.png                                        ║
║     ☐ ferdie_aboga_bw.png                                           ║
║     ☐ ela_teodosio_bw.png                                           ║
║     ☐ lou_bognot_bw.png                                             ║
║                                                                    ║
╠════════════════════════════════════════════════════════════════════╣
║  STEP 2: CREATE SERVICE IMAGES                                     ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  Create folder: istrat/services                                    ║
║                                                                    ║
║  Upload 6 service images (600x500px minimum):                      ║
║     ☐ marketing.jpg/png        (Integrated Marketing)              ║
║     ☐ brand.jpg/png            (Brand Development)                 ║
║     ☐ events.jpg/png           (Event Management)                  ║
║     ☐ audiovisual.jpg/png      (Audio-Visual Production)           ║
║     ☐ digital.jpg/png          (Digital Marketing)                 ║
║     ☐ advocacy.jpg/png         (Advocacy Relations)                ║
║                                                                    ║
║  Tip: Use iStrat brand colors:                                     ║
║       Orange: #DC7026                                              ║
║       Dark: #111111                                                ║
║                                                                    ║
╠════════════════════════════════════════════════════════════════════╣
║  STEP 3: (OPTIONAL) CREATE BACKGROUND IMAGES                       ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  Upload to: istrat/ folder                                         ║
║     ☐ creative-bg.jpg         (1200x800px)                         ║
║     ☐ video-thumb.jpg         (600x400px)                          ║
║                                                                    ║
╠════════════════════════════════════════════════════════════════════╣
║  CREDENTIALS                                                       ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  Cloud Name: dbviya1rj                                             ║
║  Dashboard: https://cloudinary.com/console                         ║
║                                                                    ║
╠════════════════════════════════════════════════════════════════════╣
║  VERIFICATION                                                      ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  Once images are uploaded:                                         ║
║  1. Visit your Vercel deployment                                   ║
║  2. Images should appear automatically                             ║
║  3. No new deployment needed!                                      ║
║                                                                    ║
║  Your Vercel project is now pushing changes automatically.         ║
║                                                                    ║
╠════════════════════════════════════════════════════════════════════╣
║  ALTERNATIVE: PROGRAMMATIC UPLOAD                                  ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  If you want to upload via script, see: CLOUDINARY_SETUP.md        ║
║                                                                    ║
║  Quick test upload (requires upload preset):                       ║
║  curl -X POST \\                                                    ║
║    -F "file=@public/images/team/erwyn_claudio_bw.png" \\           ║
║    -F "folder=istrat/team" \\                                      ║
║    -F "upload_preset=YOUR_PRESET" \\                               ║
║    "https://api.cloudinary.com/v1_1/dbviya1rj/image/upload"        ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝

EOF
