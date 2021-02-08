<template>
  <v-app id="inspire">
    <HeaderFooter>
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <!-- <amplify-authenticator username-alias="email" v-if="authState !== 'signedin'">
            <amplify-sign-up slot="sign-up" username-alias="email" :form-fields.prop="formFields"></amplify-sign-up>
            <amplify-sign-in slot="sign-in" username-alias="email"></amplify-sign-in>
          </amplify-authenticator>

          <div v-if="authState === 'signedin' && user">
            <amplify-sign-out></amplify-sign-out>
            <div>Hello, {{user.username}}</div> 
            </div>-->
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Confirm Signup</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      :label="emailConfirm"
                      name="email"
                      prepend-icon="mdi-account"
                      type="text"
                      disabled
                    ></v-text-field>
                    <v-text-field
                      v-model="confirmCode"
                      label="confirm"
                      name="confirm"
                      prepend-icon="mdi-lock"
                      type="text"
                    ></v-text-field>
                    <p>
                      Forgot your code?
                      <a href="#">resend code</a>
                    </p>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="confirmSignup" color="primary">Confirm</v-btn>
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
import { Auth } from "aws-amplify";

export default {
  components: {
    HeaderFooter
  },
  created() {
    this.$emit(`update:layout`, HeaderFooter);
  },
  methods: {
    async confirmSignup() {
      // After retrieveing the confirmation code from the user
      Auth.confirmSignUp(
        this.emailConfirm, 
        this.confirmCode, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true
      })
        .then(data => {
          console.log(data)
          //route confirmed user to home screen
          this.$router.push({ path: "/login"});
        })
        .catch(err => console.log(err));
    }
  },
  data() {
    return {
      emailConfirm: this.$route.query.email,
      confirmCode: ""
    };
  }
};
</script>