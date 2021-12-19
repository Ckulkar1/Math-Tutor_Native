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

export default steps;
