
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
    <header className="bg-white backdrop-blur-sm border-b-2 border-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section with Better Spacing */}
            <div className="flex items-center">
              <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
                <img 
                  src="/lovable-uploads/4526009d-665d-4c09-9366-2ce5b14b12e7.png" 
                  alt="90acre.com" 
                  className="h-14 sm:h-16 lg:h-20 w-auto object-contain" 
                />
              </Link>
            </div>

            {/* Desktop Navigation with Better Spacing */}
            <nav className="hidden lg:flex items-center space-x-10">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-800 hover:text-primary transition-colors duration-300 font-semibold text-lg px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Policies Dropdown with Better Spacing */}
              <div className="relative group">
                <button
                  className="text-gray-800 hover:text-primary transition-colors duration-300 font-semibold text-lg flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50"
                  onMouseEnter={() => setIsPolicyMenuOpen(true)}
                  onMouseLeave={() => setIsPolicyMenuOpen(false)}
                >
                  Policies
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                </button>
                
                {isPolicyMenuOpen && (
                  <div 
                    className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50"
                    onMouseEnter={() => setIsPolicyMenuOpen(true)}
                    onMouseLeave={() => setIsPolicyMenuOpen(false)}
                  >
                    {policyItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-6 py-3 text-base text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* CTA Button with Better Styling */}
            <div className="hidden md:flex">
              <Link to="/list-property">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-primary">
                  List Property
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="lg"
              className="lg:hidden text-gray-800 hover:text-primary hover:bg-gray-50 p-3 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>

          {/* Mobile Navigation with Better Spacing */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t-2 border-gray-200 pt-6 animate-fade-in">
              <div className="space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-gray-800 hover:text-primary transition-colors duration-300 font-semibold text-lg py-4 px-4 rounded-xl hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="border-t-2 border-gray-200 pt-4 mt-4">
                  <p className="text-base font-bold text-gray-700 mb-4 px-4">Policies</p>
                  <div className="space-y-1">
                    {policyItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-gray-600 hover:text-primary transition-colors duration-300 font-medium text-base py-3 px-6 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 px-4">
                  <Link to="/list-property">
                    <Button className="bg-primary hover:bg-primary/90 text-white w-full rounded-xl font-bold py-4 text-lg transition-all duration-300 hover:shadow-lg">
                      List Property
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
