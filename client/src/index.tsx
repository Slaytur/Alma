import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';

// Render the application to the DOM.
const root = createRoot(document.querySelector(`#root`) as HTMLDivElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
