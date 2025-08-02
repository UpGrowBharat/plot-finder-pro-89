
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { 
  Home, 
  Edit, 
  Trash2, 
  Eye, 
  Plus,
  MapPin,
  Maximize,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  ShoppingCart
} from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';

interface Property {
  id: string;
  serial_number: string;
  title: string;
  type: string;
  size: string;
  unit: string;
  city: string;
  area: string;
  state: string;
  price_text: string;
  status: 'pending' | 'approved' | 'rejected' | 'sold';
  views: number;
  images: string[] | null;
  created_at: string;
}

interface Inquiry {
  id: string;
  inquirer_name: string;
  inquirer_phone: string;
  inquirer_email: string | null;
  message: string | null;
  created_at: string;
  property_id: string;
  properties: {
    title: string;
    serial_number: string;
  };
}

const Dashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [properties, setProperties] = useState<Property[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserProperties();
      fetchInquiries();
    }
  }, [user]);

  const fetchUserProperties = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('property_inquiries')
        .select(`
          *,
          properties:property_id (
            title,
            serial_number
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error: any) {
      console.error('Error fetching inquiries:', error);
    }
  };

  const deleteProperty = async (propertyId: string) => {
    try {
      const { error } = await supabase
        .from('properties')
        .delete()
        .eq('id', propertyId);

      if (error) throw error;

      setProperties(prev => prev.filter(p => p.id !== propertyId));
      toast({
        title: "Property Deleted",
        description: "Your property has been deleted successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'approved':
        return <Badge variant="outline" className="text-green-600 border-green-600"><CheckCircle className="h-3 w-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="text-red-600 border-red-600"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      case 'sold':
        return <Badge variant="outline" className="text-blue-600 border-blue-600"><ShoppingCart className="h-3 w-3 mr-1" />Sold</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/list-property" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground">My Dashboard</h1>
              <p className="text-muted-foreground mt-2">Manage your properties and inquiries</p>
            </div>
            <Link to="/list-property">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add New Property
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="properties" className="space-y-8">
            <TabsList>
              <TabsTrigger value="properties">My Properties</TabsTrigger>
              <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            </TabsList>

            <TabsContent value="properties">
              {loading ? (
                <div className="text-center py-12">Loading properties...</div>
              ) : properties.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <Home className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Properties Listed</h3>
                    <p className="text-muted-foreground mb-6">Start by listing your first property</p>
                    <Link to="/list-property">
                      <Button>List Your Property</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property) => (
                    <Card key={property.id} className="overflow-hidden">
                      {property.images && property.images.length > 0 && (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={property.images[0]} 
                            alt={property.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg mb-2">{property.title}</CardTitle>
                            <Badge className="mb-2">{property.serial_number}</Badge>
                          </div>
                          {getStatusBadge(property.status)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{property.area}, {property.city}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Maximize className="h-4 w-4" />
                            <span>{property.size} {property.unit}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <DollarSign className="h-4 w-4" />
                            <span>{property.price_text}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Eye className="h-4 w-4" />
                            <span>{property.views} views</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Link to={`/property/${property.id}`} className="flex-1">
                            <Button variant="outline" size="sm" className="w-full">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </Link>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => {
                              // TODO: Implement edit functionality
                              toast({
                                title: "Coming Soon",
                                description: "Edit functionality will be available soon.",
                              });
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => deleteProperty(property.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="inquiries">
              {inquiries.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No Inquiries Yet</h3>
                    <p className="text-muted-foreground">When people show interest in your properties, you'll see their inquiries here</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <Card key={inquiry.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold">{inquiry.inquirer_name}</h4>
                            <p className="text-sm text-muted-foreground">
                              Interested in: {inquiry.properties.title} ({inquiry.properties.serial_number})
                            </p>
                          </div>
                          <Badge variant="outline">
                            {new Date(inquiry.created_at).toLocaleDateString()}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <span className="text-sm font-medium">Phone:</span>
                            <p className="text-sm">{inquiry.inquirer_phone}</p>
                          </div>
                          {inquiry.inquirer_email && (
                            <div>
                              <span className="text-sm font-medium">Email:</span>
                              <p className="text-sm">{inquiry.inquirer_email}</p>
                            </div>
                          )}
                        </div>
                        
                        {inquiry.message && (
                          <div className="mb-4">
                            <span className="text-sm font-medium">Message:</span>
                            <p className="text-sm mt-1 p-3 bg-muted rounded-lg">{inquiry.message}</p>
                          </div>
                        )}
                        
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            onClick={() => window.open(`tel:${inquiry.inquirer_phone}`, '_self')}
                          >
                            Call Now
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              const message = encodeURIComponent(`Hi ${inquiry.inquirer_name}, thank you for your interest in our property ${inquiry.properties.serial_number}. How can I help you?`);
                              window.open(`https://wa.me/${inquiry.inquirer_phone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
                            }}
                          >
                            WhatsApp
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
