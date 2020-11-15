import * as React from 'react';
import { StateLink, withRouterHOC } from 'part:@sanity/base/router';
import FullScreenDialog from 'part:@sanity/components/dialogs/fullscreen';
import Inspector from './Inspector';
import TypeGroup from './TypeGroup';
import { groups, getType } from '../data';
import { TypeType, TypeGroupType } from '../types';
import styles from './Tool.css';

interface Props {
  title: string;
  router: object;
}

const Tool = ({ title = 'Schema Inspector', router }: Props) => {
  const { typeName } = router.state;
  const { useState, useEffect } = React;
  const [selectedType, setSelectedType] = useState(getType(typeName));

  useEffect((): void => {
    const type = getType(typeName);
    setSelectedType(getType(typeName));
  }, [typeName]);

  const closeDialog = (): void => router.navigate({});

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>

      <main>
        <div className={styles.row}>
          {groups.map((group: TypeGroupType) => (
            <TypeGroup key={group.groupType} {...group} />
          ))}
        </div>

        {selectedType && (
          <FullScreenDialog title={typeName} onClose={closeDialog}>
            <Inspector type={selectedType} />
          </FullScreenDialog>
        )}
      </main>
    </div>
  );
};

export default withRouterHOC(Tool);
