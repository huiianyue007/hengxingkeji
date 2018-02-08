<template>
  <div id="wrap">
    <!--导航-->
    <tk-cover :show="show" class="menu-box"  @change="changeCover" right popupStyle="width:100%">
      <tk-flex wrap class="nav-box">
        <tk-flex class = 'tk-grid-6' left>
          <img src="../assets/phone_img/logo2.png" alt="" class="logo2">
        </tk-flex>
        <tk-flex class = 'tk-grid-6' right>
          <img src="../assets/phone_img/close.png" alt="" class="close">
        </tk-flex>
      </tk-flex>
      <div class="nav">
        <ul>
          <li><a href="#" v-scroll-to="'#page1'">首页</a></li>
          <li><a href="#"  v-scroll-to="'#page2'">优势</a></li>
          <li><a href="#" v-scroll-to="'#page3'">保障</a></li>
          <li><a href="#" v-scroll-to="'#page5'">流程</a></li>
          <li><a href="#" v-scroll-to="'#page6'">诚信</a></li>
          <li><a href="#" v-scroll-to="'#page7'">联系我们</a></li>
          <li><a href="#" v-scroll-to="'#page8'">问答</a></li>
        </ul>
      </div>
    </tk-cover>
    <!--首页-->
    <div class="page1" id="page1">
      <tk-flex class="header">
        <tk-flex class = 'tk-grid-6' left>
          <img src="../assets/phone_img/logo.png" alt="" class="logoimg" >
        </tk-flex>
        <tk-flex class = 'tk-grid-6' right>
          <md-button @click="changeCover" class="md-raised"><img src="../assets/phone_img/menu.png" alt="" class="menuimg"></md-button>
        </tk-flex>
      </tk-flex>
      <div class="header-text">
        <tk-flex center column>
          <p>最短一周<strong class="size1">+</strong>最低一万</p>
          <p><strong>等于</strong></p>
          <p>四端一体APP</p>
        </tk-flex>
      </div>
      <tk-flex wrap class="icons">
        <div class="item-icon tk-grid-3">
          <tk-icon class="round ios-icon" type="public">ios</tk-icon>
          <span>IOS APP</span>
        </div>
        <div class="item-icon tk-grid-3">
          <tk-icon class="round an-icon" type="public">Android</tk-icon>
          <span>安卓 APP</span>
        </div>
        <div class="item-icon tk-grid-3">
          <tk-icon class="round intent-icon" type="public">Browser</tk-icon>
          <span>浏览器</span>
        </div>
        <div class="item-icon tk-grid-3">
          <tk-icon  class="round weixin" type="public">weixin</tk-icon>
          <span>微信端</span>
        </div>
      </tk-flex>
      <tk-flex center>
        <div class="advisory">
          <span>产品咨询</span><em class="icon-san"></em>
        </div>
      </tk-flex>
    </div>
    <!--优势-->
    <div class="page2 page-item" id="page2">
      <tk-flex center>
        <h3 class="title">我们只做最好的互联网产品</h3>
      </tk-flex>
      <div class="page2-content">
        <tk-flex wrap>
          <div class="p2-left tk-grid-3">
            <img src="../assets/phone_img/price-icon.png" alt="" class="p2-img1"><span>最低价格</span>
          </div>
          <div class="p2-right tk-grid-9">
            <h4>突破底线的价格</h4>
            <p>背后是当前最优秀的跨平台解决方案（ios，安卓，微信， 浏览器四端一体，一份代码，四端运行。还有海量可复用组件，积木式拼装，进一步降低价格）</p>
          </div>
        </tk-flex>
        <tk-flex wrap>
          <div class="p2-left  tk-grid-3">
            <img src="../assets/phone_img/skill-icon.png" alt="" class="p2-img2"><span>顶级技术</span>
          </div>
          <div class="p2-right  tk-grid-9">
            <h4>顶级的开发技术</h4>
            <p>当前最先进的技术架构与成熟的开发体系 （html5 plus，webpack，mvvm 数据驱动,baas后端即服务） </p>
          </div>
        </tk-flex>
        <tk-flex wrap>
          <div class="p2-left  tk-grid-3">
            <img src="../assets/phone_img/cycle-icon.png" alt="" class="p2-img3"><span>最短周期</span>
          </div>
          <div class="p2-right  tk-grid-9">
            <h4>最短一周</h4>
            <p>ios APP、安卓APP、微信服务号、手机网站四端一体 </p>
          </div>
        </tk-flex>
      </div>
    </div>
    <!--保障-->
    <div class="page3  page-item" id="page3">
      <tk-flex center>
        <h3 class="title">项目上线后，想加新功能？</h3>
      </tk-flex>
      <div class="p3-text">
        <p class="p3-text1">不用担心，一个好的架构最大的特点就是便于迭代。</p>
        <p class="p3-text2">小到改一个按钮颜色，大到更新一个版本，将需求描述提交给我们，我们将按照需求画出效果图，并给出报价（最低一百元起），然后安排开发，就如同你自己的技术团队一样。</p>
      </div>
      <div class="p3-img">
        <img src="../assets/phone_img/p3img.png" alt="">
      </div>
    </div>
    <div class="page4 page-item" id="page4">
      <tk-flex center>
        <h3 class="title white">项目运营不错，想组建自己的<br>技术团队</h3>
      </tk-flex>
      <div class="provide">
        <span>没问题！我们将提供：</span>
      </div>
      <ul>
        <li>* 完整项目源码</li>
        <li>* 完善的开发文档</li>
        <li>* 还有终生的技术咨询服务</li>
        <li>* 至多两人最长一周的开发培训</li>
      </ul>
      <p>我们在开发中使用eslint来规范代码（国内只有少数一线互联网公司使用），确保交付高质量的代码。</p>
    </div>
    <!--流程-->
    <div class="page5 page-item" id="page5">
      <div class="process-title">
        <div class="title-line"></div>
        <span class="mid">项目流程</span>
        <div class="last"><span>Process</span></div>
      </div>
      <div class="p56-img">
        <img src="../assets/phone_img/process-icon.png" alt="">
      </div>
    </div>
    <!--诚信-->
    <div class="page6 page-item" id="page6">
      <div class="process-title">
        <div class="title-line"></div>
        <span class="mid">小心套壳</span>
        <div class="last"><span>Danger</span></div>
      </div>
      <div class="p6-text">
        <p>许多低质量的外包公司，几千元就可以做一个app，
          事实上你只需要10元就可以做到。淘宝搜索 “app 封装”(链接),将一个手机网站套壳成app，只需要不到10元。</p>
      </div>
      <div class="p56-img">
        <img src="../assets/phone_img/page6.png" alt="">
      </div>
    </div>
    <!--联系我们-->
    <div class="page7 page-item" id="page7">
      <tk-flex center>
        <h3 class="title white">把你的时间用在产品和运营上，把你的信任交给我们</h3>
      </tk-flex>
      <tk-flex center class="free">
        <p class=" white">免费评估，获取APP方案报价</p>
      </tk-flex>
      <div class="forms">
        <input type="text" placeholder="项目名称" class="entry-name inputs" v-model.trim = 'projectName' @blur = 'Verify(projectName, $event)'>
        <textarea name="" id=""  placeholder="项目描述" class="item-description" v-model = 'message' @blur = 'Verify(message, $event)'></textarea>
        <input type="text" placeholder="输入你的名称" class="urse-name  inputs" v-model.trim = 'username' @blur = 'Verify(username, $event)'>
        <input type="text" placeholder="输入你的联系方式" class="urse-tel  inputs" v-model.trim = 'phone' @blur = 'verifyPhone($event)'>
        <button class="assess" @click= 'submit'>立即评估</button>
      </div>
    </div>
    <!--问答-->
    <div class="page8 page-item" id="page8">
      <tk-flex center>
        <h3 class="title">APP开发常见问题<span>FAQ:</span> </h3>
      </tk-flex>
      <div class="common-problem">
        <div class="com-item">
          <tk-flex  wrap>
            <div class="tk-grid-2 com-left">
              <span>A</span>
            </div>
            <div class="tk-grid-10 com-right">
              <h3>不懂设计和开发，只有一个想法能不能做APP？</h3>
              <div class="com-right-text">
                <p>可以，我们会提供专业与您沟通，将您的想法用产品描述出来。</p>
              </div>
            </div>
          </tk-flex>
        </div>
        <div class="com-item">
          <tk-flex  wrap>
            <div class="tk-grid-2 com-left">
              <span>A</span>
            </div>
            <div class="tk-grid-10 com-right">
              <h3>开发一个APP一般需要多长时间，多少钱？</h3>
              <div class="com-right-text">
                <p>具体时长和价格根据需求而定，在没有明确需求的前提下，我们很难给出答复。</p>
              </div>
            </div>
          </tk-flex>
        </div>
        <div class="com-item">
          <tk-flex wrap>
            <div class="tk-grid-2 com-left">
              <span>A</span>
            </div>
            <div class="tk-grid-10 com-right">
              <h3>什么样的APP都可以开发吗？</h3>
              <div class="com-right-text">
                <p>我们不承接游戏类的APP，适合的APP类型有电商购物、生活服务、新闻资讯、 社区交友、教育医疗、政府服务、移动OA/ERP/CRM等。          </p>
              </div>
            </div>
          </tk-flex>
        </div>
        <div class="com-item">
          <tk-flex wrap>
            <div class="tk-grid-2 com-left">
              <span>A</span>
            </div>
            <div class="tk-grid-10 com-right">
              <h3>不懂设计和开发，只有一个想法能不能做APP？</h3>
              <div class="com-right-text">
                <p>免费质保期为3个月，保障范围为功能性与显示bug，如果项目源码被第三方 改动，则视为放弃质保权。</p>
              </div>
            </div>
          </tk-flex>
        </div>
      </div>
    </div>
    <!--footer-->
    <div class="page9" id="page9">
      <div class="contact">
        <tk-flex wrap class="contact-top">
          <div class="tk-grid-3 contact-left">
            <h4>联系</h4>
            <span>contact</span>
          </div>
          <div class="tk-grid-9 contact-right">
            <h3>石家庄瑾思科技</h3>
            <ul>
              <li>地点：石家庄长安区东胜广场C座1404</li>
              <li>邮编：050000</li>
              <li>电话：0311-85462314</li>
            </ul>
          </div>
        </tk-flex>
      </div>
      <div class="footer">
        <p>opyRight © 2012-2014 moke.cloud, 版权所有  石家庄瑾思科技</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import axios from 'axios'
  export default{
    data () {
      return {
        show: false,
        phone: '',
        username: '',
        message: '',
        projectName: ''
      }
    },
    methods: {
      changeCover () {
        this.show = !this.show
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
    }
  }

</script>

<style scoped lang="scss">
  $color:#fff;
  $family:MicrosoftYaHei;
  $family2:PingFang-SC;
  $font-size24:24px;
  $font12:12px;
  #wrap{
    position: relative;
  }
  .menu-box{
    display: block;
    .nav-box{
      background-color: #ffffff;
      padding:10px 24px;
      .logo2{
        width: 69px;
        height: 22px;
      }
      .close{
        width: 18px;
        height: 18px;
      }
    }
    .nav{
      background-color: #ffffff;
      padding-bottom: 25px;
      ul{
        background-color: #f7f7f7;
        text-align: center;
        color: #666666;
        font-size: 14px;
        line-height: 48px;
        li{
          border-bottom:solid 1px #e0e0e0;
          a{
            display:inline-block;
            width: 100%;
            height: 100%;
            color: #666666;
          }
        }
        .active{
          color: #01b0ed;
        }
      }
    }
  }
  /*首页*/
  .page1{
     background:url("../assets/phone_img/page1.jpg") left top no-repeat;
     background-size:cover;
     height:667px;
     color: $color;
     .header{
       padding:24px 24px 0;
     }
     .logoimg{
       width: 68px;
       height: 22px;
     }
     .menuimg{
       width: 24px;
       height: 21px;
     }
     .header-text{
       padding-top:160px;
       font-family: $family;
       font-size: 30px;
       font-weight: bold;
       line-height:50px;
       vertical-align: middle;
       strong{
         color:#cd1a1a;
         padding:0 10px;
       }
       .size1{
         font-size: 60px;
         position: relative;
         bottom: -10px;
       }
     }
     .icons{
       padding:50px 0 50px;
       box-sizing: border-box;
       text-align: center;
       .round{

         border:solid 1px #ffffff;
         border-radius: 50%;
       }
       .ios-icon,.an-icon,.intent-icon,.weixin{
         width: 32px;
         height: 32px;
         padding:6px;
       }
       span{
         display: block;
         font-size: $font12;
         line-height:4;
         font-family: $family2;
       }
       img{
         width: 34px;
         height: 34px;
       }
     }
     .advisory{
       background-color: #000000;
       border-radius: 18px;
       width: 140px;
       height: 36px;
       font-size: 18px;
       text-align: center;
       overflow: hidden;
       span{
         vertical-align: middle;
         margin-left: 0px;
         margin-right:0;
         vertical-align: middle;
         line-height: 36px;
       }
       .icon-san{
         display: inline-block;
         width: 20px;
         height: 20px;
         background:url("../assets/phone_img/icon-s.png") left top no-repeat;
         background-size:cover;
         vertical-align: middle;
         margin-left: 20px;
       }
     }
   }
  .page-item{
    padding-top: 40px;
  }
  .title{
    font-size: 24px;
    font-family: $family2;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
  }
  /*优势*/
  .page2{
    padding-bottom: 40px;
    .page2-content{
      padding: 0 24px 0 0;
    }
    .p2-left{
      text-align: center;
      padding-top: 15px;
      img{
        background-size:cover;
      }
      .p2-img1{
        width: 44px;
        height: 42px;
      }
      .p2-img2{
        width: 44px;
        height: 33px;
      }
      .p2-img3{
        width: 42px;
        height: 44px;
      }
      span{
        display: block;
        line-height: 30px;
        color:#666666;
        font-size: $font12;
      }
    }
    .p2-right{
      font-family: $family2;
      border-bottom:solid 1px #999999;
      padding-bottom: 15px;
      h4{
        font-size: 18px;
        color: #333333;
        line-height: 30px;
      }
      p{
        color:#999999;
        line-height: 2;
      }
    }
  }
  /*保障*/
  .page3{
    font-family: $family2;
    background-color: #f7f7f7;
    .p3-text{
      text-align: center;
      padding:0 24px 40px;
    }
    .p3-text1{
      color:#333333;
      font-size: 14px;
      padding:10px 0 10px;
      line-height: 1.5;
    }
    .p3-text2{
      line-height: 2;
      color: #999999;
      font-size: $font12;
    }
    .p3-img{
      text-align: center;
      img{
        width: 90%;
        vertical-align: middle;
      }
    }
  }
  .page4{
    background:url("../assets/phone_img/people.png") left top no-repeat;
    background-size:cover;
    height: 420px;
    text-align: center;
    font-family: $family2;
    .white{
      color: #ffffff;
      line-height: 1.2;
      margin-bottom: 25px;
    }
    .provide{
      span{
        padding: 0 15px;
        display: inline-block;
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        background-color: #e43939;
        border-radius: 14px;
        color:#fff;
      }
      margin-bottom: 20px;
    }
    ul{
      width: 55%;
      margin-left: auto;
      margin-right: auto;
      color: #ffffff;
      font-size: $font12;
      margin-bottom: 12px;
      li{
        border-bottom: dashed 1px #8b909a;
        line-height: 45px;
      }
    }
    p{
      width:95%;
      margin-left: auto;
      margin-right: auto;
      font-size: $font12;
      color: #ffffff;
      line-height: 2;
    }
  }
  .process-title{
    text-align: center;
    padding:0 30px;
  }
  .title-line{
    height:1px;
    background-color: #999999;
  }
  .mid{
    font-size: 22px;
    position: relative;
    top: -12px;
    padding:0 20px;
    background-color: #f7f7f7;
    font-family: $family2;
    color: #000000;
    font-weight:bold;
  }
  .last{
    font-size: 16px;
    color: #000000;
    font-family: $family;
  }
  /*流程*/
  .page5{
    background-color: #f7f7f7;
  }
  .p56-img{
    padding: 25px 0 44px;
    text-align: center;
    img{
      width:90%;
    }
  }
  /*诚信*/
  .page6{
    background-color: #fbc119;
    .title-line{
      background-color: #333333;
    }
    .mid{
      background-color: #fbc119;
    }
    .p6-text{
      padding: 30px 24px 0;
      text-align: center;
      font-size: $font12;
      line-height:2;
    }
  }
  /*联系我们*/
  .page7{
    background:url("../assets/phone_img/ditu.png") left top no-repeat;
    background-size:cover;
    height: 540px;
    font-family: $family2;
    .white{
      color:#ffffff;
      line-height: 1.2;
      margin-bottom: 0;
    }
    .free{
      font-size: 14px;
      padding: 20px 0;
    }
    .forms{
      padding:0 24px;
      input,textarea,button{
        width: 100%;
        margin-bottom: 20px;
        border-radius: 5px;
        outline:none;
      }
    }
    .inputs{
      height: 40px;
      background-color: #ffffff;
      padding-left: 20px;
      box-sizing: border-box;
      font-size: $font12;
      color: #000000;
    }
    .item-description{
      resize:none;
      box-sizing: border-box;
      padding: 20px;
      height: 120px;
      color: #000000;
      background-color: #ffffff;
    }
    .assess{
      margin:0;
      padding:0;
      list-style-type:none;
      border:none;
      background-color: #e45150;
      height: 40px;
      font-size: 14px;
      color:#ffffff;
      font-family: $family;
      letter-spacing:3px;
    }
  }
  /*问答*/
  .page8{
    background-color: #f7f7f7;
    padding-bottom: 25px;
    .title{
      margin-bottom: 25px;
      span{
        color: #999999;
        font-size: 14px;
        margin-left: 10px;
      }
    }
    .common-problem{
      padding:0 24px;
    }
    .com-item{
      border: solid 1px #999999;
      margin-bottom: 15px;
      .com-left{
        padding-top: 36px;
        text-align: center;
        span{
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          font-size: $font12;
          font-family: Musket;
          color: #ffffff;
          background-color: #e45150;
          border-radius: 50%;
        }
      }
      .com-right{
        font-family: $family2;
        h3{
          color: #000000;
          font-size: $font12;
          font-weight: 500;
          line-height: 1.2;
          padding:10px 0;
          border-bottom:solid 1px #999999;

        }
        .com-right-text{
          padding:10px 15px 10px 0;
          line-height: 1.5;
          color: #999999;
        }
      }
    }
  }
  /*footer*/
  .page9{
    background-color: #262626;
    color: red;
    .contact-top{
      padding: 15px 0;
    }
    .contact-left{
      text-align: center;
      h4{
        font-size: 14px;
        color: #e0e0e0;
        margin-bottom: 8px;
        font-family: $family2;
      }
      span{
        font-family: ArialMT;
        color: #b3b3b3;
        font-size: $font12;
      }
    }
    .contact-right{
      font-size: $font12;
      font-family: $family2;
      h3{
        color: #e0e0e0;
        margin-bottom: 10px;
      }
      ul{
        color: #b3b3b3;
        line-height: 1.5;
      }
    }
    .footer{
      font-size: $font12;
      color: #b3b3b3;
      padding: 0 0 24px 24px;
      line-height: 1.5;
    }
  }
</style>

