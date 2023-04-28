<template>
    <div id="project-section" >
        <h2 style="color: white;">My Projects</h2>
      <div class="scroll-container">
        <div class="projects" :style="`border-color: ${borderColor};`">
          <div class="project" :style="'margin-top:50px;'" v-for="project in projects" :key="project.id">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <a :href="project.githubLink">GitHub Link</a>
          </div>
        </div>
      </div>
      <!-- <button class="scroll-button left" @click="scrollLeft">&lt;</button>
      <button class="scroll-button right" @click="scrollRight">&gt;</button> -->
    </div>
  </template>
  
  <script>
  export default {
    name:'project-section',  
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Web Quiz",
            description: "An Interactive Web Quiz based on Computer Science topics",
            githubLink: "https://github.com/MohammedTaherR/web-Quiz"
          },
          {
            id: 2,
            title: "Unit Converter App",
            description: "An measurement converter app",
            githubLink: "https://github.com/MohammedTaherR/UnitConverter"
          },
          
          {
            id: 3,
            title: "Easy Shopping App",
            description: "An Android app that uses barcode for purchasing products",
            githubLink: "https://github.com/MohammedTaherR/Easy-shopping-App"
          }
          ,
          {
            id: 4,
            title: "Wallpaper App",
            description: "An Android app that set wallpaper for mobiles",
            githubLink: "https://github.com/MohammedTaherR/wallpaper    "
          }
          ,
          {
            id: 5,
            title: "College portal",
            description: "A college portal used to manage their Events, Courses and Results",
            githubLink: "https://github.com/MohammedTaherR/college-portal"
          },
          {
            id: 6,
            title: "Anonymous Chat Application",
            description: "A chat application that allows users to communicate with each other without revealing their identities",
            githubLink: "https://github.com/MohammedTaherR/AnonymousChatApplication"
          },
          {
            id:7,
            title:"Quick Notes App",
            description:"A application that provides a convenient way to capture and access important details on the go.",
            githubLink:"https://github.com/MohammedTaherR/Quick-Notes-App"
          }
        ],
        borderColor: "#f73978",
        scrollStep: 100, 
      };
    },
  };
  </script>
  
  <style scoped>
  #project-section {
    position: relative;
    overflow: hidden;
    margin-top: 80px;
  }
  
  .scroll-container {
        
}
.projects::-webkit-scrollbar { width: 0 !important }
  .projects {
    display: flex;
    gap: 20px;
    padding: 10px;
    overflow-x: scroll;

    margin: 10pxs;
    border: 2px solid;
    border-radius: 8px;
  }
.project-section h2{
    color: white;
}  
  .project h2,p {
    color: white;
    width: 300px;
  }
  
  .scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
  
  .left {
    left: 10px;
  }
  
  .right {
    right: 10px;
  }
  </style>
  