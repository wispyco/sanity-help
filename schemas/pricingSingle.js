export default {
    title:'Pricing',
    type: 'object',
    name: 'pricing',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Title Pretext',
        name: 'titlePretext',
        type: 'string',
      },
      {
        title: 'Title Aftertext',
        name: 'titleAftertext',
        type: 'string',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'string',
      },
      {
        title: 'Sub Title',
        name: 'subTitle',
        type: 'string',
      },
      {
        title: 'Feature',
        name: 'feature',
        type: 'array',
        of: [
          {
            name: 'featureItem',
            title: 'Feature Item',
            type: 'string'
          }
        ]
      },
      {
        title: 'Price Amount',
        name: 'price',
        type: 'string',
      },
      {
        title: 'Button Title',
        name: 'buttonTitle',
        type: 'string',
      }
    ] 
  }