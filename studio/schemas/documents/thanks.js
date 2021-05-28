export default {
  name: 'thanks',
  type: 'document',
  title: 'Thank You',
  fieldsets: [
    {
      name: 'thanks',
      title: 'Thank You',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'thanksRamp',
      title: 'Thank You Ramp',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'thanksHiring',
      title: 'Thank You Hiring Guide',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      fieldset: 'thanks'
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
      fieldset: 'thanks'
    },
    {
      name: 'rampTitle',
      type: 'string',
      title: 'Ramp Title',
      fieldset: 'thanksRamp'
    },
    {
      name: 'rampMessage',
      type: 'bodyPortableText',
      title: 'Ramp Message',
      fieldset: 'thanksRamp'
    }
    ,
    {
      name: 'hiringTitle',
      type: 'string',
      title: 'Hiring Guide Title',
      fieldset: 'thanksHiring'
    },
    {
      name: 'hiringMessage',
      type: 'bodyPortableText',
      title: 'Hiring Guide Message',
      fieldset: 'thanksHiring'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
