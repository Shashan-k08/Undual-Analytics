# Product Listing Application

## Overview

This is a Product Listing Application built using **Next.js** and **Redux** for state management. The application fetches products from an API and allows users to filter products based on categories and search queries. The application also supports infinite scrolling to load more products as users scroll down.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>

2. Install dependencies:
   ```bash
    npm install

3. Start the development server:
   ```bash
     npm run dev

**Import Parts**
  ProductList: Component to display a list of products, implements infinite scrolling and filtering.

CategorySelector: Component for selecting product categories.

Redux Store: Manages global state for products, categories, selected category, and loading status.

***Limitations***

Limited Product Data: The application fetches product data from a dummy API, which may not have extensive or diverse products.

No Error Handling for User Input: Currently, there is minimal validation for search queries and category selections.
Performance Issues: Infinite scrolling may lead to performance issues with a very large number of products.

No Pagination on Categories: If the categories are extensive, they are displayed in a single dropdown, which may become unwieldy.

Single Page Application: Currently, navigation is limited to a single page without routing for different views or detailed product pages.

**Usage**

To use the application, simply navigate to the home page, select a category from the dropdown, and enter a search query to filter the products. Scroll down to load more products.