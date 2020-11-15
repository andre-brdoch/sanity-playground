import * as React from 'react';
import ReactInspector from 'react-json-inspector';
import styles from './Inspector.css';
import { TypeType } from '../types';

const Link = (props) => <span className={styles.inspectorLink}>{props.children}</span>;

const interactiveLabel = (props) => {
  const { keypath, value, isKey } = props;
  const pathParts = keypath.split('.');
  const lastPart = pathParts[pathParts.length - 1];

  console.log(props);
  console.log(keypath);
  console.log(lastPart);
  console.log('----');

  if (lastPart === 'type' && !isKey) {
    return <Link>{value}</Link>;
  }

  return '';
};

interface Props {
  type: TypeType;
}

const Inspector = (props: Props) => {
  const { type } = props;

  return (
    type && (
      <div className={styles.jsonInspectorContainer}>
        {/* too: make isExpanded configurable */}
        <ReactInspector data={type} isExpanded={() => true} interactiveLabel={interactiveLabel} />
      </div>
    )
  );
};

export default Inspector;
