<template>
  <button
    :style="{ width: width + 'px', height: height + 'px' }"
    class="loading-button background-color"
    :class="buttonColor"
    @click="buttonClick"
  >
    <loading v-if="loading"></loading>
    <div class="button-text" :class="textClass">입금하기</div>
  </button>
</template>
<script lang="ts">
import { log } from "console";
import { defineComponent, ref, computed } from "vue";
import Loading from "./Loading.vue";

export default defineComponent({
  name: "LoadingButton",
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    buttonColor: {
      type: String,
    },
  },
  components: {
    Loading,
  },
  setup(props: any) {
    const loading = ref(false);
    const buttonColor = computed(() => {
      switch (props.buttonColor) {
        case "main-color":
          return "main-color";
      }
      return "main-color";
    });
    const buttonClick = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 3000);
    };
    const textClass = computed(() => {
      let className = "";
      if (loading.value) className += " button-text-loading";
      return className;
    });

    return {
      loading,
      buttonColor,
      buttonClick,
      textClass,
    };
  },
});
</script>
<style lang="scss">
.loading-button {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: gap 0.2s ease, color 0.1s ease;
}

.main-color {
  color: #ffffff;
}
.custom-color {
  color: #3182f6;
}
.background-color {
  background-color: #3182f6;
  &:hover {
    background-color: #1b64da;
  }
}

.button-text {
  transition: transform 0.3s;
}

.button-text-loading {
  transform: translateX(10px);
}
</style>
