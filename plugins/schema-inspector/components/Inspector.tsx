import * as React from 'react';
import ReactInspector from 'react-json-inspector';
import { MdOpenInNew, MdContentCopy } from 'react-icons/md';
import TypeLink from './TypeLink';
import { typeExists, isCoreType } from '../data';
import styles from './Inspector.css';
import { TypeType } from '../types';

const copy = text => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('copied', text);
  });
};

const CopyInteractiveLabel = (props: { value: string }) => {
  const { value } = props;
  return (
    <span onClick={() => copy(value)} className={`${styles.copyLabel} ${styles.interactiveLabel}`}>
      {value}
      <MdContentCopy className={styles.labelIcon} />
    </span>
  );
};

const LinkInteractiveLabel = (props: { value: string }) => {
  const { value } = props;
  const isExternalLink = isCoreType(value);
  return (
    <TypeLink
      typeName={value}
      isExternalLink={isExternalLink}
      className={`${styles.labelLink} ${styles.interactiveLabel}`}
    >
      {value}
      {isExternalLink && <MdOpenInNew className={styles.labelIcon} />}
    </TypeLink>
  );
};

const interactiveLabel = (props: { isKey: boolean; keypath: string; value: string }) => {
  const { keypath, value, isKey } = props;
  const pathParts = keypath.split('.');
  const lastPart = pathParts[pathParts.length - 1];
  const isLink = lastPart === 'type' && !isKey && value && typeExists(value);
  const canBeCopied = lastPart === 'name' && !isKey && value;

  if (isLink) return <LinkInteractiveLabel value={value} />;
  if (canBeCopied) return <CopyInteractiveLabel value={value} />;
  return '';
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
