<template>
  <section id="achievements">
    <h2>My Achievements</h2>
    <div class="achievement-scroll-container" :style="'border-color: #f73978;border-style:groove;padding-top:40px;padding-bottom:40px'">
      <div class="achievement-list" >
        <div class="achievement" v-for="achievement in achievements" :key="achievement.id">
          <div class="achievement-details">
            <h3>{{ achievement.title }}</h3>
            <p>{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>
  
  <script>
  export default {
    name:'acheivement-section',  
    data() {
      return {
        achievements: [
      {
        id: 1,
        title: 'Winner',
        description: 'Synsara-22 Kode Git Fiesta ',
       
      },
      
      {
        id: 2,
        title: 'Winner',
        description: 'Interrupt-23 Code Relay',
       
      },
      {
        id: 3,
        title: 'Winner',
        description: 'Samhita-23 Hackathon',
       
      },
      {
        id: 4,
        title: 'Winner',
        description: 'Hackerz-22 Mobile Gaming ',
      
      },
      {
        id: 5,
        title: 'Second Runner Up',
        description: 'IEEE Bots Battle',
       
      },
    ],
        borderColor: "#f73978",
        scrollStep: 100, 
      };
    },
  
  };
  </script>
  
  <style scoped>
 .achievement-scroll-container::-webkit-scrollbar { width: 0 !important }
  h3,p, h2{
    color: white;
  }
  #achievements {
    position: relative;
  padding: 20px;
  margin-top: 80px;
}

.achievement-scroll-container {
  overflow-x: auto;
  
}

.achievement-list {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
}

.achievement { 
    margin: 15px;
    position: relative;
  display: inline-flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 5px;
  border-radius: 5px;
}

.achievement-details{padding: 20px;}



  </style>
  