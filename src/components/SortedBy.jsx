import { SortContext } from '@/context/SortProvider';
import { useContext } from 'react';

export default function SortedBy() {
  const { handleFilterText } = useContext(SortContext);
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-primary text-white btn-sm btn-wide m-1">
        Sorted By
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-1">
        <li>
          <button onClick={() => handleFilterText('yearOfPublishing')} className="btn btn-sm btn-wide">
            Year Of Publishing
          </button>
        </li>
        <li>
          <button onClick={() => handleFilterText('rating')} className="btn btn-sm btn-wide">
            Rating
          </button>
        </li>
      </ul>
    </div>
  );
}
