
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Search, Home, TrendingUp, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden full-width-container">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-8 sm:left-32 w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-20 h-20 sm:w-24 sm:h-24 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 mobile-optimized">
        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in mobile-optimized">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight mobile-optimized">
            Find Your Perfect
            <span className="block text-primary mt-2">Land Investment</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12 mobile-optimized">
            Discover verified land plots across India with complete documentation, 
            legal clarity, and prime locations for your dream investment.
          </p>
        </div>

        {/* Enhanced Search Section */}
        <div className="w-full mb-20 mobile-optimized">
          <div className="glass-card p-4 sm:p-6 lg:p-8 animate-slide-up mobile-optimized">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mobile-optimized">
              <div className="space-y-2 mobile-optimized">
                <label className="text-sm font-medium text-foreground mobile-optimized">Location</label>
                <div className="relative mobile-optimized">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Enter city, state..." 
                    className="search-input pl-10 mobile-optimized"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mobile-optimized">
                <label className="text-sm font-medium text-foreground mobile-optimized">Property Type</label>
                <Select>
                  <SelectTrigger className="search-input mobile-optimized">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border border-border mobile-optimized">
                    <SelectItem value="residential">Residential Plot</SelectItem>
                    <SelectItem value="commercial">Commercial Plot</SelectItem>
                    <SelectItem value="industrial">Industrial Plot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 mobile-optimized">
                <label className="text-sm font-medium text-foreground mobile-optimized">Budget Range</label>
                <Select>
                  <SelectTrigger className="search-input mobile-optimized">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border border-border mobile-optimized">
                    <SelectItem value="5-10">₹5L - ₹10L</SelectItem>
                    <SelectItem value="10-25">₹10L - ₹25L</SelectItem>
                    <SelectItem value="25-50">₹25L - ₹50L</SelectItem>
                    <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                    <SelectItem value="100+">₹1Cr+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end mobile-optimized">
                <Button className="enhanced-button h-12 gap-2 mobile-optimized">
                  <Search className="h-5 w-5" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-slide-up mobile-optimized" style={{ animationDelay: '0.3s' }}>
          {[
            { number: '2000+', label: 'Verified Properties', icon: Home, color: 'text-primary' },
            { number: '100+', label: 'Cities Covered', icon: MapPin, color: 'text-success' },
            { number: '5000+', label: 'Happy Customers', icon: Users, color: 'text-accent' },
            { number: '50+', label: 'Expert Agents', icon: Award, color: 'text-primary' }
          ].map((stat, index) => (
            <div key={index} className="text-center group mobile-optimized">
              <div className="modern-card p-4 sm:p-6 hover:scale-105 transition-all duration-300 mobile-optimized">
                <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-4 ${stat.color}`} />
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in mobile-optimized" style={{ animationDelay: '0.6s' }}>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 mobile-optimized">
            Ready to start your land investment journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mobile-optimized">
            <Button className="enhanced-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 mobile-optimized">
              <TrendingUp className="h-5 w-5 mr-2" />
              Start Investing
            </Button>
            <Button variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 hover:bg-muted/50 mobile-optimized">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
