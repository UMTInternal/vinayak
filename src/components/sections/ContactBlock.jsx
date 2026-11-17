import Icon from '../Icon';
import { company } from '../../data/site';
import QuoteForm from './QuoteForm';

export function ContactInfo() {
  return (
    <ul className="cinfo">
      <li>
        <span className="cinfo__ic"><Icon name="phone" /></span>
        <div><small>Call</small>{company.phones.map((p, i) => (
          <span key={p.href}>{i > 0 && ' · '}<a href={p.href}>{p.label}</a></span>
        ))}</div>
      </li>
      <li>
        <span className="cinfo__ic"><Icon name="mail" /></span>
        <div><small>Email</small><a href={`mailto:${company.email}`}>{company.email}</a></div>
      </li>
      <li>
        <span className="cinfo__ic"><Icon name="pin" /></span>
        <div><small>Office</small>{company.address}</div>
      </li>
      <li>
        <span className="cinfo__ic"><Icon name="clock" /></span>
        <div><small>Hours</small>Monday to Sunday, 9:00 AM to 9:00 PM</div>
      </li>
    </ul>
  );
}

export function MapEmbed() {
  return (
    <div className="map reveal">
      <iframe title="Vinayak Relocation office location on Google Maps" src={company.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

/** Dark contact section: info + form (+ optional map). */
export default function ContactBlock({ defaultService = '', title = 'Tell us about your move', showMap = true }) {
  return (
    <section className="section section--dark contact-sec" id="contact">
      <div className="wrap contact">
        <div className="contact__info reveal">
          <span className="eyebrow eyebrow--dark">Get a free quote</span>
          <h2>{title}</h2>
          <p>Share a few details and we'll reply within 30 minutes during business hours with a survey slot and estimate.</p>
          <ContactInfo />
        </div>
        <QuoteForm defaultService={defaultService} />
      </div>
      {showMap && <div className="wrap"><MapEmbed /></div>}
    </section>
  );
}
