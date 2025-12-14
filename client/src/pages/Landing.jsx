import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          FitPlan<span className="text-gray-500">Hub</span>
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Train smarter. <br />
              Follow experts. <br />
              Transform yourself.
            </h2>

            <p className="text-gray-600 mb-8">
              FitPlanHub connects you with certified trainers and structured
              fitness plans designed to help you reach your goals — sustainably
              and confidently.
            </p>

            <div className="flex gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:border-gray-400 transition"
              >
                I already have an account
              </Link>
            </div>
          </div>

          {/* Visual Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              What you can do
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• Follow certified trainers</li>
              <li>• Access structured fitness plans</li>
              <li>• Subscribe & unlock premium content</li>
              <li>• Personalized feed based on trainers</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} FitPlanHub. Built for growth.
      </footer>
    </div>
  );
};

export default Landing;
