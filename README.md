# ModernWalk - E-commerce Application

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4.0
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Validation**: Zod
- **Package Manager**: Bun

## API Integration

The application integrates with the FakeStore API for product data:

- **Base URL**: `https://fakestoreapi.com`
- **Endpoints**:
  - `GET /products` - Fetch all products
  - `GET /products/{id}` - Fetch product details
  - `GET /products/categories` - Fetch product categories

## Key Components

### Cart Management
- Persistent cart storage using Zustand
- Add/remove items with quantity management
- Size-based item differentiation
- Subtotal calculation

### Product Display
- Product grid with responsive layout
- Category filtering
- Pagination support
- Product detail pages with image galleries

### State Management
- **Cart Store**: Manages shopping cart state
- **Query Client**: Handles server state with TanStack Query
- **Persistent Storage**: Cart data persists across sessions