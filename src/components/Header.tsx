
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPolicyMenuOpen, setIsPolicyMenuOpen] = useState(false);

  const policyItems = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Refund Policy', href: '/refund-policy' }
  ];

  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Properties', href: '/properties' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white backdrop-blur-sm border-b-2 border-gray-200 sticky top-0 z-50 shadow-lg mobile-optimized">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/4526009d-665d-4c09-9366-2ce5b14b12e7.png" 
                alt="90acre.com" 
                className="h-16 sm:h-20 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-800 hover:text-green-600 transition-colors duration-300 font-semibold text-base mobile-optimized"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Policies Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-800 hover:text-green-600 transition-colors duration-300 font-semibold text-base flex items-center gap-1 mobile-optimized"
                onMouseEnter={() => setIsPolicyMenuOpen(true)}
                onMouseLeave={() => setIsPolicyMenuOpen(false)}
              >
                Policies
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isPolicyMenuOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border-2 border-gray-200 py-2 mobile-optimized"
                  onMouseEnter={() => setIsPolicyMenuOpen(true)}
                  onMouseLeave={() => setIsPolicyMenuOpen(false)}
                >
                  {policyItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-gray-800 hover:text-green-600 hover:bg-green-50 mobile-optimized"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/list-property">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg mobile-optimized">
                List Property
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-gray-800 hover:text-green-600 mobile-optimized"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t-2 border-gray-200 pt-6 space-y-4 animate-fade-in mobile-optimized">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-800 hover:text-green-600 transition-colors duration-300 font-semibold py-3 mobile-optimized"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t-2 border-gray-200 pt-4">
              <p className="text-sm font-semibold text-gray-700 mb-3 mobile-optimized">Policies</p>
              {policyItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-300 py-2 pl-4 mobile-optimized"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-4">
              <Link to="/list-property">
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full rounded-xl font-semibold py-3 mobile-optimized">
                  List Property
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
