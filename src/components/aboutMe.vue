<template>
   
   <div id="app">
  <section class="about-me">
    <div class="about-me-content">
      <div class="about-me-info">
        <h2>Mohammed Taher R</h2>
        <p>A developer proficient in Figma and Android app development, combining design expertise with technical skills to create visually appealing and functional mobile applications.</p>
      </div>
      <div class="about-me-image">
        <img src="../assets/Myphotocropped.jpg">
      </div>
    </div>
  </section>
</div>


</template>
<script>
export default {
    name:'aboutMe-section'
  
}
</script>
<style scoped>
.about-me {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.about-me-info h2,p{
  font-weight: bold;
  color: white;
}

.about-me-content {
  display: flex;
  align-items: center;
  border: 2px solid #f73978;
  padding: 20px;
}

.about-me-info {
  flex: 1;
}

.about-me-image {
  flex: 1;
  text-align: center;
  
}

.about-me-image img {
  max-width: 100%;
  height: auto;
  
}

</style>