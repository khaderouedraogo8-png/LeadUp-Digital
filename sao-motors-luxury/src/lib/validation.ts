import { z } from "zod";

export const phoneBF = z
  .string()
  .trim()
  .transform((v) => v.replace(/[\s.-]/g, ""))
  .refine((v) => /^(\+226)?[0-9]{8}$/.test(v), {
    message: "Numéro burkinabè invalide (8 chiffres, +226 optionnel)",
  });

const emptyToUndefDiag = (v: unknown) =>
  typeof v === "string" && v.trim() === "" ? undefined : v;

export const diagnosticSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(80),
  phone: phoneBF,
  brand: z.string().trim().min(1, "Marque requise").max(60),
  model: z.string().trim().min(1, "Modèle requis").max(60),
  energy: z.enum(["thermique", "hybride", "electrique"]),
  symptoms: z.string().trim().min(10, "Décrivez le problème (10 caractères min.)").max(500),
  year: z.preprocess(emptyToUndefDiag, z.string().optional()),
  mileage: z.preprocess(emptyToUndefDiag, z.string().optional()),
  preferredDate: z.preprocess(emptyToUndefDiag, z.string().optional()),
  honeypot: z.string().max(0).optional(),
});

const emptyToUndef = (v: unknown) =>
  typeof v === "string" && v.trim() === "" ? undefined : v;

export const appointmentSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: phoneBF,
  serviceType: z.enum([
    "diagnostic",
    "entretien",
    "reparation",
    "pieces",
    "autre",
  ]),
  brand: z.string().trim().min(1).max(60),
  model: z.string().trim().min(1).max(60),
  energy: z.enum(["thermique", "hybride", "electrique"]),
  preferredDate: z.preprocess(emptyToUndef, z.string().optional()),
  slot: z.preprocess(
    emptyToUndef,
    z.enum(["matin", "apres-midi", "indifferent"]).optional()
  ),
  message: z.preprocess(emptyToUndef, z.string().trim().max(500).optional()),
  honeypot: z.string().max(0).optional(),
});

export const quoteSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: phoneBF,
  serviceNeeded: z.string().trim().min(2).max(120),
  brand: z.string().trim().min(1).max(60),
  model: z.string().trim().min(1).max(60),
  energy: z.enum(["thermique", "hybride", "electrique"]),
  message: z.string().trim().min(5).max(500),
  honeypot: z.string().max(0).optional(),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: phoneBF,
  message: z.string().trim().min(5).max(500),
  honeypot: z.string().max(0).optional(),
});

export function makeRef(prefix: string) {
  const d = new Date();
  const date = d.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.floor(Math.random() * 9000 + 1000);
  return `${prefix}-${date}-${rand}`;
}
