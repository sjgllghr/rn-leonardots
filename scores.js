import React, {Component} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

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
                    <Text> {item.score}, {new Date(item.date).toLocaleDateString()}</Text>
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
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    entry: {

    }
});