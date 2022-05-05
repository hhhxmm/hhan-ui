<template>
  <div class="hhan-rate">
    <span v-for="n in max" :class="['iconfont', iconClass]" :style="color(n)" @click="$emit('input', coverclick(n))"
      @mouseenter="coverenter(n)" @mouseleave="$emit('input', coverleave())" :key="n"></span>
    <span class="text" v-show="showText" :style="{ color: textColor }">{{
        texts[count ? count - 1 : flag - 1]
    }}</span>
  </div>
</template>

<script>
export default {
  name: "hhan-rate",
  props: {
    value: Number,
    max: {
      type: Number,
      default: 5,
    },
    iconClass: {
      type: String,
      default: "icon-star-full",
    },
    inactiveColor: {
      type: String,
      default: "#C6D1DE",
    },
    activeColor: {
      type: String,
      default: "#F7BA2A",
    },
    showText: Boolean,
    texts: {
      type: Array,
      default() {
        return ["极差", "失望", "一般", "满意", "惊喜"];
      },
    },
    textColor: {
      type: String,
      default: "#1F2D3D",
    },
  },
  computed: {},
  data() {
    return {
      flag: this.value,
      count: 0,
    };
  },
  methods: {
    coverenter(n) {
      this.count = n;
    },
    coverleave() {
      this.count = 0;
      return this.flag ? this.flag : 0;
    },
    coverclick(n) {
      this.flag = n;
      return this.flag;
    },
    color(n) {
      let color = `color:${n <= (this.count ? this.count : this.flag)
        ? this.activeColor
        : this.inactiveColor
        };`;
      return color;
    },
  },
  watch: {
    value(newVal) {
      if (newVal < 0) {
        this.flag = 0;
      } else if (newVal > this.max) {
        this.flag = this.max;
      } else {
        this.flag = newVal;
      }
    },
  },
};
</script>

<style scoped>
.hhan-rate {
  position: relative;
  margin: 20px;
  height: 50px;
}

.hhan-rate>div {
  position: absolute;
  height: 50px;
}

.cover {
  width: 0;
  overflow: hidden;
}
</style>
