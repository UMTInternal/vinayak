import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { areas } from '../../data/site';

export default function Areas({ title = 'Every corner of Indore, and beyond', showCta = true }) {
  const [q, setQ] = useState('');
  const query = q.trim().toLowerCase();
  const matches = (name) => query && name.toLowerCase().includes(query);
  const hits = query ? ['Rau (HQ)', ...areas].filter(matches).length : 0;

  return (
    <section className="section section--tint" id="areas">
      <div className="wrap areas">
        <div className="areas__copy reveal">
          <span className="eyebrow">Where we work</span>
          <h2>{title}</h2>
          <p>Headquartered in Rau, we cover all of Indore and the surrounding industrial belt, with interstate moves to every major Indian city.</p>
          <div className="areas__search">
            <Icon name="search" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search your locality"
              aria-label="Search your locality"
            />
          </div>
          <p className="areas__result" aria-live="polite">
            {!query ? '' : hits ? `✓ Yes, we serve ${q.trim()}.` : 'Not listed, but we likely cover it. We move Pan-India, so just ask!'}
          </p>
          {showCta && <Link to="/contact" className="btn btn--dark">Check availability <Icon name="arrow" /></Link>}
        </div>
        <ul className="chips reveal">
          <li className={`chip chip--hq${matches('Rau (HQ)') ? ' is-match' : ''}`}><Icon name="pin" /> Rau (HQ)</li>
          {areas.map((a) => (
            <li key={a} className={`chip${matches(a) ? ' is-match' : query ? ' is-dim' : ''}`}>{a}</li>
          ))}
          <li className="chip chip--india">+ Pan-India</li>
        </ul>
      </div>
    </section>
  );
}
