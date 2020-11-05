// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import home from './documents/home'
import whatWeDo from './documents/whatWeDo'
import whoWeAre from './documents/whoWeAre'
import teamMember from './documents/teamMember'
import apprenticeship from './documents/apprenticeship'
import faq from './documents/faq'
import contact from './documents/contact'
import support from './documents/support'
import author from './documents/author'
import category from './documents/category'
import thanks from './documents/thanks'
import legal from './documents/legal'
import anthos from './documents/anthos'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    category,
    author,
    home,
    whoWeAre,
    teamMember,
    whatWeDo,
    apprenticeship,
    faq,
    support,
    contact,
    thanks,
    legal,
    anthos,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
