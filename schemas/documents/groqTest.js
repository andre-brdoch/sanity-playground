import { MdCloudQueue } from 'react-icons/md';

export default {
  type: 'document',
  name: 'groqTest',
  title: 'GROQ Test',
  icon: MdCloudQueue,
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
