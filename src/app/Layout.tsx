import { Outlet } from 'react-router';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { Toaster } from './components/ui/sonner';
import { WhatsAppMenu } from './components/shared/WhatsAppMenu';
import { ScrollToTop } from './components/shared/ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
      
      {/* WhatsApp Floating Menu */}
      <WhatsAppMenu />
    </div>
  );
}