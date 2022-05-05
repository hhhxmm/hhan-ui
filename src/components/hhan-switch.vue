<template>
  <div class="hhan-switch" :style="boxact" @click="$emit('input', !value)">
    <span :style="spanact"></span>
  </div>
</template>

<script>
export default {
  name: "hhan-switch",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    width: {
      type: Number,
      default: 40,
    },
    activeColor: {
      type: String,
      default: "#409EFF",
    },
    inactiveColor: {
      type: String,
      default: "#C0CCDA",
    },
  },
  data() {
    return {};
  },
  computed: {
    boxact() {
      return {
        width: this.width + "px",
        height: this.width / 2 + "px",
        background: this.value ? this.activeColor : this.inactiveColor,
        borderWidth: this.width / 20 + "px",
        borderColor: this.value ? this.activeColor : this.inactiveColor,
        borderRadius: this.width / 2 + "px",
      };
    },
    spanact() {
      return {
        width: this.width / 2 + "px",
        height: this.width / 2 + "px",
        left: this.value ? "calc(100% - " + this.width / 2 + "px)" : "",
      };
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: content-box;
}

.hhan-switch {
  position: relative;
  height: 20px;
  border: 2px solid;
  border-radius: 20px;
  transition: 0.1s linear;
}

span {
  display: block;
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.1s linear;
}
</style>
