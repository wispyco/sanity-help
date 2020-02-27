
export default {
    name: 'projectPost',
    title: 'Project Post',
    type: 'document',
    fields: [
      {
        title: 'Project Name',
        name: 'projectName',
        type: 'string'
      },
      {
        title: 'Project Short Description',
        name: 'projectShortDesc',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Project Features',
        name: 'projectFeatures',
        type: 'array',
        of: [
          {
            name: 'projectFeatures',
            title: 'Project Features',
            type: 'projectFeatures'
          }
        ]
      },
      {
        title: 'Image Feature',
        name: 'imageFeature',
        type: 'imageFeature'
      }
    ]
  }