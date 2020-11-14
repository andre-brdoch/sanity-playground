export default {
  type: 'document',
  name: 'article',
  title: 'Article',
  fields: [
    { type: 'string', name: 'title' },
    { type: 'seo', name: 'seo' },
    {
      type: 'reference',
      name: 'category',
      to: [{ type: 'category' }],
    },
  ],
};
