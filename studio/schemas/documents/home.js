export default {
  name: 'home',
  type: 'document',
  title: 'Home Page',
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
      name: 'hero',
      title: 'Hero Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'about',
      title: 'About Us Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'services',
      title: 'Services Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'apprentice',
      title: 'Apprentice Content',
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
      name: 'heroTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'hero'
    },
    {
      name: 'heroSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'hero'
    },
    {
      name: 'heroDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'hero'
    },
    {
      name: 'heroVideo',
      type: 'string',
      title: 'Vimeo URL',
      fieldset: 'hero'
    },
    {
      name: 'aboutTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'about'
    },
    {
      name: 'aboutSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'about'
    },
    {
      name: 'aboutDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'about'
    },
    {
      name: 'aboutButton',
      type: 'string',
      title: 'Button Text',
      fieldset: 'about'
    },
    {
      name: 'aboutUrl',
      type: 'string',
      title: 'Button URL',
      fieldset: 'about'
    },
    {
      name: 'aboutPhoto',
      type: 'mainImage',
      title: 'Photo',
      fieldset: 'about'
    },
    {
      name: 'servicesTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'services'
    },
    {
      name: 'servicesSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'services'
    },
    {
      name: 'servicesDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'services'
    },
    {
      name: 'servicesButton',
      type: 'string',
      title: 'Button Text',
      fieldset: 'services'
    },
    {
      name: 'servicesUrl',
      type: 'string',
      title: 'Button URL',
      fieldset: 'services'
    },
    {
      name: 'servicesPhoto',
      type: 'mainImage',
      title: 'Photo',
      fieldset: 'services'
    },
    {
      name: 'apprenticeTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'apprentice'
    },
    {
      name: 'apprenticeSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'apprentice'
    },
    {
      name: 'apprenticeDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'apprentice'
    },
    {
      name: 'apprenticeButton',
      type: 'string',
      title: 'Button Text',
      fieldset: 'apprentice'
    },
    {
      name: 'apprenticeUrl',
      type: 'string',
      title: 'Button URL',
      fieldset: 'apprentice'
    },
    {
      name: 'apprenticePhoto',
      type: 'mainImage',
      title: 'Photo',
      fieldset: 'apprentice'
    }
  ],
  preview: {
    select: {
      title: 'heroSubtitle'
    }
  }
}
