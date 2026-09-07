import {
  formatCurrency,
} from "@/src/lib/emi";

type EMIPlan = {
  duration: number;
  monthlyAmount: number;
  totalAmount: number;
};

interface EMISummaryProps {
  selectedEMI?: EMIPlan;
}

export function EMISummary({
  selectedEMI,
}: EMISummaryProps) {
  if (!selectedEMI) {
    return null;
  }

  return (
    <section className="mt-4 px-4">
      <div className="rounded-2xl border border-[#e4d8f6] bg-[#faf7ff] p-4">
        <div className="flex items-center justify-between">
          {/* Selected Plan */}

          <div>
            <p className="text-[10px] font-medium text-[#8064ae]">
              Your selected plan
            </p>

            <p className="mt-1 text-sm font-bold text-[#202124]">
              {selectedEMI.duration} month EMI
            </p>
          </div>

          {/* EMI Amount */}

          <div className="text-right">
            <p className="text-base font-bold text-[#6d28d9]">
              {formatCurrency(
                selectedEMI.monthlyAmount
              )}

              <span className="text-[9px] font-medium text-[#8064ae]">
                /month
              </span>
            </p>

            <p className="mt-0.5 text-[9px] text-[#8b91a0]">
              Total{" "}
              {formatCurrency(
                selectedEMI.totalAmount
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}