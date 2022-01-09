<template>
  <!-- In carousel -->
  <div>
    <h1 class="h1 text-center">Testimonials</h1>
  <mdb-carousel
  :items="testimony.length"
  indicators
  controlls
  slide
  :interval="5000"
  >
  <template #[i+1] v-for="(data, i) in testimony">
     <div :key="i" class="d-flex justify-content-center">
          <div class="card w-75">
            <div class="card-body">
              <p class="lead">
                {{data.customerMessage}}
              </p>
              <p>Customer ID {{data.customerId}} *******</p>
            </div>
          </div>
        </div>
  </template>
  </mdb-carousel>
  </div>
</template>

<script>
import { mdbCarousel } from "mdbvue";

export default {
  name: "Testimonies",
  components: {
    mdbCarousel
  },
  data() {
    return {
      testimony: [
        {
          customerId: "770",
          customerMessage: "Writemyessay services always have my back, as I often forget about assignments and research"
        },
        {
          customerId: "771",
          customerMessage: "Writemyessay services always have my back, as I often forget about assignments and research"
        },
        {
          customerId: "772",
          customerMessage: "Writemyessay services always have my back, as I often forget about assignments and research"
        },
        {
          customerId: "773",
          customerMessage: "Writemyessay services always have my back, as I often forget about assignments and research"
        },
        {
          customerId: "774",
          customerMessage: "Writemyessay services always have my back, as I often forget about assignments and research"
        }
      ]
    }
  }
}
</script>