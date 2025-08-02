
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/4526009d-665d-4c09-9366-2ce5b14b12e7.png" 
              alt="90acre.com" 
              className="h-20 w-auto mb-4" 
            />
            <p className="text-gray-600 leading-relaxed">
              Your trusted partner in finding the perfect land plots across India. We provide verified properties with complete legal documentation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link to="/properties" className="text-gray-600 hover:text-gray-900 transition-colors">Properties</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/list-property" className="text-gray-600 hover:text-gray-900 transition-colors">List Property</Link></li>
              <li><Link to="/property-consultation" className="text-gray-600 hover:text-gray-900 transition-colors">Property Consultation</Link></li>
              <li><Link to="/legal-documentation" className="text-gray-600 hover:text-gray-900 transition-colors">Legal Documentation</Link></li>
              <li><Link to="/investment-advisory" className="text-gray-600 hover:text-gray-900 transition-colors">Investment Advisory</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <p className="text-gray-600">+91 9911288282</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <p className="text-gray-600">contact@90acre.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 90acre.com. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Terms & Conditions</Link>
              <Link to="/disclaimer" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
