import React from 'react';
import PropTypes from 'prop-types';
import ReactInspector from 'react-inspector';
import styles from '@sanity/desk-tool/lib/panes/documentPane/inspectDialog/inspectDialog.css';

class Inspector extends React.Component {
  render = () => this.props.schema && (
  <div className={styles.jsonInspectorContainer}>
    <ReactInspector data={this.props.schema} isExpanded={() => true} />
  </div>
  );
}

Inspector.propTypes = {
  schema: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Inspector.defaultProps = {
  schema: null,
};

export default Inspector;
