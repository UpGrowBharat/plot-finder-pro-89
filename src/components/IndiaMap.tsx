
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Phone, MessageCircle } from 'lucide-react';
import { getConvertedMeasurement } from '@/utils/unitConverter';

interface PropertyLocation {
  id: string;
  serialNumber: string;
  city: string;
  state: string;
  coordinates: { x: number; y: number };
  propertyCount: number;
  properties: Array<{
    id: string;
    serialNumber: string;
    location: string;
    price: string;
    plotSize: string;
    unit?: string;
    plotType: string;
    agentName: string;
    agentPhone: string;
    description: string;
    amenities: string[];
    legalStatus: string;
  }>;
}

const IndiaMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<PropertyLocation | null>(null);

  const propertyLocations: PropertyLocation[] = [
    {
      id: '1',
      serialNumber: 'LOC-1',
      city: 'Gurgaon',
      state: 'Haryana',
      coordinates: { x: 35, y: 25 },
      propertyCount: 15,
      properties: [
        {
          id: '1',
          serialNumber: 'A-1',
          location: 'Sector 89, Gurgaon',
          price: '₹25,00,000',
          plotSize: '100',
          unit: 'gaj',
          plotType: 'Residential',
          agentName: 'Gaurav Aggarwal',
          agentPhone: '+91 9911288282',
          description: 'Prime residential plot in developing sector with excellent connectivity and modern amenities. Perfect location for building your dream home with high appreciation potential.',
          amenities: ['Metro Connectivity', 'Schools & Colleges', 'Shopping Malls', 'Hospitals', 'Parks & Recreation'],
          legalStatus: 'DTCP Approved'
        },
        {
          id: '2',
          serialNumber: 'A-2',
          location: 'Sector 95, Gurgaon',
          price: '₹30,00,000',
          plotSize: '120',
          unit: 'gaj',
          plotType: 'Residential',
          agentName: 'Gaurav Aggarwal',
          agentPhone: '+91 9911288282',
          description: 'Spacious residential plot in premium location with all utilities connected. Ideal for luxury villa construction with excellent future growth prospects.',
          amenities: ['Gated Community', 'Security', 'Underground Utilities', 'Wide Roads', 'Green Belt'],
          legalStatus: 'Freehold Title'
        }
      ]
    },
    {
      id: '2',
      serialNumber: 'LOC-2',
      city: 'Noida',
      state: 'Uttar Pradesh',
      coordinates: { x: 38, y: 26 },
      propertyCount: 12,
      properties: [
        {
          id: '3',
          serialNumber: 'A-3',
          location: 'Sector 150, Noida',
          price: '₹45,00,000',
          plotSize: '200',
          unit: 'gaj',
          plotType: 'Commercial',
          agentName: 'Gaurav Aggarwal',
          agentPhone: '+91 9911288282',
          description: 'Strategic commercial plot on main road with heavy footfall. Excellent investment opportunity for retail or office space development.',
          amenities: ['Main Road Facing', 'High Visibility', 'Public Transport', 'Commercial License', 'Parking Space'],
          legalStatus: 'Commercial Registry'
        }
      ]
    },
    {
      id: '3',
      serialNumber: 'LOC-3',
      city: 'Faridabad',
      state: 'Haryana',
      coordinates: { x: 36, y: 27 },
      propertyCount: 8,
      properties: [
        {
          id: '4',
          serialNumber: 'A-4',
          location: 'Sector 18, Faridabad',
          price: '₹80,00,000',
          plotSize: '500',
          unit: 'gaj',
          plotType: 'Industrial',
          agentName: 'Gaurav Aggarwal',
          agentPhone: '+91 9911288282',
          description: 'Large industrial plot with power backup and logistics connectivity. Perfect for manufacturing or warehouse setup with all clearances.',
          amenities: ['Heavy Load Capacity', 'Power Backup', 'Logistics Access', 'Loading Bay', 'Security'],
          legalStatus: 'Industrial License'
        }
      ]
    },
    {
      id: '4',
      serialNumber: 'LOC-4',
      city: 'Jaipur',
      state: 'Rajasthan',
      coordinates: { x: 25, y: 35 },
      propertyCount: 20,
      properties: [
        {
          id: '5',
          serialNumber: 'A-5',
          location: 'Malviya Nagar, Jaipur',
          price: '₹35,00,000',
          plotSize: '150',
          unit: 'gaj',
          plotType: 'Residential',
          agentName: 'Gaurav Aggarwal',
          agentPhone: '+91 9911288282',
          description: 'Well-located residential plot in established area with excellent social infrastructure and connectivity to major landmarks.',
          amenities: ['Established Area', 'Good Connectivity', 'Schools Nearby', 'Markets', 'Public Transport'],
          legalStatus: 'Clear Title'
        }
      ]
    },
    {
      id: '5',
      serialNumber: 'LOC-5',
      city: 'Mumbai',
      state: 'Maharashtra',
      coordinates: { x: 20, y: 55 },
      propertyCount: 25,
      properties: [
        {
          id: '6',
          serialNumber: 'A-6',
          location: 'Andheri, Mumbai',
          price: '₹1,20,00,000',
          plotSize: '800',
          unit: 'sqft',
          plotType: 'Commercial',
          agentName: 'Gaurav Aggarwal',
          agentPhone: '+91 9911288282',
          description: 'Premium commercial space in Mumbai\'s business district with metro connectivity and high rental yield potential.',
          amenities: ['Metro Station', 'Business District', 'High Footfall', 'Parking Available', 'Modern Infrastructure'],
          legalStatus: 'Ready for Development'
        }
      ]
    }
  ];

  const openWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Our Properties Across India</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Discover verified land plots in prime locations across major cities in India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Satellite India Map */}
          <div className="relative">
            <div 
              className="relative bg-gradient-to-br from-blue-900 to-green-900 rounded-2xl p-8 overflow-hidden"
              style={{ paddingBottom: '120%' }}
            >
              {/* Satellite-style background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-500 to-yellow-400"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                   radial-gradient(circle at 60% 70%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                   radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px, 80px 80px, 100px 100px'
                }}></div>
              </div>
              
              <svg
                viewBox="0 0 100 120"
                className="absolute inset-0 w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                {/* India outline with satellite styling */}
                <path
                  d="M20 20 L80 25 L85 40 L75 60 L70 80 L60 100 L40 105 L25 95 L15 75 L20 50 Z"
                  fill="rgba(34, 197, 94, 0.8)"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="drop-shadow-lg"
                />
                
                {/* State boundaries */}
                <path
                  d="M35 26 L45 28 L50 35 L45 40 L35 38 Z"
                  fill="rgba(34, 197, 94, 0.6)"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
                
                {propertyLocations.map((location) => (
                  <g key={location.id}>
                    <circle
                      cx={location.coordinates.x}
                      cy={location.coordinates.y}
                      r="5"
                      fill="#ef4444"
                      className="cursor-pointer hover:fill-red-600 transition-all duration-300 animate-pulse hover:animate-none"
                      onClick={() => setSelectedLocation(location)}
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(239, 68, 68, 0.5))' }}
                    />
                    <circle
                      cx={location.coordinates.x}
                      cy={location.coordinates.y}
                      r="8"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                      className="opacity-50 animate-ping"
                    />
                    <text
                      x={location.coordinates.x}
                      y={location.coordinates.y - 8}
                      fontSize="4"
                      fill="#ffffff"
                      textAnchor="middle"
                      className="font-bold pointer-events-none drop-shadow"
                    >
                      {location.propertyCount}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                Click on red dots to view properties in that location
              </p>
            </div>
          </div>

          {/* Property Details Panel */}
          <div className="lg:sticky lg:top-8">
            {selectedLocation ? (
              <Card className="shadow-lg border-0 animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedLocation.city}, {selectedLocation.state}
                      </h3>
                      <p className="text-gray-600 flex items-center gap-2 mt-2">
                        <MapPin className="h-4 w-4" />
                        {selectedLocation.propertyCount} Properties Available
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {selectedLocation.serialNumber}
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    {selectedLocation.properties.length > 0 ? (
                      selectedLocation.properties.map((property) => (
                        <div 
                          key={property.id}
                          className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-6 hover:from-gray-100 hover:to-green-100 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 text-lg">
                                {property.serialNumber} - {property.location}
                              </h4>
                               <p className="text-sm text-gray-600 mt-1">
                                 {property.unit ? (() => {
                                   const converted = getConvertedMeasurement(property.plotSize, property.unit);
                                   return `${converted.original.display} (${converted.converted.display})`;
                                 })() : property.plotSize} • {property.plotType}
                               </p>
                              <p className="font-bold text-green-600 text-xl mt-2">{property.price}</p>
                            </div>
                             <div className="flex gap-2">
                               <Badge className="bg-green-600 text-white">
                                 Verified
                               </Badge>
                               <Badge className="bg-orange-500 text-white animate-pulse">
                                 DEMO
                               </Badge>
                             </div>
                          </div>
                          
                          <div className="mb-4">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {property.description}
                            </p>
                          </div>

                          <div className="mb-4">
                            <h5 className="font-medium text-gray-800 mb-2">Key Features:</h5>
                            <div className="grid grid-cols-2 gap-2">
                              {property.amenities.slice(0, 4).map((amenity, index) => (
                                <div key={index} className="flex items-center text-xs text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  {amenity}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="border-t pt-4 mt-4">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <p className="text-sm font-medium text-gray-800">
                                  {property.agentName}
                                </p>
                                <p className="text-xs text-gray-600">{property.legalStatus}</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="flex-1 text-xs"
                                onClick={() => window.open(`tel:${property.agentPhone}`, '_self')}
                              >
                                <Phone className="h-3 w-3 mr-1" />
                                Call
                              </Button>
                              <Button 
                                size="sm" 
                                className="flex-1 bg-green-600 hover:bg-green-700 text-xs"
                                onClick={() => openWhatsApp(property.agentPhone)}
                              >
                                <MessageCircle className="h-3 w-3 mr-1" />
                                WhatsApp
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <Home className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">
                          Properties in this location will be available soon
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <MapPin className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Select a Location
                  </h3>
                  <p className="text-gray-600">
                    Click on any red dot on the map to view available properties in that location
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMap;
