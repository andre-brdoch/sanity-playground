import { BiFolderOpen } from 'react-icons/bi';

export default {
  type: 'document',
  name: 'category',
  title: 'Category',
  icon: BiFolderOpen,
  fields: [
    { type: 'string', name: 'kind' },
    {
      type: 'altImage',
      name: 'mainImage',
      title: 'Thumbnail',
    },
    { type: 'seo', name: 'seo' },
  ],
};
