import schema from 'part:@sanity/base/schema';
import coreTypes from '@sanity/schema/lib/sanity/coreTypes';
import { Type, TypeGroup } from './types';

const { types } = schema._source;
const docTypes = types.filter((t: Type) => t.type === 'document');
const customFieldTypes = types.filter((t: Type) => !docTypes.includes(t));

export const groups: Array<TypeGroup> = [
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

export const getType = (name: string): Type => allTypes.find((t: Type) => t.name === name);
