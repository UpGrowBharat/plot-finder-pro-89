
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 flex items-center overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Find Your Perfect
            <span className="block text-gradient animate-bounce-gentle">Land Investment</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover verified land plots across India with complete documentation, 
            legal clarity, and prime locations for your dream investment.
          </p>
        </div>

        {/* Enhanced Modern Search Bar */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="glassmorphism p-8 shadow-glow">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-600" />
                  <Input 
                    placeholder="City, State..." 
                    className="pl-12 h-12 bg-white/80 border-white/40 focus:border-green-500 focus:ring-green-500 rounded-xl"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Property Type</label>
                <Select>
                  <SelectTrigger className="h-12 bg-white/80 border-white/40 focus:border-green-500 focus:ring-green-500 rounded-xl">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential Plot</SelectItem>
                    <SelectItem value="commercial">Commercial Plot</SelectItem>
                    <SelectItem value="industrial">Industrial Plot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Budget</label>
                <Select>
                  <SelectTrigger className="h-12 bg-white/80 border-white/40 focus:border-green-500 focus:ring-green-500 rounded-xl">
                    <SelectValue placeholder="Budget Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">₹1L - ₹10L</SelectItem>
                    <SelectItem value="10-25">₹10L - ₹25L</SelectItem>
                    <SelectItem value="25-50">₹25L - ₹50L</SelectItem>
                    <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                    <SelectItem value="100+">₹1Cr+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  variant="hero" 
                  className="w-full h-12 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-in">
          {[
            { number: '500+', label: 'Verified Properties', icon: '🏡' },
            { number: '50+', label: 'Cities Covered', icon: '🌍' },
            { number: '1000+', label: 'Happy Customers', icon: '😊' },
            { number: '100+', label: 'Trusted Agents', icon: '👥' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="modern-card p-6 hover:shadow-glow">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
