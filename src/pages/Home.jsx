import BookGrid from '@/components/BookGrid';
import BookGrids from '@/components/BookGrids';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <div className="m-3 lg:m-0">
        <Hero />
      </div>
      <div className="py-20">
        <h1 className="text-center text-black-shade text-4xl font-bold">Books</h1>
        <div className="mt-10">
          <BookGrids>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              <BookGrid />
              <BookGrid />
              <BookGrid />
            </div>
          </BookGrids>
        </div>
      </div>
    </div>
  );
}
