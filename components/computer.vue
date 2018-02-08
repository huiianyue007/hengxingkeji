<template>
  <!--主容器-->
  <div class="main-box" id="scrolllink1">
    <!--顶部banner区域-->
    <div class="com-banner">
      <!--导航logo区块-->
      <transition name="m-navfade">
        <div class="header" :class="{'header-fade' : mainnavstyle}" :key='mainnavstyle'>
          <div class="logo">
            <a href="#"></a>
            <i></i>
            <div class="h-title">
              专业跨平台APP开发<br>
              <span>默客 &nbsp;&nbsp;&nbsp;&nbsp; 以代码发声</span>
            </div>
          </div>
          <!--顶部导航-->
          <div class="h-nav">
            <ul>
              <li v-for="(item, index) in main_data.h_nav" v-scroll-to="item.link">
                <a href="javascript:void(0)">
                  {{item.content}}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
      <!--大字体区域-->
      <div class="big-font">
        <img src="../assets/pc_img/Subject-word.png" alt="">
      </div>
      <!--中间小logo-->
      <div class="small-logo">
        <ul>
          <li v-for="(item,index) in main_data.s_logo">
            <div class="small-bg" :class="item.class"></div>
            <h3>{{item.contents}}</h3>
          </li>
        </ul>
      </div>
      <!--产品咨询按钮-->
      <div class="advisory-btn">
        <a href="">
          <span>产品咨询</span>
          <i></i>
        </a>
      </div>
    </div>
    <!--右侧边菜单栏-->
    <!--主体部分-->
    <div class="sidebar">
      <div class="sidebar-content">
        <div class="side-button">
          <tk-icon type="public" class="bg-img">qq</tk-icon>
          <div class="pop">
            <a href="http://wpa.qq.com/msgrd?v=3&uin=717734797&site=qq&menu=yes" target="_blank">点击与我交谈</a>
          </div>
        </div>
        <div class="side-button">
          <tk-icon type="public" class="bg-img">weixin</tk-icon>
          <div class="pop">
            稍后推出请耐心等待
          </div>
        </div>
        <div class="side-button">
          <tk-icon type="public" class="bg-img">Phone-24</tk-icon>
          <div class="pop">
            0311-66561251
          </div>
        </div>
      </div>
      <!--<div class="side-up">-->
      <!--<div class="sideup-button">-->
      <!--<tk-icon type="public" class="bg-img">ARROW</tk-icon>-->
      <!--</div>-->
      <!--</div>-->
    </div>
    <div class="com-body">
      <!--只做最好互联网产品-->
      <div class="do-better" id="scrolllink2">
        <h1 class="top-title">我们只做最好的互联网产品</h1>
        <div class="item-box">
          <div class="item">
            <div class="circle">
              最低价格
            </div>
            <h3 class="title">
              突破底线的价格
            </h3>
            <p>
              背后是当前最优秀的跨平台解决方案（ios，安卓，微信， 浏览器四端一体，一份代码，四端运行。还有海量可复用组件，积木式拼装，进一步降低价格）
            </p>
          </div>
          <div class="item">
            <div class="circle">
              顶级技术
            </div>
            <h3 class="title">
              顶级的开发技术
            </h3>
            <p>
              当前最先进的技术架构与成熟的开发体系 （html5 plus，webpack，mvvm 数据驱动,baas后端即服务）
            </p>
          </div>
          <div class="item">
            <div class="circle">
              最短周期
            </div>
            <h3 class="title">
              最短一周
            </h3>
            <p>
              ios APP、安卓APP、微信服务号、手机网站四端一体
            </p>
          </div>
        </div>
      </div>
      <!--四端一体-->
      <div class="siduanyiti">
        <div class="left">
          <div class="bg">
            <img src="../assets/pc_img/diannao-img.png" alt="">
          </div>
        </div>
        <div class="right">
          <div class="position">
            <h1>四端一体</h1>
            <div class="content">
              <p>背后是当前最优秀的跨平台解决方案</p>
              <p>(ios，安卓，微信，浏览器四端一体，一份代码，四端运行
                海量可复用组件，积木式拼装，进一步降低价格)</p>
            </div>
          </div>
        </div>
      </div>
      <!--便于迭代-->
      <div id="scrolllink3" class="diedai">
        <h1>项目上线后，想加新功能？</h1>
        <h3>不用担心，一个好的架构最大的特点就是便于迭代。</h3>
        <p>小到改一个按钮颜色，大到更新一个版本，将需求描述提交给我们，我们将
          按照需求画出效果图，并给出报价（最低一百元起），然后安排开发，就如
          同你自己的技术团队一样。</p>
        <div class="icon"></div>
      </div>
      <!--技术支持-->
      <div class="support">
        <h1 class="title">项目运营不错，想组建自己的技术团队</h1>
        <h2 class="title2">没问题！我们将提供：</h2>
        <ul class="list">
          <li>* 完整项目源码</li>
          <li>* 完善的开发文档</li>
          <li>* 还有终生的技术咨询服务</li>
          <li>* 至多两人最长一周的开发培训</li>
        </ul>
        <h3 class="title3">我们在开发中使用eslint来规范代码（国内只有少数一线互联网公司使用），确保交付高质量的代码。</h3>
      </div>
      <!--项目流程-->
      <div id="scrolllink4" class="process">
        <img src="../assets/pc_img/process-img.png" alt="">
      </div>
      <!--诚信-->
      <div class="chengxin" id="scrolllink5">
        <img src="../assets/pc_img/Contrast-img.png" alt="" width="100%">
      </div>
      <!--表单报价方案-->
      <div id="scrolllink6" class="main-form">
        <h1 class="title">
          把你的时间用在产品和运营上，把你的信任交给我们
        </h1>
        <h2 class="title2">免费评估，获取APP方案报价</h2>
        <div class="m-form">
          <div class="project">
            <h3 class="title3">关于您的项目</h3>
            <input type="text" class="pro" placeholder="项目名称" v-model.trim = 'projectName' @blur = 'Verify(projectName, $event)'>
            <div>
              <textarea name="" id="" cols="30" rows="10" placeholder="你提供的信息越详细，我们越好理解您的需求" v-model = 'message' @blur = 'Verify(message, $event)'></textarea>
            </div>
          </div>
          <div class="about">
            <h3 class="title3">关于您</h3>
            <input type="text" class="pro" placeholder="您的姓名" v-model.trim = 'username' @blur = 'Verify(username, $event)'>
            <div>
              <input type="text" class="pro" placeholder="您的电话" v-model.trim = 'phone' @blur = 'verifyPhone($event)'>
            </div>
          </div>
          <div class="sub">
            <input type="submit" value="立即评估" @click= 'submit'>
          </div>
        </div>

      </div>
      <!--常见开发问题-->
      <div class="faq" id="scrolllink7">
        <div class="containear">
          <img src="../assets/pc_img/faq-img.png" alt="" width="100%">
        </div>
      </div>
    </div>
    <!--底部区域-->
    <div class="footer">
      <div class="list">
        <div class="item">
          <h1 class="title">联系我们</h1>
          <p class="title-b">contact</p>
        </div>
        <div class="item">
          <h3 class="title2">关注</h3>
          <div class="follow">
            <a href="" class="weixin"></a>
            <a href="" class="qq"></a>
            <a href="" class="phone"></a>
          </div>
        </div>
        <div class="item">
          <h3>石家庄谨思科技</h3>
          <div class="contact con1">
            电话：0311-845612341 <br>
            手机：18831126830 <br>
            邮箱：moke@avhv.com
          </div>
          <div class="contact">
            地点：河北省石家庄长安区东胜广场C座1404 <br>
            邮编：050000 <br>
            传真：0311-85462314
          </div>
        </div>
      </div>
      <div class="foot-b">
        <h3>
          opyRight © 2012-2014 moke.cloud,All Rights Reserved.  版权所有  石家庄瑾思科技
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import axios from 'axios'
  export default {
    data () {
      return {
//        模拟数据接口
        phone: '',
        username: '',
        message: '',
        projectName: '',
        main_data: {
//          顶部导航数据
          h_nav: [{
            content: '首页', link: {el: '#scrolllink1', duration: 700, easing: 'linear', offset: -86}
          }, {content: '优势', link: {el: '#scrolllink2', duration: 700, easing: 'linear', offset: -86}}, {
            content: '保障', link: {el: '#scrolllink3', duration: 700, easing: 'linear', offset: -86}
          }, {
            content: '流程', link: {el: '#scrolllink4', duration: 700, easing: 'linear', offset: -86}
          }, {content: '诚信', link: {el: '#scrolllink5', duration: 700, easing: 'linear', offset: -86}}, {
            content: '联系', link: {el: '#scrolllink6', duration: 700, easing: 'linear', offset: -86}
          }, {content: '问答', link: {el: '#scrolllink7', duration: 700, easing: 'linear', offset: -86}}],
//        顶部小logo数据
          s_logo: [
            {
              class: 'small-bg1', contents: 'IOS APP'
            },
            {
              class: 'small-bg2', contents: '安卓 APP'
            },
            {
              class: 'small-bg3', contents: '浏览器'
            },
            {
              class: 'small-bg4', contents: '微信端'
            }
          ]
        },
//        navtransition: true,
//        主导航渐变样式判断条件
        mainnavstyle: false,
//        监听滚动条Y轴高度
        scrolled: false
      }
    },
    methods: {
//      顶部导航到达一定高度渐变固定顶端方法
      handleScroll () {
//        console.log(this.$refs.sss)
        this.scrolled = window.scrollY
//        console.log(this.scrolled)
        if (this.scrolled > 830) {
          this.mainnavstyle = true
        } else {
          this.mainnavstyle = false
        }
      },
//      点击顶部导航跳转锚点方法
      jump (index) {
        // 用 class="d_jump" 添加锚点
        let jump = document.querySelectorAll('.d_jump')
        let total = jump[index].offsetTop - 86
        document.body.scrollTop = total
        document.documentElement.scrollTop = total
        window.pageYOffset = total
      },
      Verify (opt, e) {
        if (opt === '') {
          e.target.style.border = '1px solid #f60'
        } else {
          e.target.style.cssText = ''
        }
      },
      submit () {
        this.Verification().then(() => {
          var TodoFolder = AV.Object.extend('project')
          // 新建对象
          var todoFolder = new TodoFolder()
          // 设置名称
          todoFolder.set('projectName', this.projectName)
          // 设置优先级
          todoFolder.set('projectDesc', this.message)
          todoFolder.set('phone', this.phone)
          todoFolder.set('username', this.username)
          todoFolder.save().then(() => {
            Toast('已保存成功，正在发送邮件')
            this.sendEmail()
          })
        }).catch((error) => {
          Toast(error)
        })
      },
      sendEmail () {
        let html = `用户名：${this.username} 手机号：${this.phone} 项目名字：${this.projectName} 留言：${this.message} `
        axios.post('http://api.moke.cloud/mail', {
          'to': '717734797@qq.com',
          'title': this.projectName,
          'body': html
        }, {
          headers: {'content-type': 'application/json'}
        }).then(() => {
          Toast('邮件发送成功')
        }).catch(() => {
          Toast('邮件发送失败')
        })
      },
      phoneVerify () {
        let phone = this.phone
        let regMobile = /^1[34578]\d{9}$/
        let regTel = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
        return phone === '' || !regMobile.test(phone) || !regTel.test(phone)
      },
      verifyPhone (e) {
        if (this.phoneVerify()) {
          e.target.style.border = '1px solid #f60'
        } else {
          e.target.style.cssText = ''
        }
      },
      Verification () {
        return new Promise((resolve, reject) => {
          if (this.username === '') {
            reject('用户名称不能为空')
          } else if (this.phoneVerify()) {
            reject('手机号格式不正确')
          } else if (this.projectName === '') {
            reject('项目名称不能为空')
          } else {
            resolve()
          }
        })
      }
    },
    mounted () {
//      监听滚动事件
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" scoped>
  /*顶部导航媒体查询*/
  @media (max-width: 1400px) {
    .com-banner .header {
      padding: 15px 100px;
    }
  }

  @media (min-width: 1400px) {
    .com-banner .header {
      padding: 15px 150px;
    }
  }

  * {
    /*font-family: MicrosoftYaHei;*/
    box-sizing: border-box;
  }

  /*主容器样式*/
  .main-box {
    overflow:hidden;
    position: relative;
    width: 100%;
    /*顶部banner区域*/
    .com-banner {
      position: relative;
      width: 100%;
      height: 960px;
      background: url("../assets/pc_img/background-img.png") no-repeat left top;
      background-size: 100% 100%;
      /*顶部LOGO导航*/
      .header {
        color: #ffffff;
        width: 100%;
        min-width: 1024px;
        height: 86px;
        .logo {
          display: inline-block;
          height: 100%;
          a {
            display: inline-block;
            vertical-align: top;
            width: 150px;
            height: 56px;
            background: url("../assets/pc_img/logomoke.png") no-repeat 0 4px;
            background-size: 149px 48px;
          }
          i {
            display: inline-block;
            border-right: 1px solid #fff;
            margin-top: 5px;
            height: 40px;
            margin-right: 14px;
            margin-left: 14px;
          }
          .h-title {
            display: inline-block;
            font-size: 16px;
            height: 56px;
            padding-top: 4px;
            span {
              display: block;
              padding-top: 15px;
            }
          }
        }
        /*导航*/
        .h-nav {
          float: right;
          font-size: 16px;
          li {
            float: left;
            width: 64px;
            height: 56px;
            text-align: center;
            a {
              display: inline-block;
              margin-top: 14px;
              width: 32px;
              padding-bottom: 10px;
              text-align: center;
              color: #fff;
              border-bottom: 2px solid #000;
              transition: border .2s ease-in-out;
            }
            &:hover {
              a {
                border-bottom: 2px solid #fff;
              }
            }
          }
        }
      }
      /*顶部导航过渡样式*/
      .header-fade {
        position: fixed;
        background: #fff;
        color: #000;
        top: 0;
        z-index: 999;
        .logo {
          /*.bg-pc_img {*/
          /*background: url("../../static/pc_img/logo-fade.png") no-repeat left top;*/
          /*}*/
          a {
            background: url("../assets/pc_img/logo-fade.png") no-repeat 0 4px;
          }
          .h-title {
            color: #000;
            span {
              color: #000;
            }
          }
        }
        .h-nav {
          li {
            a {
              color: #000;
              border-bottom: 2px solid #fff;
            }
            &:hover {
              a {
                border-bottom: 2px solid #000;
              }
            }
          }
        }

      }
      /*大字体区域*/
      .m-navfade-enter-active, .m-navfade-leave-active {
        transition: opacity .5s
      }
      .m-navfade-enter, .m-navfade-leave-active {
        opacity: 0
      }
      .big-font {
        position: absolute;
        top: 330px;
        width: 100%;
        text-align: center;
        img {
          width: 78%;
        }
      }
      /*中间小logo*/
      .small-logo {
        position: absolute;
        top: 490px;
        width: 708px;
        left: 50%;
        transform: translate(-354px);
        li {
          float: left;
          width: 25%;
          text-align: center;
          .small-bg {
            display: inline-block;
            width: 78px;
            height: 78px;
          }
          .small-bg1 {
            background: url("../assets/pc_img/IOS-icon.png");
          }
          .small-bg2 {
            background: url("../assets/pc_img/Android-icon.png");
          }
          .small-bg3 {
            background: url("../assets/pc_img/Browser-icon.png");
          }
          .small-bg4 {
            background: url("../assets/pc_img/weixin-icon.png");
          }
          h3 {
            color: #fff;
            font-size: 20px;
            padding-top: 30px;
          }
        }

      }
      /*产品咨询按钮*/
      .advisory-btn {
        position: absolute;
        top: 730px;
        left: 50%;
        transform: translate(-119px);
        width: 238px;
        height: 60px;
        a {
          display: block;
          height: 60px;
          background: #000;
          border-radius: 35px;
          span {
            display: inline-block;
            vertical-align: top;
            height: 60px;
            color: #fff;
            font-size: 30px;
            padding: 15px 28px;
          }
          i {
            display: inline-block;
            width: 39px;
            height: 39px;
            margin: 10px 20px 0 0;
            background: url("../assets/pc_img/Arrow-icon.png") no-repeat left top;
          }
        }
      }
    }
    /*右侧边菜单栏*/
    .sidebar {
      position: fixed;
      z-index: 999;
      height: 176px;
      right: 24px;
      bottom: 194px;
      .sidebar-content {
        background: #666;
        .side-button {
          transition: all .3s ease;
          position: relative;
          width: 44px;
          height: 44px;
          cursor: pointer;
          text-align: center;
          line-height: 44px;
          .bg-img {
            color: #fff;
          }
          &:hover .pop {
            display: block;
            width: auto;
            padding: 0 30px;
            opacity: 1;
            z-index: 100;
            overflow: visible;
          }
          &:hover {
            background: #363636;
          }
          .pop {
            transition: all .3s ease;
            position: absolute;
            right: 60px;
            top: 0;
            width: 0;
            padding: 0;
            font-size: 14px;
            color: #fff;
            opacity: 1;
            z-index: 1;
            background: #363636;
            white-space: nowrap;
            overflow: hidden;
            line-height: 44px;
            height: 44px;
            a {
              color: #fff;
            }
            &:after {
              height: 0;
              width: 0;
              border: 11px solid transparent;
              border-left-color: #363636;
              top: 50%;
              -ms-transform: translateY(-50%);
              transform: translateY(-50%);
              content: "";
              display: block;
              position: absolute;
              right: -22px;
              opacity: 1;
            }
          }
        }
      }

    }
    /*主体部分*/
    .com-body {
      /*只做最好的互联网产品*/
      .do-better {
        height: 656px;
        background: #f4f3f3;
        .top-title {
          padding-top: 80px;
          font-size: 40px;
          font-weight: bold;
          color: #070707;
          text-align: center;
        }
        .item-box {
          padding-top: 82px;
          text-align: center;
          width: 1180px;
          margin: 0 auto;
          .item {
            vertical-align: top;
            display: inline-block;
            width: 33%;
            padding: 0 30px;
            text-align: center;
            .circle {
              display: inline-block;
              width: 160px;
              height: 160px;
              border: 1px solid red;
              border-radius: 50%;
              text-align: center;
              line-height: 160px;
              font-size: 24px;
            }
            .title {
              padding-top: 40px;
              font-size: 24px;
              text-align: center;
            }
            p {
              font-size: 20px;
              padding-top: 20px;
              text-align: Justify;
              line-height: 1.2;
            }
          }
        }
      }
      /*四端一体化*/
      .siduanyiti {
        position: relative;
        height: 480px;
        .left {
          float: left;
          height: 480px;
          width: 55%;
          padding: 2.5% 0;
          .bg {
            width: 73%;
            margin: 0 auto;
            img {
              width: 100%;
              max-width: 658px;
              height: auto;
            }
          }
        }
        .right {
          position: absolute;
          top: 0;
          left: 53%;
          height: 480px;
          background: #e45150;
          width: 60%;
          transform: skew(-18deg);
          .position {
            transform: skew(18deg);
            margin-left: -8%;
            h1 {
              font-size: 40px;
              font-weight: bold;
              color: #ffffff;
              margin-top: 156px;
              margin-left: 190px;
            }
            .content {
              margin-left: 190px;
              width: 514px;
              line-height: 2.5;
              padding-top: 30px;
              font-size: 20px;
              text-align: left;
              color: #ffffff;
            }
          }
        }
      }
      /*便于迭代*/
      .diedai {
        position: relative;
        background: #f4f3f3;
        h1 {
          padding-top: 80px;
          font-size: 40px;
          font-weight: bold;
          text-align: center;
        }
        h3 {
          margin: 0 auto;
          margin-top: 80px;
          font-size: 28px;
          text-align: center;
          width: 686px;
        }
        p {
          width: 660px;
          margin: 0 auto;
          margin-top: 20px;
          font-size: 20px;
          line-height: 1.8;
          text-align: justify;
        }
        .icon {
          /*position: absolute;*/
          /*bottom: 0*/
          width: 515px;
          height: 245px;
          margin: 0 auto;
          margin-top: 62px;
          background: url("../assets/pc_img/Webpage-icon.png") no-repeat left top;
        }
      }
      /*技术支持*/
      .support {
        height: 666px;
        background: url("../assets/pc_img/Characterbackground-img.png") no-repeat left center;
        .title {
          padding-top: 80px;
          font-size: 40px;
          font-weight: bold;
          text-align: center;
          color: #f4f3f3;
        }
        .title2 {
          width: 460px;
          height: 60px;
          margin: 0 auto;
          margin-top: 80px;
          color: #f4f3f3;
          background: #e43939;
          border-radius: 30px;
          font-size: 36px;
          text-align: center;
          line-height: 1.5;
        }
        .list {
          width: 318px;
          margin: 0 auto;
          li {
            width: 318px;
            height: 60px;
            border-bottom: 1px dashed hsla(0, 0%, 100%, .5);
            text-align: center;
            color: #fff;
            font-size: 20px;
            line-height: 60px;
          }
        }
        .title3 {
          margin-top: 60px;
          text-align: center;
          color: #fff;
          font-size: 24px;
        }
      }
      /*项目流程*/
      .process {
        text-align: center;
        padding-bottom: 80px;
        img {
          width: 85%;
        }
      }
      /*表单报价方案*/
      .main-form {
        height: 835px;
        margin-top: -3px;
        background: url("../assets/pc_img/ditu-img.png") no-repeat left top;
        .title {
          padding-top: 78px;
          color: #fff;
          font-size: 40px;
          text-align: center;
          font-weight: bold;

        }
        .title2 {
          margin-top: 50px;
          color: #fff;
          font-size: 36px;
          text-align: center;
          font-weight: bold;
        }
        .m-form {
          margin-top: 78px;
          text-align: center;
          /*min-width: 1024px;*/
          .title3 {
            font-size: 28px;
            color: #ccc;
            margin-bottom: 30px;
            text-align: left;
          }
          .pro {
            width: 100%;
            height: 50px;
            background-color: #ffffff;
            border-radius: 5px;
            font-size: 16px;
            padding-left: 2%;
            margin-bottom: 20px;
          }
          .project {
            display: inline-block;
            vertical-align: top;
            margin-right: 11%;
            width: 33%;
            textarea {
              width: 99%;
              font-size: 16px;
              padding: 5px;
              border-radius: 5px;
              background: #fff;
            }
          }
          .about {
            display: inline-block;
            width: 33%;
          }
          .sub {
            margin-top: 56px;
            input {
              width: 9%;
              height: 58px;
              border-radius: 4px;
              background-color: #999999;
              color: #fff;
              font-size: 24px;
            }
          }
        }
      }
      /*常见开发问题*/
      .faq {
        padding: 100px 80px;
        .containear {
          width: 85%;
          margin: 0 auto;
        }
      }
    }
    /*底部样式*/
    .footer {
      width: 100%;
      height: 310px;
      padding-top: 50px;
      background-color: #262626;
      .list {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 50px;
        .item {
          display: inline-block;
          vertical-align: top;
          height: 158px;
          font-size: 16px;
          .title {
            font-size: 26px;
            color: #e0e0e0;
            width: 225+51px;
          }
          .title-b {
            margin-top: 14px;
            color: #b3b3b3;
            font-size: 16px;
          }
          h3 {
            color: #e0e0e0;
          }
          .title2 {
            width: 283+32px;
          }
          .follow {
            margin-top: 54px;
            font-size: 0;
            a {
              display: inline-block;
              width: 42px;
              height: 42px;
              margin-right: 14px;
            }
            .weixin {
              background: url("../assets/pc_img/xweixin-icon.png") no-repeat;
            }
            /*.qq {*/
            /*!*background: url("../../static/pc_img/QQ-icon.png") no-repeat;*!*/
            /*background: url("../../static/pc_img/xweixin-icon.png") no-repeat;*/
            /*}*/
            .qq {
              background: url("../assets/pc_img/QQ-icon.png") no-repeat;
            }
            .phone {
              background: url("../assets/pc_img/dianhua-icon.png") no-repeat;
            }
          }
          .contact {
            display: inline-block;
            margin-top: 42px;
            font-size: 14px;
            line-height: 2.64;
            text-align: left;
            color: #b3b3b3;
          }
          .con1 {
            margin-right: 120px;
          }
        }
      }
      .foot-b {
        border-top: 1px solid #373737;
        font-size: 14px;
        text-align: left;
        h3 {
          color: #b3b3b3;
          width: 1200px;
          margin: 0 auto;
          line-height: 3.64;
        }
      }
    }
  }
</style>
