import { Link, Outlet } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative z-0">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_center,rgba(10,10,15,0)_0%,rgba(10,10,15,1)_85%)]">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-8">
          <div className="text-2xl font-black tracking-tighter text-white">
            <Link to="/">SynthRails</Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link to="/team" className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300">
              Team
            </Link>
          </div>
        </nav>

        {/* Page content renders here */}
        <Outlet />

        {/* Simple footer */}
        <footer className="text-center py-8 text-gray-600 text-sm">
          <p>&copy; 2025 SynthRails</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout; 