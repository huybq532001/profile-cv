import React, { useEffect, useRef } from "react";

export default function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        // focus trap rất nhẹ
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          'a,button,textarea,input,select,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus(); e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus(); e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    // auto focus
    setTimeout(() => {
      const el = panelRef.current?.querySelector<HTMLElement>("[data-autofocus]");
      el?.focus();
    }, 0);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center"
      aria-modal="true"
      role="dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      {/* panel */}
      <div
        ref={panelRef}
        className="
          relative w-full sm:max-w-2xl sm:rounded-2xl
          bg-[color:var(--card)] border border-[color:var(--border)]
          [box-shadow:var(--shadow-card)]
          max-h-[85vh] overflow-auto
        "
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[color:var(--border)]">
          <h3 className="text-[color:var(--fg)] font-medium">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-[color:var(--fg)]/80 hover:bg-black/10"
            data-autofocus
            aria-label="Đóng"
          >
            ✕
          </button>
        </div>
        <div className="p-5 text-[color:var(--fg)]">{children}</div>
      </div>
    </div>
  );
}
