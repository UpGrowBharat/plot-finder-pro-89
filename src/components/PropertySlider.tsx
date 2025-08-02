
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Maximize, Phone, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getConvertedMeasurement } from '@/utils/unitConverter';
import FloatingCube3D from './FloatingCube3D';
import AnimatedBackground3D from './AnimatedBackground3D';
import { supabase } from '@/integrations/supabase/client';

interface Property {
  id: string;
  serial_number: string;
  title: string;
  images: string[] | null;
  price_text: string;
  city: string;
  area: string;
  state: string;
  size: string;
  unit: string;
  type: string;
  description: string;
  features: string[] | null;
}

const PropertySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('status', 'approved')
        .limit(3);

      if (error) {
        console.error('Error fetching properties:', error);
        // Fallback to demo data if no properties found
        setProperties(fallbackProperties);
      } else if (data && data.length > 0) {
        setProperties(data);
      } else {
        // Use fallback data if no approved properties
        setProperties(fallbackProperties);
      }
    } catch (error) {
      console.error('Error:', error);
      setProperties(fallbackProperties);
    } finally {
      setLoading(false);
    }
  };

  // Fallback demo data
  const fallbackProperties: Property[] = [
    {
      id: '1',
      serial_number: 'A-1',
      title: 'Premium Residential Plot in Gurgaon',
      images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600'],
      price_text: '₹25,00,000',
      city: 'Gurgaon',
      area: 'Sector 89',
      state: 'Haryana',
      size: '100',
      unit: 'gaj',
      type: 'residential',
      description: 'Prime residential plot in rapidly developing sector with excellent connectivity.',
      features: ['DTCP Approved', 'Clear Title', 'Ready for Construction', 'Metro Nearby']
    },
    {
      id: '2',
      serial_number: 'A-2',
      title: 'Commercial Plot in Noida Extension',
      images: ['https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600'],
      price_text: '₹45,00,000',
      city: 'Noida',
      area: 'Sector 150',
      state: 'Uttar Pradesh',
      size: '200',
      unit: 'gaj',
      type: 'commercial',
      description: 'Excellent commercial plot with high appreciation potential and metro connectivity.',
      features: ['Commercial License', 'Main Road Facing', 'High Footfall', 'Metro Connected']
    },
    {
      id: '3',
      serial_number: 'A-3',
      title: 'Industrial Plot in Faridabad',
      images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600'],
      price_text: '₹80,00,000',
      city: 'Faridabad',
      area: 'Sector 18',
      state: 'Haryana',
      size: '500',
      unit: 'gaj',
      type: 'industrial',
      description: 'Large industrial plot with power backup and logistics connectivity.',
      features: ['Industrial License', 'Power Backup', 'Loading Bay', 'Security']
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const getMeasurementDisplay = (size: string, unit: string) => {
    const converted = getConvertedMeasurement(size, unit);
    return `${converted.original.display} (${converted.converted.display})`;
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi, I am interested in this property. Can you provide more details?');
    window.open(`https://wa.me/9911288282?text=${message}`, '_blank');
  };

  const callNow = () => {
    window.open(`tel:+9911288282`, '_self');
  };

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p>Loading properties...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <AnimatedBackground3D />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FloatingCube3D />
            <h2 className="text-4xl font-bold text-foreground">
              Featured <span className="text-primary">Properties</span>
            </h2>
            <FloatingCube3D />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked premium properties with verified documentation and prime locations
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {properties.map((property) => (
                <div key={property.id} className="w-full flex-shrink-0 px-4">
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative">
                        <img 
                          src={property.images?.[0] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600'} 
                          alt={property.title}
                          className="w-full h-80 lg:h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-lg font-bold">
                          {property.serial_number}
                        </Badge>
                        <Badge className="absolute top-4 right-4 bg-green-500 text-white font-bold">
                          VERIFIED
                        </Badge>
                      </div>
                      
                      {/* Content Section */}
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-3xl font-bold text-foreground">{property.price_text}</h3>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">4.8</span>
                              <span className="text-xs text-muted-foreground">(125 reviews)</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            Verified ✓
                          </Badge>
                        </div>

                        <h4 className="text-xl font-semibold text-foreground mb-3">{property.title}</h4>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{property.area}, {property.city}, {property.state}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Maximize className="h-4 w-4" />
                            <span className="text-sm">
                              {getMeasurementDisplay(property.size, property.unit)}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {property.description}
                        </p>

                        {/* Property Features */}
                        {property.features && (
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {property.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Agent Details */}
                        <div className="bg-muted/50 rounded-lg p-4 mb-6">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-foreground">Gaurav Aggarwal</h5>
                              <p className="text-xs text-muted-foreground">Property Consultant</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">Contact</p>
                              <p className="text-xs font-medium text-foreground">+91 99112 88282</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1 text-xs"
                              onClick={callNow}
                            >
                              <Phone className="h-3 w-3 mr-1" />
                              Call
                            </Button>
                            <Button 
                              size="sm" 
                              variant="default"
                              className="flex-1 text-xs"
                              onClick={openWhatsApp}
                            >
                              <MessageCircle className="h-3 w-3 mr-1" />
                              WhatsApp
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Link to={`/property/${property.id}`} className="block">
                            <Button variant="hero" className="w-full">
                              View Full Details
                            </Button>
                          </Link>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={openWhatsApp}
                          >
                            Show Interest
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm"
            onClick={prevSlide}
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm"
            onClick={nextSlide}
          >
            →
          </Button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {properties.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySlider;
