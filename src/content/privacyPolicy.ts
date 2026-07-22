export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
  paragraphsAfter?: string[];
};

export const PRIVACY_LAST_UPDATED = "July 22, 2026";

export const PRIVACY_INTRO =
  "At Coin Detective, your privacy matters. This Privacy Policy explains what information we collect when you use our Android app and website, how we use it, and the choices you have. By using Coin Detective, you agree to the practices described here.";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      "Coin Detective is an AI-powered coin identification and collection app for Android (package: com.mitprogrammer.coindetective). This policy applies to the mobile application, related websites, and services operated by Coin Detective (“we,” “us,” or “our”).",
      "By creating an account, scanning coins, or otherwise using our services, you consent to the data practices described in this policy.",
    ],
  },
  {
    id: "what-we-collect",
    title: "2. Information We Collect",
    paragraphs: [
      "We collect only what is needed to operate accounts, run AI identification, manage subscriptions, and improve the product:",
    ],
    bullets: [
      "Account data: email address, display name, and authentication credentials managed through Firebase Authentication.",
      "Scan content: photos you capture or upload for coin identification, plus resulting labels, rarity indicators, estimated values, and related metadata.",
      "Scan history & alerts: saved collection entries, notification preferences, and in-app alert records you choose to keep.",
      "Subscription & billing: plan type (Free, Basic, or Premium), entitlement status, and payment references. Card payments are processed by Stripe; we do not store full credit card numbers on our servers.",
      "Device & usage (limited): basic technical information needed for app stability, crash diagnostics, remote configuration, and scan-limit enforcement.",
      "Support correspondence: messages you send to support@coindetective.app so we can help resolve issues.",
      "Advertising (Free plan): if you use the Free plan, third-party ad networks such as Google AdMob may collect device advertising identifiers and related signals under their own policies.",
    ],
  },
  {
    id: "what-we-dont",
    title: "3. What We Do Not Sell",
    paragraphs: [
      "We do not sell your personal information. We do not sell your coin photos or scan history to data brokers.",
      "Coin photos and identification results are used to provide the service you requested—not for unrelated marketing profiles.",
    ],
  },
  {
    id: "how-we-use",
    title: "4. How We Use Information",
    paragraphs: ["The information we collect is used to:"],
    numbered: [
      "Create and secure your account, and reset passwords.",
      "Process coin scans with AI models and return identification, rarity, history, and estimated market value ranges.",
      "Enforce plan limits (for example, Free plan daily scan allowances) and deliver paid features.",
      "Process subscription payments and renewals through Stripe.",
      "Send essential service notices, including scan alerts and account-related messages you enable.",
      "Improve model quality, reliability, and product performance using aggregated or de-identified insights where appropriate.",
      "Show ads on the Free plan and measure ad delivery through AdMob where applicable.",
      "Respond to support requests and protect against abuse or fraud.",
    ],
  },
  {
    id: "ai-photos",
    title: "5. Coin Photos & AI Processing",
    paragraphs: [
      "When you scan a coin, the image is transmitted to our processing systems (including cloud functions and storage where configured) so the AI can analyze visible details.",
      "Scan results are estimates only. They are not professional numismatic appraisals. See our Terms of Service and in-app Legal Disclaimer for important limitations on accuracy and market values.",
      "You should avoid uploading images that contain sensitive personal information unrelated to the coin (for example, documents with ID numbers).",
    ],
  },
  {
    id: "third-parties",
    title: "6. Third-Party Services",
    paragraphs: [
      "We use trusted providers to operate Coin Detective. Their processing is governed by their own privacy policies as well as our agreements with them:",
    ],
    bullets: [
      "Firebase (Google): authentication, database/storage, remote configuration, and related backend services.",
      "Stripe: payment processing for Basic and Premium subscriptions.",
      "Google AdMob: advertising on the Free plan.",
      "Google Play: distribution and related store account activity.",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies and Website Tracking",
    paragraphs: [
      "Our marketing website may use essential functional cookies or local storage needed for basic site operation. We do not use third-party advertising pixels on the marketing site to follow you across the web.",
      "You can disable cookies in your browser settings; some site features may then work less smoothly.",
    ],
  },
  {
    id: "retention",
    title: "8. Data Retention",
    paragraphs: [
      "We retain account data and scan history while your account remains active so you can access your collection and alerts.",
      "If you request account deletion, we will remove or de-identify personal data from active systems within a reasonable period (typically within 30 days), except where we must retain limited records for legal, tax, dispute, or fraud-prevention reasons.",
      "Payment records retained by Stripe follow Stripe’s retention practices and applicable financial regulations.",
    ],
  },
  {
    id: "security",
    title: "9. Data Security",
    paragraphs: [
      "We use industry-standard safeguards appropriate to an app of this type, including encrypted transport (HTTPS/TLS), authenticated API access, and provider-side security controls from Firebase and Stripe.",
      "No method of transmission or storage is 100% secure. You are responsible for keeping your login credentials confidential.",
    ],
  },
  {
    id: "children",
    title: "10. Children’s Privacy",
    paragraphs: [
      "Coin Detective is not directed to children under 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will take appropriate steps to delete it.",
    ],
  },
  {
    id: "your-rights",
    title: "11. Your Choices & Rights",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, export, or delete personal data. You can update profile details in the app, manage notification settings, and contact us to request account or data deletion.",
      "You may also cancel paid subscriptions through the in-app billing portal or applicable store/billing settings. Canceling does not automatically delete your account unless you also request deletion.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the “Last updated” date. Continued use of Coin Detective after changes become effective constitutes acceptance of the updated policy where permitted by law.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact Information",
    paragraphs: [
      "If you have questions about privacy at Coin Detective, contact us:",
      "Email: support@coindetective.app",
      "App on Google Play: Coin Detective (com.mitprogrammer.coindetective)",
    ],
  },
];
