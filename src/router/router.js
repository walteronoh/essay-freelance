import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../components/Homepage.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Homepage
}];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;