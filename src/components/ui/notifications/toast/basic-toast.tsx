"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Info, X } from "lucide-react";
import { useEffect, useState } from "react";

interface BasicToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
  className?: string;
}

/**
 * Basic Toast - Floating notification for non-critical feedback.
 */
export function BasicToast({
  message,
  duration = 3000,
  onClose,
  className = "",
}: BasicToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className={`
            fixed bottom-8 right-8 z-[100] flex items-center gap-4 px-6 py-4 
            bg-card border border-border rounded-2xl shadow-2xl ${className}
          `}
        >
          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Info className="w-4 h-4" />
          </div>
          <p className="text-sm font-bold text-foreground">{message}</p>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
