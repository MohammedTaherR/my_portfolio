<template>
     <nav>
        <div class="navbar">
          <a href="#app">About Me</a>
        <a href="#project-section">My Projects</a>
          <a href="#achievements">My Achievements</a>
             <a href="#contact">Contact Me</a>
        </div>
      </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar-section',
  
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  }}
  </script>
  
  <style scoped>
  
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 10px;
}

.navbar a {
  text-decoration: none;
  color: white;
  padding: 10px;
}

.navbar a:hover {
  color: grey;
}

.navbar .active {
  color: white;
  font-weight: bold;
}
@media (max-width: 768px) {
  
  .navbar {
    flex-direction: column;
  }

  .navbar a {
    display: block;
    padding: 10px 10px;
  }
}

  </style>
  