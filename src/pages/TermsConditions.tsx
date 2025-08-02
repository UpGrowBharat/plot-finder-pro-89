
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing and using 90acre.com, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">Use License</h2>
              <p className="mb-6">
                Permission is granted to temporarily download one copy of the materials on 90acre.com's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">Property Listings</h2>
              <p className="mb-6">
                90acre.com acts as a platform connecting property buyers and sellers. We strive to ensure accuracy of all listings but:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>We do not guarantee the accuracy of property information</li>
                <li>All property transactions are between buyers and sellers/agents</li>
                <li>We recommend independent verification of all property details</li>
                <li>We are not responsible for any disputes arising from transactions</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">User Responsibilities</h2>
              <p className="mb-6">Users of our platform agree to:</p>
              <ul className="mb-6 list-disc pl-6">
                <li>Provide accurate and truthful information</li>
                <li>Use the platform for lawful purposes only</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in fraudulent activities</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">Disclaimer</h2>
              <p className="mb-6">
                The materials on 90acre.com's website are provided on an 'as is' basis. 90acre.com makes no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">Contact Information</h2>
              <p className="mb-6">
                For questions about these Terms and Conditions, contact us at:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Email: legal@90acre.com</li>
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

export default TermsConditions;
