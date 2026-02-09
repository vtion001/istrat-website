/**
 * Data Module Index
 * Re-exports all data from the data directory for convenient imports
 */

// Video data and utilities
export {
    VIDEOS,
    HERO_VIDEO,
    videoHighlights,
    ytThumb,
    isVideoSrc,
    toYouTubeEmbed,
    type VideoData,
} from './videos'

// Constants and lists
export {
    socialMedia,
    audioVisual,
    events,
    specializations,
    externalServices,
    serviceDescriptions,
} from './constants'

// Services data
export {
    homeServices,
    productsServices,
    ourServices,
    serviceDetails,
    type Service,
    type ServiceDetail,
} from './services'

// Team data
export {
    team,
    getTeamMemberAvatar,
    getTeamByLevel,
    type TeamMember,
} from './team'

// Work categories
export { workCategories, categoryKeys, type WorkCategory } from './work-categories'

// Home page content
export { homeContent, coreValues, type CoreValue } from './home-content'
