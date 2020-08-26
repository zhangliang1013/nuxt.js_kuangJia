<template>
  <div class="container">
   这是我的nuxt.js框架
    <el-carousel height="700px" class="carousel">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div class="banner" :style="`background:url(${item}) center center no-repeat; background-size: cover; `" >
          测试轮播图{{index}} 
          
        </div>
      </el-carousel-item>
    </el-carousel>








<div class="footer">测试rem适配</div>

  </div>
</template>

<script>
export default {  
  data () {
    return {
       banners : [
         'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1585829999,2436051513&fm=26&gp=0.jpg',
         'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1294301861,46648820&fm=26&gp=0.jpg',
         'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3544375238,114231233&fm=26&gp=0.jpg',
         'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2857661463,2656107418&fm=26&gp=0.jpg'
       ]
    }
  },
  mounted(){

  },
  methods : {

  }
}
</script>

<style lang="less" scoped>
.footer {
  font-size: 20px;
  height: 100px;
  width: 100px;
  background: red;
}
.container {
  margin:0 auto;
}
/deep/ .banner {
  text-align: center;
  font-size: 100px;
  height: 100%;
}
.carousel {
  min-width: 1000px;
}

</style>
