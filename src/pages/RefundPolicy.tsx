
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
                  This refund policy outlines the terms and conditions for refunds related to our services and ensures transparency in all transactions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Fees Refund Policy</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-600">
                  <li><strong>Property Listing Fees:</strong> Platform listing fees are non-refundable once the property is successfully listed on our platform</li>
                  <li><strong>Premium Listing Services:</strong> Premium listing upgrades and featured property placements are refundable within 48 hours of purchase if the service has not been activated</li>
                  <li><strong>Consultation Services:</strong> Property consultation fees are refundable if the scheduled consultation does not take place due to our inability to provide the service</li>
                  <li><strong>Documentation Services:</strong> Legal documentation service fees are refundable if we fail to deliver the promised documentation within the agreed timeline</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Property Transaction Refunds</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For property transactions facilitated through our platform, the following refund policies apply:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-600">
                  <li><strong>Token Money:</strong> Token money paid to secure a property is refundable if legal documentation issues are discovered during due diligence</li>
                  <li><strong>Advance Payments:</strong> Any advance payments made are subject to mutual agreement between buyer and seller as per the sale agreement</li>
                  <li><strong>Booking Amount:</strong> Booking amounts are refundable if the property does not match the description provided or if there are discrepancies in legal documentation</li>
                  <li><strong>Platform Facilitator Role:</strong> We act as facilitators and follow standard real estate transaction norms as per RERA guidelines</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Refund Eligibility Criteria</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-700">Eligible for Refund:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Service not delivered as promised</li>
                    <li>Property misrepresentation or false information</li>
                    <li>Legal documentation issues discovered</li>
                    <li>Cancellation within specified cooling-off period</li>
                    <li>Technical errors in payment processing</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium text-gray-700">Not Eligible for Refund:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Change of mind after service completion</li>
                    <li>Buyer's inability to complete property purchase</li>
                    <li>Market price fluctuations</li>
                    <li>Completed consultation sessions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Refund Process & Timeline</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To request a refund, please follow these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-gray-600">
                  <li>Contact our customer support team within the specified time frame for your service type</li>
                  <li>Provide complete transaction details, invoice/receipt number, and detailed reason for refund request</li>
                  <li>Submit any supporting documentation that validates your refund claim</li>
                  <li>Our team will review your request within 2-3 business days</li>
                  <li>Upon approval, refunds will be processed within 7-15 business days</li>
                  <li>Refunds will be credited to the original payment method used for the transaction</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Processing Fees & Charges</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Processing fees and gateway charges are non-refundable</li>
                  <li>Bank transfer charges, if any, will be deducted from the refund amount</li>
                  <li>Currency conversion charges (for international transactions) are non-refundable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Dispute Resolution</h2>
                <p className="text-gray-600 leading-relaxed">
                  In case of any disputes regarding refunds, we encourage customers to first contact our customer support team. 
                  If the issue remains unresolved, customers may approach the appropriate consumer forums or legal authorities 
                  as per Indian Consumer Protection Act, 2019.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    For refund queries and support, please contact us at:
                    <br /><br />
                    <strong>Email:</strong> refunds@90acre.com | support@90acre.com
                    <br />
                    <strong>Phone:</strong> +91 9911288282
                    <br />
                    <strong>Business Hours:</strong> Monday to Saturday, 9:00 AM to 7:00 PM (IST)
                    <br />
                    <strong>Address:</strong> 90acre.com Customer Support, India
                  </p>
                </div>
              </section>

              <section>
                <p className="text-sm text-gray-500 mt-8 p-4 bg-gray-50 rounded-lg">
                  <strong>Last Updated:</strong> January 2024<br />
                  This refund policy is subject to change without prior notice. Please check this page regularly for updates.
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
