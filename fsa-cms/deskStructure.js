// This the the structure for the whole cms

import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ! [
    "config"
].includes(listItem.getId())

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Knowledge Base")
                .child(
                    S.list()
                        .title("Tools")
                        .items([
                            S.listItem()
                                .title("Frontend")
                                .child(
                                    S.documentList()
                                        .title('Frontend')
                                        .menuItems(S.documentTypeList('frontEndSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'frontEndSchema' })
                                ),

                            S.listItem()
                                .title("Backend")
                                .child(
                                    S.documentList()
                                        .title('Backend')
                                        .menuItems(S.documentTypeList('backEndSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'backEndSchema' })
                                ),
                            S.listItem()
                                .title("AWS")
                                .child(
                                    S.documentList()
                                        .title('AWA')
                                        .menuItems(S.documentTypeList('awsSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'awsSchema' })
                                ),
                            S.listItem()
                                .title("Freelance")
                                .child(
                                    S.documentList()
                                        .title('Freelance')
                                        .menuItems(S.documentTypeList('freelanceSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'freelanceSchema' })
                                ),
                            S.listItem()
                                .title("Fulltime Jobs")
                                .child(
                                    S.documentList()
                                        .title('Fulltime Jobs')
                                        .menuItems(S.documentTypeList('fulltimeSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'fulltimeSchema' })
                                ),
                            S.listItem()
                                .title("Algorithms")
                                .child(
                                    S.documentList()
                                        .title('Algorithms')
                                        .menuItems(S.documentTypeList('algorithmsSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'algorithmsSchema' })
                                ),
                            S.listItem()
                                .title("Command Line")
                                .child(
                                    S.documentList()
                                        .title('Command Line')
                                        .menuItems(S.documentTypeList('commandLineSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'commandLineSchema' })
                                ),
                            S.listItem()
                                .title("Javascript")
                                .child(
                                    S.documentList()
                                        .title('Javascript')
                                        .menuItems(S.documentTypeList('javascriptSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'javascriptSchema' })
                                ),
                            S.listItem()
                                .title("Git")
                                .child(
                                    S.documentList()
                                        .title('Git')
                                        .menuItems(S.documentTypeList('gitSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'gitSchema' })
                                ),
                            S.listItem()
                                .title("Mentorship")
                                .child(
                                    S.documentList()
                                        .title('Mentorship')
                                        .menuItems(S.documentTypeList('mentorshipSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'mentorshipSchema' })
                                ),


                        ])
                ),
            // ...S.documentTypeListItems()

        ]);

// export default () =>
//     S.list()
//         .title("Content")
//         .items([
//             S.listItem()
//                 .title('Products by categories')
//                 .child(
//                     S.documentList()
//                         .title('Parent categories')
//                         .menuItems(S.documentTypeList('tool').getMenuItems())
//                         .filter('_type == $type && !defined(parents)')
//                         .params({ type: 'tool' })
//                 )
//             // The rest of the structure
//         ]);