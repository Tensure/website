export default {
  name: 'contact',
  type: 'document',
  title: 'Contact Us',
  fields: [
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
