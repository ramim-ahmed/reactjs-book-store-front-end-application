export const fetchBooksList = async () => {
  const res = await fetch('http://localhost:9000/booksList');
  const data = await res.json();
  return data;
};

export const fetchBookDetailsById = async (id) => {
  const res = await fetch(`http://localhost:9000/booksList/?bookId=${id}`);
  const data = await res.json();
  return data;
};
