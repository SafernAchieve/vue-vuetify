<template>
  <v-app id="app">
    <v-app-bar color="primary" dark app>
      <v-toolbar-title>
        <router-link to="/" class="text-decoration-none white--text">Achieve</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

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
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bricks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>

          <v-list-item-icon>
            <v-icon @click="Drictory">mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Item</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon @click="Calendar" >mdi-calendar</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
    };
  },
  methods: {
    viewMessage() {
      this.$router.push({ path: '/about' });
    },
    createMessage() {
      this.$router.push({ path: '/about' });
    },
    Drictory() {
      this.$router.push({ path: '/Directory' });
    },
    Calendar() {
      this.$router.push({ path: '/Calendar' });
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
