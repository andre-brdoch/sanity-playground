export default {
  type: 'object',
  name: 'video',
  title: 'Video',
  fields: [
    {
      type: 'url',
      name: 'url',
      title: 'Video URL',
      description: 'Youtube or Vimeo URL',
      validation: Rule => Rule.required().uri({
        scheme: ['https'],
      }),
    },
  ],
};
