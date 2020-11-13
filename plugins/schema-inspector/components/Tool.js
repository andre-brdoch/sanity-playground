import React from 'react';
import PropTypes from 'prop-types';
import { StateLink, withRouterHOC } from 'part:@sanity/base/router';
import schema from 'part:@sanity/base/schema';
import Inspector from './Inspector';
import styles from './Tool.css';

const docSchemas = schema._source.types;

const getSchema = ({ schemaType, schemaName }) => docSchemas.filter((s) => s.name === schemaName)?.[0];

console.log(docSchemas);

class Tool extends React.Component {
  renderHeader = () => (
    <header className={styles.header}>
      <h1 className={styles.title}>{this.props.title}</h1>
    </header>
  );

  renderLinks = () => (
    <ul>
      {docSchemas?.length > 0
        && docSchemas.map((s) => (
          <li key={s.name}>
            <StateLink state={{ schemaType: s.type, schemaName: s.name }}>{s.name}</StateLink>
          </li>
        ))}
    </ul>
  );

  render() {
    const { schemaType, schemaName } = this.props.router.state;

    return (
      <div className={styles.container}>
        {this.renderHeader()}

        <main>
          {docSchemas?.length > 0 && this.renderLinks()}

          {schemaType && schemaName && <Inspector schema={getSchema({ schemaType, schemaName })} />}
        </main>
      </div>
    );
  }
}

Tool.propTypes = {
  title: PropTypes.string,
  router: PropTypes.shape({
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
