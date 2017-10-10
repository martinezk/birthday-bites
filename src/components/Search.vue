<template>
  <div id="search" class="container">
    <h5 class="heading">Choose your birthday from 2015 to now and view whether a food was recalled on that day</h5>
    <div class="row">
      <div class="center">
        <form class="form-inline">
          <div class="form-group">
            <div class="col">
              <label for="date-input">Date</label>
            </div>
            <div class="col">
              <input v-model="birthDay" class="form-control" type="date" value="2017-01-01" min="2015-01-01" max="2017-10-11">
            </div>
          </div>
        </form>
      </div>
    </div>
    <hr />
    <h5>{{ message }}</h5>
    <div class="row">
      <div class="col-8 center" v-bind:key="result.index" v-for="result in results">
        <div class="card-block rounded">
          <h4 class="card-title">{{ result.recalling_firm }}</h4>
          <p class="card-text">
            <strong>Description: </strong>{{ result.product_description }}</p>
          <p class="card-text">
            <strong>Reason to Skip it:</strong> {{ result.reason_for_recall }} </p>
        </div>
      </div>
    </div>
    <footer>
      <router-link id="link-back" v-bind:to="'/'">Back to Login page</router-link>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['result'],
  data() {
    return {
      birthDay: '',
      results: [],
      message: ''
    }
  },
  watch: {
    birthDay: function() {
      this.results = ''
      if (this.birthDay.length == 10) {
        this.fetchItems()
      }
    }
  },
  methods: {
    fetchItems: function() {
      const app = this;
      const url = "https://api.fda.gov/food/enforcement.json?search=report_date:" + app.birthDay;
      app.message = "Searching...";
      app.results = [];
      axios.get(url)
        .then(function(response) {
          app.results = response.data.results;
          app.message = '';
        })
        .catch(function(error) {
          app.message = "Nothing recalled on this day. You can eat anything you want! Enjoy!";
        })
    }

  }
}
</script>
<!-- styling for the component -->
<style>
body {
  background-color: #d0d4db;
}

#search {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#link-back {
  color: white;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.card {
  height: 200px;
}

.card-block {
  background-color: #fcfc97;
}

.card-text {
  text-align: left;
  padding: 10px 30px;
}

.card-title {
  padding-top: 20px;
}
.heading {
  margin-bottom: 20px;
}

.inline {
  display: inline-block;
}

footer {
  margin: 40px;
}
</style>