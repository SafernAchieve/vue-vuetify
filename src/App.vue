<template>
  <v-app id="app">
    <!-- App bar -->
    <v-app-bar color="primary" dark app>
      <v-toolbar-title>
        <router-link to="/" class="text-decoration-none white--text">Achieve</router-link>
      </v-toolbar-title>




      <v-tabs v-model="tab" background-color="primary">
  <v-tab v-if="tab === 'one'" value="one">Create Message</v-tab>
  <v-tab v-else>
    <router-link to="/about" class="text-decoration-none white--text">Create Message</router-link>
  </v-tab>
  
  <v-tab v-if="tab === 'two'" value="two">View Message</v-tab>
  <v-tab v-else>
    <router-link to="/viewMessage" class="text-decoration-none white--text">View Message</router-link>
  </v-tab>

  <v-tab value="three">Item Three</v-tab>
</v-tabs>

      <v-spacer></v-spacer>
      <!-- Drawer toggle button -->
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click="viewMessage">
          <v-list-item-icon>
            <v-icon>mdi-inbox</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>View Message</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="createMessage">
          <v-list-item-icon>
            <v-icon>mdi-email-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Create Message</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="Drictory">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Directory</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="Calendar">
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Calendar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main content -->
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <transition name="fade">
              <router-view />
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      tab: 'one' // Default active tab
    };
  },
  methods: {
    viewMessage() {
      this.tab = 'one'; // Ensure 'one' tab is active
      this.$router.push({ path: '/viewMessage' });
    },
    createMessage() {
      this.tab = 'two'; // Ensure 'two' tab is active
      this.$router.push({ path: '/createMessage' });
    },
    Drictory() {
      this.tab = 'three'; // Ensure 'three' tab is active
      this.$router.push({ path: '/directory' });
    },
    Calendar() {
      this.tab = 'four'; // Ensure 'four' tab is active
      this.$router.push({ path: '/calendar' });
    },
  },
};
</script>

<style scoped>
/* CSS transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
