import React from 'react';
import { StateLink } from 'part:@sanity/base/router';
import { TypeType, TypeGroupType } from '../types';

interface TypeItemProps extends TypeType {
  isCoreType: boolean;
}

const TypeItem = (props: TypeItemProps) => {
  const { name, isCoreType } = props;

  return (
    <li key={name}>
      {isCoreType && (
        <a href={`https://www.sanity.io/docs/${name}-type`} target="_blank" rel="noreferrer">
          {name}
        </a>
      )}

      {!isCoreType && <StateLink state={{ typeName: name }}>{name}</StateLink>}
    </li>
  );
};

const TypeGroup = (props: TypeGroupType) => {
  const { types, groupType, title } = props;

  return (
    types?.length > 0 && (
      <div>
        <header>
          <h2>{title}</h2>
        </header>

        <ul>
          {types.map((t: TypeType) => (
            <TypeItem {...t} isCoreType={groupType === 'coreTypes'} key={t.name} />
          ))}
        </ul>
      </div>
    )
  );
};

export default TypeGroup;
