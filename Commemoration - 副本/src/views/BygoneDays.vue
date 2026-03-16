<template>
  <div class="page-container">
    <div class="one">看看曾经的自己吧</div>

    <div class="carousel-container">
      <el-carousel v-model="activeindex" motion-blur class="custom-carousel">
        <el-carousel-item v-for="(item, index) in carouselList" :key="index">
          <img :src="item.imgUrl" :alt="item.alt" class="carousel-img">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="container">
      <div style="height: 200px;width: 200px;border: 2px solid green;"></div>
      <div style="height: 200px;width: 200px;border: 2px solid green;"></div>
      <div style="height: 200px;width: 200px;border: 2px solid green;"></div>
      <div style="height: 200px;width: 200px;border: 2px solid green;"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import one from '../assets/one.png'
import eightysix from '../assets/eightysix.png'

const carouselList = [
  {
    imgUrl: eightysix,
    alt: '轮播图1'
  },
  {
    imgUrl: one,
    alt: '轮播图2'
  }
]

const activeindex = ref(0)
</script>

<style scoped>
.page-container {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.one {
  height: 20vh;
  width: auto;
  min-width: 100px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 300;
  /* 楷书设置 */
  font-family: "KaiTi", "STKaiti", "SimSun", sans-serif;
}

.carousel-container {
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  margin-top: 10px;
}

.custom-carousel {
  aspect-ratio: 21 / 9;
  height: auto !important;
}

.custom-carousel :deep(.el-carousel__container) {
  height: 100% !important;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container {
  display: grid;
  gap: 10px 0;
  grid-template-columns: repeat(4, 400px);
  margin-top: 10px;
  padding: 20px 20px;
  border: 1px solid pink;
}
</style>
