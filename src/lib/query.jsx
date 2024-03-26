export const fetchBooksList = async () => {
  const res = await fetch('https://mock-json-server-apis.vercel.app/booksList');
  const data = await res.json();
  return data;
};

export const fetchBookDetailsById = async (id) => {
  const res = await fetch(`https://mock-json-server-apis.vercel.app/booksList/?bookId=${id}`);
  const data = await res.json();
  return data;
};
