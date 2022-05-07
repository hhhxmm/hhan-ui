[Github - hhhxmm/hhan-ui](https://github.com/hhhxmm/hhan-ui)

[Gitee - 隔年雪/hhan-ui](https://gitee.com/hhan1027/hhan-ui)

[NPM - hhan1027/hhan-ui](https://www.npmjs.com/package/hhan-ui)

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

| 属性                   | 描述                    | 类型    | 默认值             | 必传 |
| ---------------------- | ----------------------- | ------- | ------------------ | ---- |
| value                  | 使用v-model进行双向绑定 | Number  | -                  | 是   |
| min                    | 最小值                  | Number  | 0                  | 否   |
| max                    | 最大值                  | Number  | 100                | 否   |
| runwayBackroundColor   |                         | String  | #e4e7ed            | 否   |
| barBackgroundColor     | 进度背景颜色            | String  | #409eff            | 否   |
| buttonrBackgroundColor | 按钮背景颜色            | String  | #fff               | 否   |
| buttonrBorderColor     | 按钮边框颜色            | String  | #409eff            | 否   |
| showText               | 是否显示文字            | Boolean | false              | 否   |
| textColor              | 文字颜色                | String  | #fff               | 否   |
| textRadius             | 文字背景圆角            | Number  | 6                  | 否   |
| textBackgroundColor    | 文字背景颜色            | String  | rgba(0, 0, 0, 0.5) | 否   |

```vue
<template>
  <div id="app">
    <div>num={{ num }}</div>
    <div class="slider">
      <hhan-slider 
           v-model="num" 
           :min="10" 
           :max="200" 
           :showText="showText" 
           :textRadius="50" 
           textColor="#f00"
           textBackgroundColor="rgba(255,0,0,0.6)" 
           runwayBackroundColor="#0f0"
           barBackgroundColor="#000"
           buttonrBackgroundColor="#00f" 
           buttonrBorderColor="#ff0"
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

## hhan-button 按钮

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| :---------- | :------------- | :------ | :------------------------------------------------- | :----- |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |

```vue
<template>
  <div id="app">
    <div class="btns" 
        v-for="(btns, index) in btnsList" 
        :key="index" 
        style="margin-bottom:10px"
    >
      <hhan-button 
          v-for="(btn, i) in btns" 
          :key="btn.text + i" 
          :style="{ marginLeft: i > 0 ? '10px' : 0 }"
          :type="btn.type" 
          :plain="btn.plain" 
          :round="btn.round"
          :circle="btn.circle" 
          :nativeType="btn.nativeType"
      >
        {{ btn.text }}
      </hhan-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      btnsList: [
        [
          { text: '默认按钮', type: 'default' },
          { text: '主要按钮', type: 'primary' },
          { text: '成功按钮', type: 'success' },
          { text: '信息按钮', type: 'info' },
          { text: '警告按钮', type: 'warning' },
          { text: '危险按钮', type: 'danger' }
        ],
        [
          { text: '朴素按钮', type: 'default', plain: true },
          { text: '主要按钮', type: 'primary', plain: true },
          { text: '成功按钮', type: 'success', plain: true },
          { text: '信息按钮', type: 'info', plain: true },
          { text: '警告按钮', type: 'warning', plain: true },
          { text: '危险按钮', type: 'danger', plain: true }
        ],
        [
          { text: '圆角按钮', type: 'default', round: true },
          { text: '主要按钮', type: 'primary', round: true },
          { text: '成功按钮', type: 'success', round: true },
          { text: '信息按钮', type: 'info', round: true },
          { text: '警告按钮', type: 'warning', round: true },
          { text: '危险按钮', type: 'danger', round: true }
        ],
        [
          { text: '', type: 'default', circle: true },
          { text: '', type: 'primary', circle: true },
          { text: '', type: 'success', circle: true },
          { text: '', type: 'info', circle: true },
          { text: '', type: 'warning', circle: true },
          { text: '', type: 'danger', circle: true }
        ],
        [
          { text: '默认按钮', size: '' },
          { text: '中等按钮', size: 'medium' },
          { text: '小型按钮', size: 'small' },
          { text: '超小按钮', size: 'mini' }
        ],
        [
          { text: '默认按钮', size: '', round: true, nativeType: 'button' },
          { text: '中等按钮', size: 'medium', round: true, nativeType: 'submit' },
          { text: '小型按钮', size: 'small', round: true, nativeType: 'reset' },
          { text: '超小按钮', size: 'mini', round: true, nativeType: 'test' }
        ]
      ]
    };
  },
};
</script>

<style>
</style>

```