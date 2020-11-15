import { BiAddToQueue } from 'react-icons/bi';

export default {
  type: 'document',
  name: 'article',
  title: 'Article',
  icon: BiAddToQueue,
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
