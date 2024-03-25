import bookCover from '../assets/hero-img.png';
export default function BookDetails() {
  return (
    <div className="mt-5">
      <div className="flex w-full">
        <div className="bg-[#F3F3F3] p-14 rounded-md w-1/2">
          <img className="w-full h-[400px] object-contain" src={bookCover} alt="" />
        </div>
        <div className="w-1/2 px-8 flex flex-col justify-between">
          <div className="">
            <h1 className="text-2xl font-bold font-playfair-display">The Catcher in the Rye</h1>
            <p className="mt-2 text-base font-medium text-light-grey">By : Awlad Hossain</p>
          </div>
          <div className="border-b border-dotted border-light-grey mt-3"></div>
          <div className="mt-3">
            <p className="text-base font-medium text-light-grey">Fiction</p>
          </div>
          <div className="border-b border-dotted border-light-grey mt-3"></div>
          <div className="mt-3">
            <p className="text-light-grey">
              <span className="font-bold text-black-shade">Review </span>: Sit amet consectetur. Interdum porta pulvinar
              non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, rem! Ipsam, explicabo unde
              deserunt aspernatur, suscipit non nisi maiores labore dolore minima distinctio esse asperiores dolor
              cumque deleniti necessitatibus enim!
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-3">
            <p className="font-bold">Tags</p>
            <div className="flex items-center space-x-4">
              <p className="bg-[#23BE0A0D] text-base font-medium rounded-3xl px-4 text-primary">#Young Adult</p>
              <p className="bg-[#23BE0A0D] text-base font-medium px-4 rounded-3xl text-primary">#Identity</p>
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
              <p className="font-semibold">292</p>
              <p className="font-semibold">J.B Lippincott & Co.</p>
              <p className="font-semibold">1960/yr</p>
              <p className="font-semibold">4.8</p>
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
