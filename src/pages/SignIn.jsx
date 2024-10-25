import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="mx-auto max-w-md rounded-lg border border-gray-200/85 bg-white px-12 py-10">
        <h2 className="text-center text-xl font-bold text-gray-700">
          Back to Table
        </h2>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
              placeholder="speak.jorjis@gmail.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-orange-500 hover:text-orange-600"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
              <FaGoogle className="h-5 w-5 text-red-500" />
            </button>
            <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
              <FaFacebook className="h-5 w-5 text-blue-600" />
            </button>
            <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
              <FaApple className="h-5 w-5 text-gray-900" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Not a member?{" "}
          <a
            href="#"
            className="font-medium text-orange-500 hover:text-orange-600"
          >
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
