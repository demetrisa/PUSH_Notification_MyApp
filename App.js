/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import PushNotification from "react-native-push-notification"
import firebase from '@react-native-firebase/app'
//PUSH-START

class App2 extends React.Component {

    constructor() {
    super();
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
    console.log("NOTIFICATION:", "Demetris");
    //this.testPush();
    }

    testPush =()=>
    {
    PushNotification.localNotification({
      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
    });
    }

    render(){
    return (
                      <SafeAreaView>
                        <ScrollView
                          contentInsetAdjustmentBehavior="automatic"
                          style={styles.scrollView}>
                          <Header />
                          {global.HermesInternal == null ? null : (
                            <View style={styles.engine}>
                              <Text style={styles.footer}>Engine: Hermes</Text>
                            </View>
                          )}
                          <View style={styles.body}>
                              <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Test PUSH Notification</Text>
                                <Text style={styles.sectionDescription}>
                                  PUSH Notification
                                </Text>
                              </View>
                            <View style={styles.sectionContainer}>
                              <Text style={styles.sectionTitle}>Step One</Text>
                              <Text style={styles.sectionDescription}>
                                Edit <Text style={styles.highlight}>App.js</Text> to change this
                                screen and then come back to see your edits.
                              </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                              <Text style={styles.sectionTitle}>See Your Changes</Text>
                              <Text style={styles.sectionDescription}>
                                <ReloadInstructions />
                              </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                              <Text style={styles.sectionTitle}>Debug</Text>
                              <Text style={styles.sectionDescription}>
                                <DebugInstructions />
                              </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                              <Text style={styles.sectionTitle}>Learn More</Text>
                              <Text style={styles.sectionDescription}>
                                Read the docs to discover what to do next:
                              </Text>
                            </View>
                            <LearnMoreLinks />
                          </View>
                        </ScrollView>
                      </SafeAreaView>
    );
    }
};
class App extends React.Component {

    constructor() {
    super();
//    // *create channel
//    createChannel = () => {
//     const channel = new firebase.notification.Android.Channel(
//         'channelId',
//         'channelName',
//         firebase.notifications.Android.Importance.Max
//         ).setDescription('Description')
//
//         firebase.notifications().android.createChannel(channel);
//    };
//    //*Foreground Notification
//    notificationListenner =() => {
//        firebase.notifications.onNotification((notification) => {
//        if (Platform.OS === 'android'){
//            const localNotification = new firebase.notifications.Notification({
//            sound: 'default',
//            show_in_foreground : true,
//            })
//            .setNotificationId(notification.notificationId)
//            .setTitle(notification.title)
//            .setSubtitle(notification.subtitle)
//            .setBody(notification.body)
//            .setData(notification.data)
//            .android.setPriority(firebase.notifications>Android.Priority.High);
//
//            firebase.notifications().displayNotification(localNotification)
//            .catch((err)=>console.log(err))
//            }
//        });
//       };
    console.log("NOTIFICATION:", "Demetris");
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
        //createChannel();

          PushNotification.createChannel(
            {
              channelId: "high-importance-message-channel", // (required)
              channelName: "High Importance Message channel", // (required)
              channelDescription: "A channel to categorise high notifications", // (optional) default: undefined.
              soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
              importance: 4, // (optional) default: 4. Int value of the Android notification importance
              vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
          );
          PushNotification.getChannels(function (channel_ids) {
            console.log(channel_ids); // ['channel_id_1']
          });

          //PushNotification.deleteChannel('my-channel-id');
                    PushNotification.getChannels(function (channel_ids) {
                      console.log(channel_ids); // ['channel_id_1']
                    });
      },
      onNotification: function (notification) {
          console.log("NOTIFICATION:", notification);
//          if (notification.foreground) {
//             PushNotification.localNotification({
//               /* Android Only Properties */
//               channelId: "my-channel-id", // (required) channelId, if the channel doesn't exist, it will be created with options passed above (importance, vibration, sound). Once the channel is created, the channel will not be update. Make sure your channelId is different if you change these options. If you have created a custom channel, it will apply options of the channel.
//               title: notification.title, // (optional)
//               message: notification.message, // (required)
//             });
//          }
           if (Platform.OS === 'ios') {
              notification.finish(PushNotificationIOS.FetchResult.NoData);
           }
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
    }
    render(){
    return (
                      <SafeAreaView>
                        <ScrollView
                          contentInsetAdjustmentBehavior="automatic"
                          style={styles.scrollView}>
                          <Header />
                          {global.HermesInternal == null ? null : (
                            <View style={styles.engine}>
                              <Text style={styles.footer}>Engine: Hermes</Text>
                            </View>
                          )}
                          <View style={styles.body}>
                              <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Test PUSH Notification</Text>
                                <Text style={styles.sectionDescription}>
                                  PUSH Notification
                                </Text>
                              </View>
                            <View style={styles.sectionContainer}>
                              <Text style={styles.sectionTitle}>Step One</Text>
                              <Text style={styles.sectionDescription}>
                                Edit <Text style={styles.highlight}>App.js</Text> to change this
                                screen and then come back to see your edits.
                              </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                              <Text style={styles.sectionTitle}>See Your Changes</Text>
                              <Text style={styles.sectionDescription}>
                                <ReloadInstructions />
                              </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                              <Text style={styles.sectionTitle}>Debug</Text>
                              <Text style={styles.sectionDescription}>
                                <DebugInstructions />
                              </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                              <Text style={styles.sectionTitle}>Learn More</Text>
                              <Text style={styles.sectionDescription}>
                                Read the docs to discover what to do next:
                              </Text>
                            </View>
                            <LearnMoreLinks />
                          </View>
                        </ScrollView>
                      </SafeAreaView>
    );
    }
};
const  App1: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
