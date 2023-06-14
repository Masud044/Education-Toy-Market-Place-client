import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <HelmetProvider>
    <QueryClientProvider client={queryClient} >
    <div className='container mx-auto'>
         <RouterProvider router={router} />
         </div>
      </QueryClientProvider>
   
    </HelmetProvider>
    </AuthProvider>
    
      
  </React.StrictMode>,
)
