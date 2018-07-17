import React, {Component} from 'react';
import {Picker, StyleSheet, Switch, Text, View} from 'react-native';

import {storeSettings, retrieveSettings} from './storage';

export default class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorsOn: true,
            theme: 'default'
        }
    }

    static navigationOptions = {
        title: "Settings",
    };

    componentDidMount() {
        retrieveSettings().then((results) => {
            console.log(results);
            let settings = JSON.parse(results);
            this.setState({
                colorsOn: settings.colorsOn,
                theme: settings.theme
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    changeTheme(value) {
        global.theme = value;
        this.setState({theme: value});
        storeSettings(this.state.colorsOn, value);
        console.log(value);
    }

    changeColorSetting(value) {
        global.colorsOn = value;
        this.setState({colorsOn: value});
        storeSettings(value, this.state.theme);
        console.log(value);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.switchView}>
                    <Text style={styles.labels}>Colors</Text>
                    <Switch 
                        value={this.state.colorsOn} 
                        onValueChange={(value) => this.changeColorSetting(value)}/>
                    </View>
                <View style={styles.pickerView}>
                    <Text style={styles.labels}>Theme</Text>
                    <Picker 
                        enabled={this.state.colorsOn}
                        style={styles.picker}
                        onValueChange={(value) => this.changeTheme(value)}
                        selectedValue={this.state.theme}>
                        <Picker.Item label='Default' value='default'/>
                        <Picker.Item label='Neon' value='neon' />
                        <Picker.Item label='Grayscale' value='grayscale' />
                    </Picker>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
    //  alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 15
    },
    labels: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    picker: {
        height: 10,
        width: 100
    },
    switchView: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    pickerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    }
});