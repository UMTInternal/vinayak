import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you are looking for could not be found." />
      <meta name="robots" content="noindex" />
      <section className="page-hero page-hero--404">
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap page-hero__inner">
          <span className="eyebrow eyebrow--dark">Error 404</span>
          <h1>This page has moved… without us.</h1>
          <p className="lead">The page you're looking for doesn't exist. Let's get you back on track.</p>
          <div className="btn-row">
            <Link to="/" className="btn btn--primary">Back to home <Icon name="arrow" /></Link>
            <Link to="/contact" className="btn btn--outline-light">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
