<template>
  <v-flex xs8 class="mt-5">
    <v-card class="mx-auto" tile>
        <nuxt-child :profile="profile" class="pr-4" />
    </v-card>
  </v-flex>
</template>

<script>
import {mapState} from 'vuex';

/**
 * Page for view/edit profile data
 * nuxt-child is profile/edit.vue || profile/view.vue page
 */
export default {
  fetch() {
    this.$store.dispatch('profile/getProfile')
  },
  computed: mapState({
    profile: state => state.profile.info,
  }),
}
</script>

<style lang="scss" scoped>

</style>
