<template>
  <div class="nav-container">
    <nav>
      <div class="side-block">
        <router-link to="/" id="logo-btn">
          <img src="@/static/logo/main.png" alt="블라인드 로고" width="150" />
        </router-link>

        <router-link to="/">
          홈
        </router-link>
      </div>

      <div class="side-block">
        <!-- <SmallSearchbar /> -->
        <button v-if="user.authYn == 'Y'" class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <router-link to="/admin">
            관리자
          </router-link>
        </button>

        <!-- <SmallSearchbar /> -->
        <button class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
          <svg class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="12" height="20" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"/>
          </svg>

          <router-link to="/write">
            글쓰기
          </router-link>
        </button>

        <button @click.prevent="clickLoginButton"  class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
          <svg class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="18" height="20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          {{!user.email   ? "로그인": "로그아웃"}}
        </button>
        
      </div>
      <LoginModal />
      <WritingModal />
    </nav>
  </div>
</template>
<script>

import LoginModal from "@/components/Modal/LoginAndRegister";
import WritingModal from "@/components/Modal/Writing";

import { mapState } from "vuex";
export default {
  components: {
    LoginModal,
    WritingModal,
  },
  computed: {
    ...mapState(["user","modal"])
  },
  created() {
  },
  methods: {
    clickWritingButton() {
      if (!this.user.email) {
        this.$store.commit("SET_LOGIN_MODAL_OPEN");
        return;
      }
      this.$store.commit("SET_WRITING_MODAL_STATE", true);
    },
    clickLoginButton() {
      if (!this.user.email) {
        this.$store.commit("SET_LOGIN_MODAL_OPEN");
        return;
      }
      this.logout();
    },
    logout() {
      this.$store.commit("SET_USER", {
        email: null,
        nickname: null,
        authYn : null,
      });

      alert("로그아웃.!")
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-container {
  border-bottom: 1px solid #d4d4d4;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
  padding: 0 20px;
  max-width: 1100px;
  .side-block {
    display: flex;
    height: 100%;
    align-items: center;
    #logo-btn {
      margin-right: 60px;
    }
    .text-menu {
      color: #222;
      font-size: 20px;
      margin-right: 30px;
    }
  }
}
</style>
