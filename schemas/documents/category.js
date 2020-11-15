import { BiAbacus } from 'react-icons/bi';

export default {
  type: 'document',
  name: 'category',
  title: 'Category',
  icon: BiAbacus,
  fields: [
    { type: 'string', name: 'kind' },
    { type: 'seo', name: 'seo' },
  ],
};
