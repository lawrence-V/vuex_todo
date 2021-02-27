<template>
  <!-- App.vue -->

  <v-app class=".html">
    <v-navigation-drawer app floating v-model="drawer" class="deep-purple accent-4" dark>
      <v-list dense rounded>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      color="teal lighten-3"
      dark
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-view-dashboard", link: "/" },
      { title: "About", icon: "mdi-forum", link: "/about" },
      { title: "todos", icon: "mdi-forum", link: "/todos" },
    ],
  }),
};
</script>

<style>
html {
  font-family: "Open Sans", "sans-serif";
}
</style>
