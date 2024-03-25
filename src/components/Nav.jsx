import { NavLink } from 'react-router-dom';

export default function Nav() {
  const pages = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Listed Books',
      path: '/listed-books',
    },
    {
      label: 'Page To Read',
      path: '/page-to-read',
    },
  ];
  const pageElement = pages.map((route, index) => (
    <li key={index}>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'bg-transparent border-2 border-primary text-lg text-light-grey' : ' text-lg text-light-grey'
        }
        to={route.path}
      >
        {route.label}
      </NavLink>
    </li>
  ));
  return (
    <nav className="border-b py-2 px-3">
      <div className="max-w-[1170px] mx-auto">
        <div className="navbar bg-base-100 p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
              >
                {pageElement}
              </ul>
            </div>
            <div>
              <h1 className="lg:text-3xl text-xl  font-bold text-black-shade">Book Vibe</h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{pageElement}</ul>
          </div>
          <div className="navbar-end">
            <div className="space-x-5 flex">
              <button className="px-4 py-1 bg-primary text-white rounded-md">SignIn</button>
              <button className="px-4 py-1 bg-secondary text-white rounded-md">SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
