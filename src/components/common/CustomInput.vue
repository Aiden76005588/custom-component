<template>
  <div>
    <input type="text" />
    <div>hover text</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoadingButton",
  props: {},
  components: {},
  setup() {
    const loading = ref(false);
    return {
      loading,
    };
  },
});
</script>
<style lang="scss"></style>
