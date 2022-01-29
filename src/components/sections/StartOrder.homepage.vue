<template>
  <div>
    <h1 class="h1 text-center">Start writing my essay now</h1>
    <p class="lead text-center">
      We provide a first-class assistance with homework to students from all
      corners of the world. Every day thousands of scholars contact us to get
      homework assistance.
    </p>
    <div class="d-flex justify-content-center">
      <div class="card col-md-8">
        <div class="card-body">
          <form>
            <div class="d-flex justify-content-between">
              <div class="form-group">
                <label for="academicLevel">Academic level</label><br />
                <select class="form-control" aria-label="Default select">
                  <template v-for="(education, k) in educations">
                    <option v-bind:key="k"  :value="education.level">{{education.level}}</option>
                  </template>
                </select>
              </div>
              <div class="form-group">
                <label for="deadline">Deadline</label><br />
                <select class="form-control" aria-label="Default select">
                  <template v-for="(duration, k) in durations">
                    <option v-bind:key="k"  :value="duration.time">{{duration.time + " " + duration.timeUnit}}</option>
                  </template>
                </select>
              </div>
              <div class="form-group">
                <label for="typeOfAssignment">Type of Assignment</label><br />
                <select class="form-control" aria-label="Default select">
                  <template v-for="(assignment,k) in assignments">
                    <option v-bind:key="k" :value="assignment.type">{{ assignment.type }}</option>
                  </template>
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="">
                <div class="d-flex">
                  <p>Pages:</p>
                  <div class="d-flex">
                    <button
                      class="btn btn-primary btn-sm"
                      type="button"
                      @click="reducePages(pages)"
                    >
                      -
                    </button>
                    <input
                      class="form-control"
                      type="number"
                      :value="pages"
                      @keyup="updatePages"
                      @change="updatePages"
                      min = "0"
                    />
                    <button
                      class="btn btn-primary btn-sm"
                      type="button"
                      @click="addPages(pages)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="col text-muted">
                  <p>Words:</p>
                  <span>{{words}}</span>
                </div>
              </div>
              <div class="">
                <button type="submit" class="btn btn-success btn-sm">
                  PROCEED:${{total}}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { durations, assignments, educations } from "../content/content";

export default {
  name: "StartOrderForm",
  data() {
    return {
      durations: durations,
      assignments: assignments,
      educations: educations,
      pages: 0,
      maxPages: 999,
      words: 0,
      total: 0,
    };
  },
  methods: {
    updatePages(e) {
      let value = e.target.value;
      let page = this.setLimit(value);
      this.pages = page;
      this.updateWords(this.pages);
      this.sumTotalPrice(this.pages);
    },
    addPages(currentPages) {
      currentPages++;
      let page = this.setLimit(currentPages);
      this.pages = page;
      this.updateWords(this.pages);
      this.sumTotalPrice(this.pages);
    },
    reducePages(currentPages) {
      currentPages--;
      let page = this.setLimit(currentPages);
      this.pages = page;
      this.updateWords(this.pages);
      this.sumTotalPrice(this.pages);
    },
    updateWords(pages) {
      let singlePageWords = 275;
      let totalWords = singlePageWords * pages;
      this.words = totalWords;
    },
    sumTotalPrice(pages) {
      let pricePerPage = 10;
      let totalPrice = pages * pricePerPage;
      this.total = totalPrice;
    },
    setLimit(pages) {
      if (pages <= this.maxPages && pages >= 0) {
        return pages;
      }
      return this.pages;
    },
  },
};
</script>