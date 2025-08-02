
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, PieChart, Target, Phone, MessageCircle } from 'lucide-react';

const InvestmentAdvisory = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi, I need investment advisory services. Can you help me with property investment planning?');
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
            Investment <span className="text-primary">Advisory</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic investment guidance to maximize your returns in the real estate market with expert insights and personalized portfolio planning.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
                <p className="text-muted-foreground">In-depth market research and trend analysis for optimal investment timing.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Portfolio Planning</h3>
                <p className="text-muted-foreground">Diversified investment portfolio strategy based on your risk profile.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">ROI Optimization</h3>
                <p className="text-muted-foreground">Strategic guidance to maximize returns on your property investments.</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Investment Advisory Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Get Investment Advisory</CardTitle>
                <p className="text-muted-foreground">Fill out the form below to receive personalized investment guidance</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <Input placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <Input placeholder="Your phone number" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Investment Budget</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-25">₹10-25 Lakhs</SelectItem>
                      <SelectItem value="25-50">₹25-50 Lakhs</SelectItem>
                      <SelectItem value="50-100">₹50-100 Lakhs</SelectItem>
                      <SelectItem value="100+">₹1+ Crore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Investment Horizon</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select investment timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short term (1-3 years)</SelectItem>
                      <SelectItem value="medium">Medium term (3-7 years)</SelectItem>
                      <SelectItem value="long">Long term (7+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Risk Tolerance</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select risk preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Conservative (Low Risk)</SelectItem>
                      <SelectItem value="moderate">Moderate Risk</SelectItem>
                      <SelectItem value="high">Aggressive (High Risk)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Investment Goals</label>
                  <Textarea 
                    placeholder="Describe your investment objectives and goals..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="flex gap-4">
                  <Button variant="hero" className="flex-1">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Get Advisory
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
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Advisory Services Info */}
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-2">Investment Expert</h3>
                  <p className="text-primary-foreground/90 mb-2">Gaurav Aggarwal</p>
                  <p className="text-primary-foreground/80 text-sm mb-6">
                    Certified Financial Planner with 15+ years in real estate investment
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      variant="secondary" 
                      onClick={callNow}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Direct Call
                    </Button>
                    <Button 
                      variant="secondary" 
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Advisory Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                      <div>
                        <h4 className="font-semibold">Portfolio Assessment</h4>
                        <p className="text-sm text-muted-foreground">Evaluate your current financial position and goals</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                      <div>
                        <h4 className="font-semibold">Market Analysis</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive market research and opportunity identification</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                      <div>
                        <h4 className="font-semibold">Strategy Development</h4>
                        <p className="text-sm text-muted-foreground">Create personalized investment strategy</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                      <div>
                        <h4 className="font-semibold">Implementation Support</h4>
                        <p className="text-sm text-muted-foreground">Ongoing support and portfolio monitoring</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-center">Free Advisory Includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Market trend analysis report
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Property valuation guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Investment strategy recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Risk assessment and mitigation
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

export default InvestmentAdvisory;
