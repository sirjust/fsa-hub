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
                .title("Technical Knowledge Base")
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
                                .title("Algorithms & Interviews")
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
                                .title("Data Science")
                                .child(
                                    S.documentList()
                                        .title('Data Science')
                                        .menuItems(S.documentTypeList('dataScienceSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'dataScienceSchema' })
                                ),
                            S.listItem()
                                .title("Security")
                                .child(
                                    S.documentList()
                                        .title('Security')
                                        .menuItems(S.documentTypeList('securitySchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'startupSchema' })
                                ),
                            


                        ])
                ),
                S.listItem()
                .title("City by City")
                .child(
                    S.list()
                        .title("Tools")
                        .items([
                            S.listItem()
                                .title("Seattle")
                                .child(
                                    S.documentList()
                                        .title('Seattle')
                                        .menuItems(S.documentTypeList('seattleSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'seattleSchema' })
                                ),
                            S.listItem()
                                .title("Bellevue - East Side")
                                .child(
                                    S.documentList()
                                        .title('East Side')
                                        .menuItems(S.documentTypeList('seattleSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'seattleSchema' })
                                ),
                        ])
                ),
                S.listItem()
                .title("AWS")
                .child(
                    S.list()
                        .title("Tools")
                        .items([
                            S.listItem()
                                .title("AWS")
                                .child(
                                    S.documentList()
                                        .title('AWS')
                                        .menuItems(S.documentTypeList('awsSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'awsSchema' })
                                ),
                            S.listItem()
                                .title("Community")
                                .child(
                                    S.documentList()
                                        .title('Community')
                                        .menuItems(S.documentTypeList('communitySchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'communitySchema' })
                                ),
                        ])
                ),
                S.listItem()
                .title("Economic Knowledge Base")
                .child(
                    S.list()
                        .title("Tools")
                        .items([
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
                                .title("Full Time Work")
                                .child(
                                    S.documentList()
                                        .title('Fulltime Jobs')
                                        .menuItems(S.documentTypeList('fulltimeSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'fulltimeSchema' })
                                ),
                            S.listItem()
                                .title("Community")
                                .child(
                                    S.documentList()
                                        .title('Community')
                                        .menuItems(S.documentTypeList('communitySchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'communitySchema' })
                                ),
                            S.listItem()
                                .title("Startup Resources")
                                .child(
                                    S.documentList()
                                        .title('Startup')
                                        .menuItems(S.documentTypeList('startupSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'startupSchema' })
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

        ]);