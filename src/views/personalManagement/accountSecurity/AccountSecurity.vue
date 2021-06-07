<template>
  <div id="safety">
    <div class="top">
      <div>账户管理</div>
    </div>
    <div class="change-info">
      <el-form :model="personInfo"
               ref="personInfo"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="登录账号"
                      prop="account">
          <el-input disabled
                    v-model="personInfo.account"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="email"
                      :rules="[{ required: true, message: '邮箱不能为空',trigger: 'blur'},{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
          <el-input type="email"
                    v-model="personInfo.email"></el-input>
        </el-form-item>

        <el-form-item label="昵称"
                      prop="fullname">
          <el-input v-model="personInfo.fullname"></el-input>
        </el-form-item>

        <el-form-item label="QQ"
                      prop="qq">
          <el-input v-model="personInfo.qq"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="personInfo.gender">
            <el-radio label="0">保密</el-radio>
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="手机"
                      prop="phone"
                      :rules="[
      { required: true, message: '手机号不能为空'},
      { type: 'number', message: '手机号必须为数字值'}
            ]">
          <el-input type="age"
                    v-model.number="personInfo.phone"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账户密码">
          <span class="password">*******</span>
          <span @click="change"
                class="change">修改密码</span>
        </el-form-item>
        <div id="bg"
             v-show="show">
          <transition name="el-zoom-in-center">
            <div v-show="show"
                 class="transition-box changePass">
              <div class="change-top">
                <div>修改密码</div>
                <i class="el-icon-close close"
                   @click="change"></i>
              </div>
              <div class="change-password">
                <div><label for="old">旧密码：</label><input type="password"
                         name="old"
                         id="old" /></div>
                <div><label for="new">新密码：</label><input type="text"
                         name="new"
                         id="new" /></div>
                <div><label for="verify"
                         class="lmw">确认密码：</label><input type="text"
                         name="verify"
                         id="verify" /></div>
              </div>
              <div class="btn">
                <div class="cancel"
                     @click="change">取消</div>
                <div class="affirm">确认</div>
              </div>
            </div>
          </transition>
        </div>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('numberValidateForm')">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountSecurity",
  data () {
    return {
      show: false,
      personInfo: {
        account: '',
        email: '',
        fullname: '',
        gender: 1,
        qq: '',
        phone: {
          type: Number
        },
      },
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.personInfo.account = sessionStorage.getItem("account")
      this.personInfo.email = sessionStorage.getItem("email")
      this.personInfo.fullname = sessionStorage.getItem("fullname")
      this.personInfo.gender = sessionStorage.getItem("gender")
      this.personInfo.phone = Number(sessionStorage.getItem("phone"))
      this.personInfo.qq = sessionStorage.getItem("qq")
      //console.log(this.personInfo);
    },
    change () {
      this.show = !this.show
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.top {
  height: 60px;
  background-color: #ffffff;
  font-size: 16px;
  line-height: 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
}

.top div {
  margin-left: 30px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  border-bottom: 3px solid #ff403a;
  cursor: pointer;
}

.change-info {
  margin-top: 20px;
  border-radius: 6px;
  padding: 30px 600px 1px 50px;
  background-color: #ffffff;
  position: relative;
}

.password {
  color: #ff403a;
  font-size: 18px;
  position: relative;
  top: 5px;
}

.change {
  display: inline-block;
  cursor: pointer;
  margin-left: 20px;
  display: inline-block;
  text-align: center;
  line-height: 36px;
  width: 92px;
  height: 36px;
  border: solid 1px #ff403a;
  color: #ff403a;
  font-size: 14px;
}

.changePass {
  width: 500px;
  height: 300px;
  position: fixed;
  top: 40%;
  left: 40%;
  background-color: rgb(255, 255, 255);
  border-radius: 6px;
  box-shadow: -2px -2px 9px #c3c3c3, 2px 2px 9px #c3c3c3;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

#bg {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
}

.close {
  transition: 1s;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 25px !important;
}

.close:hover {
  transform: rotate(180deg);
}

.change-top {
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  color: #666;
  border-bottom: 2px solid #e6e6e6;
}

.change-password {
  font-size: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.change-password input {
  background-color: rgb(240, 240, 240);
  height: 40px;
  width: 200px;
  color: #666666;
  text-indent: 6px;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 10px;
}

.change-password div {
  height: 60px;
  display: flex;
  align-items: center;
}

.lmw {
  position: relative;
  right: 7px;
}

#verify {
  position: relative;
  right: 7px;
}

.change-password input:focus {
  border: 1px solid #faa491;
}

.btn {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn div {
  transition: 0.6s;
  width: 65px;
  height: 30px;
  background-image: linear-gradient(0deg, #ff403a 0%, #ff6949 100%);
  border-radius: 18px;
  text-align: center;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  box-sizing: border-box;
}

.btn .cancel {
  margin-right: 20px;
  background-image: linear-gradient(0deg, #ffffff 0%, #f5f5f5 100%);
  border: 1px solid#ff403a;
  box-sizing: border-box;
  line-height: 28px;
  color: #ff403a;
  border-radius: 18px;
}

.btn .affirm {
  line-height: 30px;
}

.btn div:hover {
  box-shadow: 2px 2px 9px #6d6d6d;
}
</style>