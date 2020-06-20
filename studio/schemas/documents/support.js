export default {
  name: 'support',
  type: 'document',
  title: 'Support CTA',
  fields: [
    {
      name: 'supportTitle',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'supportSubtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'supportButton',
      type: 'string',
      title: 'Button Text'
    },
    {
      name: 'supportUrl',
      type: 'string',
      title: 'Button URL'
    },
    {
      name: 'supportImage',
      type: 'mainImage',
      title: 'Background Photo'
    }
  ],
  preview: {
    select: {
      title: 'supportTitle'
    }
  }
}
