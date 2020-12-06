import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import article from './documents/article';
import category from './documents/category';
import person from './documents/person';
import faq from './documents/faq';
import groqTest from './documents/groqTest';
import altImage from './objects/altImage';
import richText from './objects/richText';
import seo from './objects/seo';
import video from './objects/video';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    category,
    person,
    faq,
    groqTest,
    altImage,
    richText,
    seo,
    video,
  ]),
});
