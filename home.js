import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: "Leonardots"
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
        <View style={styles.container}>
                <Button
                    title="Play game"
                    onPress={()=> navigate('Play')}
                />
                <Button title="Settings" />
                <Button title="High Scores" />
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});