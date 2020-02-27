export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
      // ... other fields ...
      {
        title: 'Intro Title', 
        name: 'intro',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
          title: 'Intro Subtitle',
          name: 'introSubtitle',
          type: 'array', 
          of: [{type: 'block'}]
      },
      {
        title: 'Hero Image',
        name: 'heroImage',
        type: 'image',
      },
      {
        title: 'Pricing Header',
        name: 'pricingHeader',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Pricing Subheader',
        name: 'pricingSubheader',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Pricing',
        name: 'pricing',
        type: 'array',
        of: [
          {
            name: 'pricing',
            title: 'Pricing',
            type: 'pricing'
          }
        ]
      },
      {
        title: 'Project Header',
        name: 'projectHeader',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Contact Header',
        name: 'contactHeader',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Contact Subtitle',
        name: 'contactSubtitle',
        type: 'array', 
        of: [{type: 'block'}]
      },
    ]
  }