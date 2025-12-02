<template>
  <div class="loader-container">
    <div class="loader">
      <div class="hotel-text">TOWN TOWER</div>
      <div class="loading-bar">
        <div class="progress"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  text-align: center;
  margin-bottom: 100px;
}

.hotel-text {
  color: white;
  font-size: 2rem;
  letter-spacing: 0.5em;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
}

.loading-bar {
  width: 200px;
  height: 1px;
  background: #333;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: white;
  animation: loading 1.5s ease-in-out forwards;
}

@keyframes loading {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>