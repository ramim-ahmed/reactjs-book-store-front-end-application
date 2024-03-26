import { UsersIcon, MapPinIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function BookItem({ bookItem }) {
  const { bookId, image, bookName, author, category, rating, publisher, yearOfPublishing, tags } = bookItem || {};
  return (
    <div className="border p-6 rounded-md flex lg:flex-row flex-col lg:h-64 mt-5 h-auto">
      <div className="bg-[#F3F3F3] p-4 rounded-md lg:w-1/4 w-full">
        <img className="w-full object-contain h-full" src={image} alt="" />
      </div>
      <div className="lg:w-3/4 w-full mt-5 lg:mt-0 lg:ml-5">
        <div>
          <h1 className="text-2xl font-bold font-playfair-display">{bookName}</h1>
          <p className="mt-2 text-base font-medium text-light-grey">By : {author}</p>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center lg:space-x-3 mt-3">
          <div className="flex items-center space-x-3">
            <p className="font-bold">Tags</p>
            <div className="flex items-center space-x-4">
              {tags.map((tag, index) => (
                <p key={index} className="bg-[#23BE0A0D] text-base font-medium rounded-3xl px-4 text-primary mt-2">
                  #{tag}
                </p>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-3 lg:mt-0">
            <MapPinIcon className="w-6 h-6 text-light-grey" />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-center space-x-2">
            <UsersIcon className="w-6 h-6 text-light-grey" />
            <p>Publisher:{publisher}</p>
          </div>
        </div>
        <div className="border-b border-solid border-gray-400 opacity-30 mt-3"></div>
        <div className="flex items-center mt-4 lg:space-x-6 flex-wrap">
          <div className="bg-[#328EFF29] text-[#328EFF] px-7 py-1 rounded-3xl">Category: {category}</div>
          <button className="bg-[#FFAC3329] text-[#FFAC33] px-7 py-1 rounded-3xl ml-5 lg:ml-0">Rating: {rating}</button>
          <Link
            to={`/book-details/${bookId}`}
            className="bg-primary text-white mt-3 lg:mt-0 md:ml-5 lg:ml-0 px-7 py-1 rounded-3xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  bookItem: PropTypes.object.isRequired,
};
