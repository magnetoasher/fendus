import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://99235cae81974fe4a0bc77fdde3178e0@o494447.ingest.sentry.io/6636075",
  integrations: [new BrowserTracing()],

  tracesSampleRate: 1.0,
});

function log(ex: any) {
  Sentry.captureException(ex);
}

const logger = { log };

export default logger;
