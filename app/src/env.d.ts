declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APPLICATIONINSIGHTS_CONNECTION_STRING: string;
      NEXT_PUBLIC_APPLICATION_INSIGHTS_CONNECTION_STRING: string;
    }
  }
}

export {};
