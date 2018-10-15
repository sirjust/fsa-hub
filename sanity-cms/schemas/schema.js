import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import language from './language'
import resource from './resource'
import technology from './technology'
import post from './post'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, resource, technology, post])
})
