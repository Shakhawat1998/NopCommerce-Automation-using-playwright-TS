# Nopcommerce Playwright TypeScript Automation

This project provides end-to-end automated testing for the Nopcommerce platform using [Playwright](https://playwright.dev/) with TypeScript. It includes robust test suites, page object models, utilities, and reporting via Allure.

## Features

## Key Test Scenarios
The following core test scenarios are automated in this project:

- **Home Page**
   - Visit the Nopcommerce home page and verify the Register link is visible.

- **User Registration**
   - Navigate to the Register page and verify the header.
   - Register a new user with all required fields and random email.

- **User Login**
   - Login using credentials from a registered user and verify successful login (Logout link visible).

- **My Account & Address Management**
   - Redirect to My Account page and verify heading.
   - Redirect to Address page and verify heading.
   - Add a new address by completing the address form and verify success message.
   - Change password and verify password update confirmation.

- **Product & Wishlist**
   - Add a product to wishlist and verify success message.
   - Verify wishlist page is not empty after adding a product.
   - Download a digital product and verify successful download.
   - Add products to compare list and verify both are present.
   - Add products to cart from multiple categories and verify success messages.

## Project Structure
```
├── pages/           # Page Object Model classes
├── tests/           # Test specifications and fixtures
├── test-data/       # Test data and user store
├── utils/           # Utility functions
├── allure-results/  # Raw Allure results
├── allure-report/   # Generated Allure HTML reports
├── downloads/       # Downloaded files during tests
├── test-results/    # Playwright test results
├── playwright.config.ts # Playwright configuration
├── package.json     # Project dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd Nopcommerce - Playwright - TS
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running Tests
To execute all Playwright tests:
```sh
npx playwright test
```

To run a specific test file:
```sh
npx playwright test tests/1HomePage.spec.ts
```

### Generating Allure Report
1. Run tests to generate Allure results:
   ```sh
   npx playwright test
   ```
2. Generate the Allure HTML report:
   ```sh
   npx allure generate allure-results --clean -o allure-report
   npx allure open allure-report
   ```

## Configuration
- Update `playwright.config.ts` for browser, base URL, and other settings.
- Test data can be managed in `test-data/userStore.ts`.

## Folder Details
- **pages/**: Contains all page object classes (e.g., `LoginPage.ts`, `ProductPage.ts`).
- **tests/**: Test specs and fixtures for different modules.
- **utils/**: Helper functions for random data, page actions, etc.
- **allure-results/**: Stores raw results for Allure.
- **allure-report/**: Generated HTML report after running Allure commands.

## Scripts
Add custom scripts in `package.json` as needed, e.g.:
```json
"scripts": {
  "test": "npx playwright test",
  "allure:generate": "npx allure generate allure-results --clean -o allure-report",
  "allure:open": "npx allure open allure-report"
}
```


