const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState = {
  postData: [
    { id: "1", message: "Hello there, this is the first post" },
    { id: "2", message: "This is the second post" },
    { id: "3", message: "Some different text" },
    { id: "4", message: "Hello there, this is the first post" },
    { id: "5", message: "Testing messages" },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 6,
        message: state.newPostText,
      };
      let stateCopy = { ...state };
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
