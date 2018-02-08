// 引入组件css文件
import 'vue-tk/dist/vue-tk.css'
// 全局引入所有组件
import Vue from 'vue'
import VueTk from 'vue-tk'
import icon from '~assets/icon.json'
import VueScrollTo from 'vue-scrollto'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(VueScrollTo)
Vue.use(VueTk)
Vue.prototype.$tkIcon.setCtoken('oXl2gcZNe8M3YoJvl4TSicon-font', 'svTNUzx0K3-_wUU5QrEMe1AoE68Eg9HkiEcuRLDEuXfAsu7A3wrw4K9-2qZ3f5Lhml0I6rSndHzAqKuatgvtB7HNYzJtqIvg8ogAAqjBC6sJQDHthANdhNCwMFYtIXg1ScZ1QRsf8EXdTNbcG4r4QUT-T4ZMlO3T744ujTPQ4JRZbCfyXhfOrsVJhLhvEKtj1mtZD6L1LkdIpWEz-mvTqQRu0Ee1jQGFQjqs4JIKddJjLRgNn-SvaB3WO-ut-u6cdTVC39w73cZvwBsQyW5QUmo4zmV7DIA4f1vfjmDWXQxmyjcFGZ5tkoGAyy1ZSKgnueVf2P5F_1JR7JyvfLLgB1oeWUXhxz2y4npxskSb8AkTC-be__9nPZQVZhTEYINLDQeJR_JXVdfTK6Q3fExsZiKgXwO3xvanoAfTVnCTw4xmo0dw2QQbJoLoAJ-dQogUR07BR4oBB44zYrC29_nM17v0hEpcYRROXto6BA_T2Y26a759uTwybU_9bMQYBTIJpbGXc7hYEX00J7ZpuUQNnsJOp-vFbM2M_a4j1qw7JCNFa2XoJrcSX5BHEwN2HHsaahw8CfjV0xUX7SkRKSnrFtgVOqXD1o4VwSljXUTdNO0EBgRMJRTKKeL_NS-AKukhEa37Y98em2mM_Ol4A0t7BJrO8Tjyvv2Uqr9TsrAeeUa4IGtBOUniHmVBRNsrFyluqrjTA12Urdb-cELS2USBxgCErNZXDQINpNCKiwsDUkZT7Nxff5EtDIY79VDC6IBzRtETfaDkVargLKEmOpzF66Ifxo4O8eCGfuSidKiWlFv9qkNBzB5hBejaVcnS7CseKeGrxjgVNVXm0d8aaP-ANlt98E3lKxQx6kuR9e_2le70QBtFXyDa4c2EYz-Kd5V-5skPgegy4PDdSnRu0JKZHd1E_cBrYzX42EQoMirY4m8-NptYZG2L9cE9CpvDbcREb_kQ2u2Z3l2T1RI-ndC8mdtthSNHBRo-khuJhZ1IassVeHwQ4PKnLLISgyceHFHCgk_slDte4ud4B8_pVG1UnHoWCfZ5NIw4Ty5jkdPL1vPwEfS1-Enl4MFLp5bQRylwKg-3iACUONCk-KAhpNm2bZRbxNv4LvBpkZmD3u7Da1QQUPvsXKjRE4Sps99ed1_NC01D3mvtmNT112tuWuIEl_ZScTYIyU41Y27CkHbuc0HplhxnhnNeJGK9Zl3X5u3Tg50dbWOF6K-ZoqEf62ybzg==')
Vue.prototype.$tkIcon.set({
  public: {
    // 开发时code与data必须设置其中一项，发布时必须设置data
    code: 292554, // iconfont 图标库id
    data: icon, // 本页面浏览图标库，点击"获取json"按钮获取
    type: 'public' // 可选值public,private
  }
})

const APP_ID = 'iXKyJaJKJWzJ9vekIHjPz58i-gzGzoHsz'
const APP_KEY = 'vBSteTbi0W1cS2N2uBCnhemG'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

