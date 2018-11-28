<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="username"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>

</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: 'Devin Martinez',
      password: '21027631'
    };
  },
  methods: {
    login: function () {
      let self = this;
      axios({
        url: `/account/login`,
        method: "post",
        responseType: "json",
        data: {
          UserName: this.username,
          Password: this.password,
          Type: "Agent"
        }
      }).then(function (response) {
        switch (response.status) {
          case 200:
            self.$store.commit('setUser', response.data)
            self.$router.push('/cms')
            break
        }
      });
    }
  }
};
</script>

