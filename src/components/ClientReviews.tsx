
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ClientReviews = () => {
  const reviews = [
    {
      name: "Rajesh Sharma",
      location: "Gurgaon",
      rating: 5,
      review: "Excellent service! Found my dream plot within 2 weeks. The team was very helpful throughout the process and all documentation was perfectly handled.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Gupta",
      location: "Noida",
      rating: 5,
      review: "90acre.com made land buying so simple! Great platform with verified properties and transparent pricing. Highly recommend for anyone looking for land investments.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Kumar",
      location: "Jaipur",
      rating: 5,
      review: "Professional team with excellent market knowledge. They helped me find a commercial plot at the best price with all legal clearances. Very satisfied!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from satisfied customers who found their perfect land investments through us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-hover hover:shadow-lg transition-shadow duration-300 border-0">
              <CardContent className="p-4 sm:p-6">
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-success mb-4" />
                
                <div className="flex items-center gap-1 mb-4 star-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-green-500 text-green-500" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">
                  "{review.review}"
                </p>

                <div className="flex items-center gap-3">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">{review.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{review.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
