/*import React, { Component } from 'react';
import {View} from 'react-native'
import ZegoUIKitPrebuiltCall from '@zegocloud/zego-uikit-prebuilt-call-rn'

export default function VoiceCallPage(props) {
    return (
        <View style={{flex:1}}>
            <ZegoUIKitPrebuiltCall
                appID={2088919692}
                appSign='af08b6a26727bd0c6694a5989764744cd1003da5c0b694054859fb9e6b78b432'
                userID='12345' // userID can be something like a phone number or the user id on your own user system. 
                userName='codewitharyaman'
                callID='rn12345' // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    onHangUp: () => { props.navigation.navigate('Home') },
                }}
            />
        </View>
    );
}*/

import { View, Text } from 'react-native'
import React from 'react'

export default function CallScreen() {
  return (
    <View>
      <Text>CallScreen</Text>
    </View>
  )
}
