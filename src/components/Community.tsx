
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users, Send } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with thousands of property investors, get exclusive deals, and stay updated with market trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Community */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp Community</h3>
              <p className="text-gray-600 mb-6">
                Join our WhatsApp group for instant property updates, exclusive deals, 
                and direct communication with our experts.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>5,000+ Active Members</span>
                </div>
                <div className="text-sm text-gray-500">Daily Property Updates</div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Join WhatsApp Community
              </Button>
            </CardContent>
          </Card>

          {/* Telegram Community */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Send className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Telegram Channel</h3>
              <p className="text-gray-600 mb-6">
                Follow our Telegram channel for market analysis, investment tips, 
                and premium property announcements.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>3,500+ Subscribers</span>
                </div>
                <div className="text-sm text-gray-500">Weekly Market Reports</div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Join Telegram Channel
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Trust Indicators */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us On</h3>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Facebook', followers: '10K+', color: 'bg-blue-600' },
              { name: 'Instagram', followers: '8K+', color: 'bg-pink-600' },
              { name: 'YouTube', followers: '5K+', color: 'bg-red-600' },
              { name: 'LinkedIn', followers: '3K+', color: 'bg-blue-800' }
            ].map((social, index) => (
              <div key={index} className="text-center">
                <div className={`${social.color} text-white px-4 py-2 rounded-lg font-semibold mb-2`}>
                  {social.followers}
                </div>
                <div className="text-sm text-gray-600">{social.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
