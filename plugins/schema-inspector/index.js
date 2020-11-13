import { route } from 'part:@sanity/base/router';
import { BiBook } from 'react-icons/bi';
import Tool from './components/Tool';

export default {
  title: 'Schema Inspector',
  name: 'schemas',
  router: route('/:selectedDocumentId'),
  icon: BiBook,
  component: Tool,
};
