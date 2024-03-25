import { useState } from 'react';
import { BookOpenIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Tabs() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100 border-b">
      <Link
        to="/listed-books"
        onClick={() => setTabIndex(0)}
        rel="noopener noreferrer"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 0 ? 'border border-b-0 border-primary' : 'border-b border-gray-400 '}  text-light-grey rounded-t-lg`}
      >
        <BookOpenIcon className="w-4 h-4 text-light-grey" />
        <span>Read</span>
      </Link>
      <Link
        to={'wish-list'}
        onClick={() => setTabIndex(1)}
        rel="noopener noreferrer"
        className={`flex  items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 border-primary' : 'border-b border-gray-400'} rounded-t-lg  text-gray-50`}
      >
        <BookmarkIcon className="w-4 h-4 text-light-grey" />
        <span className="text-light-grey">WishtList</span>
      </Link>
    </div>
  );
}
