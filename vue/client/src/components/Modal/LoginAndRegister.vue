<template>
  <div v-if="modal.login.show" class="modal-outside">
    <div id="login-modal">
      <div class="head">
        <h5>{{!modal.login.directLogin ? "회원가입": "로그인"}}</h5>

        <a @click.prevent="$store.commit('SET_LOGIN_MODAL_CLOSE')" class="close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
      </div>


      <div v-if="modal.register.directRegister" class="foot">
        <RegisterModal/>
      </div>

      <div v-if="modal.login.directLogin" class="foot">
        <LoginModal/>
        
      </div>

    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

import LoginModal from "@/components/Modal/Login";
import RegisterModal from "@/components/Modal/Register";

export default {
  components: {
      LoginModal,
      RegisterModal
  },
  computed: { ...mapState(["modal"]) },
  data() {
    return {
      leftTime: 180,
      displayTime: "3분",
      email: null,
      password: null,
      otpYn : false
      };
  },
  
  methods: {
  
    
  }
};
</script>
<style lang="scss" scoped>
#login-modal {
  background: white;
  width: 520px;
  .body {
    font-size: 16px;
    padding: 0 30px;
    line-height: 24px;
    p {
      padding: 20px 0;
      margin: 0;
    }
    .info {
      color: rgb(148, 150, 155);
      font-size: 14px;
      letter-spacing: -0.1px;
      margin: 20px 0 30px;
      line-height: 21px;
    }
    .row {
      margin: 20px 0;
      label {
        display: block;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 12px;
      }
    }
    .otp-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(55, 172, 201);
      border: none;
      color: white;
      font-size: 40px;
      font-weight: 400;
      width: 100%;
      height: 82px;
    }
    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(55, 172, 201);
      border: none;
      color: white;
      font-size: 24px;
      font-weight: 400;
      width: 100%;
      height: 64px;
      margin-bottom: 30px;
    }
    .left-time {
      text-align: center;
      color: rgb(55, 172, 201);
      font-size: 14px;
      font-weight: 700;
      margin-top: 16px;
    }
  }
  .foot {
    color: rgb(160, 160, 174);
    
  }
}
</style>
