import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { services, img } from '../../data/site';

export function ServiceCard({ s, large }) {
  return (
    <article className={`svc reveal${large ? ' svc--lg' : ''}`}>
      <Link to={`/services/${s.slug}`} className="svc__media" tabIndex={-1} aria-hidden="true">
        <img src={img(s.image)} alt="" loading="lazy" />
      </Link>
      <div className="svc__body">
        <span className="svc__ic"><Icon name={s.icon} /></span>
        <h3><Link to={`/services/${s.slug}`}>{s.title}</Link></h3>
        <p>{s.short}</p>
        {large && (
          <ul className="ticks">
            {s.features.slice(2, 4).map((f) => <li key={f}>{f}</li>)}
          </ul>
        )}
        <Link to={`/services/${s.slug}`} className="link">Learn more <Icon name="arrow" /></Link>
      </div>
    </article>
  );
}

/** Bento grid on Home; uniform grid elsewhere. `exclude` hides one slug (for related services). */
export default function ServicesGrid({ bento = true, exclude }) {
  const list = services.filter((s) => s.slug !== exclude);
  return (
    <div className={bento ? 'bento' : 'grid-3'}>
      {list.map((s, i) => <ServiceCard key={s.slug} s={s} large={bento && i === 0} />)}
    </div>
  );
}
