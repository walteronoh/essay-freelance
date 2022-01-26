import Vue from "vue";
import VueRouter from "vue-router";

import Homepage from "../components/Homepage";
import BuyEssay from "../components/sections/footer/BuyEssay";
import BuyResearchPapers from "../components/sections/footer/BuyResearchPapers";
import CookiePolicy from "../components/sections/footer/CookiePolicy";
import EssayHelp from "../components/sections/footer/EssayHelp";
import MoneyBackGuarantee from "../components/sections/footer/MoneyBackGuarantee";
import PaperWritingService from "../components/sections/footer/PaperWritingService";
import PlagiarismFreeGuarantee from "../components/sections/footer/PlagiarismFreeGuarantee";
import PrivacyPolicy from "../components/sections/footer/PrivacyPolicy";
import ScholarshipProgram from "../components/sections/footer/ScholarshipProgram";
import TermsAndConditions from "../components/sections/footer/TermsAndConditions";
import RevisionPolicy from "../components/sections/footer/RevisionPolicy";
import Prices from "../components/sections/sidenavigation/Prices";
import Faq from "../components/sections/sidenavigation/Faq";
import Contacts from "../components/sections/sidenavigation/Contacts";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Homepage
    },
    {
        path: "/buy-essay",
        name: "BuyEssay",
        component: BuyEssay
    },
    {
        path: "/buy-research-papers",
        name: "BuyResearchPapers",
        component: BuyResearchPapers
    },
    {
        path: "/cookie-policy",
        name: "CookiePolicy",
        component: CookiePolicy
    },
    {
        path: "/essay-help",
        name: "EssayHelp",
        component: EssayHelp
    },
    {
        path: "/money-back-guarantee",
        name: "MoneyBackGuarantee",
        component: MoneyBackGuarantee
    },
    {
        path: "/paper-writing-service",
        name: "PaperWritingService",
        component: PaperWritingService
    },
    {
        path: "/plagiarism-free-guarantee",
        name: "PlagiarismFreeGuarantee",
        component: PlagiarismFreeGuarantee
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: PrivacyPolicy
    },
    {
        path: "/scholarship-program",
        name: "ScholarshipProgram",
        component: ScholarshipProgram
    },
    {
        path: "/terms-and-conditions",
        name: "TermsAndConditions",
        component: TermsAndConditions
    },
    {
        path: "/revision-policy",
        name: "RevisionPolicy",
        component: RevisionPolicy
    },
    {
        path: "/prices",
        name: "Prices",
        component: Prices
    },
    {
        path: "/faq",
        name: "Faq",
        component: Faq
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: Contacts
    }
];

const router = new VueRouter({
    routes
});

export default router;