/**
 * Determines if polygon has self-intersections
 *
 * @param vertices
 */
export default function polyIsComplex(vertices: number[][]): boolean {
  let intersections = 0

  for (let i = 0; i < vertices.length - 1; i++) {
    for (let j = i + 1; j < vertices.length - 1; j++) {
      if (
        intersects(vertices[i], vertices[i + 1], vertices[j], vertices[j + 1])
      ) {
        intersections++
      }
    }
  }

  return intersections >= vertices.length
}

/**
 * Determines if two lines intersect
 *
 * @param v1
 * @param v2
 * @param v3
 * @param v4
 */
function intersects(
  v1: number[],
  v2: number[],
  v3: number[],
  v4: number[]
): boolean {
  const det =
    (v2[0] - v1[0]) * (v4[1] - v3[1]) - (v4[0] - v3[0]) * (v2[1] - v1[1])
  if (det === 0) {
    return false
  } else {
    const lambda =
      ((v4[1] - v3[1]) * (v4[0] - v1[0]) + (v3[0] - v4[0]) * (v4[1] - v1[1])) /
      det
    const gamma =
      ((v1[1] - v2[1]) * (v4[0] - v1[0]) + (v2[0] - v1[0]) * (v4[1] - v1[1])) /
      det
    return lambda >= 0 && lambda <= 1 && gamma >= 0 && gamma <= 1
  }
}
