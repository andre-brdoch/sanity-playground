import { route } from 'part:@sanity/base/router';
import { BiBook } from 'react-icons/bi';
import Tool from './components/Tool';

const router = route('/schemas', [route('/:schemaType/:schemaName')]);

export default {
  title: 'Schema Inspector',
  name: 'schemas',
  router,
  icon: BiBook,
  // Todo: pass options
  component: Tool,
};
