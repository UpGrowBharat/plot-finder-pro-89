
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Disclaimer</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Important information about using our services
            </p>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">General Disclaimer</h2>
              <p className="mb-6">
                The information on 90acre.com is provided on an "as is" basis. To the fullest extent permitted by law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">Property Information</h2>
              <p className="mb-6">
                90acre.com is a platform that facilitates connections between property buyers, sellers, and agents. We:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Do not own, sell, or rent any properties listed on our platform</li>
                <li>Are not responsible for the accuracy of property information</li>
                <li>Do not guarantee the availability of listed properties</li>
                <li>Are not liable for any losses arising from property transactions</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">Third-Party Content</h2>
              <p className="mb-6">
                Our website may contain links to third-party websites and content provided by third parties. We:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Do not endorse or approve third-party content</li>
                <li>Are not responsible for third-party website content</li>
                <li>Do not guarantee the accuracy of external links</li>
                <li>Are not liable for any damages from third-party interactions</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">Investment Advice</h2>
              <p className="mb-6">
                The content on 90acre.com is for informational purposes only and should not be considered as:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Professional investment advice</li>
                <li>Legal or financial consultation</li>
                <li>Guaranteed investment returns</li>
                <li>Property valuation services</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">Limitation of Liability</h2>
              <p className="mb-6">
                In no event shall 90acre.com be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Use or inability to use our services</li>
                <li>Property transactions conducted through our platform</li>
                <li>Any errors or omissions in content</li>
                <li>Any unauthorized access to our servers</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">Professional Advice</h2>
              <p className="mb-6">
                We strongly recommend that users:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Conduct independent property verification</li>
                <li>Consult with legal professionals before transactions</li>
                <li>Seek professional financial advice for investments</li>
                <li>Verify all documentation independently</li>
              </ul>

              <p className="text-sm text-muted-foreground mt-12">
                This disclaimer is subject to change without notice. Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
