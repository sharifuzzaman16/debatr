import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/debatr.png" alt="Debatr Logo" className="w-40" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/debates" className="text-gray-600 hover:text-gray-900 transition-colors">
              Debates
            </Link>
            <Link href="/leaderboard" className="text-gray-600 hover:text-gray-900 transition-colors">
              Leaderboard
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Create Debate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}