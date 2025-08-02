
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-8 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  At 90acre.com, we understand that property investments are significant decisions. 
                  This refund policy outlines the terms and conditions for refunds related to our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Fees</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Platform listing fees are non-refundable once the property is listed</li>
                  <li>Premium listing upgrades are refundable within 48 hours of purchase</li>
                  <li>Consultation fees may be refundable if the service is not provided as agreed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Property Transactions</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For property transactions facilitated through our platform:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Token money is refundable if legal documentation issues are found</li>
                  <li>Advance payments are subject to mutual agreement between buyer and seller</li>
                  <li>We act as facilitators and follow standard real estate transaction norms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Refund Process</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To request a refund:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>Contact our customer support within the specified time frame</li>
                  <li>Provide transaction details and reason for refund request</li>
                  <li>Refunds will be processed within 7-15 business days</li>
                  <li>Refunds will be credited to the original payment method</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  For refund queries, please contact us at:
                  <br />
                  Email: support@90acre.com
                  <br />
                  Phone: +91 9911288282
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RefundPolicy;
