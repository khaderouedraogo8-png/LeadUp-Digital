import { mkdir, appendFile } from "fs/promises";
import path from "path";

/** MVP lead store — file-based. Replace with Postgres + Resend in production. */
export async function saveLead(
  type: string,
  ref: string,
  payload: Record<string, unknown>
) {
  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  const line =
    JSON.stringify({
      type,
      ref,
      receivedAt: new Date().toISOString(),
      payload,
    }) + "\n";
  await appendFile(path.join(dir, "leads.jsonl"), line, "utf8");
  console.info(`[lead] ${type} ${ref}`, payload);
}
