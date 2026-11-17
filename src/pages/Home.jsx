import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { SectionHead, Ticker } from '../components/sections/Common';
import ServicesGrid from '../components/sections/Services';
import Process from '../components/sections/Process';
import WhyUs from '../components/sections/WhyUs';
import Areas from '../components/sections/Areas';
import Gallery from '../components/sections/Gallery';
import Reviews from '../components/sections/Reviews';
import Faq from '../components/sections/Faq';
import ContactBlock from '../components/sections/ContactBlock';
import { company, services, recognition, faqs, img } from '../data/site';
import { openWhatsApp } from '../lib/whatsapp';

function QuickQuote() {
  const [v, setV] = useState({ from: '', to: '', type: services[0].title });
  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    openWhatsApp([
      'Hi Vinayak Relocation, I would like a quote.',
      '',
      `*Service:* ${v.type}`,
      `*From:* ${v.from.trim()}`,
      `*To:* ${v.to.trim()}`,
    ]);
  };
  return (
    <>
      <form className="quickquote" onSubmit={submit}>
        <label className="qq-field">
          <span>Moving from</span>
          <input value={v.from} onChange={set('from')} placeholder="e.g. Rau, Indore" required />
        </label>
        <label className="qq-field">
          <span>Moving to</span>
          <input value={v.to} onChange={set('to')} placeholder="e.g. Bangalore" required />
        </label>
        <label className="qq-field">
          <span>Move type</span>
          <select value={v.type} onChange={set('type')}>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          </select>
        </label>
        <button className="btn btn--primary qq-btn" type="submit">Get quote <Icon name="arrow" /></button>
      </form>
      <p className="hero__note"><Icon name="whatsapp" /> Sends your request on WhatsApp. We reply within 30 minutes during business hours.</p>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        description="Vinayak Relocation Packers and Movers (VRPM Group): 12+ years of insured, GPS-tracked household shifting, office relocation, vehicle transport, warehousing and industrial moving from Rau, Indore to all of India."
        path="/"
      />

      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--dark"><span className="dot" /> {company.group} · Rau, Indore · Since {company.years} years</span>
            <h1>Your move, packed with care and delivered <em>on time.</em></h1>
            <p className="lead">
              Household shifting, office relocation, vehicle transport and storage from Indore to anywhere in India.
              Insured, GPS-tracked, and handled by our own verified team.
            </p>
            <QuickQuote />
            <ul className="hero__trust">
              <li><strong>{company.years}</strong><span>years moving<br />Indore</span></li>
              <li><strong>1000s</strong><span>homes &amp; offices<br />relocated</span></li>
              <li><strong>100%</strong><span>insured<br />transit</span></li>
            </ul>
          </div>
          <div className="hero__visual">
            <figure className="hero__photo">
              <img src={img('household.jpg')} alt="Vinayak Relocation team completing a final handover checklist with a family" width="1280" height="853" fetchPriority="high" />
            </figure>
            <div className="float-card float-card--a">
              <span className="float-card__ic"><Icon name="clipboard" /></span>
              <div><strong>Handover complete</strong><small>15/15 cartons delivered</small></div>
            </div>
            <div className="float-card float-card--b">
              <span className="float-card__ic float-card__ic--green"><Icon name="gps" /></span>
              <div><strong>Live GPS tracking</strong><small>Indore → Bangalore</small></div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="What we move"
            title="Packers and movers services in Indore, built around your move"
            text="Six specialised services, one accountable team. Every move includes premium packing materials, insured transit and a dedicated relationship manager."
          >
            <Link to="/services" className="btn btn--ghost">All services <Icon name="arrow" /></Link>
          </SectionHead>
          <ServicesGrid />
        </div>
      </section>

      <Process />
      <WhyUs />
      <Areas />

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Recognition" title="Certified and recognised" text="Memberships and appreciation earned over more than a decade of service. Tap any certificate to view it full size.">
            <Link to="/gallery" className="btn btn--ghost">View gallery <Icon name="arrow" /></Link>
          </SectionHead>
          <Gallery items={recognition.slice(1)} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <SectionHead eyebrow="Reviews" title="What our clients say">
            <Link to="/reviews" className="btn btn--ghost">All reviews <Icon name="arrow" /></Link>
          </SectionHead>
          <Reviews />
        </div>
      </section>

      <Faq items={faqs.slice(0, 4)} />
      <ContactBlock />
    </>
  );
}
