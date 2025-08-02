
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Award, Target } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-success" />,
      title: "Pan India Presence",
      description: "We have properties across all major cities and towns in India"
    },
    {
      icon: <Users className="h-8 w-8 text-success" />,
      title: "Trusted Partners",
      description: "Working with verified agents and developers nationwide"
    },
    {
      icon: <Award className="h-8 w-8 text-success" />,
      title: "Quality Assurance",
      description: "All properties are verified with complete legal documentation"
    },
    {
      icon: <Target className="h-8 w-8 text-success" />,
      title: "Customer First",
      description: "Our priority is to find the perfect land investment for you"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About 90acre.com</h1>
            <p className="text-xl max-w-3xl mx-auto">
              India's premier platform for land investments, connecting buyers with verified properties across the nation
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded with a vision to revolutionize the land investment market in India, 90acre.com has grown to become the most trusted platform for land buyers and sellers. We understand that land is not just an investment, but a foundation for dreams.
                </p>
                <p className="text-lg text-muted-foreground">
                  With our extensive network of verified agents and comprehensive property database, we've helped thousands of customers find their perfect piece of land across India.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400" 
                  alt="About 90acre" 
                  className="rounded-xl shadow-hover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose 90acre.com?</h2>
              <p className="text-xl text-muted-foreground">
                We're committed to making land investment simple, safe, and profitable
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-hover transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-success mb-2">1000+</div>
                <div className="text-muted-foreground">Properties Listed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">50+</div>
                <div className="text-muted-foreground">Cities Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">100+</div>
                <div className="text-muted-foreground">Trusted Agents</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
