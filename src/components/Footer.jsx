import { Link } from 'react-router-dom';
import Icon from './Icon';
import { company, services, img } from '../data/site';
import { waLink } from '../lib/whatsapp';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap footer__grid">
          <div className="footer__brand">
            <span className="footer__logo"><img src={img('logo.png')} alt="Vinayak Relocation" loading="lazy" /></span>
            <p>{company.tagline}</p>
            <div className="footer__social">
              <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" /></a>
              <a href={company.phones[0].href} aria-label="Call"><Icon name="phone" /></a>
              <a href={`mailto:${company.email}`} aria-label="Email"><Icon name="mail" /></a>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About us</Link>
            <Link to="/service-areas">Service areas</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Services</h4>
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>{s.nav}</Link>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            {company.phones.map((p) => <a key={p.href} href={p.href}>{p.label}</a>)}
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.address}</span>
            <span>{company.hours}</span>
          </div>
        </div>
        <div className="wrap footer__bottom">
          <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to top ↑</a>
        </div>
      </footer>

      <div className="fab">
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="fab__btn fab__btn--wa" aria-label="Chat on WhatsApp"><Icon name="whatsapp" /></a>
        <a href={company.phones[0].href} className="fab__btn fab__btn--call" aria-label="Call Vinayak Relocation"><Icon name="phone" /></a>
      </div>

      <div className="mbar">
        <a href={company.phones[0].href}><Icon name="phone" /> Call</a>
        <a href={waLink} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
        <Link to="/contact" className="mbar__cta">Free quote</Link>
      </div>
    </>
  );
}
