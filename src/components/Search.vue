<template>
  <div id="search" class="container">
    <div class="row">
      <div class="col-md-4 center">
        <form class="form-inline">
          <div class="form-group row">
            <label for="example-date-input" class="col-2 col-form-label">Date</label>
            <div class="col-10">
              <input v-model="birthDay" class="form-control" type="date" value="2017-01-01" max="2017-09-30">
            </div>
          </div>
          <button class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
    <hr />
    <span>{{ results }}</span>
    <div class="row">
      <div class="col-sm-4" v-bind:key="result.index" v-for="result in results">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title featured">{{ result.recalling_firm }}</h4>
            <p class="card-text">{{ result.product_description }}</p>
          </div>
        </div>
      </div>
    </div>
    <router-link v-bind:to="'/'">Back to Login</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      birthDay: '',
      results: ''
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
      this.results = "Searching..."
    }

  }
}
</script>
<!-- styling for the component -->
<style>
#search {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.card {
  height: 200px;
}

.inline {
  display: inline-block;
}
</style>