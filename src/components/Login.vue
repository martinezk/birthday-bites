<template>
  <section id="login">
    <div class="container">
      <div class="row">
        <div class="center col-md-6">
          <div class="form-wrap">
            <h4>Login</h4>
            <form role="form" id="login-form" autocomplete="off">
              <div class="form-group">
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="somebody@example.io">
              </div>
              <div class="form-group">
                <label for="key" class="sr-only">Password</label>
                <input type="password" name="key" id="key" class="form-control" placeholder="Password">
              </div>
              <router-link v-bind:to="'/food'">
              <input type="submit" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Log in">
              </router-link>
            </form>
            <a href="javascript:;" class="forget" >Forgot your password?</a>
            <hr>
          </div>
        </div>
        <!-- /.col-xs-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      msg: 'Hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}


</style>
