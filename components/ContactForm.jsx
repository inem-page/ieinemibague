"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { modalidades } from "@/data/modalidades";

const initialForm = {
  nombre: "",
  correo: "",
  telefono: "",
  modalidad: "",
  mensaje: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-soft"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-inem-navy">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Gracias por escribirnos. Nuestro equipo revisará tu mensaje y te
          responderá al correo que registraste lo antes posible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-inem-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-inem-blue"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-slate-100 bg-white p-8 shadow-soft"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Nombre completo
          </label>
          <input
            required
            type="text"
            value={form.nombre}
            onChange={update("nombre")}
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-inem-blue focus:ring-2 focus:ring-inem-blue/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Correo electrónico
          </label>
          <input
            required
            type="email"
            value={form.correo}
            onChange={update("correo")}
            placeholder="tucorreo@ejemplo.com"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-inem-blue focus:ring-2 focus:ring-inem-blue/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Teléfono <span className="text-slate-400">(opcional)</span>
          </label>
          <input
            type="tel"
            value={form.telefono}
            onChange={update("telefono")}
            placeholder="300 000 0000"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-inem-blue focus:ring-2 focus:ring-inem-blue/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Modalidad de interés <span className="text-slate-400">(opcional)</span>
          </label>
          <select
            value={form.modalidad}
            onChange={update("modalidad")}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-inem-blue focus:ring-2 focus:ring-inem-blue/20"
          >
            <option value="">Selecciona una opción</option>
            {modalidades.map((m) => (
              <option key={m.slug} value={m.nombre}>
                {m.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Mensaje
        </label>
        <textarea
          required
          rows={5}
          value={form.mensaje}
          onChange={update("mensaje")}
          placeholder="Cuéntanos en qué podemos ayudarte…"
          className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-inem-blue focus:ring-2 focus:ring-inem-blue/20"
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-start gap-2 overflow-hidden rounded-xl bg-red-50 p-3 text-sm text-red-700"
          >
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-inem-navy px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-inem-blue disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <Send size={18} /> Enviar mensaje
          </>
        )}
      </button>
    </form>
  );
}
