import { defineStore } from 'pinia'
// 定义容器
export const useMainStore = defineStore('main', {  // define接受两个参数： 第一个容器名字(参数ID，必须唯一)，第二个就是选项对象，配置state,getters,actions等
    state: () => {  // state类似于组件的data，用来存储全局状态. state必须是箭头函数：为了更好的ts类型推导
        return {
            count: 100,
            foo: 'bar',
            arr: [1,2,3]
        }
    },
    getters: {},  // 类似于组件的computed，用来封装计算属性，有缓存的功能
    actions: {
        changeState (num: number) {
            this.count += num
            this.foo = 'hello action'
            this.arr.push(4)
        }
    }
})