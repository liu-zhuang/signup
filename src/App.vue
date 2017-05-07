<template>
  <div id="app">
<!--     <div id="carousel">
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="item.src" height="400px">
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        images: [{src: '../static/image/1.jpg'}, {src: '../static/image/2.jpg'}, {src: '../static/image/3.jpg'}]
      };
    }
  };
</script>

<style>
  * {
    margin:0;
    padding:0;
  }

  #app {
    box-sizing: border-box;
    width:90%;
    margin:10px auto;
    
  }

  #carousel {
    margin-bottom: 50px;
  }
  
</style>
