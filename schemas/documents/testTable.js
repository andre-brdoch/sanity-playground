import React from 'react';

function toPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map(block => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return '';
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('');
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  );
}

const Row = props => {
  const { value, doNotTrim } = props;
  const { cells } = value;
  console.log(props);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cells?.length}, 1fr)`,
        gridGap: '0.25rem',
        alignItems: 'stretch',
        height: '100%',
        minHeight: '36px',
        margin: '3px',
      }}
    >
      {cells?.length ? (
        cells.map(cellBlocks => {
          console.log(cellBlocks);
          const text = toPlainText(cellBlocks.blocks);
          return (
            <div
              style={{
                border: '1px solid #a0a0a0',
                borderRadius: '2px',
                padding: '0.25rem 3px',
                fontSize: '0.8em',
                display: 'grid',
                alignItems: 'center',
                ...(doNotTrim
                  ? {}
                  : {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }),
              }}
            >
              {text}
            </div>
          );
        })
      ) : (
        <i>Empty</i>
      )}
    </div>
  );
};

const Table = props => {
  console.log(props);
  const rows = props.value?.rows;

  return (
    <div style={{ display: 'grid', gridAutoFlow: 'row', gridGap: '0.25rem' }}>
      {rows?.length
        && rows.map(row => {
          const value = { cells: row.cells };
          return <Row value={value} doNotTrim />;
        })}
    </div>
  );
};

const table = {
  name: 'table',
  type: 'object',
  fields: [
    {
      name: 'colAmount',
      type: 'number',
      validation: Rule => Rule.min(2)
        .max(5)
        .integer(),
      title: 'How many columns should the table have?',
      description: '2-5',
    },
    {
      name: 'rows',
      type: 'array',
      validation: Rule => Rule.custom((val, context) => {
        const { colAmount } = context.parent;
        if (colAmount == null) return 'You must set the column amount!';
        const isValid = val.every(row => row?.cells?.length === colAmount);
        return isValid ? true : `Every row must have exactly ${colAmount} cells`;
      }),
      options: {
        editModal: 'fullscreen',
      },
      of: [
        {
          type: 'object',
          name: 'row',
          preview: {
            select: { cells: 'cells' },
            component: Row,
          },
          fields: [
            {
              type: 'array',
              options: {
                layout: 'grid',
                editModal: 'fullscreen',
              },
              name: 'cells',
              of: [
                {
                  type: 'object',
                  name: 'cell',
                  description: 'For an empty cell, please insert an empty space',
                  preview: {
                    select: { blocks: 'blocks' },
                    prepare: selection => ({
                      media: () => <div>{toPlainText(selection.blocks)}</div>,
                    }),
                  },
                  fields: [
                    {
                      name: 'blocks',
                      type: 'array',
                      of: [{ type: 'block' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { rows: 'rows' },
    component: Table,
  },
};

export default {
  type: 'document',
  name: 'testTable',
  title: 'Table',
  icon: () => <h2>T</h2>,
  fields: [
    {
      name: 'body',
      type: 'array',
      options: { editModal: 'fullscreen' },
      of: [{ type: 'block' }, table],
    },
    table,
    { name: 'title', type: 'string' },
  ],
};
