<template lang="pug">
    button.button-block no need this button
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style lang="sass" scoped>
.button-block
    display: flex
    justify-content: center
    margin: 4px 2px
    width: 200px
    height: 40px
    background: linear-gradient(#05FBFF, #1E00FF)
    color: white
    border-radius: 40px
    cursor: pointer
</style>
