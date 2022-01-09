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
                  <option value="High School" selected>High School</option>
                </select>
              </div>
              <div class="form-group">
                <label for="deadline">Deadline</label><br />
                <select class="form-control" aria-label="Default select">
                  <option value="14" selected>14 days</option>
                </select>
              </div>
              <div class="form-group">
                <label for="typeOfAssignment">Type of Assignment</label><br />
                <select class="form-control" aria-label="Default select">
                  <option value="Essay (any type)" selected>
                    Essay (any type)
                  </option>
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="">
                <div class="d-flex">
                  <p>Pages:</p>
                  <div class="d-flex">
                    <button class="btn btn-primary btn-sm" type="button">-</button>
                    <input class="form-control" type="number" value="1" />
                    <button class="btn btn-primary btn-sm" type="button">+</button>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="col text-muted">
                  <p>Words:</p>
                  <p>275</p>
                </div>
              </div>
              <div class="">
                <button type="submit" class="btn btn-success btn-sm">
                  PROCEED:$10
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>