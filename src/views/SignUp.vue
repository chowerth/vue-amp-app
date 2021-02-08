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
                  <v-toolbar-title>Sign Up form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="username"
                      label="Username"
                      prepend-icon="mdi-account"
                      type="text"
                      @input="$v.username.$touch()"
                      @blur="$v.username.$touch()"
                      :error-messages="usernameErrors"
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      label="email"
                      prepend-icon="mdi-email"
                      type="text"
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                      :error-messages="emailErrors"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      id="password"
                      label="Password"
                      prepend-icon="mdi-lock"
                      type="password"
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"
                      :error-messages="passwordErrors"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="createAccount">Sign Up</v-btn>
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
import { Auth } from "aws-amplify";
import { required, minLength, email } from "vuelidate/lib/validators";
import {
  hasNumber,
  hasLowerCaseAlpha,
  hasUpperCaseAlpha,
  hasSpecialChar
} from "@/validators/password";

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
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Your password must be at least 8 characters");
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.hasNumber && errors.push("Number required in password");
      !this.$v.password.hasLowerCaseAlpha && errors.push("Lowercase character required in password");
      !this.$v.password.hasUpperCaseAlpha && errors.push("Uppercase character required in password");
      !this.$v.password.hasSpecialChar && errors.push("Special character required in password");
            
      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Username is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  validations: {
    username: { required },
    password: {
      required,
      minLength: minLength(8),
      hasNumber,
      hasLowerCaseAlpha,
      hasUpperCaseAlpha,
      hasSpecialChar
    },
    email: { required, email }
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      username: "",
      email: "",
      password: "",
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
  },
  methods: {
    async createAccount() {
      // alert("create account");
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("Invalid signup input");
      } else {
        Auth.signUp({
          username: this.email,
          password: this.password,
          attributes: {
            email: this.email, // optional
            name: this.username
            // phone_number,      // optional - E.164 number convention
            // Other custom attributes...
          },
          validationData: [] // optional
        })
          .then(data => {
            console.log(data);
            //on success go to confirmation page
            this.$router.push({
              path: "/confirm",
              query: { email: this.email }
            });
          })
          .catch(err => {
            console.log(err);
            // Possible exceptions like UsernameExistsException
            // That is--trying to sign in with an e-mail that already has an account associated with it
          });
      }
    }
  }
};
</script>