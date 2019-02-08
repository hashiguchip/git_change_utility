<template lang="pug">
    section.main
        Header
        section.input input your data
            .from author name
                input.author(v-model="author")
            .from committer name
                input.committer(v-model="committer")
            .from mail address
                input.email(v-model="email")
        section.display
            div gitのauthor履歴を変更する {{this.author}}
            div git filter-branch -f --env-filter "GIT_AUTHOR_NAME='{{this.author}}'; GIT_AUTHOR_EMAIL='{{this.email}}'; GIT_COMMITTER_NAME='{{this.committer}}'; GIT_COMMITTER_EMAIL='{{this.email}}';" HEAD
        Footer
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class extends Vue {
  public author = "";
  public committer = "";
  public email = "";
}
</script>

<style scoped></style>
