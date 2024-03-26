import { useEffect, useState } from 'react';
import BookItem from './BookItem';
import { getReadBookLists } from '@/utils/localStorage';
export default function ReadBookLists() {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const lists = getReadBookLists();
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
