<template lang="pug">
    section.contents-wrapper
        LeftForm.left-column
        section.main-content
            article.article-block
                h2.title gitのauthor履歴を変更する
                button.copy-button(@click="this.copyGitCommand") 下記のgitコマンドをコピーする
                .body git filter-branch -f --env-filter "GIT_AUTHOR_NAME='{{this.author}}'; GIT_AUTHOR_EMAIL='{{this.email}}'; GIT_COMMITTER_NAME='{{this.committer}}'; GIT_COMMITTER_EMAIL='{{this.email}}';" HEAD
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LeftForm from "../components/common/LeftForm.vue";

@Component({
  layout: "default",
  components: {
    LeftForm
  }
})
export default class extends Vue {
  get author() {
    return this.$store.state.user.author;
  }
  get committer() {
    return this.$store.state.user.committer;
  }
  get email() {
    return this.$store.state.user.email;
  }
  public copyGitCommand(event: any) {
    const targetCommand = event.target.nextElementSibling.innerHTML;
    this.copyStrToClipboard(targetCommand);
  }
  //todo : move this to common functions
  public copyStrToClipboard(target: string): void {
    const ta = document.createElement("textarea");
    ta.value = target;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    if (ta.parentElement !== null) {
      ta.parentElement.removeChild(ta);
    }
  }
}
</script>

<style lang="sass" scoped>
.contents-wrapper
    display: flex
    & > .left-column
        flex: 20%
    & > .main-content
        flex: 80%
        height: 100vh //tmp
.left-column
.main-content
    padding: 0 20px
.article-block
    margin-top: 30px
    & > .title
    & > .subtitle
    & > .body
        padding: 5px 10px
        border: orangered solid 1px
        min-height: 200px
</style>
