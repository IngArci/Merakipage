import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import ProyectoDetalle from './pages/ProyectoDetalle';
import Casas from './pages/Casas';
import Referidos from './pages/Referidos';
import Nosotros from './pages/Nosotros';
import Servicio from './pages/Servicio';
import Cartera from './pages/Cartera';
import Contacto from './pages/Contacto';
import SalasVentas from './pages/SalasVentas';
import Privacidad from './pages/Privacidad';
import Terminos from './pages/Terminos';
import Inversionistas from './pages/Inversionistas';
import Pagos from './pages/Pagos';

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
    ],
  },
]);