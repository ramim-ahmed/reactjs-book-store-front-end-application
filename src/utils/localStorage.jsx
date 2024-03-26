import toast from 'react-hot-toast';
// get read books
export const getReadBookLists = () => {
  let lists = [];
  const isBookLists = localStorage.getItem('reads');
  if (isBookLists) {
    return JSON.parse(isBookLists);
  }
  return lists;
};

// save read books
export const saveReadBook = (bookItem) => {
  const readBooks = getReadBookLists();
  const isExits = readBooks.find((book) => book.bookId === bookItem.bookId);
  if (isExits) {
    return toast.error('🖐️Book Is Already Exits To Read!!');
  }
  readBooks.push(bookItem);
  localStorage.setItem('reads', JSON.stringify(readBooks));
  toast.success('👍Book Is Succesfully Added To Read.');
};

// get wishlist books
export const getWishListBooks = () => {
  let lists = [];
  const isBookLists = localStorage.getItem('wishLists');
  if (isBookLists) {
    return JSON.parse(isBookLists);
  }
  return lists;
};

export const saveWishListBooks = (bookItem) => {
  const wishListBooks = getWishListBooks();
  const isExits = wishListBooks.find((book) => book.bookId === bookItem.bookId);
  if (isExits) {
    return toast.error('🖐️Book Is Already Exists to wishList.');
  }
  const readBooks = getReadBookLists();
  const isRead = readBooks.find((book) => book.bookId === bookItem.bookId);
  if (isRead) {
    return toast.error('🖐️Book Is Already Exists to Read.');
  }
  wishListBooks.push(bookItem);
  localStorage.setItem('wishLists', JSON.stringify(wishListBooks));
  toast.success('👍Book is succesfully added to wishList.');
};
