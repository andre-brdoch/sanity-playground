export default {
  type: 'image',
  name: 'altImage',
  title: 'Image with alt text',
  fields: [
    {
      type: 'string',
      name: 'alt',
      title: 'Alt Text',
      validation: Rule => Rule.required(),
    },
  ],
};
