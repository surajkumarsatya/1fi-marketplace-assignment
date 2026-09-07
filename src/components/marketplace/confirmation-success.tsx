import { Check } from "lucide-react";

import {
  formatCurrency,
} from "@/src/lib/emi";

type EMIPlan = {
  duration: number;
  monthlyAmount: number;
};

interface ConfirmationSuccessProps {
  selectedEMI?: EMIPlan;
}

export function ConfirmationSuccess({
  selectedEMI,
}: ConfirmationSuccessProps) {
  if (!selectedEMI) {
    return null;
  }

  return (
    <section className="mt-4 px-4">
      <div className="rounded-2xl border border-[#ddd0f5] bg-[#f8f4ff] p-5 text-center">
        {/* Success Icon */}

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e8dcff]">
          <Check
            size={24}
            strokeWidth={2.5}
            className="text-[#6d28d9]"
          />
        </div>

        {/* Title */}

        <h3 className="mt-3 text-base font-bold text-[#202124]">
          EMI plan confirmed
        </h3>

        {/* Description */}

        <p className="mt-1 text-xs leading-5 text-[#777d8b]">
          Your selected EMI plan has
          been confirmed successfully.
        </p>

        {/* Confirmation Details */}

        <div className="mt-4 rounded-xl bg-white p-3 text-left">
          {/* Plan */}

          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#8b91a0]">
              Plan
            </span>

            <span className="text-[11px] font-semibold text-[#202124]">
              {selectedEMI.duration} Months
            </span>
          </div>

          {/* Monthly EMI */}

          <div className="mt-2 flex items-center justify-between">
            <span className="text-[10px] text-[#8b91a0]">
              Monthly EMI
            </span>

            <span className="text-[11px] font-semibold text-[#6d28d9]">
              {formatCurrency(
                selectedEMI.monthlyAmount
              )}
            </span>
          </div>
        </div>

        {/* Demo Note */}

        <p className="mt-3 text-[9px] text-[#999eaa]">
          Demo confirmation for the
          marketplace assignment.
        </p>
      </div>
    </section>
  );
}