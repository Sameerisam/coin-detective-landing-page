import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import {
  TERMS_INTRO,
  TERMS_LAST_UPDATED,
  TERMS_SECTIONS,
} from "@/content/termsOfService";

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service for Coin Detective"
      lastUpdated={TERMS_LAST_UPDATED}
      intro={TERMS_INTRO}
      notice={{
        label: "Important",
        text: "Coin values shown in Coin Detective are estimates only. They are not professional appraisals and must not be used as the sole basis for buying, selling, or insuring coins.",
      }}
      sections={TERMS_SECTIONS}
    />
  );
}
