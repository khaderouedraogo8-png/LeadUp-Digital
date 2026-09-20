"use client";

import { FormEvent, useState } from "react";
import { Button, LinkButton } from "@/components/ui/Button";
import { waLink, waMessages } from "@/lib/wa";

type Field =
  | { name: string; label: string; type?: "text" | "tel" | "date" | "number"; required?: boolean; placeholder?: string }
  | {
      name: string;
      label: string;
      type: "select";
      required?: boolean;
      options: { value: string; label: string }[];
    }
  | { name: string; label: string; type: "textarea"; required?: boolean; placeholder?: string };

export function LeadForm({
  endpoint,
  fields,
  submitLabel,
  waFallback,
}: {
  endpoint: string;
  fields: Field[];
  submitLabel: string;
  waFallback?: keyof typeof waMessages;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ref, setRef] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = Object.fromEntries(fd.entries());

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.fields) setFieldErrors(data.fields);
        throw new Error(data.error || "Erreur d'envoi");
      }
      setRef(data.ref);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur");
    }
  }

  if (status === "success" && ref) {
    return (
      <div className="border border-success/30 bg-success/5 p-6 sm:p-8" role="status">
        <p className="font-display text-xl font-semibold text-ink">Demande reçue</p>
        <p className="mt-2 text-muted">
          Référence <span className="font-semibold text-ink">{ref}</span>. Un conseiller
          SAO Motors Luxury vous contacte par téléphone ou WhatsApp.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <LinkButton
            href={waLink(waMessages[waFallback || "general"])}
            variant="whatsapp"
            external
          >
            Continuer sur WhatsApp
          </LinkButton>
          <Button type="button" variant="secondary" onClick={() => setStatus("idle")}>
            Nouvelle demande
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Site web
          <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {fields.map((field) => {
        const err = fieldErrors[field.name];
        const id = `field-${field.name}`;
        const errId = `${id}-error`;
        return (
          <div key={field.name}>
            <label htmlFor={id} className="block text-sm font-semibold text-ink">
              {field.label}
              {"required" in field && field.required !== false ? (
                <span className="text-error"> *</span>
              ) : null}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                required={field.required !== false}
                placeholder={field.placeholder}
                rows={4}
                aria-describedby={err ? errId : undefined}
                aria-invalid={!!err}
                className="focus-ring mt-2 w-full border border-border-strong bg-white px-3 py-3 text-sm"
              />
            ) : field.type === "select" ? (
              <select
                id={id}
                name={field.name}
                required={field.required !== false}
                aria-describedby={err ? errId : undefined}
                aria-invalid={!!err}
                className="focus-ring mt-2 w-full border border-border-strong bg-white px-3 py-3 text-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionner
                </option>
                {field.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type || "text"}
                required={field.required !== false}
                placeholder={field.placeholder}
                inputMode={field.type === "tel" ? "tel" : undefined}
                autoComplete={
                  field.name === "name"
                    ? "name"
                    : field.name === "phone"
                      ? "tel"
                      : undefined
                }
                aria-describedby={err ? errId : undefined}
                aria-invalid={!!err}
                className="focus-ring mt-2 w-full border border-border-strong bg-white px-3 py-3 text-sm"
              />
            )}
            {err ? (
              <p id={errId} className="mt-1 text-sm text-error">
                {err}
              </p>
            ) : null}
          </div>
        );
      })}

      {error ? (
        <p className="text-sm text-error" role="alert">
          {error === "VALIDATION_ERROR"
            ? "Vérifiez les champs indiqués."
            : "Impossible d'envoyer la demande. Réessayez ou utilisez WhatsApp."}
        </p>
      ) : null}

      <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Envoi…" : submitLabel}
      </Button>
    </form>
  );
}
