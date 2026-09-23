/**
 * Claude API client placeholder.
 *
 * Planned use: turn a free-text brain dump ("grab oat milk and a birthday card
 * for Sam") into structured reminders assigned to the right store.
 *
 * IMPORTANT — this must not run on the device. An Anthropic API key shipped in
 * a mobile bundle is readable by anyone who downloads the app. Put the call
 * behind a Supabase edge function (or any server you control), keep the key in
 * that server's environment, and have the app POST to your own endpoint.
 * `parseRemindersFromText` below is shaped that way: it calls YOUR backend.
 */

import type { Reminder, Store } from "@/types";

/** Default model for reminder parsing. Cheap, fast, good at structured output. */
export const CLAUDE_MODEL = "claude-sonnet-5";

export interface ParseRemindersRequest {
  /** Raw text the user typed or dictated. */
  text: string;
  /** Stores the model may assign reminders to. */
  stores: Pick<Store, "id" | "name" | "category">[];
}

export type ParsedReminder = Pick<Reminder, "storeId" | "title" | "note">;

/**
 * Sends free-text to the backend, which forwards it to the Anthropic Messages
 * API and returns structured reminders.
 *
 * Not implemented yet — the backend endpoint does not exist.
 */
export async function parseRemindersFromText(
  _request: ParseRemindersRequest
): Promise<ParsedReminder[]> {
  throw new Error(
    "parseRemindersFromText is not implemented — stand up the backend endpoint first."
  );
}
