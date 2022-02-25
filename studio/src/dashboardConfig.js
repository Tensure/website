export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee444c06dd7c38dd689daf5',
                  title: 'Sanity Studio',
                  name: 'tensure-website-studio',
                  apiId: '065d818e-084c-407b-b8b0-ae5cd91b99f2'
                },
                {
                  buildHookId: '5ee444c0d717523139c5b9c8',
                  title: 'Blog Website',
                  name: 'tensure-website',
                  apiId: '1580d7b4-5625-4bb0-9cf1-83885255fb23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisecostanza/tensure-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tensure-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
