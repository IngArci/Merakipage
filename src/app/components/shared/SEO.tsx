import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  preloadImage?: string;
}

const BASE_URL = 'https://grupoconstructormeraki.com.co';
const DEFAULT_IMAGE = `${BASE_URL}/images/og-meraki.jpg`;

export function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
  preloadImage,
}: SEOProps) {
  const fullTitle = title.includes('Meraki') ? title : `${title} | Grupo Constructor Meraki`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>

      <title>{fullTitle}</title>
      {preloadImage && <link rel="preload" as="image" href={preloadImage} imagesrcset={undefined} imagesizes={undefined} fetchpriority="high" />}
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}


      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content="Grupo Constructor Meraki" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
