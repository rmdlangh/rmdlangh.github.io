<template>
  <div class="hello">

    <h2>Me</h2>
    <p class="about_me">
        Hi, my name is Rémi and I am passionate about solving problems with technology. <br>
        I have had the opportunity to grow up in unison with an ever-changing technological landscape. 
        I believe there still exists a great gap between the digital and physical world. 
        As such I hope to help merging boths worlds in one experience.

    </p>

    <br>
    <br>
    <h3>Contact</h3>
    <hr>
    <br>
    <div class="fa_list">
        <div class="fa_wrapper">
            <a href="mailto:delanghe.remi@gmail.com">
                <i class="fa fa-envelope"></i>
            </a>
        </div>
        <div class="fa_wrapper">
            <a href="https://www.linkedin.com/in/rémi-delanghe-b6a193161/" target="_blank">
                <i class="fa fa-linkedin-square"></i>
            </a>
        </div>
        <div class="fa_wrapper">
            <a href="https://twitter.com/remidius" target="_blank">
                <i class= "fa fa-twitter"> </i>
            </a>
        </div>
        <!--div class="fa_wrapper">
            <a href="https://github.com/rmdlangh" target="_blank">
            <i class= "	fa fa-github-square"> </i>
            </a>
        </div-->
        
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f2bd83;
}

img {
  width: 250px;
}

hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 30vw;
  margin-right: 30vw;
}

.fa_list {
 display: flex;
 justify-content: center;
 margin-left: 20vw;
 margin-right: 20vw;
}

.fa_wrapper {
  flex: 0 0 20%;
  
}

.fa{
    /*color: #f2bd83;*/
    color: #2c3e50;
    /*background-color: blueviolet;*/
    font-size: 300%;
    transition: 0.3s;
}

.fa:hover {
  color: #f2bd83;
  /*color: #2c3e50;*/
}

.about_me {
    font-size: 120%;
    margin-left: 20vw;
    margin-right: 20vw;
    
}

</style>
