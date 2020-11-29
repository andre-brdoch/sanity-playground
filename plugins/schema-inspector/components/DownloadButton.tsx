import * as React from 'react';
import Button from 'part:@sanity/components/buttons/anchor';
import { MdFileDownload } from 'react-icons/md';
import { TypeType } from '../types';
import styles from './styles.css';

const DownloadButton = (props: { type: TypeType }) => {
  const { type } = props;
  const json = JSON.stringify(type, null, 2);
  const data = `text/json;charset=utf-8,${encodeURIComponent(json)}`;
  const href = `data:'${data}'`;
  const name = `${type.name}-schema.json`;

  return (
    <Button
      href={href}
      download={name}
      className={styles.downloadButton}
      color="primary"
      size="small"
      icon={MdFileDownload}
    >
      Download JSON
    </Button>
  );
};

export default DownloadButton;
