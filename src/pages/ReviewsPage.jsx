import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { PageHero, CtaBand } from '../components/sections/Common';
import Reviews from '../components/sections/Reviews';
import { company } from '../data/site';

export default function ReviewsPage() {
  return (
    <>
      <Seo
        title="Customer Reviews"
        description="Read what families and businesses in Indore say about moving with Vinayak Relocation Packers and Movers."
        path="/reviews"
      />
      <PageHero
        eyebrow="Reviews"
        title="What our clients say"
        text="Thousands of families and businesses have trusted us with their move. Here's what a few of them said."
        crumbs={[{ label: 'Reviews' }]}
      />
      <section className="section section--tint">
        <div className="wrap">
          <Reviews />
          <div className="google-cta reveal">
            <div>
              <h3>Moved with us recently?</h3>
              <p>Your review helps other families choose with confidence. Read more reviews or leave yours on Google.</p>
            </div>
            <a className="btn btn--dark" href={company.googleReviews} target="_blank" rel="noopener noreferrer">
              Reviews on Google <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
