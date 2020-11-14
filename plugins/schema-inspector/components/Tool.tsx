import React, { Component, ReactNode } from 'react';
import { StateLink, withRouterHOC } from 'part:@sanity/base/router';
import FullScreenDialog from 'part:@sanity/components/dialogs/fullscreen';
import Inspector from './Inspector.tsx';
import { groups, getType } from '../data';
import { Type, TypeGroup } from '../types';
import styles from './Tool.css';

type Props = {
  title: string;
  router: object;
};

class Tool extends React.Component<Props> {
  static defaultProps = {
    title: 'Schema Inspector',
  };

  closeDialog = (): void => this.props.router.navigate({});

  renderGroup = (group: TypeGroup): React.ReactNode =>
    group.types?.length > 0 && (
      <div>
        <header>
          <h2>{group.title}</h2>
        </header>
        <ul>
          {group.types.map((t: Type) => (
            <li key={t.name}>
              {group.groupType === 'coreTypes' ? (
                <a
                  href={`https://www.sanity.io/docs/${t.name}-type`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.name}
                </a>
              ) : (
                <StateLink state={{ typeName: t.name }}>{t.name}</StateLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    );

  render() {
    const { typeName } = this.props.router.state;

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{this.props.title}</h1>
        </header>

        <main>
          {groups.map((group: TypeGroup) => this.renderGroup(group))}

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
