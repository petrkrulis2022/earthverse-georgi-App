const CreateWallet = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16">
        <div className=" bg-white pr-0 md:pr-20">
          <h3 className="my-8 text-3xl font-black text-gray-700 mb-12">
            Create A Wallet
          </h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="text"
                id="email"
                placeholder="First Name"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <input
                type="text"
                id="email"
                placeholder="Last Name"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <input
                type="email"
                id="email"
                placeholder="Email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14 sm:w-24 md:w-56 lg:w-56 xl:w-56 2xl:w-56"></span>
                <span className="font-normal text-gray-500">OR</span>
                <span className="h-px bg-gray-400 w-14 sm:w-24 md:w-56 lg:w-56 xl:w-56 2xl:w-56"></span>
              </span>
              <div className="flex flex-row text-4xl gap-10 justify-center">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <i className=" fa fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-github" aria-hidden="true"></i>
                <i className="fa fa-google" aria-hidden="true"></i>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  className="float-left mt-1 w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <p className="ml-6">
                  By creating a wallet, I agree to the following Terms and
                  Conditions.
                </p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="flex-none rounded-lg bg-indigo-800 text-md py-1 px-4 font-normal text-white shadow-sm"
                >
                  Create Wallet
                </button>
              </div>
            </div>
          </form>
          <p className="font-semibold text-center mt-12">
            Already have a wallet? Sign in
          </p>
        </div>

        <div>
          <img
            className="w-full"
            src="./images/wallet-banner.png"
            alt="Wallet-banner"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateWallet;
