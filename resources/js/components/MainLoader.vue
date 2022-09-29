<template>
  <div class="loader d-flex justify-content-center mt-5">
    <div class="loadingio-spinner-bean-eater-loz2t8js4z">
      <div class="ldio-i1y54870orm">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NameLoader",
};
</script>

<style lang='scss' scoped>
@keyframes ldio-i1y54870orm-1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes ldio-i1y54870orm-2 {
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(225deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
.ldio-i1y54870orm > div:nth-child(2) {
  transform: translate(-15px, 0);
}
.ldio-i1y54870orm > div:nth-child(2) div {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 60px;
  border-radius: 120px 120px 0 0;
  background: #f8b26a;
  animation: ldio-i1y54870orm-1 1s linear infinite;
  transform-origin: 60px 60px;
}
.ldio-i1y54870orm > div:nth-child(2) div:nth-child(2) {
  animation: ldio-i1y54870orm-2 1s linear infinite;
}
.ldio-i1y54870orm > div:nth-child(2) div:nth-child(3) {
  transform: rotate(-90deg);
  animation: none;
}
@keyframes ldio-i1y54870orm-3 {
  0% {
    transform: translate(190px, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(70px, 0);
    opacity: 1;
  }
}
.ldio-i1y54870orm > div:nth-child(1) {
  display: block;
}
.ldio-i1y54870orm > div:nth-child(1) div {
  position: absolute;
  top: 92px;
  left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #e15b64;
  animation: ldio-i1y54870orm-3 1s linear infinite;
}
.ldio-i1y54870orm > div:nth-child(1) div:nth-child(1) {
  animation-delay: -0.67s;
}
.ldio-i1y54870orm > div:nth-child(1) div:nth-child(2) {
  animation-delay: -0.33s;
}
.ldio-i1y54870orm > div:nth-child(1) div:nth-child(3) {
  animation-delay: 0s;
}
.loadingio-spinner-bean-eater-loz2t8js4z {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}
.ldio-i1y54870orm {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.ldio-i1y54870orm div {
  box-sizing: content-box;
}

</style>