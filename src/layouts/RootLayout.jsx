import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
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
