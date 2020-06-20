export default {
  name: 'whoWeAre',
  type: 'document',
  title: 'Who We Are',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'paragraph1',
      type: 'text',
      title: 'Paragraph 1'
    },
    {
      name: 'photo1',
      type: 'mainImage',
      title: 'Photo 1'
    },
    {
      name: 'paragraph2',
      type: 'text',
      title: 'Paragraph 2'
    },
    {
      name: 'photo2',
      type: 'mainImage',
      title: 'Photo 2'
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
