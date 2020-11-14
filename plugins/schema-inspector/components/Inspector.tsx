import React from 'react';
import ReactInspector from 'react-json-inspector';
import styles from '@sanity/desk-tool/lib/panes/documentPane/inspectDialog/inspectDialog.css';
import { TypeType } from '../types';

interface Props {
  type: TypeType;
}

const Inspector = (props: Props) => {
  const { type } = props;

  return (
    type && (
      <div className={styles.jsonInspectorContainer}>
        {/* too: make isExpanded configurable */}
        <ReactInspector data={type} isExpanded={() => true} />
      </div>
    )
  );
};

export default Inspector;
