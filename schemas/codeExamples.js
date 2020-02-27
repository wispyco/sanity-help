export default {
    title:'Code Example',
    type: 'object',
    name: 'codeExamples',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Code Block',
        of: [
          {
            type: 'block'
          },
          {
            type: 'code'
          }
        ]
      }
    ] 
  }