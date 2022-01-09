<template>
  <div id="notebook-list" class="detail">
    <header>
      <a href="#" class="btn">
        <i class="iconfont icon-plus"></i>新建笔记本
      </a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表(10)</h3>
        <div class="book-list">
          <router-link v-for="(notebook,index) in notebooks" :key="index" to="/note/1" href="#" class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span>{{notebook.title}}
              <span>{{notebook.noteCounts}}</span>
              <span class="action">编辑</span>
              <span class="action">删除</span>
              <span class="date">3天前</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Auth from '../apis/auth'
import Notebooks from '../apis/notebooks'

window.Notebooks=Notebooks

export default {
  data() {
    return {
       notebooks:[],
    }
  },
  created() {
    Auth.getInfo()
      .then(res => {
        if (!res.isLogin) {
          this.$router.push({ path: '/login' })
        }
      })
      Notebooks.getAll()
        .then(res=>{
           this.notebooks=res.data
        })
  }
}
</script>

<style lang="less" scoped>
@import url(../assets/css/notebook-list.less);
</style>