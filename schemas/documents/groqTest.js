export default {
  type: 'document',
  name: 'groqTest',
  title: 'GROQ Test',
  fields: [
    {
      name: 'urlPath',
      type: 'string',
    },
    {
      name: 'seo',
      type: 'object',
      fields: [{ type: 'boolean', name: 'noindex' }],
    },
  ],
};
