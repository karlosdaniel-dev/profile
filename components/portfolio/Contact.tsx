"use client";

import React, { useMemo, useState } from "react";
import { portfolioContactLinks } from "@/consts/portfolio-data";

type Status = "idle" | "loading" | "success" | "error";

export function PortfolioContact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const canSubmit = useMemo(() => {
        return (
            formState.name.trim().length > 1 &&
            formState.email.trim().length > 5 &&
            formState.message.trim().length > 5
        );
    }, [formState]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);

        if (!canSubmit) return;

        try {
            setStatus("loading");

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            const data = await res.json();

            if (!res.ok || !data?.ok) {
                setStatus("error");
                setErrorMessage(
                    data?.error || "Não foi possível enviar. Tente novamente."
                );
                return;
            }

            setStatus("success");
            setFormState({ name: "", email: "", message: "" });

            setTimeout(() => setStatus("idle"), 3500);
        } catch (err) {
            setStatus("error");
            setErrorMessage("Erro de rede. Verifique sua conexão e tente novamente.");
        }
    };

    return (
        <section className="bg-white p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                💬 Vamos Conversar?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Links de contato */}
                <div className="space-y-4">
                    <p className="text-base text-gray-700 leading-relaxed">
                        Adoraria entender como minhas habilidades de colaboração, arquitetura
                        e execução podem agregar valor ao seu time.
                    </p>

                    <div className="space-y-3">
                        {portfolioContactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition"
                            >
                                <span className="text-3xl">{link.icon}</span>
                                <div>
                                    <p className="text-xs text-gray-500">{link.label}</p>
                                    <p className="text-gray-900 font-semibold text-sm">
                                        {link.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 text-gray-900 disabled:opacity-60"
                            placeholder="Seu nome"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 text-gray-900 disabled:opacity-60"
                            placeholder="seu-email@exemplo.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            disabled={status === "loading"}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 resize-none text-gray-900 disabled:opacity-60"
                            placeholder="Sua mensagem..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!canSubmit || status === "loading"}
                        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                    </button>

                    {status === "success" && (
                        <div className="p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm">
                            ✓ Mensagem enviada com sucesso! Vou responder em breve.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
                            ✕ {errorMessage || "Erro ao enviar. Tente novamente."}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}