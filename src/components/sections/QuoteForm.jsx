import { useState } from 'react';
import Icon from '../Icon';
import { company, serviceOptions } from '../../data/site';
import { openWhatsApp } from '../../lib/whatsapp';

const empty = { name: '', phone: '', from: '', to: '', service: '', date: '', message: '' };
const PHONE_RE = /^[0-9+\s-]{10,15}$/;

/** Full enquiry form; sends a formatted message on WhatsApp. */
export default function QuoteForm({ defaultService = '' }) {
  const [v, setV] = useState({ ...empty, service: defaultService });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: false }));
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {
      name: !v.name.trim(),
      phone: !PHONE_RE.test(v.phone.trim()),
      service: !v.service,
    };
    setErrors(er);
    if (er.name || er.phone || er.service) return;
    openWhatsApp([
      'Hi Vinayak Relocation, I would like a free quote.',
      '',
      `*Name:* ${v.name.trim()}`,
      `*Phone:* ${v.phone.trim()}`,
      `*Service:* ${v.service}`,
      v.from.trim() && `*From:* ${v.from.trim()}`,
      v.to.trim() && `*To:* ${v.to.trim()}`,
      v.date && `*Preferred date:* ${v.date}`,
      v.message.trim() && `*Details:* ${v.message.trim()}`,
    ]);
    setSent(true);
  };

  const cls = (k) => `field${errors[k] ? ' is-invalid' : ''}`;
  const hasErrors = errors.name || errors.phone || errors.service;

  return (
    <form className="form reveal" onSubmit={submit} noValidate>
      <div className="form__row">
        <label className={cls('name')}>
          <span>Full name *</span>
          <input value={v.name} onChange={set('name')} autoComplete="name" required />
        </label>
        <label className={cls('phone')}>
          <span>Phone number *</span>
          <input value={v.phone} onChange={set('phone')} type="tel" inputMode="tel" autoComplete="tel" required />
        </label>
      </div>
      <div className="form__row">
        <label className="field">
          <span>Moving from</span>
          <input value={v.from} onChange={set('from')} placeholder="Locality / city" />
        </label>
        <label className="field">
          <span>Moving to</span>
          <input value={v.to} onChange={set('to')} placeholder="Locality / city" />
        </label>
      </div>
      <div className="form__row">
        <label className={cls('service')}>
          <span>Service *</span>
          <select value={v.service} onChange={set('service')} required>
            <option value="">Select a service</option>
            {serviceOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Preferred date</span>
          <input value={v.date} onChange={set('date')} type="date" />
        </label>
      </div>
      <label className="field">
        <span>Message / requirements</span>
        <textarea value={v.message} onChange={set('message')} rows={3} placeholder="e.g. 2BHK, 3rd floor, no lift" />
      </label>
      <button type="submit" className="btn btn--primary btn--block"><Icon name="whatsapp" /> Send enquiry on WhatsApp</button>
      {hasErrors && (
        <p className="form__error" role="alert">Please fill in your name, a valid phone number and the service you need.</p>
      )}
      {sent && !hasErrors && (
        <p className="form__ok" role="status">✓ WhatsApp opened with your details. Just press send!</p>
      )}
      <p className="form__note">Or email us at <a href={`mailto:${company.email}`}>{company.email}</a></p>
    </form>
  );
}
