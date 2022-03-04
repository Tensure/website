export default {
  name: 'ad',
  type: 'document',
  title: 'Application Development',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'overview',
      title: 'AD Overview',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    }
    // {
    //   name: 'interested',
    //   title: 'Interested',
    //   options: {
    //     collapsible: true, // Makes the whole fieldset collapsible
    //     collapsed: true
    //   }
    // }
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
      name: 'overviewTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'overview'
    },
    {
      name: 'overviewSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'overview'
    },
    {
      name: 'overviewDescription',
      type: 'text',
      title: 'Description',
      fieldset: 'overview'
    },
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Video Title',
      fieldset: 'overview'
    },
    {
      name: 'heroVideo',
      type: 'string',
      title: 'Hero Video URL',
      fieldset: 'overview'
    }
  ],
  preview: {
    select: {
      title: 'overviewTitle'
    }
  }
}
