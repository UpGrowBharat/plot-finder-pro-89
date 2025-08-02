import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp } from 'lucide-react';

const PopularLocations = () => {
  const locations = [
    {
      name: 'Gurgaon',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400',
      properties: '150+ Plots',
      priceRange: '₹15L - ₹2Cr',
      growth: '+12% YoY',
      highlights: ['IT Hub', 'Metro Connectivity', 'Premium Areas']
    },
    {
      name: 'Noida',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400',
      properties: '120+ Plots',
      priceRange: '₹10L - ₹1.5Cr',
      growth: '+8% YoY',
      highlights: ['Planned City', 'Industrial Growth', 'Good Infrastructure']
    },
    {
      name: 'Delhi',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400',
      properties: '80+ Plots',
      priceRange: '₹25L - ₹5Cr',
      growth: '+5% YoY',
      highlights: ['Capital City', 'Prime Locations', 'High Appreciation']
    },
    {
      name: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400',
      properties: '90+ Plots',
      priceRange: '₹8L - ₹80L',
      growth: '+15% YoY',
      highlights: ['Pink City', 'Cultural Heritage', 'Emerging IT Hub']
    },
    {
      name: 'Faridabad',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400',
      properties: '100+ Plots',
      priceRange: '₹12L - ₹1Cr',
      growth: '+10% YoY',
      highlights: ['Industrial City', 'Delhi NCR', 'Affordable Options']
    }
  ];

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Popular Locations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore prime locations across India with the highest investment potential and growth opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 cursor-pointer overflow-hidden border-0">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{location.properties} Available</span>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-success text-success-foreground gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {location.growth}
                  </Badge>
                </div>

                <div className="p-6 bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">Price Range</span>
                    <span className="font-semibold text-foreground">{location.priceRange}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm font-medium text-muted-foreground">Key Highlights:</span>
                    <div className="flex flex-wrap gap-2">
                      {location.highlights.map((highlight, highlightIndex) => (
                        <Badge key={highlightIndex} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;