export default {
  name: 'thanks',
  type: 'document',
  title: 'Thank You',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
