"use client";

import { FormEvent, useRef, useState } from "react";
import { Button, LinkButton } from "@/components/ui/Button";
import { waLink, waMessages } from "@/lib/wa";

type Field =
  | {
      name: string;
      label: string;
      type?: "text" | "tel" | "date" | "number";
      required?: boolean;
      placeholder?: string;
    }
  | {
      name: string;
      label: string;
      type: "select";
      required?: boolean;
      options: { value: string; label: string }[];
    }
  | {
      name: string;
      label: string;
      type: "textarea";
      required?: boolean;
      placeholder?: string;
    };

const inputClass =
  "focus-ring mt-2 w-full rounded-sm border border-border-strong bg-white px-3.5 py-3 text-base text-ink placeholder:text-silver transition hover:border-ink/40";

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
  const successRef = useRef<HTMLDivElement>(null);

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
      requestAnimationFrame(() => {
        successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur");
    }
  }

  if (status === "success" && ref) {
    return (
      <div
        ref={successRef}
        className="border border-success/30 bg-success/5 p-6 sm:p-8"
        role="status"
        tabIndex={-1}
      >
        <p className="font-display text-2xl font-bold tracking-wide text-ink">
          Demande reçue
        </p>
        <p className="mt-2 text-muted">
          Référence <span className="font-semibold text-ink">{ref}</span>.
          Un conseiller SAO Motors Luxury vous contacte par téléphone ou WhatsApp.
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
    <form onSubmit={onSubmit} className="relative space-y-5" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Site web
          <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {fields.map((field) => {
        const err = fieldErrors[field.name];
        const id = `field-${field.name}`;
        const errId = `${id}-error`;
        const isRequired = field.required !== false;
        return (
          <div key={field.name}>
            <label htmlFor={id} className="block text-sm font-semibold text-ink">
              {field.label}
              {isRequired ? <span className="text-accent"> *</span> : null}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                required={isRequired}
                placeholder={field.placeholder}
                rows={4}
                aria-describedby={err ? errId : undefined}
                aria-invalid={!!err}
                className={inputClass}
              />
            ) : field.type === "select" ? (
              <select
                id={id}
                name={field.name}
                required={isRequired}
                aria-describedby={err ? errId : undefined}
                aria-invalid={!!err}
                className={inputClass}
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
                required={isRequired}
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
                className={inputClass}
              />
            )}
            {err ? (
              <p id={errId} className="mt-1.5 text-sm text-error">
                {err}
              </p>
            ) : null}
          </div>
        );
      })}

      {error ? (
        <p className="rounded-sm border border-error/20 bg-error/5 px-3 py-2 text-sm text-error" role="alert">
          {error === "VALIDATION_ERROR"
            ? "Vérifiez les champs indiqués."
            : "Impossible d'envoyer. Réessayez ou contactez-nous sur WhatsApp."}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Envoi…" : submitLabel}
      </Button>
    </form>
  );
}
