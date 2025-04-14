import { useAzureMonitor } from "@azure/monitor-opentelemetry";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

const resource = resourceFromAttributes({
  [ATTR_SERVICE_NAME]: "frontend",
});

// eslint-disable-next-line react-hooks/rules-of-hooks
useAzureMonitor({
  resource,
  azureMonitorExporterOptions: {
    connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING,
  },
});
