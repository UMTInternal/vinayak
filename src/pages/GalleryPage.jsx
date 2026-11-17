import Seo from '../components/Seo';
import { PageHero, SectionHead, CtaBand } from '../components/sections/Common';
import Gallery from '../components/sections/Gallery';
import { recognition, projectPhotos } from '../data/site';

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery"
        description="Photos of Vinayak Relocation's team, fleet and recent moves, plus our awards and certificates."
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title="Our work, our team, our recognition"
        text="A look at recent moves, our branded fleet, and the awards we've earned along the way."
        crumbs={[{ label: 'Gallery' }]}
      />
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="On the job" title="Recent projects" text="Tap any photo to view it full size." />
          <Gallery items={projectPhotos} variant="photos" />
        </div>
      </section>
      <section className="section section--tint">
        <div className="wrap">
          <SectionHead eyebrow="Recognition" title="Awards & certificates" />
          <Gallery items={recognition} variant="photos" />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
