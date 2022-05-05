# 安装

适用于vue2

```
npm i hhan-ui
```



# 导入

## 在main.js中

```vue
import Hhan from 'hhan-ui';
Vue.use(Hhan);
```



# 组件

## hhan-rate 评分

| 属性          | 描述                           | 类型    | 默认值                                   | 必传 |
| ------------- | ------------------------------ | ------- | ---------------------------------------- | ---- |
| value         | 评分值 使用v-model进行双向绑定 | Number  | -                                        | 是   |
| max           | 最大评分值                     | Number  | 5                                        | 否   |
| iconClass     | 字体图标类名                   | String  | icon-star-full                           | 否   |
| inactiveColor | 未激活颜色                     | String  | \#C6D1DE                                 | 否   |
| activeColor   | 激活颜色                       | String  | \#F7BA2A                                 | 否   |
| showText      | 是否显示文字                   | Boolean | false                                    | 否   |
| texts         | 显示的文字                     | Array   | ["极差", "失望", "一般", "满意", "惊喜"] | 否   |
| textColor     | 显示的文字颜色                 | String  | #1F2D3D                                  | 否   |

```vue
<template>
  <div id="app">
    <hhan-rate 
         v-model="num"
         :max="6" 
         iconClass="icon-star-full"
         inactiveColor="#ccc"
         activeColor="#f00" 
         :showText="true"
         :texts='["极差", "失望", "一般", "满意", "惊喜", "test"]'
         textColor="#0f0"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      num: 0,
    };
  }
};
</script>

<style>
</style>
```



## hhan-switch 开关

| 属性          | 描述                             | 类型                      | 默认值   | 必传 |
| ------------- | -------------------------------- | ------------------------- | -------- | ---- |
| value         | 是否激活 使用v-model进行双向绑定 | [Boolean, String, Number] | false    | 是   |
| width         | 宽度                             | Number                    | 40       | 否   |
| activeColor   | 激活颜色                         | String                    | #409EFF  | 否   |
| inactiveColor | 未激活颜色                       | String                    | \#C0CCDA | 否   |

```vue
<template>
  <div id="app">
    <hhan-switch 
         v-model="show" 
         :width="80" 
         activeColor="#f00" 
         inactiveColor="#00f" 
     />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false,
    };
  }
};
</script>

<style>
</style>

```



## hhan-slider 滑块

| 属性  | 描述                    | 类型   | 默认值 | 必传 |
| ----- | ----------------------- | ------ | ------ | ---- |
| value | 使用v-model进行双向绑定 | Number | -      | 是   |
| min   | 最小值                  | Number | 0      | 否   |
| max   | 最大值                  | Number | 100    | 否   |

```vue
<template>
  <div id="app">
    <div>num={{ num }}</div>
    <div class="slider">
      <hhan-slider 
           v-model="num" 
           :min="10" 
           :max="200" 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      num: 0,
    };
  }
};
</script>

<style>
.slider {
  width: 800px;
}
</style>

```

