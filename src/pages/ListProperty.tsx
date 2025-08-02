
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, MapPin, Home, DollarSign, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ListProperty = () => {
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    size: '',
    unit: '',
    state: '',
    city: '',
    area: '',
    pincode: '',
    address: '',
    price: '',
    negotiable: '',
    description: '',
    ownerName: '',
    phone: '',
    email: '',
    whatsapp: '',
    ownerType: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate property ID
    const propertyId = `PROP-${Date.now()}`;
    
    // Create property data
    const propertyData = {
      id: propertyId,
      serialNumber: `A-${Math.floor(Math.random() * 1000)}`,
      ...formData,
      images: uploadedFiles.map(file => URL.createObjectURL(file)),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    // Store in localStorage for demo (in real app, would save to database)
    const existingProperties = JSON.parse(localStorage.getItem('properties') || '[]');
    localStorage.setItem('properties', JSON.stringify([...existingProperties, propertyData]));

    toast({
      title: "Property Listed Successfully!",
      description: `Your property has been listed with ID: ${propertyId}`,
    });

    // Reset form
    setFormData({
      title: '',
      type: '',
      size: '',
      unit: '',
      state: '',
      city: '',
      area: '',
      pincode: '',
      address: '',
      price: '',
      negotiable: '',
      description: '',
      ownerName: '',
      phone: '',
      email: '',
      whatsapp: '',
      ownerType: ''
    });
    setUploadedFiles([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-20 text-white rounded-2xl mb-12">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">List Your Property</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Join thousands of property owners who trust 90acre.com to find the right buyers
              </p>
            </div>
          </section>

          {/* Listing Form */}
          <section className="pb-16">
            <Card className="shadow-hover">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Property Listing Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Property Title" 
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        required
                      />
                      <Select onValueChange={(value) => handleInputChange('type', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Plot</SelectItem>
                          <SelectItem value="commercial">Commercial Plot</SelectItem>
                          <SelectItem value="industrial">Industrial Plot</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input 
                        placeholder="Plot Size" 
                        value={formData.size}
                        onChange={(e) => handleInputChange('size', e.target.value)}
                        required
                      />
                      <Select onValueChange={(value) => handleInputChange('unit', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gaj">Gaj</SelectItem>
                          <SelectItem value="sqmeter">Sq. Meter</SelectItem>
                          <SelectItem value="acre">Acre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Location Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select onValueChange={(value) => handleInputChange('state', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="haryana">Haryana</SelectItem>
                          <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                          <SelectItem value="rajasthan">Rajasthan</SelectItem>
                          <SelectItem value="punjab">Punjab</SelectItem>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input 
                        placeholder="City" 
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="Sector/Area" 
                        value={formData.area}
                        onChange={(e) => handleInputChange('area', e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="Pin Code" 
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <Textarea 
                        placeholder="Complete Address" 
                        rows={3} 
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Price Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Price Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Expected Price (₹)" 
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        required
                      />
                      <Select onValueChange={(value) => handleInputChange('negotiable', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Price Negotiable?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Property Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Property Description</h3>
                    <Textarea 
                      placeholder="Describe your property, nearby facilities, and any special features..." 
                      rows={5} 
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                    />
                  </div>

                  {/* Images & Videos */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Images & Videos
                    </h3>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg mb-2">Upload Property Images & Videos</p>
                      <p className="text-muted-foreground mb-4">Drag & drop files here or click to browse</p>
                      <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button type="button" variant="outline" className="cursor-pointer">
                          Choose Files
                        </Button>
                      </label>
                    </div>
                    
                    {/* Display uploaded files */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Uploaded Files:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="relative border rounded-lg p-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm truncate">{file.name}</span>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile(index)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Owner/Agent Details */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Your Name" 
                        value={formData.ownerName}
                        onChange={(e) => handleInputChange('ownerName', e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="Phone Number" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="Email Address" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="WhatsApp Number" 
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      />
                      <Select onValueChange={(value) => handleInputChange('ownerType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="You are?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="owner">Property Owner</SelectItem>
                          <SelectItem value="agent">Real Estate Agent</SelectItem>
                          <SelectItem value="dealer">Property Dealer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button type="submit" variant="success" size="lg" className="px-12">
                      List My Property
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      By submitting, you agree to our Terms & Conditions and Privacy Policy
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ListProperty;
