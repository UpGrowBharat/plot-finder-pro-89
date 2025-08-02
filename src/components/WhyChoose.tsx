
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileText, MapPin, Users, Zap, Award } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'Every property is thoroughly verified with complete legal documentation and clear titles.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: FileText,
      title: 'Legal Documentation',
      description: 'Complete legal paperwork handled by our expert team to ensure hassle-free transactions.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Properties in strategic locations with high growth potential and excellent connectivity.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our experienced agents provide personalized guidance throughout your investment journey.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Zap,
      title: 'Quick Process',
      description: 'Streamlined process to help you find and secure your ideal property investment quickly.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Award,
      title: 'Trusted Brand',
      description: 'Years of experience and thousands of satisfied customers make us the trusted choice.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-green-100 text-green-700 hover:bg-green-200">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-gradient">90acre.com</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing you with the best land investment opportunities 
            with complete transparency and professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="modern-card group hover:shadow-glow transition-all duration-500" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glassmorphism p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Verified Properties', color: 'text-green-600' },
              { number: '50+', label: 'Cities Covered', color: 'text-blue-600' },
              { number: '1000+', label: 'Happy Customers', color: 'text-purple-600' },
              { number: '100%', label: 'Legal Clarity', color: 'text-orange-600' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
