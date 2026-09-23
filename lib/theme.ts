/**
 * Raw theme values for the places NativeWind classes can't reach — React
 * Navigation options, the status bar, and icon tints. The same palette is
 * mirrored as Tailwind color names in tailwind.config.js.
 */
export const colors = {
  background: "#080912",
  surface: "#111322",
  elevated: "#181B2E",
  border: "#232741",
  accent: "#6366F1",
  accentMuted: "#4F46E5",
  accentSoft: "#1E1F45",
  content: "#F8FAFC",
  contentSecondary: "#A5ABC4",
  contentMuted: "#6B7191",
} as const;

export type ThemeColor = keyof typeof colors;
