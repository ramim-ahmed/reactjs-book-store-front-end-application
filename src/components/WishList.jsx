import { useEffect, useState } from 'react';
import BookItem from './BookItem';
import { getWishListBooks } from '@/utils/localStorage';

export default function WishList() {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const lists = getWishListBooks();
    setReadBooks(lists);
  }, []);
  return (
    <div className="px-3 my-10">
      {readBooks.map((bookItem) => (
        <BookItem key={bookItem.bookId} bookItem={bookItem} />
      ))}
    </div>
  );
}
