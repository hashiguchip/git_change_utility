export const state = () => ({
  author: "",
  committer: "",
  email: ""
});

export const mutations = {
  add (state: any, text: string) {
    state.list.push({
      text: text,
      done: false
    });
  },
  remove (state: any, todo: string) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  updateAuthor (state: any, value: string) {
    state.author = value
  },
  updateCommitter (state: any, value: string) {
    state.committer = value
  },
  updateEmail (state: any, value: string) {
    state.email = value
  }
};
