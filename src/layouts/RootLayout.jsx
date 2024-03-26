import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  const [contentLoaded, setContentLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(false);
    }, 1000);
  }, []);
  if (contentLoaded) return <Loader title="Book Vibe" />;
  return (
    <div>
      <Nav />
      <div className="max-w-[1170px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
