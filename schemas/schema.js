import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import article from './documents/article';
import category from './documents/category';
import groqTest from './documents/groqTest';
import testTable from './documents/testTable';
import seo from './objects/seo';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([article, category, groqTest, testTable, seo]),
});
