import { ArrowRightIcon } from '@heroicons/react/24/outline';
const bookCategories = [
  {
    category: 'Fiction',
    description:
      'Books that are based on imaginary events or people, often including elements of creativity and storytelling.',
  },
  {
    category: 'Non-fiction',
    description:
      'Books that are based on real events, facts, or information, typically presenting them in a structured and informative manner.',
  },
  {
    category: 'Science Fiction',
    description:
      'Books that explore imaginative and futuristic concepts, often set in futuristic worlds or involving advanced technology.',
  },
  {
    category: 'Fantasy',
    description:
      'Books that involve magical or supernatural elements, often set in imaginary worlds with their own rules and mythology.',
  },
  {
    category: 'Mystery',
    description:
      'Books that involve solving a puzzle or crime, often featuring a detective or amateur sleuth as the protagonist.',
  },
  {
    category: 'Thriller',
    description:
      'Books that create a feeling of suspense, excitement, and anticipation, typically involving danger, tension, and high stakes.',
  },
  {
    category: 'Biography',
    description: "Books that tell the story of a person's life, usually written by someone else.",
  },
  {
    category: 'Self-help',
    description:
      'Books that offer advice, guidance, and strategies for personal growth, self-improvement, and achieving success.',
  },
  {
    category: 'History',
    description:
      'Books that explore past events, societies, and civilizations, often based on research and analysis of historical sources.',
  },
];

export default function Categories() {
  return (
    <div className="min-h-[calc(100vh-400px)] px-3">
      <div className="bg-[#1313130D] mt-5 py-6 rounded-md text-center px-3">
        <p className="text-3xl font-semibold">Categories</p>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
          {bookCategories.map((category, index) => (
            <div key={index} className="bg-[#1313130D] px-3 py-4">
              <h3 className="text-2xl font-medium">{category.category}</h3>
              <button className="text-primary mt-2 flex items-center space-x-1">
                <p>see books</p>
                <ArrowRightIcon className="w-4 h-4 text-primary" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
