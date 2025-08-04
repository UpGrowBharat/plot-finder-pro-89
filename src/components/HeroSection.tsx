
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Search, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen desktop-fixed gradient-bg flex items-center overflow-hidden">
      {/* Enhanced background with gradient */}
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #e0f2fe 70%, #f0fdf4 100%)'
      }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-green-100 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-40 right-40 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-40 w-20 h-20 bg-emerald-100 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="desktop-fixed mx-auto px-32 py-80 relative z-10">
        <div className="text-center mb-48 animate-slide-up">
          <div className="flex items-center justify-center gap-8 mb-16">
            <Sparkles className="h-16 w-16 text-green-500 animate-glow" />
            <h1 className="text-7xl font-bold text-enhanced leading-tight">
              Find Your Perfect
              <span className="block text-green-600 animate-bounce-gentle mt-8 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Land Investment</span>
            </h1>
            <Sparkles className="h-16 w-16 text-blue-500 animate-glow" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-2xl text-enhanced-light max-w-5xl mx-auto leading-relaxed mb-32">
            Discover verified land plots across India with complete documentation, 
            legal clarity, and prime locations for your dream investment.
          </p>
        </div>

        {/* Enhanced Desktop Search Bar */}
        <div className="max-w-6xl mx-auto mb-64">
          <div className="glassmorphism p-32 animate-glow" style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '3px solid #e2e8f0',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="grid grid-cols-4 gap-24">
              <div className="space-y-12">
                <label className="text-sm font-bold text-enhanced uppercase tracking-wider">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-16 top-1/2 transform -translate-y-1/2 h-20 w-20 text-green-600" />
                  <Input 
                    placeholder="City, State..." 
                    className="pl-48 h-56 bg-white border-3 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl text-enhanced text-lg"
                    style={{ 
                      backgroundColor: '#ffffff', 
                      color: '#111827',
                      fontSize: '18px',
                      fontWeight: '500'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-12">
                <label className="text-sm font-bold text-enhanced uppercase tracking-wider">Property Type</label>
                <Select>
                  <SelectTrigger className="h-56 bg-white border-3 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl text-enhanced text-lg" 
                    style={{ 
                      backgroundColor: '#ffffff', 
                      color: '#111827',
                      fontSize: '18px',
                      fontWeight: '500'
                    }}>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-3 border-gray-200 rounded-xl">
                    <SelectItem value="residential" className="text-enhanced text-lg hover:bg-gray-50">Residential Plot</SelectItem>
                    <SelectItem value="commercial" className="text-enhanced text-lg hover:bg-gray-50">Commercial Plot</SelectItem>
                    <SelectItem value="industrial" className="text-enhanced text-lg hover:bg-gray-50">Industrial Plot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-12">
                <label className="text-sm font-bold text-enhanced uppercase tracking-wider">Budget</label>
                <Select>
                  <SelectTrigger className="h-56 bg-white border-3 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl text-enhanced text-lg"
                    style={{ 
                      backgroundColor: '#ffffff', 
                      color: '#111827',
                      fontSize: '18px',
                      fontWeight: '500'
                    }}>
                    <SelectValue placeholder="Budget Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-3 border-gray-200 rounded-xl">
                    <SelectItem value="1-10" className="text-enhanced text-lg hover:bg-gray-50">₹1L - ₹10L</SelectItem>
                    <SelectItem value="10-25" className="text-enhanced text-lg hover:bg-gray-50">₹10L - ₹25L</SelectItem>
                    <SelectItem value="25-50" className="text-enhanced text-lg hover:bg-gray-50">₹25L - ₹50L</SelectItem>
                    <SelectItem value="50-100" className="text-enhanced text-lg hover:bg-gray-50">₹50L - ₹1Cr</SelectItem>
                    <SelectItem value="100+" className="text-enhanced text-lg hover:bg-gray-50">₹1Cr+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  className="w-full h-56 enhanced-button rounded-xl font-bold text-lg transition-all duration-300"
                >
                  <Search className="h-20 w-20 mr-8" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-4 gap-32 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {[
            { number: '500+', label: 'Verified Properties', icon: '🏡', color: 'from-green-400 to-green-600' },
            { number: '50+', label: 'Cities Covered', icon: '🌍', color: 'from-blue-400 to-blue-600' },
            { number: '1000+', label: 'Happy Customers', icon: '😊', color: 'from-purple-400 to-purple-600' },
            { number: '100+', label: 'Trusted Agents', icon: '👥', color: 'from-orange-400 to-orange-600' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="modern-card p-24 hover:scale-105 transition-all duration-300" 
                style={{ 
                  background: `linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)`,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}>
                <div className="text-6xl mb-8">{stat.icon}</div>
                <div className={`text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-8`}>
                  {stat.number}
                </div>
                <div className="text-enhanced text-lg font-semibold leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
