import * as React from 'react';
import ReactInspector from 'react-json-inspector';
import { MdOpenInNew } from 'react-icons/md';
import TypeLink from './TypeLink';
import { typeExists, isCoreType } from '../data';
import styles from './Inspector.css';
import { TypeType } from '../types';

const interactiveLabel = (props: { isKey: boolean; keypath: string; value: string }) => {
  const { keypath, value, isKey } = props;
  const pathParts = keypath.split('.');
  const lastPart = pathParts[pathParts.length - 1];
  const hasLink = lastPart === 'type' && !isKey && value && typeExists(value);

  if (!hasLink) return '';

  const isExternalLink = isCoreType(value);
  return (
    <TypeLink typeName={value} isExternalLink={isExternalLink} className={styles.link}>
      {value}
      {isExternalLink && <MdOpenInNew className={styles.linkIcon} />}
    </TypeLink>
  );
};

const Inspector = (props: { type: TypeType }) => {
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
