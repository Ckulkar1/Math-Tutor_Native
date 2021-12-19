import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import colors from '../assets/colors/';
const steps = [
  {
    text: 'What ratio can we use from similarity theorem to find the answer?',
    response: [
      "We don't know what is AB/PQ.",
      '',
      "We don't know what is AC/PR.",
    ],
    answers: ['AB/PQ = BC/QR', 'A(ABC)/A(PQR) = BC/QR', 'BC/QR = AC/PR'],
  },
  {
    text: 'What is the correct ratio according to the given values?',
    response: ['', 'Check your values again!', 'Check your values again'],
    answers: ['288sq.m/800sq.m', '800sq.m/288sq.m', '142sq.m/400sq.m'],
  },
  {
    text: 'What is the smallest ratio of 288sq.m/800sq.m?',
    response: ['You can go lower!', 'You can still go lower!', ''],
    answers: ['144sq.m/400sq.m', '36sq.m/100sq.m', '3sq.m/5sq.m'],
  },
];

function Example({navigation}) {
  const [question, setQuestion] = useState({});
  const [error, setError] = useState('');
  const [stepIndex, setStepIndex] = useState(0);
  useLayoutEffect(() => {
    setQuestion(steps[stepIndex]);
  }, [stepIndex]);
  const createSuccessAlert = () =>
    Alert.alert('Congratulations!', 'You have done a great job', [
      {text: 'Ok', onPress: () => navigation.navigate('Home')},
    ]);
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>All the bests!</Text>
        <Text style={styles.headerSubTitle}>Problem 1</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/example.jpeg')}
        />
      </View>
      {/* <View style={styles.correctAnswers}>
        {answers?.map((item, index) => {
          console.log('to display ', item);
          <Text key={index}>{item}</Text>;
        })}
      </View> */}
      <View style={styles.questionWrapper}>
        <Text style={styles.questionText}>{question?.text}</Text>
      </View>
      <View style={styles.action}>
        {question?.answers?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (question.response[index] !== '') {
                  setError(question.response[index]);
                } else {
                  setError('');
                  if (stepIndex <= 2) {
                    if (stepIndex === 2) {
                      createSuccessAlert();
                    }
                    setStepIndex(stepIndex + 1);
                  }
                }
              }}
              style={styles.btn}>
              <Text style={styles.btnText} key={index}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.errorMessageWrapper}>
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    height: '100%',
  },
  headerWrapper: {
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  headerSubTitle: {
    marginTop: 5,
    fontSize: 12,
  },
  imageWrapper: {
    display: 'flex',
  },
  image: {
    height: 200,
    width: 350,
  },
  questionWrapper: {
    display: 'flex',
    paddingHorizontal: 24,
  },
  questionText: {
    fontWeight: 'bold',
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    backgroundColor: colors.btnBackgroundColor,
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorMessageWrapper: {
    display: 'flex',
    paddingHorizontal: 24,
    marginTop: 30,
  },
  errorMessage: {
    fontStyle: 'italic',
    color: 'red',
  },
});

export default Example;
