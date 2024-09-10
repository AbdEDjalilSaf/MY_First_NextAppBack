
// pages/login.js
import { Button } from "../ui/button";
import { SignInWithEmail } from "@/lib/actions/logIn-action";



export default function Login() {



   return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="space-y-6" action={SignInWithEmail}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={"noodsaf01@gmail.com"}
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue={"nood saf 2003"}
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <Button
            variant="outline"
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Sign in
            </Button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account? <a href="#" className="text-indigo-600 hover:text-indigo-700">Sign up</a>
        </p>
      </div>
    </div>


  // action={signInWithEmail}
  // action={signUpWithEmail}

    // 	<div>
		// 	<form >
		// 		<h1>Login</h1>
		// 		<input
		// 			type="email"
		// 			name="email"
		// 			placeholder="Email address"
		// 		/>
		// 		<input
		// 			type="password"
		// 			name="password"
		// 			placeholder="Password"
		// 		/>
		// 		<button type="submit">Login</button>
		// 	</form>

		// 	<form >
		// 		<h1>Sign up</h1>
		// 		<input
		// 			type="email"
		// 			name="email"
		// 			placeholder="Email address"
		// 		/>
		// 		<input
		// 			type="password"
		// 			name="password"
		// 			placeholder="Password"
		// 		/>
		// 		<button type="submit">Sign up</button>
		// 	</form>
		// </div>
  );
}
