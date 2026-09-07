"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/src/services/marketplace/marketplace.types";
import { calculateEMIPlans } from "@/src/lib/emi";
import { EMIConfirmation } from "./emi-confirmation";
import { ProductHeader } from "./product-header";
import { ProductImage } from "./product-image";
import { ProductInfo } from "./product-info";
import { VariantSelector } from "./variant-selector";
import { EMISelector } from "./emi-selector";
import { ProductDescription } from "./product-description";
import { EMISummary } from "./emi-summary";
import { ProceedButton } from "./proceed-button";
import { ConfirmationSuccess } from "./confirmation-success";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({
  product,
}: ProductDetailsProps) {
  /*
   * --------------------------------------------------
   * Product Variants
   * --------------------------------------------------
   */

  const variants = product.variants ?? [];

  const [selectedVariantId, setSelectedVariantId] =
    useState<string | undefined>(
      variants[0]?.id
    );

  const selectedVariant = variants.find(
    (variant) =>
      variant.id === selectedVariantId
  ) ?? variants[0];

  /*
   * --------------------------------------------------
   * Selected Product Price
   * --------------------------------------------------
   */

  const selectedPrice =
    selectedVariant?.price ?? product.price;

  /*
   * --------------------------------------------------
   * EMI Plans
   * --------------------------------------------------
   */

  const emiPlans = useMemo(
    () => calculateEMIPlans(selectedPrice),
    [selectedPrice]
  );

  const [selectedEMIId, setSelectedEMIId] =
    useState<string | undefined>(
      emiPlans[1]?.id ?? emiPlans[0]?.id
    );

  const selectedEMI = emiPlans.find(
    (plan) =>
      plan.id === selectedEMIId
  );

  /*
   * --------------------------------------------------
   * Confirmation State
   * --------------------------------------------------
   */

  const [showConfirmation, setShowConfirmation] =
    useState(false);

  const [isConfirmed, setIsConfirmed] =
    useState(false);

  /*
   * --------------------------------------------------
   * Variant Change
   * --------------------------------------------------
   *
   * When the user changes the variant, we keep
   * the selected EMI duration if possible.
   *
   * If the previous EMI doesn't exist anymore,
   * the first available plan is selected.
   */

  const handleVariantChange = (
    variantId: string
  ) => {
    setSelectedVariantId(variantId);

    const currentPlan = emiPlans.find(
      (plan) => plan.id === selectedEMIId
    );

    if (!currentPlan) {
      setSelectedEMIId(
        emiPlans[1]?.id ?? emiPlans[0]?.id
      );
    }
  };

  /*
   * --------------------------------------------------
   * EMI Selection
   * --------------------------------------------------
   */

  const handleEMIChange = (
    emiId: string
  ) => {
    setSelectedEMIId(emiId);
  };

  /*
   * --------------------------------------------------
   * Proceed
   * --------------------------------------------------
   */

  const handleProceed = () => {
    if (!selectedVariant || !selectedEMI) {
      return;
    }

    setShowConfirmation(true);
  };

  /*
   * --------------------------------------------------
   * Confirmation
   * --------------------------------------------------
   */

  const handleConfirmation = () => {
    setShowConfirmation(false);
    setIsConfirmed(true);
  };

  return (
    <div className="min-h-screen pb-8">
      {/* ==================================================
          Header
      ================================================== */}

      <ProductHeader />

      {/* ==================================================
          Product Image
      ================================================== */}

      <ProductImage product={product} />

      {/* ==================================================
          Product Information
      ================================================== */}

      <ProductInfo
        product={product}
        selectedPrice={selectedPrice}
      />

      {/* ==================================================
          Variant Selection
      ================================================== */}

      <VariantSelector
        variants={variants}
        selectedVariantId={selectedVariantId}
        selectedVariant={selectedVariant}
        onVariantChange={handleVariantChange}
      />

      {/* ==================================================
          EMI Plans
      ================================================== */}

      <EMISelector
        emiPlans={emiPlans}
        selectedEMIId={selectedEMIId}
        onEMIChange={handleEMIChange}
      />

      {/* ==================================================
          Product Details / Description
      ================================================== */}

      <ProductDescription product={product} />

      {/* ==================================================
          Selected EMI Summary
      ================================================== */}

      <EMISummary
        selectedEMI={selectedEMI}
      />

      {/* ==================================================
          Proceed CTA
      ================================================== */}

      <ProceedButton
        disabled={
          !selectedVariant ||
          !selectedEMI
        }
        onProceed={handleProceed}
      />

      {/* ==================================================
          Confirmation Success
      ================================================== */}

      {isConfirmed && (
        <ConfirmationSuccess
          selectedEMI={selectedEMI}
        />
      )}

      {/* ==================================================
          EMI Confirmation Sheet
      ================================================== */}

      {showConfirmation &&
        selectedVariant &&
        selectedEMI && (
          <EMIConfirmation
            product={product}
            variant={selectedVariant}
            plan={selectedEMI}
            onClose={() =>
              setShowConfirmation(false)
            }
            onConfirm={
              handleConfirmation
            }
          />
        )}
    </div>
  );
}