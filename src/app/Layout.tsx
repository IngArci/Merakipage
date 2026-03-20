import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { WhatsAppMenu } from './components/WhatsAppMenu';
import { ScrollToTop } from './components/ScrollToTop';

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