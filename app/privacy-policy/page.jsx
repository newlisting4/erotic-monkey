import FooterPageLayout from "../components/FooterPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <FooterPageLayout title="Privacy Policy">
      <p>
        At Eroticmonkey, we respect your privacy and are committed to protecting your personal information.
      </p>
      <p>
        This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit or use our website.
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Information We Collect</h2>
      <p className="font-semibold text-gray-800">We may collect the following information:</p>
      
      <div className="space-y-4 pl-4 border-l-2 border-gray-100">
        <div>
          <p className="font-bold text-gray-800">Personal Information</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Account information</li>
            <li>Communication preferences</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-gray-800">Technical Information</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Website usage information</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-gray-800">Communications</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Customer support messages</li>
            <li>Feedback submissions</li>
            <li>Reports and inquiries</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">How We Use Information</h2>
      <p className="font-semibold text-gray-800">We may use collected information to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide website functionality</li>
        <li>Manage user accounts</li>
        <li>Improve website performance</li>
        <li>Respond to inquiries</li>
        <li>Monitor security and fraud prevention</li>
        <li>Enforce our terms and policies</li>
        <li>Comply with legal obligations</li>
        <li>Conduct analytics and research</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Cookies and Tracking Technologies</h2>
      <p className="font-semibold text-gray-800">Eroticmonkey may use cookies and similar technologies to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Remember user preferences</li>
        <li>Improve website performance</li>
        <li>Analyze website traffic</li>
        <li>Enhance user experience</li>
        <li>Maintain account security</li>
      </ul>
      <p>
        Users may adjust browser settings to refuse cookies; however, certain website features may not function properly.
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Information Sharing</h2>
      <p className="font-semibold text-gray-800">We may share information:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>With service providers who assist website operations</li>
        <li>To comply with legal obligations</li>
        <li>To protect our rights and security</li>
        <li>During business transfers or restructuring</li>
        <li>With authorities when required by applicable law</li>
      </ul>
      <p>
        We do not sell personal information to third parties.
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Data Security</h2>
      <p>
        Eroticmonkey implement reasonable administrative, technical, and organizational safeguards designed to protect information from unauthorized access, disclosure, alteration, or destruction.
      </p>
      <p>
        However, no method of electronic storage or internet transmission is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Third-Party Links</h2>
      <p>
        Eroticmonkey may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites.
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Changes to This Policy</h2>
      <p>
        Eroticmonkeys reserve the right to modify this Privacy Policy at any time. Updated versions will be posted on this page along with the revised effective date.
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Contact</h2>
      <p>
        If you have questions regarding this Privacy Policy, please contact us at: <a href="mailto:newlisting4@gmail.com" className="text-[#08c] hover:underline">newlisting4@gmail.com</a>
      </p>

      <p className="text-xs text-gray-500 pt-4">
        Effective Date: July 7, 2026
      </p>
    </FooterPageLayout>
  );
}
