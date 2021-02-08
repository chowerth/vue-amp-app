<template>
  <div>
    <v-container fluid>
      <!--TODO: Create layout components for header and footer and content  -->
      <!--See https://vuetifyjs.com/en/components/application/ for layout of vuetify  -->
      <!-- Use Vue Router "to" on buttons to navigate properly -->
      <v-app-bar dark padless color="blue">
        <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>

        <v-toolbar-title>Annuity Management System</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn depressed ripple color="success" to="/signup">Sign Up</v-btn>
        <v-btn depressed ripple color="success" to="/confirm">Confirm Sign Up</v-btn>
        <v-btn depressed ripple color="success" to="/forgotpassword">Forgot Password</v-btn>
        <v-btn depressed ripple color="success" to="/login">Login</v-btn>
        <v-btn depressed ripple color="success" to="/home2">Home2</v-btn>
      </v-app-bar>

      <v-content> 
        <slot />
      </v-content>

      <v-footer dark padless color="blue">
        <v-spacer></v-spacer>
        <strong>Nationwide</strong>
        &copy; {{ new Date().getFullYear() }}
        <v-spacer></v-spacer>
      </v-footer>
    </v-container>
  </div>
</template>