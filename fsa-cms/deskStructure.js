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
                .title("Full-Stack Apprenticeship")
                .child(
                    S.list()
                        .title("Tools")
                        .items([
                            S.listItem()
                                .title("React Native")
                                .child(
                                    S.documentList()
                                        .title('React Web')
                                        .menuItems(S.documentTypeList('nativeSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'nativeSchema' })
                                ),
                            S.listItem()
                                .title("React Web")
                                .child(
                                    S.documentList()
                                        .title('React Web')
                                        .menuItems(S.documentTypeList('webSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'webSchema' })
                                ),
                            S.listItem()
                                .title("Node.js")
                                .child(
                                    S.documentList()
                                        .title('Node.js')
                                        .menuItems(S.documentTypeList('backEndSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'backEndSchema' })
                                ),
                            S.listItem()
                                .title("Applied Computer Science")
                                .child(
                                    S.documentList()
                                        .title('Algorithms')
                                        .menuItems(S.documentTypeList('algorithmsSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'algorithmsSchema' })
                                ),
                            S.listItem()
                                .title("Command Line Interface (CLI) Tools")
                                .child(
                                    S.documentList()
                                        .title('Command Line (CLI)')
                                        .menuItems(S.documentTypeList('commandLineSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'commandLineSchema' })
                                ),
                            S.listItem()
                                .title("Javascript - ES17 & Beyond")
                                .child(
                                    S.documentList()
                                        .title('Javascript')
                                        .menuItems(S.documentTypeList('javascriptSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'javascriptSchema' })
                                ),
                            S.listItem()
                                .title("Git ")
                                .child(
                                    S.documentList()
                                        .title('Git')
                                        .menuItems(S.documentTypeList('gitSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'gitSchema' })
                                ),
                            S.listItem()
                                .title("Amazon Web Services")
                                .child(
                                    S.documentList()
                                        .title('Amazon Web Services')
                                        .menuItems(S.documentTypeList('awsSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'awsSchema' })
                                ),
                            S.listItem()
                                .title("Security")
                                .child(
                                    S.documentList()
                                        .title('Security')
                                        .menuItems(S.documentTypeList('securitySchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'securitySchema' })
                                ),
                        ])
                ),
                S.listItem()
                .title("City by City")
                .child(
                    S.list()
                        .title("Cities Around")
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
                .title("Finding Work & Opportunity")
                .child(
                    S.list()
                        .title("Tools")
                        .items([
                            S.listItem()
                                .title("Job Boards")
                                .child(
                                    S.documentList()
                                        .title('Job Boards')
                                        .menuItems(S.documentTypeList('jobBoardSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'jobBoardSchema' })
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
                            S.listItem()
                                .title("Digital Nomadism")
                                .child(
                                    S.documentList()
                                        .title('Digital Nomadism')
                                        .menuItems(S.documentTypeList('nomadSchema').getMenuItems())
                                        .filter('_type == $type && !defined(parents)')
                                        .params({ type: 'nomadSchema' })
                                ),
                        ])
                ),

        ]);