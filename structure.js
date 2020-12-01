import S from '@sanity/desk-tool/structure-builder';

export default () => S.documentTypeList('testTable');

//
// export default () => S.list()
//   .title('Content')
//   .items([
//     S.listItem('category')
//       .title('Projects by category')
//       .child(
//         S.documentList()
//           .title('Projects by category')
//           .schemaType('article') // Because we want menu items for “sampleProjects”
//           .filter('_type == "category"')
//           .canHandleIntent((intent, params) => {
//             console.log('I never get logged :(');
//             return params.type === 'article';
//           })
//           .child((
//             id, // Returns the id for the selected category document
//           ) => S.documentList()
//             .title('Articles by category')
//             .schemaType('article')
//             .filter('_type == "article" && $id == category._ref')
//           // use the id in the filter to return sampleProjects that has a reference to the category
//             .params({ id }))
//           .canHandleIntent((intent, params) => {
//             console.log('BOOOOOO');
//             return params.type === 'article';
//           }),
//       ),
//
//     S.documentTypeListItem('groqTest'),
//   ]);
