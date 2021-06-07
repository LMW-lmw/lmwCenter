<template>
  <div id="login-page">
    <div class="container dr">
      <div class="modal">
        <div class="modal-header">
          <p class="modal_title">账户登录</p>
          <div class="modal_under"></div>
        </div>
        <form action="">
          <div class="modal-content model-layer">
            <div class="modal_input">
              <input type="text"
                     name="account"
                     id=""
                     value=""
                     ref="account"
                     placeholder="请输入账号" />
              <img src="~assets/img/login/icon_moblie.png">
            </div>
            <div class="modal_input">
              <input name="password"
                     id="Password"
                     type="password"
                     ref="password"
                     placeholder="请输入密码">
              <img src="~assets/img/login/icon_password.png">
            </div>
          </div>
          <div class="modal-footer">
            <button @click="getValue()"
                    class="modal_close modal_btn"
                    type="button"
                    id="login">登录</button>
          </div>
        </form>
        <div class="modal_qdr model-layer container">
          <a class="fl lmw_forget">忘记密码</a>
          <a class="fr lmw_register">免费注册</a>
        </div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import { login } from "../network/login";

export default {
  name: "home",
  data () {
    return {
      personInfo: {},
      S: ''
    }
  },
  created () {
    this.login(13177777917, 123456)
  },
  methods: {
    login (account, password) {
      login(account, password).then(res => {
        console.log(res);
        this.personInfo = res.V
        this.S = res.S
        if (this.S == 1000) {

          // this.$store.commit("setPrint", {  //print 表示vuex的文件名
          //   info: this.personInfo,
          // });
          console.log(res);
          window.sessionStorage.setItem('token', res.V.openId)
          window.sessionStorage.setItem('nickname', res.V.nickName)
          window.sessionStorage.setItem('account', res.V.account)
          window.sessionStorage.setItem('email', res.V.email)
          window.sessionStorage.setItem('gender', res.V.gender)
          window.sessionStorage.setItem('phone', res.V.phone)
          window.sessionStorage.setItem('fullname', res.V.fullName)
          window.sessionStorage.setItem('qq', res.V.qq)
          this.$router.push('/personCenter')
          // console.log('登录成功');
        } else {
          // console.log('登录失败');
        }
      })
    },
    getValue () {
      let account = this.$refs.account.value
      let password = this.$refs.password.value
      // console.log(account);
      // console.log(password);
      this.login(account, password)

    },
  }
}
</script>

<style scoped>
#login-page {
  font-size: 16px;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.model-layer {
  width: 298px;
  margin: 0 auto;
}

.toggleModal {
  padding: 10px 20px;
  color: white;
  background: #409eff;
  border: none;
  box-shadow: 2px 3px 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
  z-index: 100;
  background: url("../../src/assets/img/login/bg.png") no-repeat;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 375px;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 120;

  box-shadow: 0px 0px 35px 0px rgba(0, 9, 27, 0.1);
  border-radius: 10px;
}

.modal .modal-header {
  margin-top: 31px;
  text-align: center;
  font-size: 18px;
}

.modal .modal-header .modal_title {
  font-size: 18px;
  color: #333;
}

.modal .modal-header .modal_under {
  margin: 0 auto;
  margin-top: 11px;
  width: 20px;
  height: 4px;
  background-color: #ff403a;
}

.modal .modal-header .modal_close {
  float: right;
  font-size: 26px;
  margin-top: -2px;
  color: #9c9fa4;
  cursor: default;
}

.modal .modal-content {
  min-height: 100px;
}

.modal .modal-content .modal_input {
  position: relative;
}

.modal .modal-content input {
  margin: 0 auto;
  display: block;
  border: none;
  outline: none;
  height: 40px;
  width: 298px;
  box-sizing: border-box;
  padding-left: 12px;
  margin-top: 20px;
  border-bottom: 2px solid #f5f5f5;
}

.modal .modal-content .modal_input button {
  width: 96px;
  height: 26px;
  background: #ff403a;
  border-radius: 13px;
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 8px;
  outline: none;
}

.modal .modal-content .modal_input img {
  position: absolute;
  right: 0;
  top: 13px;
}

.modal .modal-footer .modal_btn {
  padding: 0 20px;
  height: 36px;
  line-height: 36px;
  color: white;
  width: 298px;
  height: 44px;
  background-image: linear-gradient(0deg, #ff403a 0%, #ff6949 100%);
  border: none;
  outline: none;
  cursor: pointer;
}

.modal .modal-footer {
  text-align: center;
  margin-bottom: 13px;
  margin-top: 30px;
}

.modal_qdr {
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
}

.modal_qdr a {
  color: #ff403a;
  text-decoration: none;
  cursor: pointer;
}

.container::after {
  content: "";
  display: block;
  clear: both;
}
</style>