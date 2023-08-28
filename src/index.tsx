import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const applicationTitle = 'hatsuHub'
const client = new QueryClient()

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <QueryClientProvider client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </QueryClientProvider>
);
