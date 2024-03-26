import { useContext, useEffect, useState } from 'react';
import BookItem from './BookItem';
import { getWishListBooks } from '@/utils/localStorage';
import { SortContext } from '@/context/SortProvider';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function WishList() {
  const [wishListBooks, setwishListBooks] = useState([]);
  const navigate = useNavigate();
  const { filterText } = useContext(SortContext);
  useEffect(() => {
    const lists = getWishListBooks();
    setwishListBooks(lists);
  }, []);
  let content;
  if (filterText === 'all') {
    content = wishListBooks.map((bookItem) => <BookItem key={bookItem.bookId} bookItem={bookItem} />);
  } else if (filterText === 'rating') {
    content = wishListBooks
      .sort((a, b) => b.rating - a.rating)
      .map((bookItem) => <BookItem key={bookItem.bookId} bookItem={bookItem} />);
  } else if (filterText === 'yearOfPublishing') {
    content = wishListBooks
      .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      .map((bookItem) => <BookItem key={bookItem.bookId} bookItem={bookItem} />);
  } else if (filterText === 'page') {
    content = wishListBooks
      .sort((a, b) => b.totalPages - a.totalPages)
      .map((bookItem) => <BookItem key={bookItem.bookId} bookItem={bookItem} />);
  }
  return (
    <div className="px-3 my-10">
      <div>{content}</div>
      {!wishListBooks.length && (
        <div className="">
          <p className="text-xl text-red-500">Not Yet Wish List Book!</p>
          <button className="text-primary mt-2 flex items-center space-x-2" onClick={() => navigate('/')}>
            <ArrowRightIcon className="w-6 h-6" />
            <p className="">Go Book List</p>
          </button>
        </div>
      )}
    </div>
  );
}
