<template lang="pug">
    section.page-header
        .title-box
            h1.title Git Change Utility
        .menu-box
            nuxt-link(to="/").menu Home
            nuxt-link(to="/about").menu About
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style lang="sass" scoped>
.page-header
    display: flex
    justify-content: space-between
    padding: 0 16px
    width: 100vw
    height: 50px
    background: linear-gradient(90deg, $primary-color, rgba(255,0,0,0))
    & > .title-box
    & > .menu-box
.title-box

.menu-box
    display: flex
    & > .menu
        display: flex
        align-items: center
        justify-content: center
        width: 100px
        height: 100%
</style>
