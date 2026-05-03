"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, X } from "lucide-react";
import { GhostButton } from "@/components/ui/buttons/ghost-button/ghost-button";
import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

/**
 * Alert Modal - A critical confirmation dialog.
 */
export function AlertModal({
  isOpen,
  onClose,
  title,
  description,
  onConfirm,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
}: AlertModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-card border border-border rounded-[2.5rem] shadow-2xl p-8 overflow-hidden"
          >
            <div className="absolute top-6 right-6">
              <GhostButton
                onClick={onClose}
                className="p-2 min-h-0 rounded-full"
              >
                <X className="w-5 h-5" />
              </GhostButton>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <GhostButton onClick={onClose} className="flex-1 rounded-2xl">
                {cancelLabel}
              </GhostButton>
              <PrimaryButton onClick={onConfirm} className="flex-1 rounded-2xl">
                {confirmLabel}
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
