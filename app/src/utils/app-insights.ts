import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

let appInsights: ApplicationInsights | null = null;

export function getAppInsights() {
  if (appInsights === null) {
    const reactPlugin = new ReactPlugin();
    appInsights = new ApplicationInsights({
      config: {
        connectionString:
          process.env.NEXT_PUBLIC_APPLICATION_INSIGHTS_CONNECTION_STRING,
        enableAutoRouteTracking: true,
        extensionConfig: [reactPlugin],
      },
    });
    appInsights.loadAppInsights();
  }
  return appInsights;
}
