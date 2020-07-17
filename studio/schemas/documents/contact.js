export default {
  name: 'contact',
  type: 'document',
  title: 'Contact Us',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO Content',
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
      title: 'SEO Page Title',
      fieldset: 'seo'
    },
    {
      name: 'seoDescription',
      type: 'text',
      title: 'SEO Page Description',
      fieldset: 'seo'
    },
    {
      name: 'seoURL',
      type: 'string',
      title: 'SEO Page URL',
      fieldset: 'seo'
    },
    {
      name: 'seoPhoto',
      type: 'mainImage',
      title: 'SEO Page Photo',
      fieldset: 'seo'
    },
    {
      name: 'contactTitle',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'contactSubtitle',
      type: 'string',
      title: 'Subtitle'
    }
  ],
  preview: {
    select: {
      title: 'contactTitle'
    }
  }
}
