import { BiSmile } from 'react-icons/bi';

export default {
  type: 'document',
  name: 'person',
  title: 'Person',
  icon: BiSmile,
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
