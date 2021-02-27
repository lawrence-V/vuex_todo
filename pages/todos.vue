<template>
  <div>
    <div v-for="todo in all_todos" :key="todo.id">
      <v-container v-for="align in alignments" :key="align">
        <v-row :align="align">
          <v-col v-for="n in 3" :key="n">
            <v-card color="#385F73" dark>
              <v-card-title class="headline">
                {{ todo.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    alignments: ["start", "center", "end"],
  }),

  // use mounted to able to fecth the api

  mounted() {
    this.FETCH_TODOS();
  },
  // methods: {
  //   FETCH_TODOS() {
  //     // return the Promise from the action
  //     return this.$store.dispatch("FETCH_TODOS", this.$route.params.id);
  //   },
  // },
  // created() {
  //   this.FETCH_TODOS();
  // },
};
</script>

<style></style>
