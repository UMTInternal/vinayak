import Seo from '../components/Seo';
import { PageHero, SectionHead, CtaBand } from '../components/sections/Common';
import ServicesGrid from '../components/sections/Services';
import Process from '../components/sections/Process';
import { WhyGrid } from '../components/sections/WhyUs';

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services"
        description="Household shifting, office relocation, car and bike transport, warehousing, logistics and industrial machinery shifting in Indore and across India."
        path="/services"
      />
      <PageHero
        eyebrow="Our services"
        title="Premium packers and movers services in Indore"
        text="Six specialised services, one accountable team. Pick a service to see exactly what's included."
        crumbs={[{ label: 'Services' }]}
      />
      <section className="section">
        <div className="wrap">
          <ServicesGrid bento={false} />
        </div>
      </section>
      <section className="section section--tint">
        <div className="wrap">
          <SectionHead center eyebrow="Included with every service" title="The Vinayak standard" />
          <WhyGrid />
        </div>
      </section>
      <Process />
      <CtaBand />
    </>
  );
}
