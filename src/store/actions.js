import api from "../api";

const actions = {
        async getTokenwithLogin({ commit }, credentials) {
          try {
            commit('SET_LOADING_DATA',true)
    
    
            const response = await api.login(credentials);
            const token = await response.data.Data.AccessToken
            commit('SET_TOKEN', token);
            localStorage.setItem('eva_token', token)
    
    
            const responseUser = await api.setUser({email : credentials.Email})
            commit('SET_USER', responseUser.data.Data);
            commit('SET_MARKETPLACE', responseUser.data.Data?.user?.store[0]?.marketplaceName)
            commit('SET_SELLERID', responseUser.data.Data?.user?.store[0]?.storeId)
            localStorage.setItem('marketPlace', responseUser.data.Data?.user?.store[0]?.marketplaceName)
            localStorage.setItem('sellerId', responseUser.data.Data?.user?.store[0]?.storeId)
    
    
            commit('SET_LOADING_DATA',false)
    
          } catch (error) {
            console.error('Failed to login', error);
            commit('SET_LOADING_DATA',false)
          }
        },
        async getGraphData({commit},val) {
        try {
            commit('SET_LOADING_DATA',true)
    
    
            const response = await api.setGraphData({
                "marketplace": localStorage.getItem('marketPlace') ? localStorage.getItem('marketPlace') : this.state.marketPlace,
                "sellerId" : localStorage.getItem('sellerId') ? localStorage.getItem('sellerId') : this.state.sellerId,
                "requestStatus": 0,
                "day": this.state.selectedDays,
                "excludeYoYData": true
              })
            const resDatas = await response.data?.Data.item
            commit('SET_DATA', resDatas )
    
    
            commit('SET_LOADING_DATA',false)
    
        } catch(err) {
            commit('SET_LOADING_DATA',false)
            console.log(err)
        }
        },
        async getTableData({commit}, tabledataDates){
            console.log(tabledataDates,'tabledatadates')
            let requestData = {
            "marketplace": localStorage.getItem('marketPlace') ? localStorage.getItem('marketPlace') : this.state.marketPlace,
            "sellerId": localStorage.getItem('sellerId') ? localStorage.getItem('sellerId') : this.state.sellerId,
            "salesDate": tabledataDates[0],
            "pageSize": 30,
            "pageNumber": 1,
            "isDaysCompare": tabledataDates.length > 1 ? 1 : 0,
          };
    
          if (tabledataDates.length > 1) {
            requestData["salesDate2"] = tabledataDates[1];
          }
    
          const response = await api.setCompareItems(requestData);
          const resData = await response.data?.Data?.item?.skuList;
    
    
          const skulist = await api.setCompareItemsWithRefund({
            "marketplace": localStorage.getItem('marketPlace') ? localStorage.getItem('marketPlace') : this.state.marketPlace,
            "sellerId": localStorage.getItem('sellerId') ? localStorage.getItem('sellerId') : this.state.sellerId,
            "skuList" : resData
          })
          const resSkulist = await skulist.data?.Data
          console.log(resSkulist,'resdata sku')
          commit('SET_TABLE_DATA', resSkulist);
    
        },
    
        setSelectedDays({ commit }, days) {
            commit('SET_SELECTED_DAYS', days);
          },
        setCompareDays({ commit }, days) {
            commit('SET_COMPARE_DAYS', days);
          }
}

export default actions;
