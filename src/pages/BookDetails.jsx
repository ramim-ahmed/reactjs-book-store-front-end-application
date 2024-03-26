import { useLoaderData, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
export default function BookDetails() {
  const bookItem = useLoaderData();
  const navigate = useNavigate();
  const { image, bookName, author, category, review, rating, totalPages, publisher, yearOfPublishing, tags } =
    bookItem[0] || {};
  return (
    <div className="mt-5 mx-3 lg:mx-0">
      <div onClick={() => navigate(-1 || '/')} className="py-3 flex items-center space-x-2 text-primary cursor-pointer">
        <ArrowLeftIcon className="w-6 h-6" />
        <p>Back</p>
      </div>
      <div className="flex lg:flex-row flex-col w-full">
        <div className="bg-[#F3F3F3] p-14 rounded-md lg:w-1/2 w-full">
          <img className="w-full h-[400px] object-contain" src={image} alt="" />
        </div>
        <div className="lg:w-1/2 w-full lg:px-8 px-0 mt-5 lg:mt-0 flex flex-col justify-between">
          <div className="">
            <h1 className="text-2xl font-bold font-playfair-display">{bookName}</h1>
            <p className="mt-2 text-base font-medium text-light-grey">By : {author}</p>
          </div>
          <div className="border-b border-dotted border-light-grey mt-3"></div>
          <div className="mt-3">
            <p className="text-base font-medium text-light-grey">{category}</p>
          </div>
          <div className="border-b border-dotted border-light-grey mt-3"></div>
          <div className="mt-3">
            <p className="text-light-grey">
              <span className="font-bold text-black-shade">Review </span>: {review}
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-3">
            <p className="font-bold">Tags</p>
            <div className="flex items-center space-x-4">
              {tags.map((tag, index) => (
                <p key={index} className="bg-[#23BE0A0D] text-base font-medium rounded-3xl px-4 text-primary mt-2">
                  #{tag}
                </p>
              ))}
            </div>
          </div>
          <div className="border-b border-dotted border-light-grey mt-3"></div>
          <div className="mt-3 flex space-x-12">
            <div>
              <p>Number of pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div>
              <p className="font-semibold">{totalPages}</p>
              <p className="font-semibold">{publisher}</p>
              <p className="font-semibold">{yearOfPublishing}</p>
              <p className="font-semibold">{rating}</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="space-x-5 flex">
              <button className="px-4 py-1 bg-primary text-white rounded-md focus:ring focus:ring-primary focus:bg-transparent focus:ring-offset-2 focus:text-black-shade">
                Read
              </button>
              <button className="px-4 py-1 bg-secondary text-white rounded-md focus:ring focus:ring-secondary focus:bg-transparent focus:ring-offset-2 focus:text-black-shade">
                WishList
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
