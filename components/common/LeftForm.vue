<template lang="pug">
    section.left-form
        .title Your Git Account
        .subtitle あなたのデータを入力すると自動的にあなたのデータがコンテンツに表示されます。あなたはコピペするだけで操作が可能になります
        .from-block
            .label Author Name
            input.input(v-model="author")
        .from-block
            .label Committer Name
            input.input(v-model="committer")
        .from-block
            .label Mail Address
            input.input(v-model="email")
        Button.button
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "../parts/Button.vue";

@Component({
  components: {
    Button
  }
})
export default class extends Vue {
  set author(value: any) {
    this.$store.commit("user/updateAuthor", value);
  }
  set committer(value: any) {
    this.$store.commit("user/updateCommitter", value);
  }
  set email(value: any) {
    this.$store.commit("user/updateEmail", value);
  }
}
</script>

<style lang="sass" scoped>
$input-border: #1eb9ff
$input-focus: #e6ff65
.left-form
    font-family: $title-font
    // position: fixed
    padding: 20px
    width: 300px
    height: 100vh
    top: 0px
    left: 0px
    background-color: white
    & > .title
        padding: 10px
        font-size: 40px
    & > .subtitle
        padding: 10px
    & > .button
        margin-top: 20px
.from-block
    user-select: none
    & > .label
        padding: 10px
        font-size: 30px
    & > .input
        padding: 10px
        border: solid 2px $input-border
        border-radius: 10px
        width: 100%
    & > .input:focus
        outline: 0
        border-color: $input-focus
</style>
