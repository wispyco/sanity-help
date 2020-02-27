export default {
    name: 'tutorialPage',
    title: 'Tutorial Page',
    type: 'document',
    fields: [
      {
        title: 'Intro Title', 
        name: 'intro',
        type: 'array', 
        of: [{type: 'block'}]
      }
    ]
  }