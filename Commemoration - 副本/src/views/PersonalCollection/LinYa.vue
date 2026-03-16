<template>
  <div class="page-bgc"></div>

  <div class="nav">
    <div class="nav-container">奔赴3年之约</div>
  </div>

  <div style="height: 85vh;width: auto;display: flex;justify-content: center;align-items: center;border-radius: 8px;">
    <div class="main-container">

      <div class="item1">
        <el-carousel :interval="3000" height="360px" motion-blur
          style="width: 640px;margin: 0 auto;padding-top: 10px;opacity: 0.8;">
          <el-carousel-item v-for="(item, index) in carouselList" :key="index">
            <img :src="item.imgUrl" :alt="item.alt" class="carousel-img">
          </el-carousel-item>
        </el-carousel>

        <div class="item1-container">
          <p>这是我印象最深刻的一部电影了，不知道是因为和哪些我自我感觉关系很好的朋友一起看的原因，还是这是我第一次走进影院看一步电影，我自己也是有点不明白，那种场面的震撼程度简直是惊讶到我了</p>
          <p>可惜他已经没有联系了，可能我们认为快乐的回忆，对别人来说是一种负担吧，不管这么样，都要谢谢你。加油，いわと すずめ！</p>
        </div>
      </div>

      <div class="item2">
        <div class="item2-container"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Screenshot from '../../assets/MyCollection/Screenshot.png'

const carouselList = ref([
  {
    imgUrl: Screenshot,
    alt: '轮播图1'
  },
  {
    alt: '图片不见了'
  }
])
</script>

<style>
.page-bgc {
  height: 100vh;
  width: 100vw;
  background-image: url(../../assets/MyCollection/linya.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.nav {
  height: 100px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-container {
  height: 80px;
  width: 80%;
  text-align: center;
  line-height: 80px;
  font-family: "KaiTi", "STKaiti", "SimSun", sans-serif;
  font-size: 30px;
  border: 2px solid pink;
  border-radius: 8px;
  background: linear-gradient(to right, pink, skyblue);
  opacity: 0.6;
}

.main-container {
  height: 95%;
  width: 80%;
  border: 2px solid skyblue;
  display: grid;
  grid-template-columns: 56% 44%;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 保持图片比例，覆盖整个容器 */
}

.item1 {
  height: 100%;
  /* background-color: red; */
}

.item1-container {
  height: 34%;
  width: 640px;
  /* background-color: red; */
  margin: 0 auto;
  margin-top: 10px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
}

.item1-container p {
  font-size: 20px;
  color: #FFE5B4;
  text-indent: 2em;
}

.item2 {
  height: 100%;
  /* background-color: skyblue; */
}

.item2-container {
  height: 97%;
  width: 96%;
  /* background-color: red; */
  margin: 0 auto;
  margin-top: 10px;
  border: 2px solid black;
  border-radius: 8px;
}
</style>