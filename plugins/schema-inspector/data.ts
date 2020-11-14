import schema from 'part:@sanity/base/schema';
import coreTypes from '@sanity/schema/lib/sanity/coreTypes';
import { TypeType, TypeGroupType } from './types';

const { types } = schema._source;
const docTypes = types.filter((t: TypeType) => t.type === 'document');
const customFieldTypes = types.filter((t: TypeType) => !docTypes.includes(t));

export const groups: Array<TypeGroupType> = [
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

export const getType = (name: string): TypeType => allTypes.find((t: TypeType) => t.name === name);
