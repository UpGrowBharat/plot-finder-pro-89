import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Phone, MessageCircle } from 'lucide-react';

const PropertyConsultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Property <span className="text-primary">Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert guidance on property investment, valuation, and market trends from our experienced consultants.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
                <p className="text-muted-foreground">Comprehensive market research and price analysis for informed decisions.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Investment Planning</h3>
                <p className="text-muted-foreground">Strategic investment planning based on your budget and goals.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Legal Guidance</h3>
                <p className="text-muted-foreground">Expert legal advice on property documentation and compliance.</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultation Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Book Free Consultation</CardTitle>
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
                  <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Plot</SelectItem>
                      <SelectItem value="commercial">Commercial Plot</SelectItem>
                      <SelectItem value="agricultural">Agricultural Land</SelectItem>
                      <SelectItem value="industrial">Industrial Plot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                      <SelectItem value="10-25">₹10-25 Lakhs</SelectItem>
                      <SelectItem value="25-50">₹25-50 Lakhs</SelectItem>
                      <SelectItem value="50+">₹50+ Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="flex gap-4">
                  <Button variant="hero" className="flex-1">
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="px-6"
                    onClick={() => window.open('tel:+91 9911288282', '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Expert Info */}
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-2">Expert Consultant</h3>
                  <p className="text-primary-foreground/90 mb-4">Gaurav Aggarwal</p>
                  <p className="text-primary-foreground/80 text-sm mb-6">
                    15+ years experience in real estate consultation
                  </p>
                  <Button 
                    variant="secondary" 
                    onClick={() => window.open('tel:+91 9911288282', '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Direct Call
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Why Choose Our Consultation?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">Free initial consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">Detailed market analysis report</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">Personalized investment strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">Legal compliance guidance</span>
                    </li>
                  </ul>
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

export default PropertyConsultation;