import { useContext, useEffect, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import BookItem from './BookItem';
import { getReadBookLists } from '@/utils/localStorage';
import { SortContext } from '@/context/SortProvider';
import { useNavigate } from 'react-router-dom';
export default function ReadBookLists() {
  const [readBooks, setReadBooks] = useState([]);
  const { filterText } = useContext(SortContext);
  const navigate = useNavigate();
  useEffect(() => {
    const lists = getReadBookLists();
    setReadBooks(lists);
  }, []);
  let content;
  if (filterText === 'all') {
    content = readBooks.map((bookItem) => <BookItem key={bookItem.bookId} bookItem={bookItem} />);
  } else if (filterText === 'rating') {
    content = readBooks
      .sort((a, b) => b.rating - a.rating)
      .map((bookItem) => <BookItem key={bookItem.bookId} bookItem={bookItem} />);
  } else if (filterText === 'yearOfPublishing') {
    content = readBooks
      .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      .map((bookItem) => <BookItem key={bookItem.bookId} bookItem={bookItem} />);
  }
  return (
    <div className="px-3 my-10">
      <div>{content}</div>
      {!readBooks.length && (
        <div className="">
          <p className="text-xl text-red-500">Not Yet Read Book!</p>
          <button className="text-primary mt-2 flex items-center space-x-2" onClick={() => navigate('/')}>
            <ArrowRightIcon className="w-6 h-6" />
            <p className="">Go Book List</p>
          </button>
        </div>
      )}
    </div>
  );
}
