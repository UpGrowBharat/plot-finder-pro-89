
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your privacy is important to us. Read how we protect your data.
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Information We Collect</h2>
              <p className="mb-6">
                At 90acre.com, we collect information to provide better services to our users. We collect information in the following ways:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Information you give us directly through forms and registrations</li>
                <li>Information we get from your use of our services</li>
                <li>Information from third-party sources when legally permissible</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">How We Use Information</h2>
              <p className="mb-6">
                We use the information we collect from all of our services for the following purposes:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>To send you technical notices and support messages</li>
                <li>To communicate with you about properties, services, and events</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">Information Sharing</h2>
              <p className="mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>With your consent</li>
                <li>For legal reasons</li>
                <li>To protect rights and safety</li>
                <li>With service providers under confidentiality agreements</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">Data Security</h2>
              <p className="mb-6">
                We implement appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information and data stored on our site.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Email: privacy@90acre.com</li>
                <li>Phone: +91 9911288282</li>
                <li>Address: Sector 44, Gurgaon, Haryana, India</li>
              </ul>

              <p className="text-sm text-muted-foreground mt-12">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
