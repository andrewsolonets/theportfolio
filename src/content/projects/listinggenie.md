---
title: "Listing Genie"
description: "A comprehensive platform for managing products, CSV exports, Shopify integration, and product-related reports with computed fields and bulk updates."
date: "2024-10-13"
techStack:
  [
    "React",
    "Next.js",
    "tRPC",
    "Prisma",
    "Tailwind CSS",
    "PostgreSQL",
    "Shopify API",
    "TypeScript",
  ]
githubUrl: "#"
liveUrl: "#"
image: "/assets/listingGenie1.png"
index: 0
---

# Listing Genie

Listing Genie is a **product management platform** designed for seamless product updates, CSV exports, Shopify integration, and dynamic field computations.

![Product Management Page](/assets/listingGenie.png)

## Key Features

- **Product Management**: Bulk field updates, computed fields setup, and drag-and-drop functionality for custom forms and reports.
- **CSV Export/Import**: Parse data from CSV files and export product reports with user-specified fields.
- **Shopify Integration**: Integrated Shopify API with webhooks for automated synchronization.
- **Computed Fields**: User-configurable formulas using preset functions, field values, and datasets for automatic calculations.
- **Cron Jobs**: Regular updates for product picklists and sorting based on usage frequency.
- **Form Customization**: Custom forms for product editing with user-specified fields.
- **Testing**: Unit tests using Jest to verify the app's output against expected CSV formats.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: tRPC, Prisma, PostgreSQL
- **API Integrations**: Shopify API, webhooks
- **Testing**: Jest
- **Other**: TypeScript, Husky for Git hooks, and DnD Kit for drag-and-drop components.

## Project Overview

Listing Genie simplifies product data management with features like:

- **Robust product management system**: including bulk field updates and advanced reporting tools.
- **Custom reports**: Select fields to generate reports, exportable to CSV.
- **Drag-and-drop functionality**: Using "@dnd-kit" for reordering fields and elements with multiple-level nesting.
- **Shopify Webhook Integration**: Synchronize data automatically using Shopify webhooks.

## Deployment

Deployed on **Vercel** for optimal performance with **Next.js**.
