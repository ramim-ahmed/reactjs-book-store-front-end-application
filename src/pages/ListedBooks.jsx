import SortedBy from '@/components/SortedBy';
import Tabs from '@/components/Tabs';
import { Outlet } from 'react-router-dom';

export default function ListedBooks() {
  return (
    <div>
      <div className="bg-[#1313130D] mt-5 py-6 rounded-md text-center mx-3">
        <p className="text-3xl font-semibold">Books</p>
      </div>
      <div className="flex justify-center mt-5">
        <SortedBy />
      </div>
      <div className="mt-28 px-3">
        <Tabs />
      </div>
      <Outlet />
    </div>
  );
}
