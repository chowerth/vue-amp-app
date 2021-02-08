<template>
<div>
  <HeaderFooter >    
  <HomeComponent />
  </HeaderFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";
import HeaderFooter from "@/layouts/HeaderFooter";
// import AppLayout from "@/layouts/AppLayout.vue";

export default {
  name: "Home",
  components: {
    HomeComponent,
    HeaderFooter
  },
  created() {
    this.$emit(`update:layout`, HeaderFooter);
    // When Vue Router navigates to the Home screen
    // upon creation...update the layout to AppLayout in App.vue
    // then router will display this view inside that component (since it is surrounding router)
    // this.$emit(`update:layout`, AppLayout);
  }
};
</script>
