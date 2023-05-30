<template>
  <div>
    <loading-button width="200" height="50"></loading-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import LoadingButton from "../common/LoadingButton.vue";

export default defineComponent({
  name: "ComponentTestView",
  components: {
    LoadingButton,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
