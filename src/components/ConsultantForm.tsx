
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserCheck } from 'lucide-react';

const ConsultantForm = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get Expert Consultation</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our experienced consultants will help you make the right investment decision. 
              Get personalized advice based on your budget and requirements.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-success" />
                <span>Expert Market Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-success" />
                <span>Legal Documentation Support</span>
              </div>
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-success" />
                <span>Investment Planning Guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-success" />
                <span>Post-Purchase Support</span>
              </div>
            </div>
          </div>

          <Card className="shadow-hover">
            <CardHeader>
              <CardTitle>Book Free Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Phone Number" />
              <Input placeholder="Email Address" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type Interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Plot</SelectItem>
                  <SelectItem value="commercial">Commercial Plot</SelectItem>
                  <SelectItem value="industrial">Industrial Plot</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5-10">₹5-10 Lakh</SelectItem>
                  <SelectItem value="10-25">₹10-25 Lakh</SelectItem>
                  <SelectItem value="25-50">₹25-50 Lakh</SelectItem>
                  <SelectItem value="50-100">₹50 Lakh - ₹1 Cr</SelectItem>
                  <SelectItem value="100+">₹1 Cr+</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Your Requirements & Questions" rows={3} />
              <Button variant="success" size="lg" className="w-full">
                Book Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConsultantForm;
