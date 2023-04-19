//Action Creators

export const setUser = (user) => ({
    type: "SET_USER",
    payload: user,
  });

  export const logoutUser = () => ({
    type: "user/logout"
  })

export const fetchUser = () => {
    return async (dispatch) => {
      const response = await fetch('/current-user');
      const data = await response.json();
      dispatch(setUser(data));
    };
}





//Reducers

const initialState = []

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USER":
            return [...state, action.payload]
        case "user/logout":
            return initialState
        default:
            return state
    }
}

// export default function usersReducer(state = initialState, action) {
//     return state
// }