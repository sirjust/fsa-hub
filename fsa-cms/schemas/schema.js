// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import resource from './resource'
import tool from './tool'
import backendTools from './backEndSchema'

// Schemes
import frontendSchema from './frontEndSchema'
import backendSchema from './backEndSchema'
import awsSchema from './awsSchema'
import freelanceSchema from './freelanceSchema'
import fulltimeSchema from './fulltimeSchema'
import commandLineSchem from './commandLineSchema'
import javascriptSchema from './javascriptSchema'
import gitSchema from './gitSchema'
import mentorshipSchema from './mentorshipSchema'
import algorithmsSchema from './algorithmsSchema'
import dataScienceSchema from "./dataScienceSchema";
import startupSchema from "./startupSchema";
import securitySchema from "./securitySchema";
import seattleSchema from "./seattleSchema";
import communitySchema from "./communitySchema";


// Then we give our schema to the builder and provide the result to Sanity

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    frontendSchema,
    backendSchema,
    awsSchema,
    freelanceSchema,
    fulltimeSchema,
    commandLineSchem,
    javascriptSchema,
    gitSchema,
    mentorshipSchema,
    algorithmsSchema,
    dataScienceSchema,
    startupSchema,
    securitySchema,
    seattleSchema,
    communitySchema,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ])
})
