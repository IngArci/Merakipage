import { ReactNode } from 'react';

const LABEL = 'block text-xs font-semibold text-[#F4BA3E] uppercase tracking-widest mb-1.5';

interface FieldProps {
  label: string;
  children: ReactNode;
}

export function Field({ label, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className={LABEL}>{label}</label>
      {children}
    </div>
  );
}
