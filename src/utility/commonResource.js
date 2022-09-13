import { Platform } from "react-native";

export const CommonResource = {
    isPlatform: Platform.OS === 'ios' ? 'ios' : 'android',
    deviceId: '',
    ApiBaseURL: 'http://13.215.231.180/homestaa/api/user/',//server
    isDevelopment: true,
    GoogleMapAPiKey: 'AIzaSyC_Z4aAn8-qu6tKWDaiADvPcVEbVO1z0Pw',

}

export const asyncStorageKeys = {
    userToken: '@UserToken',
    userLocation: '@userLocation',
    userId: '@UserId',
    isSignup: '@isSignup',
    isProviderRegistered: '@isProviderRegistered',
    isProviderCompleteProfile: '@isProviderCompleteProfile',
    isProfileComplete: '@isProfileComplete',
}

export const consoleLog = (msg, item1, item2, item3) => {
    if (CommonResource.isDevelopment) {
        if (msg != undefined && item1 != undefined && item2 != undefined && item3 != undefined) {
            console.log(msg, item1, item2, item3)
        } else if (msg != undefined && item1 != undefined && item2 != undefined) {
            console.log(msg, item1, item2)
        } else if (msg != undefined && item1 != undefined) {
            console.log(msg, item1)
        } else {
            console.log(msg)
        }
    }
}
