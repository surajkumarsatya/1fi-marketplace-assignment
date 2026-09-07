import { ArrowRight } from "lucide-react";

interface ProceedButtonProps {
  disabled?: boolean;
  onProceed: () => void;
}

export function ProceedButton({
  disabled = false,
  onProceed,
}: ProceedButtonProps) {
  return (
    <section className="mt-5 px-4">
      <button
        type="button"
        disabled={disabled}
        onClick={onProceed}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[#6d28d9] py-4 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(109,40,217,0.25)] transition hover:bg-[#5b21b6] disabled:cursor-not-allowed disabled:opacity-50 hover:cursor-pointer"
      >
        <span>
          Proceed with EMI
        </span>

        <span>
          <ArrowRight
            size={18}
            strokeWidth={2.5}
          />
        </span>
      </button>

      <p className="mt-2 text-center text-[9px] leading-4 text-[#8b91a0]">
        Review your selected product,
        variant and EMI plan before
        continuing.
      </p>
    </section>
  );
}