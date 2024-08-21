const initialState = [
  { name: "Asan", surname: "Usenov", id: 11 },
  { name: "Igor", surname: "Alisherov", id: 12 },
];

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];

    case "UPDATE": {
      const updateStudents = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return updateStudents;
    }
    default:
      return state;
  }
};
