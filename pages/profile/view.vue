<template>
  <v-row>
    <v-col cols="9">
      <v-avatar
        class="profile"
        color="grey"
        size="164"
        tile
      >
        <v-img :src="profile.img"></v-img>
      </v-avatar>
    </v-col>
    <v-col cols="3">
      <v-btn :to="{ name: 'profile-edit' }">Редактировать</v-btn>
    </v-col>
    <v-col class="py-0">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">{{ profile.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ profile.job }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ profile.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "view",
  props: {
    profile: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>
