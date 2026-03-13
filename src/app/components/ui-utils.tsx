"use client";

import { useEffect, useState } from "react";

/* ── Toast ── */
export type Toast = { id: number; message: string; type: "success" | "error" };

let toastId = 0;
const listeners: Array<(t: Toast) => void> = [];

export function showToast(message: string, type: Toast["type"] = "success") {
  const toast: Toast = { id: ++toastId, message, type };
  listeners.forEach((fn) => fn(toast));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handler = (toast: Toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 4000);
    };
    listeners.push(handler);
    return () => {
      const idx = listeners.indexOf(handler);
      if (idx !== -1) listeners.splice(idx, 1);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-5 z-[9999] flex flex-col gap-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`flex items-start gap-3 rounded-2xl border px-5 py-4 text-sm shadow-xl backdrop-blur-md ${
            t.type === "success"
              ? "border-green-700 bg-zinc-950/90 text-green-300"
              : "border-red-700 bg-zinc-950/90 text-red-300"
          }`}
        >
          <span className="mt-0.5 text-base">{t.type === "success" ? "✓" : "✕"}</span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Scroll-to-top ── */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-orange-400 bg-zinc-950/90 text-orange-400 shadow-lg backdrop-blur transition hover:bg-orange-500 hover:text-white"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

/* ── WhatsApp chat button ── */
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Fitness%20Gym"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-110"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <path d="M16 1C7.716 1 1 7.716 1 16c0 2.674.697 5.18 1.917 7.352L1 31l7.879-1.881A14.93 14.93 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm0 27.2c-2.42 0-4.685-.654-6.63-1.793l-.474-.281-4.674 1.117 1.151-4.558-.308-.492A12.16 12.16 0 013.8 16C3.8 9.26 9.26 3.8 16 3.8S28.2 9.26 28.2 16 22.74 28.2 16 28.2zm6.67-9.03c-.365-.183-2.161-1.066-2.496-1.188-.335-.121-.579-.183-.823.183-.244.366-.943 1.188-1.157 1.432-.213.244-.427.274-.792.091-.365-.183-1.54-.568-2.934-1.81-1.084-.968-1.815-2.163-2.029-2.528-.213-.365-.023-.562.16-.744.164-.163.365-.427.547-.64.183-.213.244-.366.366-.61.122-.244.061-.457-.03-.64-.091-.183-.823-1.982-1.127-2.712-.297-.713-.598-.616-.823-.628l-.7-.012c-.244 0-.64.091-.975.457-.335.366-1.28 1.25-1.28 3.049s1.31 3.537 1.493 3.78c.183.244 2.579 3.934 6.246 5.516.873.377 1.554.601 2.085.769.876.279 1.674.24 2.304.145.703-.105 2.161-.883 2.466-1.735.305-.853.305-1.582.213-1.735-.091-.152-.334-.244-.7-.427z" />
      </svg>
    </a>
  );
}
