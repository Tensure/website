export default {
  name: 'ramp',
  type: 'document',
  title: 'Ramp',
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
      name: 'webinar',
      title: 'Ramp Webinar',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'register',
      title: 'Registration',
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
      name: 'webinarTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'webinar'
    },
    {
      name: 'webinarSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'webinar'
    },
    {
      name: 'webinarDescription',
      type: 'bodyPortableText',
      title: 'Webinar Description',
      fieldset: 'webinar'
    },
    {
      name: 'webinarButton',
      type: 'string',
      title: 'Button Text',
      fieldset: 'webinar'
    },
    {
      name: 'registerTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'register'
    },
    {
      name: 'registerDescription',
      type: 'text',
      title: 'Description',
      fieldset: 'register'
    }
  ],
  preview: {
    select: {
      title: 'webinarTitle'
    }
  }
}
