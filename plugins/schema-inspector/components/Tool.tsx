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

class Tool extends React.Component<Props> {
  static defaultProps = {
    title: 'Schema Inspector',
  };

  closeDialog = (): void => this.props.router.navigate({});

  render() {
    const { title, router } = this.props;
    const { typeName } = router.state;

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </header>

        <main>
          {groups.map((group: TypeGroupType) => (
            <TypeGroup key={group.groupType} {...group} />
          ))}

          {typeName && (
            <FullScreenDialog title={typeName} onClose={this.closeDialog}>
              <Inspector type={getType(typeName)} />
            </FullScreenDialog>
          )}
        </main>
      </div>
    );
  }
}

export default withRouterHOC(Tool);
