export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6321ebbcca134b0a1bcf61b3',
                  title: 'Sanity Studio',
                  name: 'benoit-copin-photography-studio-dbb5v3v2',
                  apiId: 'c469bd3a-ccf0-4387-b155-5fe8ab7732cb'
                },
                {
                  buildHookId: '6321ebbd4d6eba0d1e6bf4d6',
                  title: 'Portfolio Website',
                  name: 'benoit-copin-photography-web',
                  apiId: 'b6dda552-702d-46c8-a473-d00364c6afd2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bobthebc/Benoit-Copin-Photography',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://benoit-copin-photography-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
