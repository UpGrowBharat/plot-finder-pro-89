
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Shield, CheckCircle, Phone, MessageCircle } from 'lucide-react';

const LegalDocumentation = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi, I need help with legal documentation for property. Can you assist me?');
    window.open(`https://wa.me/9911288282?text=${message}`, '_blank');
  };

  const callNow = () => {
    window.open(`tel:+9911288282`, '_self');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Legal <span className="text-primary">Documentation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete legal documentation services for property transactions with expert guidance and compliance assurance.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent>
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Document Verification</h3>
                <p className="text-muted-foreground">Thorough verification of all property documents and titles.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Legal Compliance</h3>
                <p className="text-muted-foreground">Ensuring all transactions comply with local and state regulations.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Registration Support</h3>
                <p className="text-muted-foreground">Complete assistance with property registration and stamp duty.</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Documentation Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Legal Documentation Request</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input placeholder="Your phone number" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Required</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="verification">Document Verification</SelectItem>
                      <SelectItem value="registration">Property Registration</SelectItem>
                      <SelectItem value="title-search">Title Search</SelectItem>
                      <SelectItem value="legal-opinion">Legal Opinion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Property Location</label>
                  <Input placeholder="Property location/address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Details</label>
                  <Textarea 
                    placeholder="Provide details about your legal documentation requirements..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="flex gap-4">
                  <Button variant="hero" className="flex-1">
                    Submit Request
                  </Button>
                  <Button 
                    variant="outline" 
                    className="px-6"
                    onClick={callNow}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Services Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Our Legal Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Title Verification</h4>
                        <p className="text-sm text-muted-foreground">Complete verification of property titles and ownership documents</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Legal Due Diligence</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive legal due diligence for property transactions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Registration Assistance</h4>
                        <p className="text-sm text-muted-foreground">End-to-end support for property registration process</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Contract Drafting</h4>
                        <p className="text-sm text-muted-foreground">Professional drafting of sale agreements and contracts</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Legal Expert</h3>
                  <p className="text-primary-foreground/90 mb-4">Advocate Rajesh Kumar</p>
                  <p className="text-primary-foreground/80 text-sm mb-6">
                    Specialized in property law with 20+ years experience
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button 
                      variant="secondary" 
                      onClick={callNow}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Consult Now
                    </Button>
                    <Button 
                      variant="secondary" 
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalDocumentation;
