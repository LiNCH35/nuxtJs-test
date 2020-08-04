<template>
  <v-row>
    <v-col cols="4">
      <v-avatar
        class="profile"
        color="grey"
        size="164"
        tile
      >
        <v-img :src="img"></v-img>
      </v-avatar>
      <v-container class="mt-4">
        <v-btn class=" align-self-center" :to="{ name: 'profile-view' }">Отменить</v-btn>
        <v-btn @click="save" class="mt-3">Сохранить</v-btn>
      </v-container>
    </v-col>
    <v-col cols="8">
      <v-text-field
        v-model.trim="img"
        label="Аватар"
        outlined
        class="mt-2"
      />
      <v-text-field
        v-model.trim="name"
        label="Имя"
        outlined
        class="mt-2"
      />
      <v-text-field
        v-model.trim="email"
        label="Email"
        outlined
        class="mt-2"
      />
      <v-text-field
        v-model.trim="job"
        label="Должность"
        outlined
        class="mt-2"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "edit",
  props: {
    profile: {
      type: Object,
      required: true,
    }
  },

  data() {
    let {name, email, img, job} = this.profile

    return {
      name,
      email,
      img,
      job,
    }
  },
  methods: {
    save() {
      this.$store.dispatch('profile/updateProfile', this.$data)
      this.$router.push({ name: 'profile-view'} )
    },
  }
}
</script>

<style scoped>

</style>
