import Icon from '../Icon';
import { company, faqs } from '../../data/site';
import { waLink } from '../../lib/whatsapp';

export function FaqList({ items = faqs }) {
  return (
    <div className="faq__list reveal">
      {items.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function Faq({ items, title = 'Questions, answered' }) {
  return (
    <section className="section" id="faq">
      <div className="wrap faq">
        <div className="faq__intro reveal">
          <span className="eyebrow">FAQ</span>
          <h2>{title}</h2>
          <p>Can't find what you need? Call or message us and a real person will help.</p>
          <div className="faq__contact">
            <a href={company.phones[0].href} className="btn btn--dark"><Icon name="phone" /> Call now</a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn--wa"><Icon name="whatsapp" /> WhatsApp</a>
          </div>
        </div>
        <FaqList items={items} />
      </div>
    </section>
  );
}
