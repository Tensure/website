export default {
  name: 'apprenticeship',
  type: 'document',
  title: 'Apprenticeships',
  fieldsets: [
    {
      name: 'program',
      title: 'Apprentice Program',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'overview',
      title: 'Apprentice Overview',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    },
    {
      name: 'application',
      title: 'Application',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'programTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'program'
    },
    {
      name: 'programSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'program'
    },
    {
      name: 'programDescription',
      type: 'bodyPortableText',
      title: 'Description',
      fieldset: 'program'
    },
    {
      name: 'programButton',
      type: 'string',
      title: 'Button Text',
      fieldset: 'program'
    },
    {
      name: 'programUrl',
      type: 'string',
      title: 'Button URL',
      fieldset: 'program'
    },
    {
      name: 'programPhoto',
      type: 'mainImage',
      title: 'Photo',
      fieldset: 'program'
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
      name: 'volunteerContent',
      type: 'bodyPortableText',
      title: 'Volunteerism Content',
      fieldset: 'overview'
    },
    {
      name: 'volunteerPhoto',
      type: 'mainImage',
      title: 'Volunteerism Photo',
      fieldset: 'overview'
    },
    {
      name: 'apprenticeshipContent',
      type: 'bodyPortableText',
      title: 'Apprenticeship Content',
      fieldset: 'overview'
    },
    {
      name: 'apprenticeshipPhoto',
      type: 'mainImage',
      title: 'Apprenticeship Photo',
      fieldset: 'overview'
    },
    {
      name: 'internshipContent',
      type: 'bodyPortableText',
      title: 'Internship Content',
      fieldset: 'overview'
    },
    {
      name: 'internshipPhoto',
      type: 'mainImage',
      title: 'Internship Photo',
      fieldset: 'overview'
    },
    {
      name: 'applicationTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'application'
    },
    {
      name: 'applicationSubtitle',
      type: 'string',
      title: 'Subtitle',
      fieldset: 'application'
    },
    {
      name: 'applicationPhoto',
      type: 'mainImage',
      title: 'Background Photo',
      fieldset: 'application'
    }
  ],
  preview: {
    select: {
      title: 'programTitle'
    }
  }
}
