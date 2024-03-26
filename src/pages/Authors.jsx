import { ArrowRightIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const bookAuthors = [
  {
    name: 'J.K. Rowling',
    nationality: 'British',
    famousWorks: ['Harry Potter series'],
    notableAchievements: ['Bestselling author of all time'],
    birthYear: 1965,
  },
  {
    name: 'Stephen King',
    nationality: 'American',
    famousWorks: ['The Shining', 'It', 'The Dark Tower series'],
    notableAchievements: ['Master of horror fiction'],
    birthYear: 1947,
  },
  {
    name: 'Harper Lee',
    nationality: 'American',
    famousWorks: ['To Kill a Mockingbird'],
    notableAchievements: ['Pulitzer Prize for Fiction'],
    birthYear: 1926,
  },
  {
    name: 'Tolkien',
    nationality: 'British',
    famousWorks: ['The Lord of the Rings'],
    notableAchievements: ['Father of modern fantasy literature'],
    birthYear: 1892,
  },
  {
    name: 'George Orwell',
    nationality: 'British',
    famousWorks: ['1984', 'Animal Farm'],
    notableAchievements: ['Critically acclaimed novelist and essayist'],
    birthYear: 1903,
  },
  {
    name: 'Agatha Christie',
    nationality: 'British',
    famousWorks: ['Murder on the Orient Express', 'Death on the Nile'],
    notableAchievements: ['Bestselling novelist of all time'],
    birthYear: 1890,
  },
  {
    name: 'Leo Tolstoy',
    nationality: 'Russian',
    famousWorks: ['War and Peace', 'Anna Karenina'],
    notableAchievements: ['One of the greatest novelists of all time'],
    birthYear: 1828,
  },
  {
    name: 'Jane Austen',
    nationality: 'British',
    famousWorks: ['Pride and Prejudice', 'Sense and Sensibility'],
    notableAchievements: ['Classic novelist of the 19th century'],
    birthYear: 1775,
  },
  {
    name: 'Gabriel García Márquez',
    nationality: 'Colombian',
    famousWorks: ['One Hundred Years of Solitude', 'Love in the Time of Cholera'],
    notableAchievements: ['Nobel Prize in Literature'],
    birthYear: 1927,
  },
];

export default function Authors() {
  return (
    <div className="min-h-[calc(100vh-400px)] px-3">
      <div className="bg-[#1313130D] mt-5 py-6 rounded-md text-center px-3">
        <p className="text-3xl font-semibold">Authors</p>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
          {bookAuthors.map((author, index) => (
            <div key={index} className="bg-[#1313130D] px-3 py-4">
              <div className="flex items-center space-x-1">
                <UserCircleIcon className="w-8 h-8" />
                <h3 className="text-2xl font-medium">{author.name}</h3>
              </div>
              <div className="mt-2">
                <p>Nationality: {author.nationality}</p>
                <p>BirthYear: {author.birthYear}</p>
              </div>
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
