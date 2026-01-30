// Cloudinary URL generator for iStrat images
// Cloud Name: dbviya1rj
// Base URL: https://res.cloudinary.com/dbviya1rj/image/upload

/**
 * Generate Cloudinary URL for images
 * Format: https://res.cloudinary.com/{cloud}/image/upload/[transformations]/[folder]/[public_id]
 */

export const CLOUDINARY_CLOUD = 'dbviya1rj'
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload`

/**
 * Generate Cloudinary image URL with optional transformations
 */
export const getCloudinaryUrl = (
  publicId: string,
  folder: string = 'istrat',
  transformations: string[] = []
): string => {
  const transform = transformations.length > 0 ? `${transformations.join('/')}/` : ''
  return `${CLOUDINARY_BASE_URL}/${transform}${folder}/${publicId}`
}

/**
 * Team member images - map of local paths to Cloudinary URLs
 * These should be uploaded to: istrat/team/ folder
 */
export const TEAM_IMAGES = {
  arnold_argano: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_400,h_400,c_fill,q_auto/istrat/team/arnold_argano_bw',
  erwyn_claudio: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_400,h_400,c_fill,q_auto/istrat/team/erwyn_claudio_bw',
  ric_lopez: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_400,h_400,c_fill,q_auto/istrat/team/ric_lopez_bw',
  eugenio_aguilar: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_400,h_400,c_fill,q_auto/istrat/team/eugenio_aguilar_bw',
  ferdie_aboga: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_400,h_400,c_fill,q_auto/istrat/team/ferdie_aboga_bw',
  ela_teodosio: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_400,h_400,c_fill,q_auto/istrat/team/ela_teodosio_bw',
  lou_bognot: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_400,h_400,c_fill,q_auto/istrat/team/lou_bognot_bw',
}

/**
 * Service images - map of service names to Cloudinary URLs
 * These should be uploaded to: istrat/services/ folder
 */
export const SERVICE_IMAGES = {
  marketing: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/marketing',
  brand: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/brand',
  events: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/events',
  audiovisual: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/audiovisual',
  digital: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/digital',
  advocacy: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_500,c_fill,q_auto/istrat/services/advocacy',
}

/**
 * Other images
 */
export const IMAGES = {
  creativeBg: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_1200,h_800,c_fill,q_auto/istrat/creative-bg',
  videoThumb: 'https://res.cloudinary.com/dbviya1rj/image/upload/w_600,h_400,c_fill,q_auto/istrat/video-thumb',
}
