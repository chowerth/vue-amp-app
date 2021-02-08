<template>
  <AppLayout>
    <HomeComponent />
    <v-btn @click="logout" color="info">Logout Button</v-btn>
  </AppLayout>
</template>

<script>
// @ is an alias to /src
import AppLayout from "@/layouts/AppLayout.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import { Auth } from 'aws-amplify';

export default {
  name: "Home2",
  components: {
    AppLayout,
    HomeComponent
  },
  methods: {

    async logout() {

      Auth.signOut()
        .then(data => {
          console.log(data)
          this.$router.push({path: '/login'});
        })
        .catch(err => {
          console.log(err)
        });

    }
  },
  created() {
    // When Vue Router navigates to the Home screen
    // upon creation...update the layout to AppLayout in App.vue
    // then router will display this view inside that component (since it is surrounding router)
    // this.$emit(`update:layout`, AppLayout);
  }
};
</script>
