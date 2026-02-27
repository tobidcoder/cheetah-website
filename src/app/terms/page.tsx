export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#052315", paddingTop: "120px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
        <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: "24px", color: "#b2d93b" }}>
          Terms of Service
        </h1>
        <p style={{ color: "rgba(253,253,253,0.5)", marginBottom: "48px", fontSize: "14px" }}>
          Last Updated: February 27, 2026
        </p>

        <div className="legal-content" style={{ color: "rgba(253,253,253,0.8)", lineHeight: 1.8, fontSize: "16px" }}>
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Cheetah POS platform and website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>2. Use of License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Cheetah&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>3. Service Description</h2>
            <p>
              Cheetah provides an AI-powered inventory and point-of-sale platform. We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>4. Subscription and Payments</h2>
            <p>
              Certain features of the Service are provided on a subscription basis. You agree to pay all fees associated with your subscription plan. Cheetah reserves the right to change subscription fees upon notice.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>5. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>6. Limitation of Liability</h2>
            <p>
              In no event shall Cheetah or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cheetah&apos;s website or platform.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fdfdfd", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:legal@usecheetah.com" style={{ color: "#b2d93b", textDecoration: "none" }}>legal@usecheetah.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
