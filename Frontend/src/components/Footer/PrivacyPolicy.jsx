import React from "react";
import HeadingWithLine from "../HeadingWithLine";

function PrivacyPolicy() {
  return (
    <div className="relative bg-white min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Innehållet placerat i grid med col-start-2 */}
      <div className="relative grid grid-cols-12 gap-4">
        {/* Rubriken */}
        <div className="col-start-2 col-span-3">
          <HeadingWithLine text="Privacy Policy" />
        </div>

        {/* Infomation om webbplatsen förhållnings sätt till användarnas privata information */}
        <div className="col-start-2 col-span-10 bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Sektion 1 */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
              1. Information We Collect
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              When you register for an account, interact with the community, or contact us, you may provide:
            </p>
            <ul className="list-disc list-inside text-black text-sm sm:text-base md:text-lg mt-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Profile picture (optional)</li>
            </ul>
            <p className="text-black text-sm sm:text-base md:text-lg mt-4">
              <strong>Usage Data:</strong> We collect data on how you interact with the site, including:
            </p>
            <ul className="list-disc list-inside text-black text-sm sm:text-base md:text-lg">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Date and time of access</li>
            </ul>
          </section>

          {/* Sektion 2 */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-black">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-black text-sm sm:text-base md:text-lg mt-2">
              <li>To provide, operate and maintain our Site</li>
              <li>To personalize your experience on Cooksy</li>
              <li>To analyze user behavior and preferences for improvement</li>
              <li>To communicate with you (customer support, updates, etc.)</li>
              <li>To verify identity and manage accounts</li>
              <li>To ensure security and prevent fraud</li>
              <li>To process contributions such as comments, reviews, or recipe uploads.</li>
            </ul>
          </section>

          {/* Sektion 3 */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-black">
              3. Sharing Your Information
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              With Third-Party Service Providers we may use external providers for data hosting, analytics, and customer support.
              They only access information needed for their services and are bound by confidentiality.
            </p>
            <p className="text-black text-sm sm:text-base md:text-lg mt-2">
              Legal Requirements: We may disclose your information to:
            </p>
            <ul className="list-disc list-inside text-black text-sm sm:text-base md:text-lg">
              <li>Comply with legal obligations</li>
              <li>Protect our rights or property</li>
              <li>Prevent fraud or illegal activities</li>
              <li>Ensure the safety of users and the public</li>
            </ul>
            <p className="text-black text-sm sm:text-base md:text-lg mt-4">
              Aggregated or Anonymized Data: We may share aggregated or anonymized information (that does not identify you)
              for research, analytics, and other purposes.
            </p>
          </section>

          {/* Sektion 4 */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-black">
              4. Your Choices and Rights
            </h2>
            <ul className="list-disc list-inside text-black text-sm sm:text-base md:text-lg mt-2">
              <li>Access, Correction, and Deletion: You may access, correct, or delete your data.</li>
              <li>Communication Preferences: Opt-out of marketing emails by following unsubscribe instructions.</li>
              <li>Cookie Management: Adjust your browser settings to refuse cookies.</li>
            </ul>
          </section>

          {/*Sektion 5*/}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-black">
              5. Security of Your Information
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              We use security measures to protect personal data from unauthorized access or loss.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-black">
              6. Children’s Privacy
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              Our Site is not intended for children under 13. If discovered, such data will be deleted.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-black">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              We may update this policy as needed. Significant changes will be posted with an updated date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;