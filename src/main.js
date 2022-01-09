import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'mdbvue/lib/css/mdb.min.css'
import "./main.css"

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})