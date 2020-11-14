import React from 'react';
import PropTypes from 'prop-types';
import { StateLink, withRouterHOC } from 'part:@sanity/base/router';
import FullScreenDialog from 'part:@sanity/components/dialogs/fullscreen';
import Inspector from './Inspector';
import { groups, getSchema } from '../data';
import styles from './Tool.css';

class Tool extends React.Component {
  closeDialog = () => this.props.router.navigate({});

  renderHeader = () => (
    <header className={styles.header}>
      <h1 className={styles.title}>{this.props.title}</h1>
    </header>
  );

  renderGroup = (group) => group.schemas?.length > 0 && (
  <div>
    <header>
      <h2>{group.title}</h2>
    </header>
    <ul>
      {group.schemas.map((s) => (
        <li key={s.name}>
          <StateLink state={{ schemaType: group.type, schemaName: s.name }}>{s.name}</StateLink>
        </li>
      ))}
    </ul>
  </div>
  );

  render() {
    const { schemaType, schemaName } = this.props.router.state;

    return (
      <div className={styles.container}>
        {this.renderHeader()}

        <main>
          {groups.map((group) => this.renderGroup(group))}

          {schemaType && schemaName && (
            <FullScreenDialog title={schemaName} onClose={this.closeDialog}>
              <Inspector schema={getSchema({ schemaType, schemaName })} />
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
      schemaType: PropTypes.string,
      schemaName: PropTypes.string,
    }),
  }).isRequired,
};

Tool.defaultProps = {
  title: 'Schema Inspector',
};

export default withRouterHOC(Tool);
