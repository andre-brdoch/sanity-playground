import React from 'react';
import PropTypes from 'prop-types';
import ReactInspector from 'react-json-inspector';
import styles from '@sanity/desk-tool/lib/panes/documentPane/inspectDialog/inspectDialog.css';
import { Type } from '../types';

type Props = {
  type: Type;
};

class Inspector extends React.Component<Props> {
  render() {
    return (
      this.props.type && (
        <div className={styles.jsonInspectorContainer}>
          <ReactInspector data={this.props.type} isExpanded={() => true} />
        </div>
      )
    );
  }
}

export default Inspector;
