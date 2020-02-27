// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import projectPost from './projectPost';
import image from './image';
import header from './header';
import homePage from './homePage';
import pricingSingle from './pricingSingle';
import tutorialPage from './tutorialPage';
import tutorialPosts from './tutorialPosts';
import codeExamples from './codeExamples';
import justContent from './justContent';
import submissionForm from './submissionForm';
import projectFeaturesSingle from './projectFeaturesSingle';












// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    projectPost,
    image,
    header,
    homePage,
    pricingSingle,
    tutorialPage,
    tutorialPosts,
    codeExamples,
    justContent,
    submissionForm,
    projectFeaturesSingle
  ])
})
