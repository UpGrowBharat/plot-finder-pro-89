import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, Factory, ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: <Home className="h-12 w-12" />,
      title: 'Residential Plots',
      description: 'Perfect for building your dream home in prime residential areas',
      features: ['Residential Zoning', 'Utilities Available', 'Peaceful Environment', 'Good Connectivity'],
      color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: 'Commercial Plots',
      description: 'Ideal for businesses, offices, and commercial establishments',
      features: ['Commercial Zoning', 'High Footfall Areas', 'Business Districts', 'Investment Potential'],
      color: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900',
      iconColor: 'text-green-600'
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: 'Industrial Plots',
      description: 'Designed for manufacturing, warehouses, and industrial use',
      features: ['Industrial Zoning', 'Power Supply', 'Transport Access', 'Large Areas'],
      color: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Land Categories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our diverse range of plots tailored to meet your specific needs and investment goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className={`${category.color} p-8 text-center`}>
                  <div className={`${category.iconColor} mb-4 flex justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="default" 
                    className="group-hover:bg-primary/90 transition-colors duration-300 gap-2"
                  >
                    Explore Plots
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;