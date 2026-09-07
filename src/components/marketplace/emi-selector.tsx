"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  calculateEMIPlans,
  formatCurrency,
} from "@/src/lib/emi";

type EMIPlan = ReturnType<
  typeof calculateEMIPlans
>[number];

interface EMISelectorProps {
  emiPlans: EMIPlan[];
  selectedEMIId?: string;
  onEMIChange: (emiId: string) => void;
}

export function EMISelector({
  emiPlans,
  selectedEMIId,
  onEMIChange,
}: EMISelectorProps) {
  const [isEMIOpen, setIsEMIOpen] =
    useState(false);

  if (emiPlans.length === 0) {
    return null;
  }

  const minimumMonthlyAmount = Math.min(
    ...emiPlans.map(
      (plan) => plan.monthlyAmount
    )
  );

  return (
    <section className="mt-4 px-4">
      <div className="overflow-hidden rounded-2xl border border-[#e1e3e8] bg-white">
        {/* Dropdown Header */}

        <button
          type="button"
          onClick={() =>
            setIsEMIOpen((prev) => !prev)
          }
          className="flex w-full items-center justify-between px-5 py-3 text-left"
          aria-expanded={isEMIOpen}
          aria-controls="emi-plans"
        >
          <p className="text-sm text-[#8b91a0]">
            Starts at{" "}
            <span className="font-bold text-[#111827]">
              {formatCurrency(
                minimumMonthlyAmount
              )}
              /mo
            </span>
          </p>

          <span className="flex items-center gap-2 text-xs font-semibold text-[#6d28d9]">
            {isEMIOpen
              ? "Hide plans"
              : "View plans"}

            <ChevronDown
              size={22}
              strokeWidth={2.5}
              className={`transition-transform duration-200 ${
                isEMIOpen
                  ? "rotate-180"
                  : ""
              }`}
            />
          </span>
        </button>

        {/* EMI Plans */}

        {isEMIOpen && (
          <div
            id="emi-plans"
            className="border-t border-[#eeeeef]"
          >
            {emiPlans.map((plan) => {
              const isSelected =
                plan.id === selectedEMIId;

              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() =>
                    onEMIChange(plan.id)
                  }
                  className={[
                    "flex w-full items-center justify-between",
                    "border-b border-[#eeeeef] px-5 py-3",
                    "text-left transition-colors",
                    "last:border-b-0",
                    isSelected
                      ? "bg-[#f7f2ff]"
                      : "bg-white hover:bg-[#faf9fc]",
                  ].join(" ")}
                >
                  {/* Duration + Interest */}

                  <div>
                    <p className="text-xs font-medium text-[#374151]">
                      {plan.duration} months ·{" "}
                      {plan.interestRate ?? 0}% p.a.
                    </p>
                  </div>

                  {/* Monthly EMI */}

                  <div className="shrink-0 text-right">
                    <span
                      className={`text-xs font-bold ${
                        isSelected
                          ? "text-[#6d28d9]"
                          : "text-[#111827]"
                      }`}
                    >
                      {formatCurrency(
                        plan.monthlyAmount
                      )}
                    </span>

                    <span className="ml-1 text-xs text-[#8b91a0]">
                      /mo
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}