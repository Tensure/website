export default {
  name: 'ad',
  type: 'document',
  title: 'AD',
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
    }
    // {
    //   name: 'overviewButton1',
    //   type: 'string',
    //   title: 'Button 1 Text',
    //   fieldset: 'overview'
    // },
    // {
    //   name: 'overviewButton2',
    //   type: 'string',
    //   title: 'Button 2 Text',
    //   fieldset: 'overview'
    // },
    // {
    //   name: 'overviewUrl2',
    //   type: 'string',
    //   title: 'Button 2 URL',
    //   fieldset: 'overview'
    // }
    // {
    //   name: 'interestedTitle',
    //   type: 'string',
    //   title: 'Title',
    //   fieldset: 'interested'
    // },
    // {
    //   name: 'interestedDescription',
    //   type: 'text',
    //   title: 'Description',
    //   fieldset: 'interested'
    // }
  ],
  preview: {
    select: {
      title: 'overviewTitle'
    }
  }
}
