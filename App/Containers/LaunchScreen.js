import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import DeviceInfo from 'react-native-device-info'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  getDeviceInfo () {
    try {
      return (
        `${DeviceInfo.getReadableVersion()} ${DeviceInfo.getBuildNumber()}`
      )
    } catch (e) {
      return ('')
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              {/* FINALLY CODE-PUSHED! */}
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
            <Text style={styles.sectionText}>{ this.getDeviceInfo() }</Text>
          </View>

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}
