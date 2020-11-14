export type Type = {
  name: string;
  type: string;
};

export type TypeGroup = {
  groupType: 'docTypes' | 'customFieldTypes' | 'coreTypes';
  title: string;
  types: Array<Type>;
};
