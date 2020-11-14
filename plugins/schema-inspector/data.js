import schema from 'part:@sanity/base/schema';
import coreTypes from '@sanity/schema/lib/sanity/coreTypes';

const schemas = schema._source.types;
const docTypes = schemas.filter(s => s.type === 'document');
const customFieldTypes = schemas.filter(s => !docTypes.includes(s));

export const groups = [
  {
    type: 'docTypes',
    title: 'Documents',
    schemas: docTypes,
  },
  {
    type: 'customFieldTypes',
    title: 'Custom Field Types',
    schemas: customFieldTypes,
  },
  {
    type: 'coreTypes',
    title: 'Core Types',
    schemas: coreTypes,
  },
];

const allTypes = groups.reduce((acc, val) => acc.concat(val.schemas), []);

export const getSchema = typeName => allTypes.find(t => t.name === typeName);
