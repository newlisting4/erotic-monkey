import FooterPageLayout from "../components/FooterPageLayout";

export default function ContactPage() {
  return (
    <FooterPageLayout title="Contact Us">
      <p className="font-semibold text-lg text-gray-800">Thank you for visiting Eroticmonkey.</p>
      
      <p>
        We value our users and strive to provide prompt assistance whenever possible. If you have questions, concerns, feedback, or require support regarding your account or use of our website, please contact us using the information below.
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Customer Support</h2>
      <p>
        Email: <a href="mailto:newlisting4@gmail.com" className="text-[#08c] hover:underline">newlisting4@gmail.com</a>
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">General Inquiries</h2>
      <p>
        Email: <a href="mailto:newlisting4@gmail.com" className="text-[#08c] hover:underline">newlisting4@gmail.com</a>
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Business Inquiries</h2>
      <p>
        Email: <a href="mailto:newlisting4@gmail.com" className="text-[#08c] hover:underline">newlisting4@gmail.com</a>
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Response Time</h2>
      <p>
        Our support team aims to respond to inquiries within 24 to 72 business hours. Response times may vary depending on the nature and complexity of the request.
      </p>

      <h2 className="text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">Reporting Violations</h2>
      <p>
        If you believe content on our platform violates our Terms of Use, infringes intellectual property rights, involves unauthorized use of information, or otherwise breaches our policies, please contact us immediately and provide the following information:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Your full name</li>
        <li>Contact information</li>
        <li>Description of the issue</li>
        <li>Relevant URLs or screenshots</li>
        <li>Any supporting documentation</li>
      </ul>

      <p>
        Eroticmonkey review all reports in good faith and reserve the right to remove content, suspend accounts, or take other actions as deemed appropriate.
      </p>

      <p className="font-semibold text-gray-800">
        Eroticmonkey feedback helps us maintain a safe, respectful, and professional platform for all users.
      </p>
    </FooterPageLayout>
  );
}
