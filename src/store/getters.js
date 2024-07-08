const getters = {
    isAuthenticated: (state) => !!state.token,
    isLoading: (state) => !!state.loading,
    graphDataGetter: (state) => state.graphData,
    tableDataGetter: (state) => state.tableData
  };
  
  export default getters;
  