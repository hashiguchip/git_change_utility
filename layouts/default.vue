<template lang="pug">
    .layout-warapper
        Header
        nuxt
        Footer
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "~/components/common/Header.vue";
import Footer from "../components/common/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class extends Vue {}
</script>

<style lang="sass" scoped></style>
