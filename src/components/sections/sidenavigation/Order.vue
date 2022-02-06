<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <span
            @click="setActiveTab(tabNames.PD)"
            class="order-title w-100 p-2 text-center"
            :class="isActiveTab.name == tabNames.PD && 'active'"
            >(1) {{ tabNames.PD }}</span
          >
          <span
            @click="setActiveTab(tabNames.PCI)"
            class="order-title w-100 p-2 text-center"
            :class="isActiveTab.name == tabNames.PCI && 'active'"
            >(2) {{ tabNames.PCI }}</span
          >
          <span
            @click="setActiveTab(tabNames.PSI)"
            class="order-title w-100 p-2 text-center"
            :class="isActiveTab.name == tabNames.PSI && 'active'"
            >(3) {{ tabNames.PSI }}</span
          >
        </div>

        <!-- part 1 -->
        <div v-if="isActiveTab.name == tabNames.PD" class="mt-4">
          <div class="d-flex justify-content-between w-100">
            <p class="w-100">Academic level</p>
            <span class="level-title w-100 text-center">High School</span>
            <span class="level-title w-100 p-1 text-center">College</span>
            <span class="level-title w-100 p-1 text-center">University</span>
            <span class="level-title w-100 p-1 text-center">Masters</span>
            <span class="level-title w-100 p-1 text-center">PhD</span>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-25">Type of paper</p>
            <select class="w-100">
              <option>choose</option>
            </select>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-25">Subject or discipline</p>
            <select class="w-100">
              <option>choose</option>
            </select>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-25">Topic</p>
            <div class="form-group w-100">
              <input type="text" class="form-control" placeholder="The topic" />
            </div>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-25">Paper instructions</p>
            <div class="form-group w-100">
              <textarea class="form-control">Write something</textarea>
            </div>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-25">Sources</p>
            <div class="form-group w-25">
              <span class="w-100">+</span>
              <input type="number" class="w-100" />
              <span class="w-100">-</span>
            </div>
            <p class="w-75">Please specify the number of sources to use</p>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-25">Additional materials</p>
            <div class="form-group w-100">
              <input type="file" class="form-control" />
            </div>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-100">Paper format</p>
            <span class="level-title w-100 text-center">MLA</span>
            <span class="level-title w-100 p-1 text-center">APA</span>
            <span class="level-title w-100 p-1 text-center"
              >Chicago/Turabian</span
            >
            <span class="level-title w-100 p-1 text-center">Harvard</span>
            <span class="level-title w-100 p-1 text-center">Other</span>
            <span class="level-title w-100 p-1 text-center"
              >Not applicable</span
            >
          </div>
          <div class="d-flex w-100">
            <div class="form-group w-75">
              <input
                type="button"
                class="form-control"
                value="Proceed to price calculation"
              />
            </div>
          </div>
        </div>

        <!-- part 2 -->
        <div v-if="isActiveTab.name == tabNames.PCI" class="mt-4">
          <div class="d-flex justify-content-between w-100">
            <p class="w-100">Number of pages</p>
            <span class="level-title w-100 text-center">
              <div class="form-group w-100">
                <span class="w-100">+</span>
                <input type="number" class="w-100" />
                <span class="w-100">-</span>
              </div>
            </span>
            <span class="level-title w-100 p-1 text-center">Double spaced</span>
            <span class="level-title w-100 p-1 text-center">Single spaced</span>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-100">Final deadline</p>
            <span class="level-title w-100 text-center">3 Hours</span>
            <span class="level-title w-100 p-1 text-center">8 Hours</span>
            <span class="level-title w-100 p-1 text-center">24 Hours</span>
            <span class="level-title w-100 p-1 text-center">48 Hours</span>
            <span class="level-title w-100 p-1 text-center">3 Days</span>
            <span class="level-title w-100 p-1 text-center">5 Days</span>
            <span class="level-title w-100 p-1 text-center">7 Days</span>
            <span class="level-title w-100 p-1 text-center">14 Days</span>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-100">Category of writer</p>
            <span class="level-title w-100 text-center">Regular writer</span>
            <span class="level-title w-100 p-1 text-center"
              >Advanced writer</span
            >
            <span class="level-title w-100 p-1 text-center"
              >Premium writer</span
            >
            <span class="level-title w-100 p-1 text-center"
              >Preferred writer</span
            >
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-25">Power point slides</p>
            <div class="form-group w-25">
              <span class="w-100">+</span>
              <input type="number" class="w-100" />
              <span class="w-100">-</span>
            </div>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-100">Additional services</p>
            <span class="level-title w-100 text-center">Plagiarism Report</span>
            <span class="level-title w-100 p-1 text-center">Abstract Page</span>
            <span class="level-title w-100 p-1 text-center">High Priority</span>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-100">
              Order Total:
              <select>
                <option>Currency</option>
              </select>
            </p>
          </div>
          <div class="d-flex w-100">
            <div class="form-group w-100">
              <input
                type="button"
                class="form-control"
                value="Back to paper details"
              />
            </div>
            <div class="form-group w-100">
              <input
                type="button"
                class="form-control"
                value="Proceed to personal information"
              />
            </div>
          </div>
        </div>

        <!-- part 3 -->
        <div v-if="isActiveTab.name == tabNames.PSI" class="mt-4">
          <div class="column">
            <p>Your Order Summary:</p>
            <p>Please review your order details below:</p>
            <div>
              <span> Academic Level: </span>
              <span> Type of paper: </span>
              <span> Subject or discipline: </span>
              <span> Topic: </span>
              <span> Sources: </span>
              <span> Paper Format: </span>
              <span> Pages: </span>
              <span> Spacing: </span>
              <span> Category of writer: </span>
              <span> Power point slides: </span>
              <span> Additional services: </span>
              <span> Final deadline: </span>
            </div>
          </div>
          <div class="column">
            <p>Personal information</p>
            <div>
              <span class="level-title w-100 p-1 text-center"
                >New Customer</span
              >
              <span class="level-title w-100 p-1 text-center"
                >Returning Customer</span
              >
            </div>
            <div>
              <p>Email: <input type="email" placeholder="email@doman.com" /></p>
              <p>Name: <input type="text" placeholder="Your name.." /></p>
              <p>
                Country:
                <select>
                  <option>Kenya</option>
                </select>
              </p>
              <p>
                Create password:
                <input type="password" placeholder="Enter password" />
              </p>
              <p>
                Confirm password:
                <input type="password" placeholder="Confirm password" />
              </p>
              <p>
                Your phone: <span>label</span>
                <input type="text" placeholder="Enter phone number" />
              </p>
              <div>
                <p>
                  <input type="checkbox" />I have read and agree to Terms and
                  condition, Refund policy, Privacy policy and Cookie Policy
                </p>
                <p>
                  <input type="checkbox" />I want to receive news and special
                  offer
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>Payment system</p>
            <p>label</p>
          </div>
          <div class="d-flex justify-content-between w-100">
            <p class="w-100">
              Order Total:
              <select>
                <option>Currency</option>
              </select>
            </p>
          </div>
          <div class="d-flex w-100">
            <div class="form-group w-100">
              <input
                type="button"
                class="form-control"
                value="Back to price calculation"
              />
            </div>
            <div class="form-group w-100">
              <input
                type="button"
                class="form-control"
                value="Proceed to checkout"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const tabNames = Object.freeze({
  PD: "Paper Details",
  PCI: "Price Information",
  PSI: "Personal Information",
});

export default {
  name: "Order",
  data() {
    return {
      isActiveTab: {
        name: tabNames.PD,
      },
      tabNames: tabNames,
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.isActiveTab.name = tabName
    },
  },
};
</script>