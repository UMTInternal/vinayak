import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { PageHero } from '../components/sections/Common';
import ContactBlock from '../components/sections/ContactBlock';
import { company } from '../data/site';
import { waLink } from '../lib/whatsapp';

const quick = [
  { icon: 'phone', title: 'Call us', text: company.phones[0].label, href: company.phones[0].href },
  { icon: 'whatsapp', title: 'WhatsApp', text: 'Chat with our team', href: waLink, external: true },
  { icon: 'mail', title: 'Email', text: company.email, href: `mailto:${company.email}` },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & Free Quote"
        description="Get a free moving quote from Vinayak Relocation. Call +91 96690 05525, WhatsApp us, or visit our office in Rau, Indore."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Get your free moving quote"
        text="Call, WhatsApp or fill in the form. We reply within 30 minutes during business hours."
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="section section--tight">
        <div className="wrap grid-3">
          {quick.map((q) => (
            <a key={q.title} className="card card--link reveal" href={q.href} {...(q.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              <span className="why__ic"><Icon name={q.icon} /></span>
              <h3>{q.title}</h3>
              <p>{q.text}</p>
            </a>
          ))}
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
