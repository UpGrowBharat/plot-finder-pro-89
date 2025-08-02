
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Maximize, Phone, MessageCircle, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getConvertedMeasurement } from '@/utils/unitConverter';
import AnimatedBackground3D from '@/components/AnimatedBackground3D';

const Properties = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');

  useEffect(() => {
    // Enhanced default properties with complete details
    const defaultProperties = [
      {
        id: '1',
        serialNumber: 'A-1',
        title: 'Premium Residential Plot in Gurgaon',
        images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600'],
        price: '₹25,00,000',
        originalPrice: '₹28,00,000',
        priceNumeric: 2500000,
        city: 'Gurgaon',
        area: 'Sector 89',
        state: 'Haryana',
        size: '100',
        unit: 'gaj',
        type: 'residential',
        ownerName: 'Gaurav Aggarwal',
        phone: '+91 9911288282',
        whatsapp: '+91 9911288282',
        email: 'contact@90acre.com',
        description: 'Prime residential plot in rapidly developing sector with excellent connectivity to major business hubs, educational institutions, and healthcare facilities.',
        rating: 4.8,
        reviews: 156,
        features: ['DTCP Approved', 'Clear Title', 'Ready for Construction', 'Metro Nearby'],
        status: 'approved'
      },
      {
        id: '2',
        serialNumber: 'A-2',
        title: 'Commercial Plot in Noida Extension',
        images: ['https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600'],
        price: '₹45,00,000',
        originalPrice: '₹50,00,000',
        priceNumeric: 4500000,
        city: 'Noida',
        area: 'Sector 150',
        state: 'Uttar Pradesh',
        size: '200',
        unit: 'gaj',
        type: 'commercial',
        ownerName: 'Gaurav Aggarwal',
        phone: '+91 9911288282',
        whatsapp: '+91 9911288282',
        email: 'contact@90acre.com',
        description: 'Excellent commercial plot with high appreciation potential, metro connectivity and surrounded by premium developments.',
        rating: 4.6,
        reviews: 89,
        features: ['Commercial License', 'Main Road Facing', 'High Footfall', 'Metro Connected'],
        status: 'approved'
      },
      {
        id: '3',
        serialNumber: 'A-3',
        title: 'Industrial Plot in Faridabad',
        images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600'],
        price: '₹80,00,000',
        originalPrice: '₹85,00,000',
        priceNumeric: 8000000,
        city: 'Faridabad',
        area: 'Sector 18',
        state: 'Haryana',
        size: '500',
        unit: 'gaj',
        type: 'industrial',
        ownerName: 'Gaurav Aggarwal',
        phone: '+91 9911288282',
        whatsapp: '+91 9911288282',
        email: 'contact@90acre.com',
        description: 'Large industrial plot with power backup, logistics connectivity perfect for manufacturing or warehouse setup.',
        rating: 4.7,
        reviews: 67,
        features: ['Industrial License', 'Power Backup', 'Loading Bay', 'Security'],
        status: 'approved'
      },
      {
        id: '4',
        serialNumber: 'A-4',
        title: 'Residential Plot in Jaipur',
        images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600'],
        price: '₹35,00,000',
        priceNumeric: 3500000,
        city: 'Jaipur',
        area: 'Malviya Nagar',
        state: 'Rajasthan',
        size: '150',
        unit: 'gaj',
        type: 'residential',
        ownerName: 'Gaurav Aggarwal',
        phone: '+91 9911288282',
        whatsapp: '+91 9911288282',
        email: 'contact@90acre.com',
        description: 'Well-located residential plot in established area with excellent social infrastructure and connectivity.',
        rating: 4.5,
        reviews: 134,
        features: ['Established Area', 'Good Connectivity', 'Schools Nearby', 'Clear Title'],
        status: 'approved'
      }
    ];

    // Load properties from localStorage and merge with defaults
    const storedProperties = JSON.parse(localStorage.getItem('properties') || '[]');
    const allProperties = [...defaultProperties, ...storedProperties.filter((p: any) => p.status === 'approved')];
    
    setProperties(allProperties);
    setFilteredProperties(allProperties);
  }, []);

  useEffect(() => {
    let filtered = [...properties];
    
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
  }, [properties, filterType, sortBy]);

  const getMeasurementDisplay = (size: string, unit: string) => {
    const converted = getConvertedMeasurement(size, unit);
    return `${converted.original.display} (${converted.converted.display})`;
  };
  
  const openWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}`, '_blank');
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

          {/* Enhanced Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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

          {/* Enhanced Properties Grid */}
          <section className="pb-16">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12 animate-fade-in">
                <p className="text-gray-500 text-lg mb-4">No properties match your criteria.</p>
                <Link to="/list-property">
                  <Button className="bg-green-600 hover:bg-green-700">
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
                        src={property.images?.[0] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600'} 
                        alt={`Property ${property.serialNumber}`}
                        className="w-full h-64 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-green-600 text-white text-lg font-bold shadow-lg">
                        {property.serialNumber}
                      </Badge>
                      <Badge className="absolute top-4 left-20 bg-orange-500 text-white font-bold animate-pulse">
                        DEMO
                      </Badge>
                      <Badge className={`absolute top-4 right-4 ${getTypeColor(property.type)} text-white shadow-lg`}>
                        {getPlotTypeLabel(property.type)}
                      </Badge>
                      {property.originalPrice && (
                        <Badge className="absolute bottom-4 left-4 bg-red-500 text-white">
                          Save {(parseInt(property.originalPrice.replace(/[^\d]/g, '')) - parseInt(property.price.replace(/[^\d]/g, ''))).toLocaleString('en-IN')}
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{property.price}</h3>
                            {property.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">{property.originalPrice}</span>
                            )}
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
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{property.area}, {property.city}, {property.state}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-600">
                          <Maximize className="h-4 w-4" />
                          <span className="text-sm">
                            {getMeasurementDisplay(property.size, property.unit)}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {property.description || property.title}
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
