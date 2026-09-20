import { NextResponse } from "next/server";
import { contactSchema, makeRef } from "@/lib/validation";
import { saveLead } from "@/lib/leads";

const rate = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const hits = (rate.get(ip) || []).filter((t) => now - t < windowMs);
  if (hits.length >= 5) return true;
  hits.push(now);
  rate.set(ip, hits);
  return false;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "RATE_LIMIT" }, { status: 429 });
  }

  const body = await req.json();
  if (body.honeypot) {
    return NextResponse.json({ ok: true, ref: makeRef("SML") });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fields[key]) fields[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "VALIDATION_ERROR", fields },
      { status: 400 }
    );
  }

  const ref = makeRef("SML");
  await saveLead("contact", ref, parsed.data);
  return NextResponse.json({ ok: true, ref }, { status: 201 });
}
