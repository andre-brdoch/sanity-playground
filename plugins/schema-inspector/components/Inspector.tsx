import React from 'react';
import PropTypes from 'prop-types';
import ReactInspector from 'react-json-inspector';
import styles from '@sanity/desk-tool/lib/panes/documentPane/inspectDialog/inspectDialog.css';

class Inspector extends React.Component {
  render = () => this.props.type && (
  <div className={styles.jsonInspectorContainer}>
    <ReactInspector data={this.props.type} isExpanded={() => true} />
  </div>
  );
}

Inspector.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Inspector.defaultProps = {
  type: null,
};

export default Inspector;
