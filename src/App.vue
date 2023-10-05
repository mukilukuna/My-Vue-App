<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      Real Estate Care
      <v-list>
        <v-list-item>
          <router-link to="/" exact>
            <v-icon>mdi-home</v-icon> Home
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/about" exact>
            <v-icon>mdi-information</v-icon> About
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/contact" exact>
            <v-icon>mdi-email</v-icon> Contact
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-icon>mdi-application</v-icon>
    <v-app-bar-title>Application</v-app-bar-title>
  </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>
