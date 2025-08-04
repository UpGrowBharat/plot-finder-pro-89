
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Maximize, Phone, MessageCircle, Star, ExternalLink } from 'lucide-react';
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
  front_feet?: string;
  google_maps_url?: string;
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
        setProperties(fallbackProperties);
      } else if (data && data.length > 0) {
        setProperties(data);
      } else {
        setProperties(fallbackProperties);
      }
    } catch (error) {
      console.error('Error:', error);
      setProperties(fallbackProperties);
    } finally {
      setLoading(false);
    }
  };

  // Updated property data with your specifications
  const fallbackProperties: Property[] = [
    {
      id: '1',
      serial_number: 'A-1',
      title: 'Premium Land Plot - 120 Bigha',
      images: [
        '/lovable-uploads/4dc0b007-41bd-4063-bbd1-d5fdfa4307aa.png',
        '/lovable-uploads/a7cb60ba-b410-491f-979f-4f8dfed44d36.png'
      ],
      price_text: '₹5,000/- per yard',
      city: 'Bharat Petroleum Area',
      area: 'BB Singh Petrol Pump',
      state: 'India',
      size: '120',
      unit: 'bigha',
      front_feet: '500',
      type: 'residential',
      description: 'Premium land plot with excellent connectivity and clear documentation. Located near Bharat Petroleum with 500 feet front facing.',
      features: ['120 Bigha Area', '500 Feet Front', 'Clear Title', 'Prime Location', 'Road Connectivity'],
      google_maps_url: 'https://goo.gl/maps/iT5YEiJZW9Zg2Lwt5?g_st=awb'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const getMeasurementDisplay = (size: string, unit: string, frontFeet?: string) => {
    if (unit === 'bigha') {
      return `${size} Bigha${frontFeet ? ` • ${frontFeet} Feet Front` : ''}`;
    }
    const converted = getConvertedMeasurement(size, unit);
    return `${converted.original.display} (${converted.converted.display})${frontFeet ? ` • ${frontFeet} Feet Front` : ''}`;
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi, I am interested in this A-1 property (120 Bigha). Can you provide more details?');
    window.open(`https://wa.me/9911288282?text=${message}`, '_blank');
  };

  const callNow = () => {
    window.open(`tel:+9911288282`, '_self');
  };

  const openGoogleMaps = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
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
                          src={property.images?.[0] || '/lovable-uploads/4dc0b007-41bd-4063-bbd1-d5fdfa4307aa.png'} 
                          alt={property.title}
                          className="w-full h-80 lg:h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-lg font-bold">
                          {property.serial_number}
                        </Badge>
                        <Badge className="absolute top-4 right-4 bg-green-500 text-white font-bold">
                          VERIFIED
                        </Badge>
                        {property.google_maps_url && (
                          <Button
                            size="sm"
                            className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700"
                            onClick={() => openGoogleMaps(property.google_maps_url)}
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Map View
                          </Button>
                        )}
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
                              <span className="text-sm font-medium">4.9</span>
                              <span className="text-xs text-muted-foreground">(Premium Location)</span>
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
                            <span className="text-sm">{property.area}, {property.city}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Maximize className="h-4 w-4" />
                            <span className="text-sm">
                              {getMeasurementDisplay(property.size, property.unit, property.front_feet)}
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

          {/* Navigation Buttons - Only show if multiple properties */}
          {properties.length > 1 && (
            <>
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
            </>
          )}

          {/* Dots Navigation - Only show if multiple properties */}
          {properties.length > 1 && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertySlider;
