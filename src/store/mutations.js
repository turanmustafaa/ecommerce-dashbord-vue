const mutations = {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_DATA(state, data) {
      state.graphData = data;
    },
    SET_MARKETPLACE(state, place) {
      state.marketPlace = place;
    },
    SET_SELLERID(state, sellerid) {
      state.sellerId = sellerid;
    },
    SET_SELECTED_DAYS(state, days) {
      state.selectedDays = days;
    },
    SET_LOADING_DATA(state, loading) {
      state.loading = loading;
    },
    SET_TABLE_DATA(state, tableVal) {
      state.tableData = tableVal;
    },
    SET_COMPARE_DAYS(state, days) {
      state.compareDays = days;
    }
  };
  
  export default mutations;
  