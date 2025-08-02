
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Maximize, Phone, MessageCircle, User, Mail, Calendar, CheckCircle, Star } from 'lucide-react';
import { getConvertedMeasurement } from '@/utils/unitConverter';
import AnimatedBackground3D from '@/components/AnimatedBackground3D';

const PropertyDetails = () => {
  const { id } = useParams();

  // Enhanced property data with complete details
  const property = {
    id: '1',
    serialNumber: 'A-1',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600'
    ],
    price: '₹25,00,000',
    originalPrice: '₹28,00,000',
    location: 'Sector 89, Gurgaon, Haryana',
    plotSize: '100',
    unit: 'gaj',
    plotType: 'Premium Residential Plot',
    dimensions: {
      length: '30',
      lengthUnit: 'feet',
      width: '28',
      widthUnit: 'feet',
      depth: 'Ground Level',
      facing: 'East Facing'
    },
    agentName: 'Gaurav Aggarwal',
    agentId: 'AGT-001',
    agentPhone: '+91 9911288282',
    agentEmail: 'contact@90acre.com',
    rating: 4.8,
    totalReviews: 156,
    description: 'Premium residential plot in rapidly developing Sector 89, Gurgaon. This prime location offers excellent connectivity to major business hubs, educational institutions, and healthcare facilities. Perfect for building your dream home with outstanding future appreciation potential. The area is witnessing rapid infrastructure development with metro connectivity planned.',
    keyHighlights: [
      'Prime location in developing sector',
      'Metro connectivity planned (2025)',
      'Surrounded by premium projects',
      'Clear title with all approvals',
      'Ready for immediate construction',
      'High appreciation potential'
    ],
    amenities: [
      'Metro Station - 2km (Under Construction)',
      'Top Schools - 1km (DPS, Amity)', 
      'Medanta Hospital - 1.5km',
      'Ambience Mall - 800m',
      'Main 60ft Road Access',
      'Electricity Connection Available',
      'Water Supply & Sewerage',
      'Street Lighting & Drainage'
    ],
    legalDetails: {
      approvalStatus: 'DTCP Approved & Licensed',
      registryType: 'Freehold - Clear Title',
      propertyId: 'PROP-GGN-001',
      surveyNumber: 'SUR-89-15',
      khataNumber: 'KH-456789',
      completionCertificate: 'Available',
      environmentalClearance: 'Obtained',
      fireNoc: 'Approved'
    },
    nearbyLocations: [
      { name: 'Cyber City Gurgaon', distance: '5km', type: 'Business Hub', time: '15 mins' },
      { name: 'IFFCO Chowk Metro', distance: '3km', type: 'Transport', time: '8 mins' },
      { name: 'Ambience Mall', distance: '800m', type: 'Shopping', time: '5 mins' },
      { name: 'Fortis Hospital', distance: '2km', type: 'Healthcare', time: '7 mins' },
      { name: 'DPS School', distance: '1km', type: 'Education', time: '5 mins' },
      { name: 'Golf Course', distance: '3km', type: 'Recreation', time: '10 mins' }
    ],
    investment: {
      expectedAppreciation: '15-20% annually',
      rentalYield: 'N/A (Land)',
      investmentType: 'Long-term Capital Appreciation',
      marketTrend: 'Bullish'
    }
  };

  const getMeasurementDisplay = (size: string, unit: string) => {
    const converted = getConvertedMeasurement(size, unit);
    return `${converted.original.display} (${converted.converted.display})`;
  };
  const openWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <AnimatedBackground3D />
      <Header />
      
      <main className="pt-8 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Property Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-green-600 text-white text-lg font-bold px-4 py-2">
                    {property.serialNumber}
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1">
                    {property.plotType}
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-1">
                    Verified ✓
                  </Badge>
                  <Badge className="bg-orange-500 text-white animate-pulse px-3 py-1">
                    DEMO
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{property.rating}</span>
                    <span className="text-xs text-gray-500">({property.totalReviews} reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{property.price}</h1>
                  {property.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">{property.originalPrice}</span>
                  )}
                  <Badge className="bg-red-100 text-red-700">Save ₹3,00,000</Badge>
                </div>
                <p className="text-gray-600 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {property.location}
                </p>
              </div>
              <div className="flex gap-3">
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open(`tel:${property.agentPhone}`, '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Agent
                </Button>
                <Button 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => openWhatsApp(property.agentPhone)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Enhanced Image Gallery */}
              <Card className="shadow-sm animate-fade-in">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                    <div className="md:col-span-2">
                      <img 
                        src={property.images[0]} 
                        alt={`Property ${property.serialNumber}`}
                        className="w-full h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {property.images.slice(1, 3).map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`Property ${property.serialNumber} - ${index + 2}`}
                          className="w-full h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Highlights */}
              <Card className="shadow-sm animate-fade-in">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.keyHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-800">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Property Information */}
              <Card className="shadow-sm animate-fade-in">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4 text-lg">Basic Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Maximize className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">
                            <strong>Plot Size:</strong> {getMeasurementDisplay(property.plotSize, property.unit)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Detailed Dimensions:</p>
                          <ul className="text-sm text-gray-600 space-y-1 pl-4">
                            <li><strong>Length:</strong> {getMeasurementDisplay(property.dimensions.length, property.dimensions.lengthUnit)}</li>
                            <li><strong>Width:</strong> {getMeasurementDisplay(property.dimensions.width, property.dimensions.widthUnit)}</li>
                            <li><strong>Depth:</strong> {property.dimensions.depth}</li>
                            <li><strong>Facing:</strong> {property.dimensions.facing}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4 text-lg">Legal Documentation</h3>
                      <div className="space-y-2">
                        {Object.entries(property.legalDetails).map(([key, value]) => (
                          <p key={key} className="text-sm">
                            <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> 
                            <span className="text-gray-600 ml-1">{value}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-800 mb-4 text-lg">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{property.description}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-800 mb-4 text-lg">Amenities & Infrastructure</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Investment Information */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-800 mb-4 text-lg">Investment Insights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(property.investment).map(([key, value]) => (
                        <div key={key} className="bg-blue-50 rounded-lg p-4">
                          <p className="font-medium text-blue-900 capitalize mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-blue-700 text-sm">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4 text-lg">Nearby Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.nearbyLocations.map((location, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">{location.name}</h4>
                              <p className="text-sm text-gray-500">{location.type}</p>
                              <p className="text-xs text-gray-400 mt-1">{location.time}</p>
                            </div>
                            <span className="text-sm font-medium text-green-600">{location.distance}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Agent Details and Contact Form */}
            <div className="space-y-8">
              {/* Enhanced Agent Details */}
              <Card className="shadow-sm animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Consultant</h3>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{property.agentName}</h4>
                        <p className="text-sm text-gray-600">ID: {property.agentId}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">Verified Agent</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{property.agentPhone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{property.agentEmail}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={() => window.open(`tel:${property.agentPhone}`, '_self')}
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 border-green-600 text-green-600"
                        onClick={() => openWhatsApp(property.agentPhone)}
                      >
                        <MessageCircle className="h-3 w-3 mr-1" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Interest Form */}
              <Card className="shadow-sm animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Express Interest</h3>
                  
                  <form className="space-y-4">
                    <Input placeholder="Your Full Name" className="focus:ring-green-500" />
                    <Input placeholder="Phone Number" type="tel" className="focus:ring-green-500" />
                    <Input placeholder="Email Address" type="email" className="focus:ring-green-500" />
                    <select className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500">
                      <option>I'm interested in buying</option>
                      <option>I need more information</option>
                      <option>I want to schedule a site visit</option>
                      <option>I need financing assistance</option>
                    </select>
                    <Textarea placeholder="Additional questions or requirements..." rows={4} className="focus:ring-green-500" />
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                      Submit Interest
                    </Button>
                  </form>
                  
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    By submitting, you agree to our Terms & Conditions. We'll contact you within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
