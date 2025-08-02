
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('images');

  const images = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300',
    'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300'
  ];

  const videos = [
    { thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300', title: 'Property Tour - Gurgaon' },
    { thumbnail: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300', title: 'Investment Guide' },
    { thumbnail: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300', title: 'Legal Documentation' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery & Videos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our properties through high-quality images and detailed video tours
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <Button
              variant={activeTab === 'images' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('images')}
              className={`px-6 py-2 rounded-md ${activeTab === 'images' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Images
            </Button>
            <Button
              variant={activeTab === 'videos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2 rounded-md ${activeTab === 'videos' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            >
              <Play className="h-4 w-4 mr-2" />
              Videos
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        {activeTab === 'images' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image}
                      alt={`Property ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Video Grid */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                      <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-200">
                        <Play className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{video.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
