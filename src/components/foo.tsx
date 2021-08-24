// 3、组合式API
import { defineComponent, ref } from '@vue/runtime-core'
interface PropsType {
  msg: string
}
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    const count = ref(0)
    return (props: PropsType) => (
      <div>
        <p>{props.msg}</p>
        <p>{count.value}</p>
      </div>
    )
  }
})

// 2、option API 方式
// import { defineComponent } from '@vue/runtime-core'

// export default defineComponent({
//   props: {
//     msg: {
//       type: String,
//       required: true
//     }
//   },
//   data () {
//     return {
//       count: 0
//     }
//   },
//   render () {
//     return (
//       <div>
//         <div>{this.msg}</div>
//         <p>{this.count}</p>
//       </div>
//     )
//   }
// })

// 1、JSX方式
// export default () => {
//   return (
//     <div>
//       <h1>FOO 函数式组件</h1>
//     </div>
//   )
// }
