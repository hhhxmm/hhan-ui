import HhanRate from './hhan-rate.vue';
import HhanSwitch from './hhan-switch.vue';
import HhanSlider from './hhan-slider.vue';
import HhanButton from './hhan-button.vue';

import './iconfont.css';

const components = [
    HhanRate,
    HhanSwitch,
    HhanSlider,
    HhanButton
];

const install = function (Vue) {
    if (install.installed) return;
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component));
    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue);
    }
};

export default install;