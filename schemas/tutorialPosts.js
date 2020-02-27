import tags from "./tags";

export default {
    name: 'tutorialPosts',
    title: 'Tutorial Posts',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string'
      },
      {
        title: 'Page Path',
        name: 'slug',
        type: 'string'
      },
      {
        title: "Post Date",
        name: 'postDate',
        type:'date',
      },
      {
        title: 'Tags',
        name: 'tagOptions',
        type: 'array', 
        of: [{
            name: 'tags',
            title: 'Tags',
            type: 'string',
            validation: Rule => Rule.lowercase()
          },
        ],
        options: {
          layout: 'tags',
        }
      },
      {
        title: 'Intro', 
        name: 'intro',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Intro Excerpt', 
        name: 'introExcerpt',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Code Examples',
        name: 'codeExamples',
        type: 'array',
        of: [
          {
            name: 'codeExamples',
            title: 'Code Examples',
            type: 'codeExamples'
          },
          {
            name: 'justContent',
            title: 'Just Content',
            type: 'justContent'
          },
        ]
      }
    ],
    orderings: [
      {
        title: 'Post Date',
        name: 'postDateDesc',
        by: [
          {field: 'postDate', direction: 'asc'}
        ]
      },
    ]
  }