import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { PageHero, SectionHead, CtaBand, Ticks } from '../components/sections/Common';
import Process from '../components/sections/Process';
import { WhyGrid } from '../components/sections/WhyUs';
import Gallery from '../components/sections/Gallery';
import { company, promises, recognition, img } from '../data/site';

const stats = [
  { value: company.years, label: 'Years of experience' },
  { value: '1000s', label: 'Homes & offices moved' },
  { value: '20+', label: 'Indore localities served' },
  { value: '24/7', label: 'Customer support' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Vinayak Relocation (VRPM Group) is a locally rooted packers and movers company in Rau, Indore with 12+ years of experience in safe, insured relocation."
        path="/about"
      />
      <PageHero
        eyebrow="About us"
        title="Your trusted moving partner in Madhya Pradesh"
        text="A locally rooted business in Rau, Indore, moving homes, offices and industries safely for more than 12 years."
        crumbs={[{ label: 'About' }]}
      />

      <section className="section">
        <div className="wrap about">
          <div className="about__media reveal">
            <img className="about__main" src={img('household.jpg')} alt="Our team at a final handover with a family" loading="lazy" />
            <div className="about__badge">
              <strong>{company.years}</strong>
              <span>years of trusted moves across Madhya Pradesh</span>
            </div>
          </div>
          <div className="about__copy reveal">
            <span className="eyebrow">Our story</span>
            <h2>We treat every item as if it were our own</h2>
            <p>
              Vinayak Relocation Packers and Movers, part of the {company.group}, is the premier choice for anyone looking
              for the best packers and movers in Rau, Indore. Over the past decade we have completed thousands of
              residential and commercial moves across Indore and major Indian cities.
            </p>
            <p>
              We understand the emotional value attached to your possessions. As a locally rooted business in Rau, we
              know how to handle Indore's narrow lanes and busy traffic, and our trained crew brings the same care to
              every move, big or small.
            </p>
            <Ticks items={promises} />
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="wrap stats">
          {stats.map((s) => (
            <div className="stat reveal" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Our values" title="Why families and businesses choose us" />
          <WhyGrid />
        </div>
      </section>

      <Process />

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Recognition" title="Awards and memberships" text="Recognition from industry bodies and partners." />
          <Gallery items={recognition.slice(0, 3)} variant="photos" />
          <div className="note reveal">
            <Icon name="award" />
            <p>Proud associate member of the <strong>All India Packers &amp; Movers Federation</strong> for 2026, and recipient of the <strong>Times Group Best Service Award</strong>.</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
