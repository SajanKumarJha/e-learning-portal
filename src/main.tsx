import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Root = lazy(() => import('./Root.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
