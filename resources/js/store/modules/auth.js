import axios from "axios";
import Cookies from "js-cookie";
import * as types from "./mutation-types";

//state
const state={
    user:null,
    token:Cookies.get("token"),
    auth_err:null,
    loading:false,
    isLogged:false

}

//getters
const getters={
    user:state=>state.user,
    token:state=>state.token,
    authError:state=>state.auth_err,
    check:state=>state.isLogged,
    isLoading:state=>satate.isLoading
}

//muatations
const mutations={
    [types.LOGIN](state){
        state.loading=true;
        state.auth_err=null,
        satate.isLogged=false;
    },
    [types.LOGIN_SUCCESS](state,{token,remember}){
        state.loading=false;
        state.auth_err=null;
        state.token=token;
        state.isLogged=true;
        Cookies.set("token",token,{expires:remember? 7 :null});
    },
    [types.LOGIN_FAILED](state,{error}){
        state.loading=false;
        state.auth_err=error;
        state.isLogged=false;
    },
    [types.FETCH_USER_SUCCESS](state,{user}){
        state.user=user.data;
        state.isLogged=true;
    },
    [types.FETCH_USER_FAILURE](state){
        state.token=null;
        Cookies.remove("token");
        state.isLogged=false;
    },
    [types.LOGOUT](state){
        state.user=null;
        state.token=null;
        Cookies.remove("token");
        state.isLogged=false;

    }
}

//actions
const actions={

}



export default  {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}