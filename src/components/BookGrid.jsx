import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

export default function BookGrid({ bookItem }) {
  const { bookId, image, bookName, author, category, rating, tags } = bookItem || {};
  return (
    <Link
      to={`/book-details/${bookId}`}
      className="border p-4 rounded-md duration-300 hover:scale-105 hover:duration-300"
    >
      <div className="bg-[#F3F3F3] p-14 rounded-md">
        <img className="w-full h-[300px] object-contain" src={image} alt="" />
      </div>
      <div className="mt-5">
        <div className="flex items-center space-x-2 flex-wrap">
          {tags.map((tag, index) => (
            <p key={index} className="bg-[#23BE0A0D] text-base font-medium rounded-3xl px-4 text-primary mt-2">
              {tag}
            </p>
          ))}
        </div>
        <div className="mt-3">
          <h1 className="text-2xl font-bold font-playfair-display">{bookName}</h1>
          <p className="mt-2 text-base font-medium text-light-grey">By : {author}</p>
        </div>
        <div className="border-b border-dotted border-light-grey mt-3"></div>
        <div className="flex items-center justify-between mt-3">
          <p className="text-base font-medium text-light-grey">{category}</p>
          <div className="flex items-center space-x-2">
            <p>{rating}</p>
            <StarIcon className="h-5 w-5 text-light-grey" />
          </div>
        </div>
      </div>
    </Link>
  );
}

BookGrid.propTypes = {
  bookItem: PropTypes.object.isRequired,
};
