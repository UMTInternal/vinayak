import Icon from '../Icon';
import { process } from '../../data/site';
import { SectionHead } from './Common';

export default function Process() {
  return (
    <section className="section section--dark" id="process">
      <div className="wrap">
        <SectionHead
          center
          dark
          eyebrow="How it works"
          title="Five steps from first call to final handover"
          text="No guesswork and no surprises. You know the price, the plan and where your goods are at every stage."
        />
        <ol className="steps">
          {process.map((p, i) => (
            <li className="step reveal" key={p.title}>
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="step__ic"><Icon name={p.icon} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
