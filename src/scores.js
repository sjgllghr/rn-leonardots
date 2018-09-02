import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';

import {retrieveScores} from './storage';

export default class Scores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: null
        }
    }

    static navigationOptions = {
        title: "High Scores",
    };

    componentDidMount() {
        retrieveScores().then((result) => {
            let data = JSON.parse(result);
            this.setState({scores: data});
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <FlatList
                contentContainerStyle = {styles.scores}
                data = {this.state.scores}
                renderItem = {
                    ({item}) => (
                    <View style={styles.entry}>
                    <Text style={styles.score}>{item.score}</Text>
                    <Text>{new Date(item.date).toLocaleDateString()} at {new Date(item.date).toLocaleTimeString()}</Text>
                    </View>
                    )
                }
                keyExtractor = {(item, index) => item.date}
            />
        );
    }
}

const styles = StyleSheet.create({
    scores: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      padding: 15,
    },
    score: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    entry: {
      paddingBottom: 10,
      marginBottom: 10,
      borderBottomWidth: 0.75,
      borderBottomColor: 'gray'
    }
});