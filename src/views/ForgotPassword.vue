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
                  <v-toolbar-title>Password Reset</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field label="password reset email" name="email" prepend-icon="mdi-account" type="text"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">Reset Password</v-btn>
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
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
// import { Auth } from "aws-amplify";

export default {
  components: {
    HeaderFooter
  },
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    }),
      this.$emit(`update:layout`, HeaderFooter);
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      emailConfirm: "useremail@email.com",
      beforeDestroy() {
        return onAuthUIStateChange;
      },
      formFields: [
        {
          type: "email",
          label: "Custom email Label",
          placeholder: "custom email placeholder",
          required: true
        },
        {
          type: "password",
          label: "Custom Password Label",
          placeholder: "custom password placeholder",
          required: true
        },
        {
          type: "address",
          label: "Custom Address Label",
          placeholder: "Enter your address",
          required: false
        }
      ]
    };
  }
};
</script>