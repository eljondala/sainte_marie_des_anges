"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject") ?? "Contact depuis le site");
    const message = [
      `Nom : ${String(formData.get("name") ?? "")}`,
      `Email : ${String(formData.get("email") ?? "")}`,
      "",
      String(formData.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:ofmsmasepro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Nom complet
          <input
            name="name"
            autoComplete="name"
            required
            className="min-h-12 rounded-sm border border-ink/20 bg-paper px-3 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Adresse email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-h-12 rounded-sm border border-ink/20 bg-paper px-3 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Objet
        <input
          name="subject"
          required
          className="min-h-12 rounded-sm border border-ink/20 bg-paper px-3 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Message
        <textarea
          name="message"
          rows={5}
          required
          className="resize-y rounded-sm border border-ink/20 bg-paper px-3 py-3 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
        />
      </label>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="min-h-12 rounded-sm bg-blue px-6 font-semibold text-white transition-colors hover:bg-blue-deep"
        >
          Préparer le message
        </button>
        <p className="max-w-md text-xs leading-5 text-ink/60">
          Votre application de messagerie s’ouvrira pour envoyer votre demande.
        </p>
      </div>
    </form>
  );
}
