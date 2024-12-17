import React from "react";
import HeadingWithLine from "../HeadingWithLine";

function Cookies() {
  return (
    <div className="relative bg-white min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Huvudinnehåll som startar vid col-start-2 */}
      <div className="relative grid grid-cols-12 gap-4">
        {/* Rubrik */}
        <div className="col-start-2 col-span-10">
        <div className="col-start-2 col-span-3">
          <HeadingWithLine text="Cookies" />
        </div>
        </div>

        {/* Intro paragraf */}
        <div className="col-start-2 col-span-10 bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
          <p className="text-black text-base sm:text-lg md:text-xl mb-6">
            This Cookies Policy explains how Cooksy uses cookies and similar tracking
            technologies on our website. By using our site, you agree to the use of
            cookies as described in this policy.
          </p>

          {/* Sektion 1 */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
              1. What Are Cookies?
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              Cookies are small files placed on your device that help us understand
              how you interact with our website. They are used to enhance your
              experience, remember your preferences, and track website usage.
            </p>
          </section>

          {/* Sektion 2 */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
              2. Types of Cookies We Use
            </h2>
            <ul className="list-disc list-inside text-black text-sm sm:text-base md:text-lg">
              <li>
                Essential Cookies: Necessary for the site to function correctly.
              </li>
              <li>
                Performance and Analytics Cookies: Collect information to improve site functionality.
              </li>
              <li>
                Functionality Cookies: Remember preferences and settings.
              </li>
              <li>
                Advertising and Marketing Cookies: Deliver ads relevant to your interests.
              </li>
            </ul>
          </section>

          {/* Sektion 3 */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
              3. Third-Party Cookies
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              We may share cookies with third-party providers, like Google Analytics,
              to analyze website usage.
            </p>
          </section>

          {/* Sektion 4 */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
              4. Managing Cookies
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              You can adjust your browser settings to refuse or delete cookies. Note
              that disabling cookies may affect your site experience.
            </p>
          </section>

          {/* Sektion 5 */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
              5. How Long Do Cookies Last?
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              Cookies can be "session" or "persistent." Session cookies expire when
              you close your browser, while persistent cookies remain on your device
              until you delete them.
            </p>
          </section>

          {/* Sektion 6 */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
              6. Updates to Our Cookies Policy
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg">
              We may update this policy from time to time. Check back for the latest
              updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;