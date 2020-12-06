import { BiEditAlt } from 'react-icons/bi';

export default {
  type: 'document',
  name: 'article',
  title: 'Article',
  icon: BiEditAlt,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Heading',
      validation: Rule => Rule.required(),
    },
    {
      type: 'altImage',
      name: 'mainImage',
      title: 'Thumbnail',
      validation: Rule => Rule.required(),
    },
    { type: 'seo', name: 'seo' },
    {
      type: 'reference',
      name: 'category',
      to: [{ type: 'category' }],
    },
    {
      type: 'richText',
      name: 'body',
      validation: Rule => Rule.required(),
    },
  ],
};
