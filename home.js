import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {retrieveSettings} from './storage';

export default class Home extends Component {
    static navigationOptions = {
        title: "Leonardots"
    }

    componentDidMount() {
        retrieveSettings().then((results) => {
            let settings = JSON.parse(results);
            global.colorsOn = settings.colorsOn;
            global.theme = settings.theme;
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
        <View style={styles.container}>
                <Button
                    title="Play game"
                    onPress={()=> navigate('Play')}
                />
                <Button title="Settings" onPress={()=> navigate("Settings")}/>
                <Button title="High Scores" onPress={()=> navigate("Scores")}/>
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