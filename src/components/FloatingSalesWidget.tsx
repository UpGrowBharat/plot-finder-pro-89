
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, X, User } from 'lucide-react';

const FloatingSalesWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phone = '+9911288282';
  const email = 'contact@90acre.com';
  
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi, I am interested in your properties. Can you help me?');
    window.open(`https://wa.me/9911288282?text=${message}`, '_blank');
  };

  const callAgent = () => {
    window.open(`tel:+9911288282`, '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <Card className="mb-4 w-72 bg-white shadow-xl border-2 border-gray-200 mobile-optimized">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 mobile-optimized">Need Help?</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="h-6 w-6 p-0 text-gray-600 hover:text-gray-800 mobile-optimized"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mobile-optimized">Gaurav Aggarwal</p>
                <p className="text-sm text-gray-700 mobile-optimized">Property Consultant</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button
                onClick={callAgent}
                className="w-full bg-green-600 hover:bg-green-700 text-white mobile-optimized"
                size="sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={openWhatsApp}
                variant="outline"
                className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 mobile-optimized"
                size="sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-full h-14 w-14 bg-green-600 hover:bg-green-700 text-white shadow-xl mobile-optimized"
        size="icon"
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default FloatingSalesWidget;
