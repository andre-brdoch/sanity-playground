import { BiQuestionMark } from 'react-icons/bi';

export default {
  type: 'document',
  name: 'faq',
  title: 'FAQ',
  icon: BiQuestionMark,
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
