import { Link } from 'react-router-dom';
import bookCover from '../assets/hero-img.png';
import { StarIcon } from '@heroicons/react/24/outline';

export default function BookGrid() {
  return (
    <Link to={`/book-details/${1}`} className="border p-6 rounded-md">
      <div className="bg-[#F3F3F3] p-14 rounded-md">
        <img className="w-full" src={bookCover} alt="" />
      </div>
      <div className="mt-5">
        <div className="flex items-center space-x-4">
          <p className="bg-[#23BE0A0D] text-base font-medium rounded-3xl px-4 text-primary">Young Adult</p>
          <p className="bg-[#23BE0A0D] text-base font-medium px-4 rounded-3xl text-primary">Identity</p>
        </div>
        <div className="mt-3">
          <h1 className="text-2xl font-bold font-playfair-display">The Catcher in the Rye</h1>
          <p className="mt-2 text-base font-medium text-light-grey">By : Awlad Hossain</p>
        </div>
        <div className="border-b border-dotted border-light-grey mt-3"></div>
        <div className="flex items-center justify-between mt-3">
          <p className="text-base font-medium text-light-grey">Fiction</p>
          <div className="flex items-center space-x-2">
            <p>4.5</p>
            <StarIcon className="h-5 w-5 text-light-grey" />
          </div>
        </div>
      </div>
    </Link>
  );
}
