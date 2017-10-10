<template>
  <div id="search" class="container">
    <div class="row">
      <div class="center">
        <form class="form-inline">
          <div class="form-group">
            <div class="col">
            <label for="date-input">Date</label>
            </div>
            <div class="col">
            <input v-model="birthDay" class="form-control" type="date" value="2017-01-01" min= "2015-01-01" max="2017-09-30">
            </div>
          </div>
        </form>
      </div>
    </div>
    <hr />
    <span>{{ message }}</span>
    <div class="row">
      <div class="center" v-bind:key="result.index" v-for="result in results">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title featured">{{ result.recalling_firm }}</h4>
            <hr />
            <p class="card-text">{{ result.product_description }}</p>
          </div>
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
          app.message = "You can eat anything you want";
        })
    }

  }
}
</script>
<!-- styling for the component -->
<style>
body {
  background-color:#d0d4db;
}
#search {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#link-back{
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
  background-color: #8af2ab;
}
.inline {
  display: inline-block;
}
</style>