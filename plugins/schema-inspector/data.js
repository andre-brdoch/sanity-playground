import schema from 'part:@sanity/base/schema';
import coreTypes from '@sanity/schema/lib/sanity/coreTypes';

const { types } = schema._source;
const docTypes = types.filter(s => s.type === 'document');
const customFieldTypes = types.filter(s => !docTypes.includes(s));

export const groups = [
  {
    groupType: 'docTypes',
    title: 'Document Types',
    types: docTypes,
  },
  {
    groupType: 'customFieldTypes',
    title: 'Custom Field Types',
    types: customFieldTypes,
  },
  {
    groupType: 'coreTypes',
    title: 'Core Types',
    types: coreTypes,
  },
];

const allTypes = groups.reduce((acc, val) => acc.concat(val.types), []);

export const getType = name => allTypes.find(t => t.name === name);
