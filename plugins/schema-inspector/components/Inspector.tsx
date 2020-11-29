import * as React from 'react';
import ReactInspector from 'react-json-inspector';
import { MdOpenInNew, MdContentCopy, MdFileDownload } from 'react-icons/md';
import Snackbar from 'part:@sanity/components/snackbar/default';
import Button from 'part:@sanity/components/buttons/anchor';
import TypeLink from './TypeLink';
import { typeExists, isCoreType } from '../data';
import styles from './styles.css';
import { TypeType } from '../types';

const Inspector = (props: { type: TypeType }) => {
  const { type } = props;
  const typeClean = { ...type };
  // do not print full icon function
  if (type?.icon?.name) typeClean.icon = type.icon.name;
  const [snackbarMsg, setSnackbarMsg] = React.useState(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbarMsg(`Copied "${text}" to clipboard`);
    });
  };

  const CopyInteractiveLabel = (props: { value: string }) => {
    const { value } = props;
    return (
      <span
        onClick={() => copy(value)}
        className={`${styles.copyLabel} ${styles.interactiveLabel}`}
      >
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

  const DownloadButton = () => {
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

  return (
    typeClean && (
      <div className={styles.inspectorContainer}>
        <DownloadButton />

        {/* too: make isExpanded configurable */}
        <ReactInspector
          data={typeClean}
          isExpanded={() => true}
          interactiveLabel={interactiveLabel}
        />

        {snackbarMsg && (
          <Snackbar
            title={snackbarMsg}
            kind="success"
            timeout={1200}
            onClose={() => setSnackbarMsg(null)}
          />
        )}
      </div>
    )
  );
};

export default Inspector;
