import React from 'react';
import PropTypes from 'prop-types';
import { StateLink, withRouterHOC } from 'part:@sanity/base/router';
import FullScreenDialog from 'part:@sanity/components/dialogs/fullscreen';
import Inspector from './Inspector.tsx';
import { groups, getType } from '../data.ts';
import styles from './Tool.css';

class Tool extends React.Component {
  closeDialog = (): void => this.props.router.navigate({});

  renderHeader = () => (
    <header className={styles.header}>
      <h1 className={styles.title}>{this.props.title}</h1>
    </header>
  );

  renderGroup = (group) =>
    group.types?.length > 0 && (
      <div>
        <header>
          <h2>{group.title}</h2>
        </header>
        <ul>
          {group.types.map((s) => (
            <li key={s.name}>
              {group.groupType === 'coreTypes' ? (
                <a
                  href={`https://www.sanity.io/docs/${s.name}-type`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.name}
                </a>
              ) : (
                <StateLink state={{ typeName: s.name }}>{s.name}</StateLink>
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
        {this.renderHeader()}

        <main>
          {groups.map((group) => this.renderGroup(group))}

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

Tool.propTypes = {
  title: PropTypes.string,
  router: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.shape({
      typeName: PropTypes.string,
    }),
  }).isRequired,
};

Tool.defaultProps = {
  title: 'Schema Inspector',
};

export default withRouterHOC(Tool);