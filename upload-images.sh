#!/bin/bash

CLOUD_NAME="dbviya1rj"
API_KEY="QPE3rgLBAVEevqkNKE3einXTPTU"

# Function to upload a file to Cloudinary
upload_to_cloudinary() {
  local file_path=$1
  local folder=$2
  local file_name=$(basename "$file_path")
  
  echo "Uploading $file_name to folder: $folder..."
  
  curl -s -X POST \
    -F "file=@$file_path" \
    -F "folder=$folder" \
    -F "api_key=$API_KEY" \
    "https://api.cloudinary.com/v1_1/$CLOUD_NAME/auto/upload" | jq '.secure_url'
}

# Upload team images
echo "=== Uploading Team Images ==="
for file in /Users/archerterminez/Desktop/REPOSITORY/istrat-website/public/images/team/*.png; do
  upload_to_cloudinary "$file" "istrat/team"
done

echo "Done!"
