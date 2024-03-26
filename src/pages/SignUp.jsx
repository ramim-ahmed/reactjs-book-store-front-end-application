import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex justify-center items-center"
    >
      <div className="flex flex-col  p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Create One</p>
        </div>
        <form action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="first name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">
                Submit
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have a account?
              <Link to="/sign-in" rel="noopener noreferrer" className="hover:underline text-violet-400">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
