import BookGrid from '@/components/BookGrid';
import BookGrids from '@/components/BookGrids';
import Hero from '@/components/Hero';
import { useLoaderData } from 'react-router-dom';

export default function Home() {
  const booksList = useLoaderData();
  return (
    <div>
      <div className="m-3 lg:m-0">
        <Hero />
      </div>
      <div className="py-20">
        <h1 className="text-center text-black-shade text-4xl font-bold">Books</h1>
        <div className="mt-10">
          <BookGrids>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3">
              {booksList.map((bookItem) => (
                <BookGrid key={bookItem.id} bookItem={bookItem} />
              ))}
            </div>
          </BookGrids>
        </div>
      </div>
    </div>
  );
}
