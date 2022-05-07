<template>
    <button :class="className" :type="nativeTypeName">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'hhan-button',
    data() {
        return {};
    },
    props: {
        size: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        nativeType: {
            type: String,
            default: 'button'
        }
    },
    computed: {
        sizeName() {
            let name = this.size ? ' ' + this.size : '';
            return name;
        },
        typeName() {
            let name = this.type ? ' ' + this.type : '';
            return name;
        },
        plainName() {
            let name = this.plain ? ' ' + 'plain' : '';
            return name;
        },
        roundName() {
            let name = this.round ? ' ' + 'round' : '';
            return name;
        },
        circleName() {
            let name = this.circle ? ' ' + 'circle' : '';
            return name;
        },
        nativeTypeName() {
            let name = this.nativeType == 'button' || this.nativeType == 'submit' || this.nativeType == 'reset' ? this.nativeType : 'button';
            return name;
        },
        className() {
            let str = 'hhan-button';
            if (this.sizeName) {
                str += this.sizeName;
            }
            if (this.typeName) {
                str += this.typeName;
            }
            if (this.plainName) {
                str += this.plainName;
            }
            if (this.roundName) {
                str += this.roundName;
            }
            if (this.circleName) {
                str += this.circleName;
            }
            return str;
        }
    }
};
</script>

<style scoped>
.hhan-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}

/* 中等 */
.hhan-button.medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}

/* 小型 */
.hhan-button.small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}

/* 迷你 */
.hhan-button.mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
}

.hhan-button:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff
}

/* 朴素按钮 */
.hhan-button.plain:hover {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
}

/* 圆角 */
.hhan-button.round {
    border-radius: 20px;
    padding: 12px 23px;
}

/* 圆 */
.hhan-button.circle {
    border-radius: 50%;
    padding: 12px;
}

/* primary */
.hhan-button.primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}

.hhan-button.primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}

.hhan-button.primary.plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
}

.hhan-button.primary.plain:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
}

/* success */
.hhan-button.success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
}

.hhan-button.success:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
}


.hhan-button.success.plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
}

.hhan-button.success.plain:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
}

/* info */
.hhan-button.info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
}

.hhan-button.info:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
}

.hhan-button.info.plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
}

.hhan-button.info:hover {
    background: #909399;
    border-color: #909399;
    color: #fff;
}

/* warning */
.hhan-button.warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
}

.hhan-button.warning:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
}

.hhan-button.warning.plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
}

.hhan-button.warning.plain:hover {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
}

/* danger */
.hhan-button.danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
}

.hhan-button.danger:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
}

.hhan-button.danger.plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
}

.hhan-button.danger.plain:hover {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
}
</style>