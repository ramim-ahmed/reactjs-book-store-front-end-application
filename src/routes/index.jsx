import ReadBookLists from '@/components/ReadBookLists';
import WishList from '@/components/WishList';
import RootLayout from '@/layouts/RootLayout';
import BookDetails from '@/pages/BookDetails';
import Home from '@/pages/Home';
import ListedBooks from '@/pages/ListedBooks';
import NotFoundPage from '@/pages/NotFoundPage';
import PageToRead from '@/pages/PageToRead';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/listed-books',
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBookLists />,
          },
          {
            path: 'wish-list',
            element: <WishList />,
          },
        ],
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/page-to-read',
        element: <PageToRead />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

export default routes;
