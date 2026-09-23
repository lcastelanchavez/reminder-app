/** Human-readable distance, e.g. "120 m away" or "1.2 km away". */
export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)} m away`;
  }

  return `${(meters / 1000).toFixed(1)} km away`;
}

/** "3 items" / "1 item" — used on store card headers. */
export function formatItemCount(count: number): string {
  return count === 1 ? "1 item" : `${count} items`;
}
