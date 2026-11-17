import Icon from '../Icon';
import { reviews } from '../../data/site';

const initials = (name) => name.split(' ').map((p) => p[0]).join('').slice(0, 2);

export function Stars() {
  return (
    <div className="stars" aria-label="5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" />)}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="reviews">
      {reviews.map((r, i) => (
        <figure className={`review reveal${i === 1 ? ' review--accent' : ''}`} key={r.name}>
          <Stars />
          <blockquote>“{r.text}”</blockquote>
          <figcaption>
            <span className="avatar">{initials(r.name)}</span>
            <span><strong>{r.name}</strong><small>{r.meta}</small></span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
