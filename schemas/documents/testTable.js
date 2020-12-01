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
  const { cells } = props.value;
  console.log(cells);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '1rem',
        alignItems: 'center',
        height: '100%',
        minHeight: '40px',
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
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                borderRadius: '2px',
                padding: '0.25rem 3px',
                fontSize: '0.8em',
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

const table = {
  name: 'table',
  type: 'object',
  // validation: Rule => Rule.custom((a, b, c) => {
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
  //   return true;
  // }),
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
};

export default {
  type: 'document',
  name: 'testTable',
  title: 'Table',
  icon: () => <h2>T</h2>,
  fields: [table, { name: 'title', type: 'string' }],
};
