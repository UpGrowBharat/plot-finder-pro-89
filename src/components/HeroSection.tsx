
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center overflow-hidden">
      {/* Background Effects - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 hidden md:block hero-bg-effects">
        <div className="absolute top-20 left-20 w-72 h-72 md:w-96 md:h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 md:w-72 md:h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">
            Find Your Perfect
            <span className="block text-gray-900 md:text-green-600 animate-bounce-gentle mt-2">Land Investment</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Discover verified land plots across India with complete documentation, 
            legal clarity, and prime locations for your dream investment.
          </p>
        </div>

        {/* Enhanced Mobile-First Search Bar */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="bg-white border-2 border-gray-200 rounded-2xl md:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl mobile-optimized">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3">
                <label className="text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wide">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <Input 
                    placeholder="City, State..." 
                    className="pl-10 sm:pl-12 h-12 sm:h-14 bg-white border-2 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl text-gray-900 text-base mobile-optimized"
                  />
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <label className="text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wide">Property Type</label>
                <Select>
                  <SelectTrigger className="h-12 sm:h-14 bg-white border-2 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl text-gray-900 text-base mobile-optimized">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-gray-200 rounded-xl mobile-optimized">
                    <SelectItem value="residential" className="text-gray-900 text-base hover:bg-green-50">Residential Plot</SelectItem>
                    <SelectItem value="commercial" className="text-gray-900 text-base hover:bg-green-50">Commercial Plot</SelectItem>
                    <SelectItem value="industrial" className="text-gray-900 text-base hover:bg-green-50">Industrial Plot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <label className="text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wide">Budget</label>
                <Select>
                  <SelectTrigger className="h-12 sm:h-14 bg-white border-2 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl text-gray-900 text-base mobile-optimized">
                    <SelectValue placeholder="Budget Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-gray-200 rounded-xl mobile-optimized">
                    <SelectItem value="1-10" className="text-gray-900 text-base hover:bg-green-50">₹1L - ₹10L</SelectItem>
                    <SelectItem value="10-25" className="text-gray-900 text-base hover:bg-green-50">₹10L - ₹25L</SelectItem>
                    <SelectItem value="25-50" className="text-gray-900 text-base hover:bg-green-50">₹25L - ₹50L</SelectItem>
                    <SelectItem value="50-100" className="text-gray-900 text-base hover:bg-green-50">₹50L - ₹1Cr</SelectItem>
                    <SelectItem value="100+" className="text-gray-900 text-base hover:bg-green-50">₹1Cr+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  className="w-full h-12 sm:h-14 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg mobile-optimized"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile-Optimized Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-slide-in px-4">
          {[
            { number: '500+', label: 'Verified Properties', icon: '🏡' },
            { number: '50+', label: 'Cities Covered', icon: '🌍' },
            { number: '1000+', label: 'Happy Customers', icon: '😊' },
            { number: '100+', label: 'Trusted Agents', icon: '👥' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white border-2 border-gray-200 rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 md:hover:scale-105 mobile-optimized">
                <div className="text-xl sm:text-2xl md:text-3xl mb-2">{stat.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-2 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium text-xs sm:text-sm md:text-base leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
