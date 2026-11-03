import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import CV from './CV.jsx';

// The CV opens over the page as a dialog. Escape and a backdrop click close it,
// focus moves into it on open and back to the trigger on close, and page scroll is
// locked only while it is mounted (so an unmount can never leave the page stuck).
export default function CVModal({ onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      trigger?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum vitae"
        className="relative h-[95vh] w-[95%] sm:w-[92%] md:w-[90%] lg:w-[88%] xl:w-[85%] max-w-[1500px] overflow-hidden rounded-2xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close CV"
          className="absolute right-2 top-2 sm:right-3 sm:top-3 md:right-4 md:top-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 active:scale-95 transition-[background-color,transform] duration-150">
          <X className="w-5 h-5 text-zinc-800" aria-hidden="true" />
        </button>
        <div className="h-full overflow-y-auto scrollbar-hide">
          <CV />
        </div>
      </div>
    </div>
  );
}
