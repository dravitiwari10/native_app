import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, ActivityIndicator, SafeAreaView } from 'react-native';
const Loader = (props) => {
    const { isLoader } = props;
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={isLoader}
            statusBarTranslucent={true}
            onRequestClose={() => { console.log("modal close") }}>
            <TouchableWithoutFeedback onPress={() => null} style={{ flex: 1 }} >
                <View style={styles.container}>
                    <View style={styles.visible_container}>
                        <ActivityIndicator size={'large'} color={'red'} />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(22,22,22,0.4)",
        justifyContent: 'center',
        alignItems: 'center'
    },
    visible_container: {
        width: '30%',
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Loader;