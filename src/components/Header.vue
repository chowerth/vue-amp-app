<template>
  <v-app>
    <v-card
      color="grey lighten-4"
      flat
      height="200px"
      tile
    >
      <v-toolbar dark padless color=blue>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Annuity Management</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn depressed ripple color="success">Sign Up</v-btn>
        <v-btn depressed ripple color="success">Login</v-btn>

      </v-toolbar>

      <v-content>
        <HelloWorld/>
      </v-content>

      <v-footer dark padless color=blue>

        <v-spacer></v-spacer>
           <strong>Nationwide</strong> &copy; {{ new Date().getFullYear() }}
        <v-spacer></v-spacer>
      </v-footer>

    </v-card>
  </v-app>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>
