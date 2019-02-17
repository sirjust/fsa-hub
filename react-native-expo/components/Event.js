import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import {
  RkButton,
  RkText,
  RkCard,
} from 'react-native-ui-kitten';
import { UtilStyles } from '../style/styles';
import moment from "moment";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, paddingBottom: 15 }}>
        <ScrollView
          // automaticallyAdjustContentInsets={true}
          // style={[UtilStyles.container, styles.screen]}
          >
          <RkCard>
            <View rkCardHeader={true}>
              <View>
                <RkText rkType='header'>Upcoming: {this.props.name}</RkText>
                <RkText rkType='subtitle'>{moment(this.props.date).format('MMMM Do YYYY, h:mm:ss a').split(",")[0]} | {this.props.start} - {this.props.end}</RkText>
              </View>
            </View>
            <View rkCardContent={true} style={{ paddingTop: 0 }}>
              <RkText rkType='compactCardText'>
                {this.props.description}
              </RkText>
            </View>
            {/* <View rkCardFooter={true}>
              <View style={styles.footerButtons}>
                <RkButton rkType='outline' style={{ marginRight: 16 }}>+ CALENDAR
                </RkButton>
                <RkButton rkType='outline'>EXPLORE</RkButton>
              </View>
            </View> */}
          </RkCard>
        </ScrollView>
      </View>
    );
  }
}