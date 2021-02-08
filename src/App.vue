<template>
  <v-app>
      <!-- This listens for "layout" events and updates the component with is=layout with the
          component the event was emitted with. This enables me to change the layout of the page?-->
      <!-- <component :is="layout"> -->
         <!-- Below uses Vue Router to dynamically render the content of our page
      with the view that we assign via the 'to' attribute 
      component matched by the route will render here-->
        <!-- <router-view :layout.sync="layout" /> -->
        <router-view />
      <!-- </component> -->
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
    // Defaults to dive is no component provided?
    layout: `div`,
  })
};
</script>
