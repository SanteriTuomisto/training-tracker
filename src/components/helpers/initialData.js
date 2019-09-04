const initialData = {
    exercises: {
        1: { id: 1, content: 'Bench press' },
        2: { id: 2, content: 'Squat' },
        3: { id: 3, content: 'Deadlift' },
        4: { id: 4, content: 'Pull up' }
    },
    workouts: {
        1: {
            id: 1,
            title: 'Workout 1',
            exerciseIds: [1, 2, 3, 4]
        },
        2: {
            id: 2,
            title: 'Workout 2',
            exerciseIds: []
        },
        3: {
            id: 3,
            title: 'Workout 3',
            exerciseIds: []
        }
    },
    columnOrder: [1, 2, 3]
};

export default initialData;