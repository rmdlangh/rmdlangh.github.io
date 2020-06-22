<template>
  <div id="app">
    <h1>Remi Delanghe</h1>
    <img src='@/assets/face_circle.png'>
    <h2>Computer Science Engineer, Entrpreneur, Maker</h2>
    <!--h2>Computer Science Engineer</h2>
    <h2>Entrpreneur</h2>
    <h2>Maker</h2-->
    <hr>
    <div id="nav">
     <router-link :to="{ name: 'homepage' }">Me</router-link> |
     <router-link :to="{ name: 'projects_list' }">Projects</router-link> |
     <router-link :to="{ name: 'cv' }">Cirriculum Vitae</router-link> 
    </div>
    <router-view/>
    <hr>
    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

a {
  color: #f2bd83;
}

hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 10vw;
  margin-right: 10vw;
}
</style>
