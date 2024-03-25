import { Link } from 'react-router-dom';
import heroBook from '../assets/hero-img.png';
export default function Hero() {
  return (
    <div className="bg-[#1313130D] lg:h-[500px] rounded-md flex lg:flex-row  justify-between flex-col items-center lg:p-20 p-10 my-8">
      <div>
        <h1 className="lg:text-5xl text-4xl font-playfair-display font-bold">Books to freshen up</h1>
        <h1 className="lg:text-5xl text-4xl font-playfair-display font-bold">your bookshelf</h1>
        <div className="mt-5 flex justify-center lg:justify-start">
          <Link to="/listed-books" className="bg-primary text-white px-9 py-2 text-lg font-medium">
            View The List
          </Link>
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <img src={heroBook} alt="" />
      </div>
    </div>
  );
}
