import { Helmet } from 'react-helmet-async';

const SITE = 'https://cricbeatgame.com';
const DEFAULT_IMAGE = `${SITE}/assets/ProductTeaser.webp`;

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  jsonLd,
  type = 'website',
}) {
  const fullTitle = `${title} | CRICBEATGAME`;
  const url = `${SITE}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="CRICBEATGAME" />
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content="cricket strategy board game, tabletop cricket game, offline cricket game, 6-over card game, cricket game India" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CRICBEATGAME" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cricbeatgame" />
      <meta name="twitter:creator" content="@cricbeatgame" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
