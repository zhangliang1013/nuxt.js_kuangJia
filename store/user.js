

export const state = ()=>{
    return {
      userInfo : {
        token : '',
        user : {},
    }
    }
  }
  
  // 将登录成功的数据赋值到userInfo里面
  export const mutations = {
    // 存登录成功的数据
      getData(state , data){
         state.userInfo = data
      }

  }
  
  // 异步请求
  export const actions={
    // 登录请求
    // login(store,data){
    //   return  this.$axios({
    //         url: "/accounts/login",
    //         method: "post",
    //         data
    //       }).then(res => {
    //         const {data} = res;
    //         console.log(data)
    //         store.commit('getData', data);
    //       });
    // }
  }
  
  
