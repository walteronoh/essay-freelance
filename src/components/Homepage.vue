<template>
  <div>
    <!-- Start writing my essay now -->
    <section>
      <start-order />
    </section>

    <!-- How everything works -->
    <section>
      <h1 class="h1 text-center">How everything works</h1>
      <div class="d-flex justify-content-center">
        <div class="card">
          <div class="card-body"></div>
        </div>
        <div class="card">
          <div class="card-body"></div>
        </div>
        <div class="card">
          <div class="card-body"></div>
        </div>
      </div>
    </section>

    <!-- Benefits of our company -->
    <section>
      <div class="d-flex"></div>
    </section>

    <!-- Order now -->
    <section>
      <div class="d-flex"></div>
    </section>

    <!-- Testimonials -->
    <section>
      <div class="">
        <testimonial />
      </div>
    </section>

    <!-- Write my essay -->
    <section>
      <h1 class="h1 text-center">Write My Essay</h1>
      <p>
        If you ask yourself whether you can afford to order write my essays
        service, we can assure you that we provide cheap essay writing for every
        student`s budget. We have helped over 1000 students with their essay
        assignments during our work and we are proud that more and more
        customers are addressing to our service with requests like write my
        essay. And the vast majority of them keep comes back with new tasks as
        soon as they get ones. What is the reason of such dedication? First of
        all they are attracted to company’s responsible attitude to every order.
        We hire only experienced writers. They understand what an important task
        you delegate to us so they do best to meet your expectations. If you
        write papers on your own but receive bad grades, we can help you.
        Contact us and get the best score for your essay.
      </p>
    </section>

    <!-- Contact us -->
    <section>
      <div class="">
        <contact-us />
      </div>
    </section>

    <!-- Lower section -->
    <footer>
      <div class="d-flex">
        <div class="col-md-4">
          <h4>Logo and sum stuff</h4>
        </div>
        <div class="col-md-4">
          <ul>
            <li><a href="/#/money-back-guarantee">Money Back Guarantee</a></li>
            <li><a href="/#/plagiarism-free-guarantee">Plagiarism-free Guarantee</a></li>
            <li><a href="/#/privacy-policy">Privacy Policy</a></li>
            <li><a href="/#/revision-policy">Revision Policy</a></li>
            <li><a href="/#/terms-and-conditions">Terms and Conditions</a></li>
            <li><a href="/#/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="text-muted">
            <li><a href="/#/paper-writing-service">Paper writing Service</a></li>
            <li><a href="/#/buy-essay">Buy Essay</a></li>
            <li><a href="/#/essay-help">Essay Help</a></li>
            <li><a href="/#/buy-research-papers">Buy Research Papers</a></li>
            <li><a href="/#/scholarship-program">Scholarship Program</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright text-center">
        © 2022 Copyright
      </div>
    </footer>
  </div>
</template>

<script>
import ContactUs from "./sections/ContactUs.homepage.vue";
import StartOrder from "./sections/StartOrder.homepage.vue";
import Testimonial from "./sections/Testimonial.homepage.vue";

export default {
  name: "app",
  components: {
    ContactUs,
    StartOrder,
    Testimonial,
  },
};
</script>