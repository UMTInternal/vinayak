// React 19 hoists <title>, <meta> and <link> into <head> automatically.
const SITE = 'https://www.vinayakrelocation.in';

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | Vinayak Relocation` : 'Vinayak Relocation | Best Packers and Movers in Indore & Rau';
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={SITE + path} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={SITE + path} />
    </>
  );
}
