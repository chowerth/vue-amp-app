<template>
  <v-app>
    <v-card flat tile>
      
      <v-toolbar dark padless color=blue>
        <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Annuity Management</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn depressed ripple color="success" to="/signup">Sign Up</v-btn>
        <v-btn depressed ripple color="success" to="/login">Login</v-btn>

      </v-toolbar>
      <!-- <Header/> -->
      <v-content>
        <!-- Below uses Vue Router to dynamically update the content of our page
        with the view that we assign via the 'to' attribute -->
        <router-view/> 
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
// import Header from './components/Header'
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // Header,
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
