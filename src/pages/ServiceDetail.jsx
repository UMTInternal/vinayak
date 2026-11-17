import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { PageHero, SectionHead, Ticks } from '../components/sections/Common';
import ServicesGrid from '../components/sections/Services';
import Process from '../components/sections/Process';
import { FaqList } from '../components/sections/Faq';
import ContactBlock from '../components/sections/ContactBlock';
import NotFound from './NotFound';
import { company, services, faqs, img, promises } from '../data/site';
import { waLink } from '../lib/whatsapp';

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <NotFound />;

  return (
    <>
      <Seo title={`${s.title} in Indore`} description={s.short} path={`/services/${s.slug}`} />
      <PageHero
        eyebrow={`${s.title} · Indore`}
        title={`${s.title} in Indore`}
        text={s.intro}
        image={s.image}
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]}
      />

      <section className="section">
        <div className="wrap detail">
          <div className="detail__main">
            <figure className="detail__img reveal">
              <img src={img(s.image)} alt={s.title} />
            </figure>
            <div className="reveal">
              <span className="eyebrow">What's included</span>
              <h2>Everything handled, start to finish</h2>
              <p className="muted">{s.short}</p>
              <div className="feature-list">
                {s.features.map((f) => (
                  <div className="feature" key={f}>
                    <span className="feature__ic"><Icon name="check" /></span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <h3 className="h3-lg">Ideal for</h3>
              <ul className="chips chips--sm">
                {s.ideal.map((i) => <li className="chip" key={i}>{i}</li>)}
              </ul>
            </div>
          </div>

          <aside className="detail__aside">
            <div className="aside-card aside-card--dark reveal">
              <span className="svc__ic"><Icon name={s.icon} /></span>
              <h3>Get a free quote for {s.title.toLowerCase()}</h3>
              <p>Free survey and written quotation. Reply within 30 minutes during business hours.</p>
              <a href="#contact" className="btn btn--primary btn--block">Request a quote <Icon name="arrow" /></a>
              <a href={company.phones[0].href} className="btn btn--outline-light btn--block"><Icon name="phone" /> {company.phones[0].label}</a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--block"><Icon name="whatsapp" /> WhatsApp us</a>
            </div>
            <div className="aside-card reveal">
              <h3>Our promise</h3>
              <Ticks items={promises} />
            </div>
            <div className="aside-card reveal">
              <h3>Other services</h3>
              <div className="aside-links">
                {services.filter((x) => x.slug !== s.slug).map((x) => (
                  <Link key={x.slug} to={`/services/${x.slug}`}>
                    <Icon name={x.icon} /> {x.title} <Icon name="arrow" className="ic--end" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Process />

      <section className="section">
        <div className="wrap faq">
          <div className="faq__intro reveal">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
            <p>Have a question about {s.title.toLowerCase()}? Call us on <a className="link" href={company.phones[0].href}>{company.phones[0].label}</a>.</p>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <SectionHead eyebrow="Explore more" title="Other services you may need" />
          <ServicesGrid bento={false} exclude={s.slug} />
        </div>
      </section>

      {/* key resets the form's preselected service when switching between service pages */}
      <ContactBlock key={s.slug} defaultService={s.title} title={`Book ${s.title.toLowerCase()}`} showMap={false} />
    </>
  );
}
