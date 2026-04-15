import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { Toaster } from './components/ui/sonner';
import { WhatsAppMenu } from './components/shared/WhatsAppMenu';
import { ScrollToTop } from './components/shared/ScrollToTop';
import { ScrollToTopButton } from './components/shared/ScrollToTopButton';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F4BA3E]"></div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Toaster />

      <WhatsAppMenu />
      <ScrollToTopButton />
    </div>
  );
}