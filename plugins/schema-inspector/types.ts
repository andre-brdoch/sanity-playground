export interface TypeType {
  name: string;
  type: string;
}

export interface TypeGroupType {
  groupType: 'docTypes' | 'customFieldTypes' | 'coreTypes';
  title: string;
  types: Array<TypeType>;
}
