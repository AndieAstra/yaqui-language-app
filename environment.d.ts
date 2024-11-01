// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Database URL (Replace Neon with your custom DB URI)
      DATABASE_URL: string;

      // Public app URL
      NEXT_PUBLIC_APP_URL: string;

      // You can add other custom environment variables as needed
      // Example:
      // CUSTOM_API_KEY: string;
    }
  }
}
