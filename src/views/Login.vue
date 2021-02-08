<template>
  <v-app id="inspire">
    <HeaderFooter>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="username" label="Login" name="login" prepend-icon="mdi-account" type="text"></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="LoginUser" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    </HeaderFooter>
  </v-app>
</template>

<script>

import HeaderFooter from "@/layouts/HeaderFooter";
import { Auth } from 'aws-amplify';

export default {
  components: {
    HeaderFooter
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async LoginUser() {
      Auth.signIn(this.username, this.password)
        .then(user => {
          console.log(user)
          this.$router.push( { path: '/home2'});
        })
        .catch(err => console.log(err));
    }
  }
};
</script>