import { AiOutlineFileImage, AiOutlineVideoCameraAdd } from 'react-icons/ai';
// import link from './link';

export default {
  name: 'richText',
  type: 'array',
  title: 'Body',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        // annotations: [link],
      },
    },
    {
      type: 'altImage',
      icon: AiOutlineFileImage,
    },
    {
      type: 'video',
      icon: AiOutlineVideoCameraAdd,
    },
  ],
};
