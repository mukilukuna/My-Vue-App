<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="white"> 
      <v-list-item-group>
        <v-list-item-content>
          <v-list-item-title class="headline" style="color: rgb(0, 0, 0);">Real Estate Care</v-list-item-title>
        </v-list-item-content>
      </v-list-item-group>
      <v-list>
        <v-list-item>
          <router-link to="/" exact style="color: rgb(0, 0, 0);">
            <v-icon>mdi-home</v-icon> Home
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/about" exact style="color: rgb(0, 0, 0);">
            <v-icon>mdi-information</v-icon> About
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/contact" exact style="color: rgb(0, 0, 0);">
            <v-icon>mdi-email</v-icon> Contact
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="rgba(41,52,57,1)">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
