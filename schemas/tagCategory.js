export default {
    title: 'Tag Category',
    name: 'tagCategory1',
    type: 'object',
    fields: [
        {
            title: 'Tags', 
            name: 'tags',
            type: 'array', 
            of: [{type: 'tags'}],
            validation: false
        }
    ]
}



