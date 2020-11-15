import * as React from 'react';
import { StateLink } from 'part:@sanity/base/router';
import DefaultPreview from 'part:@sanity/components/previews/default';
import { TypeType, TypeGroupType } from '../types';
import styles from './Tool.css';

interface TypeItemProps extends TypeType {
  isCoreType: boolean;
  children?: React.ReactNode;
}

const TypeItem = (props: TypeItemProps) => {
  const { name, isCoreType, children } = props;

  return (
    <li>
      {!isCoreType && (
        <StateLink state={{ typeName: name }} className={styles.link}>
          {children}
        </StateLink>
      )}

      {isCoreType && (
        <a
          className={styles.link}
          href={`https://www.sanity.io/docs/${name}-type`}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      )}
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

        <ul className={styles.list}>
          {types.map((t: TypeType) => (
            <TypeItem {...t} isCoreType={groupType === 'coreTypes'} key={t.name}>
              <DefaultPreview title={t.name} subtitle={t.title} media={t.icon} />
            </TypeItem>
          ))}
        </ul>
      </div>
    )
  );
};

export default TypeGroup;
