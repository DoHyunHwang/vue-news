import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
} from '../api/index.js';

export default {
  async FETCH_NEWS(context) {
    const res = await fetchNewsList();
    context.commit('SET_NEWS', res.data);
    return res;
  },
  async FETCH_JOBS({ commit }) {
    try {
      const res = await fetchJobsList();
      commit('SET_JOBS', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK({ commit }) {
    const res = await fetchAskList();
    commit('SET_ASK', res.data);
    return res;
  },
  async FETCH_USER({ commit }, name) {
    try {
      const res = await fetchUserInfo(name);
      commit('SET_USER', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const res = await fetchCommentItem(id);
      commit('SET_ITEM', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const res = await fetchList(pageName);
      commit('SET_LIST', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};
