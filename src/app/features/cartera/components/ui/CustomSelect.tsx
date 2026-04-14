import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
  placeholder: string;
  disabled?: boolean;
}

export function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find(o => o.value === value);

  // Cierra al hacer click fuera
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen(o => !o)}
        className={[
          'w-full px-4 py-3 bg-white/5 border rounded-xl text-sm flex items-center justify-between transition-all',
          disabled
            ? 'opacity-40 cursor-not-allowed border-white/5'
            : 'cursor-pointer hover:border-[#F4BA3E]/40 border-white/10',
          open ? 'border-[#F4BA3E]/60 ring-2 ring-[#F4BA3E]/20' : '',
        ].join(' ')}
      >
        <span className={selected ? 'text-white' : 'text-gray-500'}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#F4BA3E] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -4, scaleY: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{ transformOrigin: 'top' }}
            className="absolute z-50 mt-2 w-full bg-[#1a1210] border border-[#F4BA3E]/20 rounded-xl shadow-2xl shadow-black/60 overflow-hidden max-h-52 overflow-y-auto"
          >
            {options.map(opt => (
              <li
                key={opt.value}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={[
                  'px-4 py-2.5 text-sm cursor-pointer transition-colors',
                  opt.value === value
                    ? 'bg-[#F4BA3E]/20 text-[#F4BA3E] font-semibold'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white',
                ].join(' ')}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
