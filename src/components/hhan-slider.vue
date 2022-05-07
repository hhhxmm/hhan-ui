<template>
  <div class="hhan-slider-box">
    <div class="slider">
      <div class="slider-runway" ref="runway" @mousedown="sliderDown" @touchstart="sliderDown" :style="runwayStyle">
        <div class="slider-bar" :style="barStyle">
          <div class="slider-button" :style="buttonStyle">
            <div class="slider-value" v-show="showText && isMove" :style="textStyle">{{ value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hhan-slider",
  props: {
    value: Number,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    runwayBackroundColor: { type: String, default: "#e4e7ed" },
    barBackgroundColor: { type: String, default: "#409eff" },
    buttonrBackgroundColor: { type: String, default: "#fff" },
    buttonrBorderColor: { type: String, default: "#409eff" },
    showText: { type: Boolean, default: false },
    textColor: { type: String, default: "#fff" },
    textRadius: { type: Number, default: 6 },
    textBackgroundColor: { type: String, default: "rgba(0, 0, 0, 0.5)" },
  },
  data() {
    return {
      isMove: false,
    };
  },
  computed: {
    ratio() {
      let r = (this.value - this.min) / (this.max - this.min);
      r = r < 0 ? 0 : r > 1 ? 1 : r;
      return r;
    },
    barStyle() {
      return {
        width: 100 * this.ratio + "%",
        backgroundColor: this.barBackgroundColor,
      };
    },
    textStyle() {
      return {
        color: this.textColor,
        borderRadius: this.textRadius + "px",
        backgroundColor: this.textBackground,
      };
    },
    runwayStyle() {
      return {
        backgroundColor: this.runwayBackroundColor,
      };
    },
    buttonStyle() {
      return {
        backgroundColor: this.buttonrBackgroundColor,
        borderColor: this.buttonrBorderColor,
      };
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.sliderMove);
    document.addEventListener("mouseup", this.sliderUp);
    document.addEventListener("touchmove", this.sliderMove);
    document.addEventListener("touchend", this.sliderUp);
    this.$emit("input", this.min);
  },
  methods: {
    sliderDown(ev) {
      this.isMove = true;
      this.move(ev);
    },
    sliderUp() {
      this.isMove = false;
    },
    sliderMove(ev) {
      if (this.isMove) {
        this.move(ev);
      }
    },
    move(ev) {
      let distance = 0;
      if (ev.touches) {
        distance = ev.touches[0].clientX - this.$refs.runway.offsetLeft;
      } else {
        distance = ev.clientX - this.$refs.runway.offsetLeft;
      }
      distance =
        distance < 0
          ? 0
          : distance > this.$refs.runway.offsetWidth
            ? this.$refs.runway.offsetWidth
            : distance;
      let value = parseInt(
        (distance * (this.max - this.min)) / this.$refs.runway.offsetWidth +
        this.min
      );
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
.hhan-slider-box {
  padding: 20px;
}

.slider {
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
}

.slider-runway {
  width: 100%;
  height: 6px;
  background-color: #e4e7ed;
  border-radius: 3px;
  cursor: pointer;
}

.slider-bar {
  width: 50%;
  height: 6px;
  background-color: #409eff;
  border-radius: 3px;
  position: relative;
}

.slider-button {
  position: relative;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 2px solid #409eff;
  border-radius: 50%;
  position: absolute;
  top: -7px;
  right: -8px;
  transition: all 0.2s linear;
}

.slider-value {
  position: absolute;
  top: -36px;
  left: -9px;
  width: 36px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  color: #fff;
}

.slider-button:hover {
  transform: scale(1.2);
  cursor: grab;
}

.slider-button:active {
  cursor: grabbing;
}
</style>
