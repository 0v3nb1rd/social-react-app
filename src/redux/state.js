import { renderEntireTree } from "../render";

const state = {
  profilePage: {
    postData: [
      { id: "1", message: "Hello there, this is the first post" },
      { id: "2", message: "This is the second post" },
      { id: "3", message: "Some different text" },
      { id: "4", message: "Hello there, this is the first post" },
      { id: "5", message: "Testing messages" },
    ],
    newPostText: "",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Nazar" },
      { id: 2, name: "Ira" },
      { id: 3, name: "Ylia" },
      { id: 4, name: "Oleg" },
      { id: 5, name: "Volodya" },
      { id: 6, name: "Ivan" },
    ],
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "It is a test" },
      { id: 4, message: "Hello World" },
    ],
  },
};

window.state = state;

export const addPost = () => {
  const newPost = {
    id: 6,
    message: state.profilePage.newPostText,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export default state;