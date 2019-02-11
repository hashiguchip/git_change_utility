<template lang="pug">
    .layout-warapper
        Header
        nuxt
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../components/common/Header.vue";

@Component({
  components: {
    Header
  }
})
export default class extends Vue {}
</script>

<style lang="sass" scoped></style>
