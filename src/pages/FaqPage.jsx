import Seo from '../components/Seo';
import { PageHero, CtaBand } from '../components/sections/Common';
import Faq from '../components/sections/Faq';
import { faqs } from '../data/site';

export default function FaqPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <Seo
        title="FAQ"
        description="Answers about packers and movers charges in Indore, packing materials, insurance, booking time and service areas."
        path="/faq"
      />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        text="Prices, packing, insurance and booking: everything you need to know before your move."
        crumbs={[{ label: 'FAQ' }]}
      />
      <Faq title="Questions, answered" />
      <CtaBand />
    </>
  );
}
