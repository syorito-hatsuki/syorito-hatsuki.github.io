import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import MainPage from "./pages/MainPage";
import GitHubPage from "./pages/github/GitHubPage";
import ModrinthPage from "./pages/modrinth/ModrinthPage";
import NotFoundPage from "./pages/NotFoundPage";

export const applicationTitle = 'hatsuHub'
const client = new QueryClient()

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <QueryClientProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="/github" element={<GitHubPage/>}/>
                    <Route path="/modrinth" element={<ModrinthPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
