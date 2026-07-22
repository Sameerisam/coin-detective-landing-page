import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import {
  PRIVACY_INTRO,
  PRIVACY_LAST_UPDATED,
  PRIVACY_SECTIONS,
} from "@/content/privacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy for Coin Detective"
      lastUpdated={PRIVACY_LAST_UPDATED}
      intro={PRIVACY_INTRO}
      sections={PRIVACY_SECTIONS}
    />
  );
}
