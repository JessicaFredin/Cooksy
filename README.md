# Cooksy Project Setup Guide

## Prerequisites

Before running the project, ensure you have the following installed:

-   **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
-   **PostgreSQL** - [Download PostgreSQL](https://www.postgresql.org/)
-   **pgAdmin** - [Download pgAdmin](https://www.pgadmin.org/)

---

## Database Setup

1. **Open pgAdmin** and log in.
2. **Create a new database** named `CooksyTest` (or any name you prefer).
3. Open **Query Tool** in pgAdmin.
4. Click on **Open File** and select the provided `CooksyInit.sql` file.
5. **Execute** the script to set up the database schema and seed data.

---

## Backend Setup

### Install Dependencies

1. Open your terminal and navigate to the `/backend` directory:
    ```bash
    cd backend
    ```
2. Install the required Node.js packages:
    ```bash
    npm install
    ```

### Configure Environment Variables

1. Create a `.env` file in the `/backend` directory:

2. Add the following environment variables:

    ```env
    GOOGLE_CLIENT_ID="80723078627-5ddlpq0m430tv125huoesjdaennfqo7b.apps.googleusercontent.com"
    GOOGLE_CLIENT_SECRET="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"
    SESSION_SECRET="TOPSECRETWORD"

    # App Configuration
    PORT=5000
    NODE_ENV=development

    # Database Configuration
    PG_USER="postgres"
    PG_HOST="localhost"
    PG_DATABASE="CooksyTest"
    PG_PASSWORD="postgres"
    PG_PORT="5432"

    # JWT Secret
    JWT_SECRET="B982C2D692D51C11AFC7A8595C7CC"
    JWT_EXPIRATION=1d

    # Email Service Configuration
    EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_USER=cooksy.info@gmail.com
    EMAIL_PASSWORD=vskr eheu ueqz btsa
    EMAIL_FROM=cooksy.info@gmail.com

    # Crypto Key for Verification Codes
    CRYPTO_SECRET="Y0U3RV3RY50D3CR3TK3Y"
    ```

**Note:**

-   Update `PG_USER` and `PG_PASSWORD` according to your PostgreSQL credentials.
-   You can use the provided Google account for SMTP services (for account activation).

### Start Backend Server

```bash
npm run dev
```

---

## Frontend Setup

### Install Dependencies

1. Open a new terminal and navigate to the `/frontend` directory:
    ```bash
    cd frontend
    ```
2. Install the required Node.js packages:
    ```bash
    npm install
    ```

### Configure Environment Variables

1. Create a `.env` file in the `/frontend` directory:

2. Add the following variables:

    ```env
    VITE_APP_BACKEND_URL="http://localhost:5000"
    VITE_APP_SPOONACULAR_API_KEY=""
    VITE_APP_SPOONACULAR_BASE_URL="https://api.spoonacular.com"
    ```

**Note:**

-   Sign up at [Spoonacular](https://spoonacular.com/) and add your API key to `VITE_APP_SPOONACULAR_API_KEY`.

### Start Frontend Server

```bash
npm run dev
```

---

## Final Steps

-   Open your browser and go to `http://localhost:5173`.
-   The application should now be running smoothly!

---

## Troubleshooting

-   Ensure PostgreSQL is running and accessible.
-   Verify `.env` variables are correctly set.
-   Check for any missing dependencies with `npm install`.

Enjoy using **Cooksy**! 🍳
