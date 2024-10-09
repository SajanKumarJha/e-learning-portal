import React from 'react'
// import { ErrorBoundary } from 'react-error-boundary'
import { Suspense, lazy } from 'react'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));
// const Error = lazy(() => import("./components/base/Error"));
const Register = lazy(() => import('./Pages/Register'))
// const queryClient = new QueryClient()

const Root = () => {
    return (
        <BrowserRouter>
            {/* <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<p>Loading...</p>}>
                    <QueryClientProvider client={queryClient}> */}
            <Routes>
                <Route path="*" element={<App />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            {/* </QueryClientProvider>
                </Suspense>
            </ErrorBoundary> */}
        </BrowserRouter>
    )
}

export default Root