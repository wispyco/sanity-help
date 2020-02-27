import IconPickerCustom from './components/IconPickerCustom.js'

export default {
    title:'Project Features',
    type: 'object',
    name: 'projectFeatures',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      // {
      //   name: 'icon',
      //   type: 'string',
      //   title: 'Icon',
      //   description: 'Choose icon for this service',
      //   inputComponent: IconPicker
      // },
      {
        name:'icon',
        type:'string',
        description:'pick a icon',
        inputComponent: IconPickerCustom
      },
    ] 
  }