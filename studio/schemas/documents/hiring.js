export default {
  name: 'hiring',
  type: 'document',
  title: 'Hiring',
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
      title: 'Hiring Guide Overview',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'download',
      title: 'Download Hiring guide',
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
      name: 'overviewButton',
      type: 'string',
      title: 'Button Text',
      fieldset: 'overview'
    },
    {
      name: 'downloadTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'download'
    },
    {
      name: 'downloadDescription',
      type: 'text',
      title: 'Description',
      fieldset: 'download'
    }
  ],
  preview: {
    select: {
      title: 'overviewTitle'
    }
  }
}
