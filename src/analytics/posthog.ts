import posthog from "posthog-js";

posthog.init(
    import.meta.env.VITE_POSTHOG_KEY,
    {
        api_host: "/ingest",
        ui_host: "https://us.posthog.com",
        capture_pageview: true,
        capture_pageleave: true,
        autocapture: true,
        session_recording: {
            maskAllInputs: true
        }
    }
);

export default posthog;
