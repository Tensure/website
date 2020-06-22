export default {
  name: 'legal',
  type: 'document',
  title: 'Legal Stuff',
  fieldsets: [
    {
      name: 'privacy',
      title: 'Privacy Policy',
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
      title: 'title'
    }
  }
}
