import * as Sentry from "@sentry/react-router";
 import { startTransition, StrictMode } from "react";
 import { hydrateRoot } from "react-dom/client";
 import { HydratedRouter } from "react-router/dom";
Sentry.init({
 dsn: "https://1c54ea79d144abbb74f4cd540ec581e0@o4509084131786752.ingest.us.sentry.io/4510392840421376",
 // Adds request headers and IP for users, for more info visit:
 // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
 sendDefaultPii: true,
 integrations: [
   // Registers and configures the Tracing integration,
   // which automatically instruments your application to monitor its
   // performance, including custom Angular routing instrumentation
   Sentry.reactRouterTracingIntegration(),
   // Registers the Replay integration,
   // which automatically captures Session Replays
   Sentry.replayIntegration(),
   Sentry.feedbackIntegration({
     // Additional SDK configuration goes in here, for example:
     colorScheme: "system",
   }),
 ],
 // Enable logs to be sent to Sentry
 enableLogs: true,
 // Set tracesSampleRate to 1.0 to capture 100%
 // of transactions for tracing.
 // We recommend adjusting this value in production
 // Learn more at
 // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#traces-sample-rate
 tracesSampleRate: 1.0, //  Capture 100% of the transactions
 // Set `tracePropagationTargets` to declare which URL(s) should have trace propagation enabled
 tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],
 // Capture Replay for 10% of all sessions,
 // plus 100% of sessions with an error
 // Learn more at
 // https://docs.sentry.io/platforms/javascript/guides/react-router/session-replay/configuration/#general-integration-configuration
 replaysSessionSampleRate: 0.1,
 replaysOnErrorSampleRate: 1.0,
});
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});