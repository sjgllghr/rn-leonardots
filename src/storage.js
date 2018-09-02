import {AsyncStorage} from 'react-native'

const SCORE_KEY = "HIGHSCORES";
const NUM_SCORES = 10;

const SETTINGS_KEY = "SETTINGS";

async function storeSettings(colorsOn, theme) {
    const settings = {
        colorsOn: colorsOn,
        theme: theme
    };
    try {
        await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (err) {
        console.log(err);
    }
}

async function retrieveSettings() {
    try {
        let settings = await AsyncStorage.getItem(SETTINGS_KEY);

        // What should be done in this case?
        if (settings != null) {
            return settings;
        }
    } catch (err) {
        console.log(err);
    }
}

async function storeScore(score, date) {
    try {
        let scores = await AsyncStorage.getItem(SCORE_KEY);

        if (scores != null) {
            scores = JSON.parse(scores);
        } else {
            scores = [];
        }

        if (scores.length >= NUM_SCORES) {
            let minScore = scores[scores.length - 1].score;

            // This wouldn't be in the top scores
            if (score < minScore) {
                return;
            } else {
                scores[scores.length - 1] = {score: score, date: date};
            }
        } else {
            scores.push({score: score, date: date});
        }

        scores.sort((a, b) => {return b.score - a.score});
        await AsyncStorage.setItem(SCORE_KEY, JSON.stringify(scores));
    } catch (err) {
        console.log(err);
    }
}

async function retrieveScores() {
    try {
        let scores = await AsyncStorage.getItem(SCORE_KEY);
        if (scores != null) {
            return scores;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {storeScore, retrieveScores, storeSettings, retrieveSettings}