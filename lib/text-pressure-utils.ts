/**
 * Text Pressure Utility Functions
 * Math and calculation utilities for text-pressure animation
 */

export interface Point {
    x: number
    y: number
}

/**
 * Calculate Euclidean distance between two points
 */
export function dist(a: Point, b: Point): number {
    const dx = b.x - a.x
    const dy = b.y - a.y
    return Math.sqrt(dx * dx + dy * dy)
}

/**
 * Calculate attribute value based on distance
 * Returns a value that decreases as distance increases
 */
export function getAttr(distance: number, minVal: number, maxVal: number, maxDist: number): number {
    const val = maxVal - Math.abs((maxVal * distance) / maxDist)
    return Math.max(minVal, val + minVal)
}

/**
 * Calculate font variation settings string
 */
export function getFontVariationSettings(
    distance: number,
    maxDist: number,
    width: boolean,
    weight: boolean,
    italic: boolean
): string {
    const wdth = width ? Math.floor(getAttr(distance, 5, 200, maxDist)) : 100
    const wght = weight ? Math.floor(getAttr(distance, 100, 900, maxDist)) : 400
    const italVal = italic ? getAttr(distance, 0, 1, maxDist).toFixed(2) : "0"

    return `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`
}

/**
 * Calculate opacity based on distance
 */
export function getOpacity(distance: number, maxDist: number, alpha: boolean): string {
    if (!alpha) return "1"
    return getAttr(distance, 0, 1, maxDist).toFixed(2)
}
