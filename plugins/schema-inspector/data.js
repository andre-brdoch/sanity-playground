import schema from 'part:@sanity/base/schema';
import coreTypes from '@sanity/schema/lib/sanity/coreTypes';

const schemas = schema._source.types;
const docTypes = schemas.filter((s) => s.type === 'document');
const customFieldTypes = schemas.filter((s) => !docTypes.includes(s));

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

export const getSchema = ({ schemaType, schemaName }) => groups
  .filter((group) => group.type === schemaType)
  .map((group) => group.schemas.find((s) => s.name === schemaName))?.[0];
