import type { EMIPlan } from "@/src/services/marketplace/marketplace.types";

const EMI_DURATIONS = [3, 6, 9, 12];

export function calculateEMIPlans(
  price: number
): EMIPlan[] {
  return EMI_DURATIONS.map((duration) => {
    const monthlyAmount =
      Math.round(
        (price / duration) * 100
      ) / 100;

    return {
      id: `${duration}-months`,
      duration,
      monthlyAmount,
      totalAmount: price,
      interestRate: 0,
    };
  });
}

export function formatCurrency(
  amount: number
): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}