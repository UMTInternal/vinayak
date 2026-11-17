import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { company, whyUs, promises, img } from '../../data/site';

export function WhyGrid() {
  return (
    <div className="why">
      {whyUs.map((w) => (
        <div className="why__item" key={w.title}>
          <span className="why__ic"><Icon name={w.icon} /></span>
          <div><h3>{w.title}</h3><p>{w.text}</p></div>
        </div>
      ))}
    </div>
  );
}

export default function WhyUs({ withLink = true }) {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <div className="about__media reveal">
          <img className="about__main" src={img('awards.jpg')} alt="Awards won by Vinayak Relocation, including the Times Group Best Service Award" loading="lazy" />
          <div className="about__badge">
            <strong>{company.years}</strong>
            <span>years of trusted moves across Madhya Pradesh</span>
          </div>
        </div>
        <div className="about__copy reveal">
          <span className="eyebrow">Why Vinayak</span>
          <h2>A locally rooted team that treats your things like its own</h2>
          <p>
            Based in Rau, we know Indore's narrow lanes and busy roads. Over the past decade we have completed
            thousands of residential and commercial moves across Indore and major Indian cities, and we know the
            emotional value of what you are moving.
          </p>
          <WhyGrid />
          <ul className="ticks ticks--cols">
            {promises.slice(0, 4).map((p) => <li key={p}>{p}</li>)}
          </ul>
          {withLink && (
            <Link to="/about" className="btn btn--dark">More about us <Icon name="arrow" /></Link>
          )}
        </div>
      </div>
    </section>
  );
}
