import S from '@sanity/desk-tool/structure-builder'
import { FaHome } from 'react-icons/fa'
import { GiPathDistance } from 'react-icons/gi'


export default () =>
  S.list()
  .title('Content')
  .items([
    S.listItem()
      .title('Header')
      .child(
        S.document()
          .title('Header')
          .schemaType('header')
          .documentId('header')
      ),
      S.listItem()
      .title('Home Page')
      .icon(FaHome)
      .child(
        S.document()
          .title('Home Page Content')
          .schemaType('homePage')
          .documentId('homePage')
      ),
      S.listItem()
      .title('Tutorial Page')
      .icon(GiPathDistance)
      .child(
        S.document()
          .title('Tutorial Page Content')
          .schemaType('tutorialPage')
          .documentId('tutorialPage')
      ),
      
    // List out the rest of the document types, but filter out the config type
    ...S.documentTypeListItems()
      .filter(listItem => !['header', 'homePage', 'tutorialPage'].includes(listItem.getId()))
  ])

 
   
  
      