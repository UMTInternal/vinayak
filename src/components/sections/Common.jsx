import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { company, ticker, img } from '../../data/site';
import { waLink } from '../../lib/whatsapp';

export function SectionHead({ eyebrow, title, text, center, dark, children }) {
  return (
    <div className={`section__head reveal${center ? ' section__head--center' : ''}${children ? ' section__head--split' : ''}`}>
      <div>
        <span className={`eyebrow${dark ? ' eyebrow--dark' : ''}`}>{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {children}
    </div>
  );
}

/** Dark banner at the top of inner pages, with breadcrumbs. */
export function PageHero({ eyebrow, title, text, crumbs = [], image }) {
  return (
    <section className={`page-hero${image ? ' page-hero--img' : ''}`}>
      {image && <img className="page-hero__bg" src={img(image)} alt="" />}
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="crumbs__sep">/</span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="eyebrow eyebrow--dark">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  );
}

export function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <section className="strip" aria-label="Recognition">
      <div className="marquee">
        <div className="marquee__track">
          {items.map((t, i) => (
            <span key={i} className="marquee__item" aria-hidden={i >= ticker.length || undefined}>
              <span>{t}</span><i />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = 'Ready to move? Get your free quote today.', text = 'Free survey, written quotation and a reply within 30 minutes during business hours.' }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-band__inner reveal">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link to="/contact" className="btn btn--light">Get free quote <Icon name="arrow" /></Link>
          <a href={company.phones[0].href} className="btn btn--outline-light"><Icon name="phone" /> {company.phones[0].label}</a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn--wa"><Icon name="whatsapp" /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export function Ticks({ items, cols }) {
  return (
    <ul className={`ticks${cols ? ' ticks--cols' : ''}`}>
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}
