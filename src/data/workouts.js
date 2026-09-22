// Weekly workout schedule mock data. Each exercise entry references an id
// from exercises.js and carries its own completion state.

export const weekPlan = [
  {
    day: 'Monday',
    title: 'Full Body',
    duration: '50 min',
    difficulty: 'Intermediate',
    isRest: false,
    exercises: [
      { exId: 'ex-01', sets: 4, reps: '6-8', rest: '90 sec', done: true },
      { exId: 'ex-06', sets: 3, reps: '12', rest: '60 sec', done: true },
      { exId: 'ex-22', sets: 3, reps: '12', rest: '60 sec', done: false },
      { exId: 'ex-15', sets: 3, reps: '30-45 sec hold', rest: '45 sec', done: false },
    ],
  },
  {
    day: 'Tuesday',
    title: 'Rest',
    duration: '-',
    difficulty: '-',
    isRest: true,
    exercises: [],
  },
  {
    day: 'Wednesday',
    title: 'Upper Body',
    duration: '45 min',
    difficulty: 'Intermediate',
    isRest: false,
    exercises: [
      { exId: 'ex-04', sets: 4, reps: '6-8', rest: '90 sec', done: true },
      { exId: 'ex-07', sets: 4, reps: '8-10', rest: '90 sec', done: false },
      { exId: 'ex-10', sets: 4, reps: '6-8', rest: '90 sec', done: false },
      { exId: 'ex-13', sets: 3, reps: '10-12', rest: '60 sec', done: false },
    ],
  },
  {
    day: 'Thursday',
    title: 'Rest',
    duration: '-',
    difficulty: '-',
    isRest: true,
    exercises: [],
  },
  {
    day: 'Friday',
    title: 'Lower Body',
    duration: '50 min',
    difficulty: 'Advanced',
    isRest: false,
    exercises: [
      { exId: 'ex-01', sets: 4, reps: '6-8', rest: '90 sec', done: false },
      { exId: 'ex-02', sets: 3, reps: '10-12', rest: '75 sec', done: false },
      { exId: 'ex-03', sets: 3, reps: '12 steps/side', rest: '60 sec', done: false },
    ],
  },
  {
    day: 'Saturday',
    title: 'Light Cardio',
    duration: '30 min',
    difficulty: 'Beginner',
    isRest: false,
    exercises: [
      { exId: 'ex-20', sets: 4, reps: '60 sec', rest: '30 sec', done: false },
      { exId: 'ex-21', sets: 1, reps: '20-30 min', rest: '-', done: false },
    ],
  },
  {
    day: 'Sunday',
    title: 'Rest',
    duration: '-',
    difficulty: '-',
    isRest: true,
    exercises: [],
  },
]
