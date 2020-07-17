export default {
  name: 'legal',
  type: 'document',
  title: 'Legal Stuff',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO Content Privacy Policy',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'privacy',
      title: 'Privacy Policy',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'seoTerms',
      title: 'SEO Content Terms of Use',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'terms',
      title: 'Terms Of Use',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Privacy Page Title',
      fieldset: 'seo'
    },
    {
      name: 'seoDescription',
      type: 'text',
      title: 'SEO Privacy Page Description',
      fieldset: 'seo'
    },
    {
      name: 'seoURL',
      type: 'string',
      title: 'SEO Privacy Page URL',
      fieldset: 'seo'
    },
    {
      name: 'seoPhoto',
      type: 'mainImage',
      title: 'SEO Privacy Page Photo',
      fieldset: 'seo'
    },
    {
      name: 'privacyTitle',
      type: 'string',
      title: 'Privacy Policy Title',
      fieldset: 'privacy'
    },
    {
      name: 'privacyContent',
      type: 'bodyPortableText',
      title: 'Privacy Policy Content',
      fieldset: 'privacy'
    },
    {
      name: 'seoTermsTitle',
      type: 'string',
      title: 'SEO Terms Page Title',
      fieldset: 'seoTerms'
    },
    {
      name: 'seoTermsDescription',
      type: 'text',
      title: 'SEO Terms Page Description',
      fieldset: 'seoTerms'
    },
    {
      name: 'seoTermsURL',
      type: 'string',
      title: 'SEO Terms Page URL',
      fieldset: 'seoTerms'
    },
    {
      name: 'seoTermsPhoto',
      type: 'mainImage',
      title: 'SEO Terms Page Photo',
      fieldset: 'seoTerms'
    },
    {
      name: 'termsTitle',
      type: 'string',
      title: 'Terms Of Use Title',
      fieldset: 'terms'
    },
    {
      name: 'termsContent',
      type: 'bodyPortableText',
      title: 'Terms Of Use Content',
      fieldset: 'terms'
    }
  ],
  preview: {
    select: {
      title: 'privacyTitle'
    }
  }
}
