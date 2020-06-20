export default {
  name: 'whatWeDo',
  type: 'document',
  title: 'What We Do',
  fieldsets: [
    {
      name: 'digitalInnovation',
      title: 'Digital Innovation Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'cloud',
      title: 'Cloud Infrastructure Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'data',
      title: 'Data & Insights Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'devOps',
      title: 'Dev Ops Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'managedServices',
      title: 'Managed Services Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title'
    },
    {
      name: 'pageSubtitle',
      type: 'string',
      title: 'Page Subtitle'
    },
    {
      name: 'innovationTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'digitalInnovation'
    },
    {
      name: 'innovationSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'digitalInnovation'
    },
    {
      name: 'innovationDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'digitalInnovation'
    },
    {
      name: 'cloudTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'cloud'
    },
    {
      name: 'cloudSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'cloud'
    },
    {
      name: 'cloudDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'cloud'
    },
    {
      name: 'dataTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'data'
    },
    {
      name: 'dataSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'data'
    },
    {
      name: 'dataDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'data'
    },
    {
      name: 'devTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'devOps'
    },
    {
      name: 'devSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'devOps'
    },
    {
      name: 'devDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'devOps'
    },
    {
      name: 'managedTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'managedServices'
    },
    {
      name: 'managedSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'managedServices'
    },
    {
      name: 'managedDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'managedServices'
    }
  ],
  preview: {
    select: {
      title: 'pageTitle'
    }
  }
}
