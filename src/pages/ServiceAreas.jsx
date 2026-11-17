import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { PageHero, SectionHead, CtaBand } from '../components/sections/Common';
import Areas from '../components/sections/Areas';
import { MapEmbed } from '../components/sections/ContactBlock';

const regions = [
  { icon: 'pin', title: 'Local Indore moves', text: 'Every locality from Rau and Bhawarkua to Vijay Nagar, Nipania and the Super Corridor.' },
  { icon: 'factory', title: 'Industrial belt', text: 'Pithampur, Mhow, Dewas Road and the industrial areas around Indore.' },
  { icon: 'truck', title: 'Interstate & Pan-India', text: 'Door-to-door moves from Indore to Bangalore, Mumbai, Delhi, Pune, Hyderabad and every major city.' },
];

export default function ServiceAreas() {
  return (
    <>
      <Seo
        title="Service Areas"
        description="Packers and movers in Rau, Vijay Nagar, Palasia, Bhawarkua, Nipania, Pithampur, Mhow and all of Indore, plus Pan-India relocation."
        path="/service-areas"
      />
      <PageHero
        eyebrow="Service areas"
        title="Localities we serve in Indore and beyond"
        text="Headquartered in Rau, Indore, we move homes and businesses across the city, the industrial belt and all of India."
        crumbs={[{ label: 'Service areas' }]}
      />
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Coverage" title="Local, regional and nationwide" />
          <div className="grid-3">
            {regions.map((r) => (
              <div className="card reveal" key={r.title}>
                <span className="why__ic"><Icon name={r.icon} /></span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Areas title="Find your locality" showCta={false} />
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Headquarters" title="Visit our office in Rau" text="25, Block-C, Brij Vihar, Rau, Indore, Madhya Pradesh 453331" />
          <MapEmbed />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
