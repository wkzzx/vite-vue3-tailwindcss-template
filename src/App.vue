<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
const t = reactive({
  a: 123
})
const store = useStore()
setInterval(() => {
  t.a++
}, 1000)
const inputName = ref('')
const setName = () => {
  store.commit('setName', inputName.value)
}
const userName = computed(() => store.state.name)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view/>
  <div>{{t.a}}</div>
  <div style="font-size: 35px;">名字：{{userName}}</div>
  <el-input v-model="inputName" type="text"/>
  <el-button type="primary" @click.stop="setName">确定</el-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
