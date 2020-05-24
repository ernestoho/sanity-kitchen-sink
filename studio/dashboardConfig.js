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
                  buildHookId: '5ec9c80345228a7d057997cf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-a87q63wb',
                  apiId: '4e45c8c6-97e5-40ea-9f58-5f53f523783d'
                },
                {
                  buildHookId: '5ec9c803f5ea88659dd60d27',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-b3s84pqm',
                  apiId: 'bac9f9fb-ed00-4ed5-8fa5-83ded0366d45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ernestoho/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-b3s84pqm.netlify.app', category: 'apps'}
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
