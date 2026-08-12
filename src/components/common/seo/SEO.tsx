import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description?: string
  canonicalUrl?: string
}

export function SEO({ title, description, canonicalUrl }: SEOProps) {
  const defaultDescription = 'Adana Seyhan\'da CAT, Komatsu, Cummins, Isuzu iş makinesi yedek parça satışı. Piston, pompa, filtre, seal kit ve daha fazlası. WhatsApp\'tan hemen sorun.'
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description || defaultDescription} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  )
}
