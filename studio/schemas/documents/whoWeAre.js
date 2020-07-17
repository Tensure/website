export default {
  name: 'whoWeAre',
  type: 'document',
  title: 'Who We Are',
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
      name: 'page',
      title: 'Page Content',
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
      name: 'title',
      type: 'string',
      title: 'Title',
      fieldset: 'page'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'page'
    },
    {
      name: 'paragraph1',
      type: 'text',
      title: 'Paragraph 1',
      fieldset: 'page'
    },
    {
      name: 'photo1',
      type: 'mainImage',
      title: 'Photo 1',
      fieldset: 'page'
    },
    {
      name: 'paragraph2',
      type: 'text',
      title: 'Paragraph 2',
      fieldset: 'page'
    },
    {
      name: 'photo2',
      type: 'mainImage',
      title: 'Photo 2',
      fieldset: 'page'
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
