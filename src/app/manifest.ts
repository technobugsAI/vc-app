import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Next.js PWA',
        short_name: 'NextPWA',
        description: 'A Progressive Web App built with Next.js',
        start_url: '/',
        // It hides the browser UI (address bar, back button, etc.).
        // It runs separately from the browser, like an independent app.
        // It can be launched from the home screen without opening a browser.
        // browser	Opens in a normal browser window with full UI.
        // standalone	Runs like a native app, without browser UI.
        // minimal-ui	Shows minimal browser controls (back button, refresh).
        // fullscreen	Runs in full-screen mode, hiding even the system status bar.
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}