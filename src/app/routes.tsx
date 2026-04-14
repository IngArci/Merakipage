import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import Home from './pages/Home';

// Lazy loaded components for code splitting
const Proyectos = lazy(() => import('./pages/Proyectos'));
const ProyectoDetalle = lazy(() => import('./pages/ProyectoDetalle'));
const Casas = lazy(() => import('./pages/Casas'));
const Referidos = lazy(() => import('./pages/Referidos'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Servicio = lazy(() => import('./pages/Servicio'));
const Cartera = lazy(() => import('./pages/Cartera'));
const Contacto = lazy(() => import('./pages/Contacto'));
const SalasVentas = lazy(() => import('./pages/SalasVentas'));
const Privacidad = lazy(() => import('./pages/Privacidad'));
const Terminos = lazy(() => import('./pages/Terminos'));
const Inversionistas = lazy(() => import('./pages/Inversionistas'));
const Pagos = lazy(() => import('./pages/Pagos'));
const Admin = lazy(() => import('./pages/Admin'));
const LegalDocs = lazy(() => import('./pages/LegalDocs'));
const PreguntasFrecuentes = lazy(() => import('./pages/PreguntasFrecuentes'));

import { AdminAuthGate } from './features/admin/components/AdminAuthGate';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'proyectos', Component: Proyectos },
      { path: 'proyectos/:slug', Component: ProyectoDetalle },
      { path: 'casas', Component: Casas },
      { path: 'pagos', Component: Pagos },
      { path: 'referidos', Component: Referidos },
      { path: 'nosotros', Component: Nosotros },
      { path: 'servicio', Component: Servicio },
      { path: 'cartera', Component: Cartera },
      { path: 'contacto', Component: Contacto },
      { path: 'salas-ventas', Component: SalasVentas },
      { path: 'privacidad', Component: Privacidad },
      { path: 'terminos', Component: Terminos },
      { path: 'inversionistas', Component: Inversionistas },
      { 
        path: 'admin', 
        element: (
          <AdminAuthGate>
            <Admin />
          </AdminAuthGate>
        ) 
      },
      { path: 'documentacion-legal', Component: LegalDocs },
      { path: 'preguntas-frecuentes', Component: PreguntasFrecuentes },
    ],
  },
]);