
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, User, MapPin, IdCard, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CreateAgent = () => {
  const { toast } = useToast();
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [licenseDoc, setLicenseDoc] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    dateOfBirth: '',
    experience: '',
    specialization: '',
    companyName: '',
    licenseNumber: '',
    primaryState: '',
    primaryCity: '',
    serviceAreas: '',
    about: '',
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProfilePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePhoto(event.target.files[0]);
    }
  };

  const handleLicenseUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLicenseDoc(event.target.files[0]);
    }
  };

  const generateAgentId = () => {
    return `AGT-${Date.now()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Please accept Terms & Conditions",
        description: "You must agree to the terms to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Generate agent ID
    const agentId = generateAgentId();
    
    // Create agent data
    const agentData = {
      id: agentId,
      ...formData,
      profilePhoto: profilePhoto ? URL.createObjectURL(profilePhoto) : null,
      licenseDocument: licenseDoc ? URL.createObjectURL(licenseDoc) : null,
      createdAt: new Date().toISOString(),
      status: 'pending',
      verified: false
    };

    // Store in localStorage for demo (in real app, would save to database)
    const existingAgents = JSON.parse(localStorage.getItem('agents') || '[]');
    localStorage.setItem('agents', JSON.stringify([...existingAgents, agentData]));

    toast({
      title: "Agent Registration Successful!",
      description: `Your agent ID is: ${agentId}. We will review your application within 24-48 hours.`,
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      whatsapp: '',
      dateOfBirth: '',
      experience: '',
      specialization: '',
      companyName: '',
      licenseNumber: '',
      primaryState: '',
      primaryCity: '',
      serviceAreas: '',
      about: '',
      agreeToTerms: false
    });
    setProfilePhoto(null);
    setLicenseDoc(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white rounded-2xl mb-12">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Become an Agent</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Join our network of trusted real estate professionals and grow your business with 90acre.com
              </p>
            </div>
          </section>

          {/* Agent Registration Form */}
          <section>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Agent Registration Form</CardTitle>
                <p className="text-center text-gray-600 mt-2">Fill in your details to become a verified agent</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Full Name *" 
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                      />
                      <Input placeholder="Agent ID (Auto-generated)" disabled />
                      <Input 
                        placeholder="Email Address *" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="Phone Number *" 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="WhatsApp Number" 
                        type="tel" 
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      />
                      <Input 
                        placeholder="Date of Birth" 
                        type="date" 
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Professional Details */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <IdCard className="h-5 w-5" />
                      Professional Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Years of Experience" 
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        required
                      />
                      <Select onValueChange={(value) => handleInputChange('specialization', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Specialization" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Properties</SelectItem>
                          <SelectItem value="commercial">Commercial Properties</SelectItem>
                          <SelectItem value="industrial">Industrial Properties</SelectItem>
                          <SelectItem value="all">All Property Types</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input 
                        placeholder="Company/Agency Name" 
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                      />
                      <Input 
                        placeholder="License Number" 
                        value={formData.licenseNumber}
                        onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Location Details */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Service Areas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select onValueChange={(value) => handleInputChange('primaryState', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Primary State" />
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
                        placeholder="Primary City" 
                        value={formData.primaryCity}
                        onChange={(e) => handleInputChange('primaryCity', e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="Service Areas (Comma separated)" 
                        className="md:col-span-2" 
                        value={formData.serviceAreas}
                        onChange={(e) => handleInputChange('serviceAreas', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Documents Upload */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Documents & Photo
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Upload Profile Photo</p>
                          {profilePhoto && (
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm truncate">{profilePhoto.name}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setProfilePhoto(null)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePhotoUpload}
                            className="hidden"
                            id="profile-upload"
                          />
                          <label htmlFor="profile-upload">
                            <Button type="button" variant="outline" size="sm" className="cursor-pointer">
                              Choose File
                            </Button>
                          </label>
                        </div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Upload License Document</p>
                          {licenseDoc && (
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm truncate">{licenseDoc.name}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setLicenseDoc(null)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            onChange={handleLicenseUpload}
                            className="hidden"
                            id="license-upload"
                          />
                          <label htmlFor="license-upload">
                            <Button type="button" variant="outline" size="sm" className="cursor-pointer">
                              Choose File
                            </Button>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">About Yourself</h3>
                    <Textarea 
                      placeholder="Write a brief description about your experience, specialties, and what makes you a trusted agent..." 
                      rows={4} 
                      value={formData.about}
                      onChange={(e) => handleInputChange('about', e.target.value)}
                      required
                    />
                  </div>

                  {/* Terms */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        className="mt-1" 
                        checked={formData.agreeToTerms}
                        onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                        required
                      />
                      <div className="text-sm text-gray-600">
                        <p>I agree to the <span className="text-green-600 font-medium">Terms & Conditions</span> and <span className="text-green-600 font-medium">Privacy Policy</span>. I understand that all information provided will be verified and false information may lead to account suspension.</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 text-lg">
                      Register as Agent
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      Your application will be reviewed within 24-48 hours
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

export default CreateAgent;
