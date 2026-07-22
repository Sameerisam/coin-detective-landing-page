import type { LegalSection } from "./privacyPolicy";

export const TERMS_LAST_UPDATED = "July 22, 2026";

export const TERMS_INTRO =
  "By creating an account, installing Coin Detective, or using our website, you agree to be legally bound by these Terms of Service. If you do not agree, do not use the app or related services.";

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "agreement",
    title: "1. Agreement to Terms",
    paragraphs: [
      "These Terms of Service (“Terms”) form a binding agreement between you (“User,” “you”) and Coin Detective (“Company,” “we,” or “us”) regarding the Android application Coin Detective, our website, and related services.",
      "By tapping “I Agree,” creating an account, or continuing to use the app, you also acknowledge the in-app Legal Disclaimer, which is incorporated into these Terms by reference.",
    ],
  },
  {
    id: "privacy",
    title: "2. Privacy",
    paragraphs: [
      "Your use of Coin Detective is also governed by our Privacy Policy. Please review it to understand how we collect and use account data, scan images, subscription information, and related service data.",
      "The Privacy Policy is available at /privacy-policy on this website.",
    ],
  },
  {
    id: "service",
    title: "3. Description of the Service",
    paragraphs: [
      "Coin Detective provides AI-assisted coin identification, rarity indicators, estimated market value ranges, historical background text, scan history, and optional alerts.",
      "Features and limits depend on your plan:",
    ],
    bullets: [
      "Free: limited daily scans (currently 3 scans/day), basic identification information, and ads.",
      "Basic: higher daily scan limits, rarity details, no ads, and email support (billed monthly where offered).",
      "Premium: unlimited scans (subject to fair use and abuse controls), full history features, market value estimates, and export options where available.",
    ],
  },
  {
    id: "estimates",
    title: "4. Estimates Only — Not Professional Appraisals",
    paragraphs: [
      "Coin Detective provides coin identification, rarity indicators, and market value ranges for informational and educational purposes only.",
      "All valuations displayed in the app are AI-generated estimates. They do not constitute professional numismatic appraisals, grading services, or certified valuations from a licensed appraiser or grading authority (such as PCGS, NGC, or similar).",
      "Do not use app results alone to buy, sell, insure, or tax-report coins. Consult a qualified professional before any financial decision involving collectibles.",
    ],
  },
  {
    id: "ai-accuracy",
    title: "5. AI Identification & Accuracy",
    paragraphs: [
      "Scan results depend on image quality, lighting, angle, and visible details. The app may misidentify a coin, year, mint mark, or rarity classification.",
      "Confidence scores reflect model certainty, not guaranteed accuracy. Always verify important details with reference materials or an expert.",
    ],
  },
  {
    id: "market",
    title: "6. Market Values & Condition",
    paragraphs: [
      "Estimated value ranges are based on aggregated market data and models. Actual prices vary with coin condition, demand, venue (auction, dealer, private sale), and economic conditions.",
      "Wear, cleaning, damage, counterfeits, and alterations are not always detectable from photos. A coin shown as “common” or “rare” in-app is not a guarantee of real-world market outcome.",
    ],
  },
  {
    id: "no-advice",
    title: "7. No Financial or Legal Advice",
    paragraphs: [
      "Coin Detective does not provide investment, tax, insurance, or legal advice. Content in the app is general information, not tailored to your situation.",
      "References to “premium,” “rare,” or dollar amounts are illustrative estimates, not recommendations to purchase or sell any asset.",
    ],
  },
  {
    id: "accounts",
    title: "8. User Accounts & Security",
    paragraphs: [
      "To use core features you must create an account. You are responsible for:",
    ],
    bullets: [
      "Maintaining the confidentiality of your login credentials.",
      "All activity that occurs under your account.",
      "Providing accurate registration information.",
      "Notifying us promptly of any unauthorized use.",
    ],
    paragraphsAfter: [
      "We are not liable for losses arising from your failure to keep your account secure. Free and paid plans may include daily scan limits, feature restrictions, or changes where permitted by law. Saved scan history and alerts are provided for convenience; we do not guarantee permanent storage or availability of past data.",
    ],
  },
  {
    id: "acceptable-use",
    title: "9. Acceptable Use Policy",
    paragraphs: [
      "You agree to use Coin Detective only for lawful purposes. You must not:",
    ],
    bullets: [
      "Illegal acts: use the service in violation of local, national, or international law.",
      "Abuse: upload malware, attempt to disrupt services, or harass others through support or in-app channels.",
      "Interference: attempt unauthorized access to our systems, models, or other users’ accounts.",
      "Intellectual property abuse: upload content you do not have rights to use, or scrape the service at scale.",
      "Automation: use bots or scripts to bypass scan limits, create fake accounts, or harvest data.",
      "Misrepresentation: present AI estimates as certified appraisals to third parties.",
    ],
    paragraphsAfter: [
      "Violation may result in suspension or termination of access without refund where allowed by law.",
    ],
  },
  {
    id: "subscriptions",
    title: "10. Subscriptions & Billing",
    paragraphs: [
      "Paid plans (Basic and Premium) are billed through our payment processor (Stripe) or other billing methods we enable. By purchasing, you agree to:",
    ],
    bullets: [
      "Provide accurate billing information.",
      "Pay the fees for your selected plan.",
      "Accept that subscriptions may auto-renew unless canceled before the next billing cycle through the in-app billing portal or applicable cancellation flow.",
    ],
    paragraphsAfter: [
      "Plan prices, scan limits, and features may change; we will reflect current offers in the app. Refunds, if any, are handled according to applicable law, Stripe/store rules, and our support review. Contact support@coindetective.app for billing questions.",
    ],
  },
  {
    id: "ads",
    title: "11. Advertising",
    paragraphs: [
      "The Free plan may display third-party advertisements (including interstitial ads after scans). Ad partners such as Google AdMob may use device identifiers as described in their policies and our Privacy Policy. Paid plans that advertise “no ads” will not show those Free-plan ads while the paid entitlement is active.",
    ],
  },
  {
    id: "ip",
    title: "12. Intellectual Property",
    paragraphs: [
      "The Coin Detective name, logo, app UI, software, and original content are owned by us or our licensors. You receive a limited, non-exclusive, non-transferable license to use the app for personal, non-commercial collecting purposes in accordance with these Terms.",
      "You retain rights to photos you upload, and you grant us a license to process, store, and display them as needed to operate the service (identification, history, support, and security).",
    ],
  },
  {
    id: "disclaimer-warranty",
    title: "13. Disclaimer of Warranties",
    paragraphs: [
      "Coin Detective is provided on an “as-is” and “as-available” basis. We do not warrant that identification will be accurate, that values will match market outcomes, or that the service will be uninterrupted or error-free.",
      "To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.",
    ],
  },
  {
    id: "liability",
    title: "14. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, Coin Detective and its operators are not liable for losses arising from reliance on scan results, missed identifications, incorrect values, service interruptions, ad networks, or payment processors.",
      "Use of the app is at your own risk. In no event shall we be liable for indirect, incidental, special, consequential, or punitive damages, including lost profits or data, even if advised of the possibility of such damages.",
    ],
  },
  {
    id: "changes",
    title: "15. Modifications to Terms",
    paragraphs: [
      "We may update these Terms as the app evolves. We will post the updated Terms on this page and update the “Last updated” date. Continued use after changes become effective constitutes acceptance where allowed by law.",
      "Material changes may also be highlighted in the app or by email when appropriate.",
    ],
  },
  {
    id: "contact",
    title: "16. Contact Us",
    paragraphs: [
      "Questions about these Terms of Service:",
      "Email: support@coindetective.app",
      "Google Play: Coin Detective (com.mitprogrammer.coindetective)",
    ],
  },
];
