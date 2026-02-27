export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#052315", paddingTop: "120px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
        <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: "24px", color: "#b2d93b" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "rgba(253,253,253,0.5)", marginBottom: "48px", fontSize: "14px" }}>
          Last Updated: February 27, 2026
        </p>

        <div className="legal-content" style={{ color: "rgba(253,253,253,0.8)", lineHeight: 1.8, fontSize: "16px" }}>
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>1. Introduction</h2>
            <p>
              At Cheetah, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website or use our Services (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "12px", listStyleType: "disc" }}>
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address, telephone numbers, and branch addresses.</li>
              <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li><strong>Business Data:</strong> includes inventory levels, sales data, pricing structures, and staff performance metrics.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "12px", listStyleType: "disc" }}>
              <li>To provide the Cheetah POS and inventory management services.</li>
              <li>To manage your account and provide customer support.</li>
              <li>To improve our AI-powered forecasting and analytics engine (using anonymized data).</li>
              <li>To comply with legal or regulatory obligations.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures, including AES-256 encryption, to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@usecheetah.com" style={{ color: "#b2d93b", textDecoration: "none" }}>privacy@usecheetah.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
