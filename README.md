# 1Fi Marketplace

A responsive **1Fi Marketplace** experience built as part of the **1Fi SDE Intern Assignment**.

The project extends the existing Shop experience with a dedicated Marketplace section where users can browse products, view product details, select product variants, explore EMI plans, select an EMI option, and proceed through the EMI confirmation flow.

---

## Features

- Product listing
- Product images
- Product names
- Product pricing
- Product brands
- Product ratings
- Stock availability
- Product variants
- Dynamic pricing based on selected variant
- EMI options and plans
- EMI duration and interest rate
- Monthly EMI calculation
- Total payable amount
- EMI plan selection
- Selected EMI summary
- EMI confirmation flow
- Confirmation success state
- Responsive UI
- Loading and error handling
- Reusable React components
- Type-safe data handling

---

## Architecture

The Marketplace follows a separation of concerns between UI components, business logic, and data/service handling.

```
                 ┌──────────────────┐
                 │    Shop Page     │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ 1Fi Marketplace  │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Marketplace      │
                 │ Service / Data   │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Product Listing  │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Product Details  │
                 └────────┬─────────┘
                          │
               ┌──────────┴──────────┐
               │                     │
               ▼                     ▼
       Variant Selection      EMI Selection
               │                     │
               └──────────┬──────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   EMI Summary    │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Proceed with EMI │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ EMI Confirmation │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   Success State  │
                 └──────────────────┘
```

---

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Next.js Image
- ESLint

---

## Marketplace Flow

```
Shop
  │
  ▼
1Fi Marketplace
  │
  ▼
Product Listing
  │
  ▼
Select Product
  │
  ▼
Product Details
  │
  ├── Product Information
  │
  ├── Select Variant
  │
  ├── View EMI Plans
  │
  ├── Select EMI Plan
  │
  └── Review EMI Summary
          │
          ▼
    Proceed with EMI
          │
          ▼
    EMI Confirmation
          │
          ▼
   Confirmation Success
```

---

## Project Structure

```
src/
│
├── app/
│   │
│   └── shop/
│       ├── page.tsx
│       │
│       └── products/
│           └── [id]/
│               └── page.tsx
│
├── components/
│   │
│   └── marketplace/
│       ├── marketplace-header.tsx
│       ├── product-card.tsx
│       ├── product-details.tsx
│       ├── variant-selector.tsx
│       ├── emi-selector.tsx
│       ├── product-description.tsx
│       ├── emi-summary.tsx
│       ├── proceed-button.tsx
│       ├── emi-confirmation.tsx
│       └── confirmation-success.tsx
│
├── services/
│   │
│   └── marketplace/
│       ├── marketplace.service.ts
│       └── marketplace.types.ts
│
└── lib/
    └── emi.ts
```

---

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the application at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the application using the production build.

---

## Routes

### Shop — `/shop`

The main Shop experience containing the Marketplace section.

### Product Details — `/shop/products/[id]`

Dynamic product details page for individual Marketplace products.
