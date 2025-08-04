
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Maximize, Phone, MessageCircle, Star, Filter, Search, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getConvertedMeasurement } from '@/utils/unitConverter';
import AnimatedBackground3D from '@/components/AnimatedBackground3D';

const Properties = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Updated properties with new A-1 data
    const defaultProperties = [
      {
        id: '1',
        serialNumber: 'A-1',
        title: 'Premium Land Plot - 120 Bigha',
        images: [
          '/lovable-uploads/4dc0b007-41bd-4063-bbd1-d5fdfa4307aa.png',
          '/lovable-uploads/a7cb60ba-b410-491f-979f-4f8dfed44d36.png'
        ],
        price: '₹5,000/- per yard',
        priceNumeric: 5000,
        city: 'Bharat Petroleum Area',
        area: 'BB Singh Petrol Pump',
        state: 'India',
        size: '120',
        unit: 'bigha',
        frontFeet: '500',
        type: 'residential',
        ownerName: 'Gaurav Aggarwal',
        phone: '+91 9911288282',
        whatsapp: '+91 9911288282',
        email: 'contact@90acre.com',
        description: 'Premium land plot with excellent connectivity and clear documentation. Located near Bharat Petroleum with 500 feet front facing.',
        rating: 4.9,
        reviews: 245,
        features: ['120 Bigha Area', '500 Feet Front', 'Clear Title', 'Prime Location', 'Road Connectivity'],
        status: 'approved',
        googleMapsUrl: 'https://goo.gl/maps/iT5YEiJZW9Zg2Lwt5?g_st=awb'
      }
    ];

    setProperties(defaultProperties);
    setFilteredProperties(defaultProperties);
  }, []);

  useEffect(() => {
    let filtered = [...properties];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.state.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply type filter
    if (filterType !== 'all') {
      filtered = filtered.filter(property => property.type === filterType);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.priceNumeric - b.priceNumeric;
        case 'price-high':
          return b.priceNumeric - a.priceNumeric;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
          return b.id.localeCompare(a.id);
        default:
          return 0;
      }
    });
    
    setFilteredProperties(filtered);
  }, [properties, filterType, sortBy, searchTerm]);

  const getMeasurementDisplay = (size: string, unit: string, frontFeet?: string) => {
    if (unit === 'bigha') {
      return `${size} Bigha${frontFeet ? ` • ${frontFeet} Feet Front` : ''}`;
    }
    const converted = getConvertedMeasurement(size, unit);
    return `${converted.original.display} (${converted.converted.display})${frontFeet ? ` • ${frontFeet} Feet Front` : ''}`;
  };
  
  const openWhatsApp = (phone: string) => {
    const message = encodeURIComponent('Hi, I am interested in this A-1 property (120 Bigha). Can you provide more details?');
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const openGoogleMaps = (url: string) => {
    window.open(url, '_blank');
  };

  const getPlotTypeLabel = (type: string) => {
    switch(type) {
      case 'residential': return 'Residential Plot';
      case 'commercial': return 'Commercial Plot';
      case 'industrial': return 'Industrial Plot';
      default: return 'Plot';
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'residential': return 'bg-green-600';
      case 'commercial': return 'bg-blue-600';
      case 'industrial': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Enhanced Hero Section */}
          <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white rounded-2xl mb-12 animate-fade-in relative overflow-hidden">
            <AnimatedBackground3D />
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Our Premium Properties</h1>
              <p className="text-xl max-w-2xl mx-auto mb-8">
                Discover verified land plots across India with complete documentation and legal clearance
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>DTCP Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Clear Titles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Ready for Construction</span>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Filters with Search */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 animate-fade-in">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location, city, or area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex items-center gap-4">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Types</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                  >
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
                
                <div className="text-sm text-gray-600">
                  Showing {filteredProperties.length} of {properties.length} properties
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Properties Grid */}
          <section className="pb-16">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12 animate-fade-in">
                <p className="text-gray-500 text-lg mb-4">No properties match your criteria.</p>
                <Link to="/list-property">
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                    List Your Property
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property, index) => (
                  <Card 
                    key={property.id} 
                    className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img 
                        src={property.images?.[0] || '/lovable-uploads/4dc0b007-41bd-4063-bbd1-d5fdfa4307aa.png'} 
                        alt={`Property ${property.serialNumber}`}
                        className="w-full h-64 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-green-600 text-white text-lg font-bold shadow-lg">
                        {property.serialNumber}
                      </Badge>
                      <Badge className={`absolute top-4 right-4 ${getTypeColor(property.type)} text-white shadow-lg`}>
                        {getPlotTypeLabel(property.type)}
                      </Badge>
                      {property.googleMapsUrl && (
                        <Button
                          size="sm"
                          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700"
                          onClick={() => openGoogleMaps(property.googleMapsUrl)}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Map
                        </Button>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{property.price}</h3>
                          </div>
                          {property.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{property.rating}</span>
                              <span className="text-xs text-gray-500">({property.reviews} reviews)</span>
                            </div>
                          )}
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Verified ✓
                        </Badge>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{property.title}</h4>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{property.area}, {property.city}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-600">
                          <Maximize className="h-4 w-4" />
                          <span className="text-sm">
                            {getMeasurementDisplay(property.size, property.unit, property.frontFeet)}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {property.description}
                      </p>

                      {/* Property Features */}
                      {property.features && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {property.features.slice(0, 3).map((feature: string, index: number) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {property.features.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{property.features.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Agent Details */}
                      <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-800">{property.ownerName}</h4>
                            <p className="text-xs text-gray-600">Property Consultant</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Contact</p>
                            <p className="text-xs font-medium text-gray-700">{property.phone}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="gap-1 flex-1 text-xs"
                            onClick={() => window.open(`tel:${property.phone}`, '_self')}
                          >
                            <Phone className="h-3 w-3" />
                            Call
                          </Button>
                          <Button 
                            size="sm" 
                            className="gap-1 flex-1 bg-green-600 hover:bg-green-700 text-xs"
                            onClick={() => openWhatsApp(property.phone)}
                          >
                            <MessageCircle className="h-3 w-3" />
                            WhatsApp
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                          onClick={() => openWhatsApp(property.phone)}
                        >
                          Show Interest
                        </Button>
                        <Link to={`/property/${property.id}`} className="block">
                          <Button variant="outline" size="sm" className="w-full border-gray-300 hover:bg-gray-50">
                            View Full Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
