<template>
  <div class="hello">
    <h1>Cirriculum Vitae</h1>
    <a href="./static/CV_RemiDelanghe_Mail.pdf" target="_blank" download><i>Download One Pager</i></a>
    <h2>Education & Work Experience</h2>
    <div v-for="exp in experience_list" :key="exp.order">
        <p><a :href="exp.place.link" target="_blank" rel="noopener"> <b>{{exp.place.name}}</b></a> - {{exp.title}}, {{exp.time_frame}}</p>
    </div>
    <hr>
    <h2>Skills</h2>
    <div class="row">
        
        <div class="column">
            <h3>Management & Organisation</h3>
                <!--div class="vl"></div-->
                <div class="skill_content">
                <p class="left_aligned_p"> <b> Director of the VTK show</b> '15-'16 & '16-'17: In charge
                 of a team of 60 people, I was responsible for the creation and performance of a theatrical 
                 piece from scratch within 5 months. These creative projects allowed me to develop 
                 organisational and management skills in a real life context with both financial stakes and 
                 unforgiving deadlines. </p>
                <p class="left_aligned_p"> <b> CenEka Vice president </b> '16-'17, <b>Ceneka External relations</b> 
                '17-'18: I took the initiative to revitalise CenEka, the student association of computer science 
                and electrotechnical engineering at the university of Ghent. Together with a team of other 
                passionate students we successfully put this forgotten association back on the map, building 
                meaningful relationships with both Ghent University as well as the industry. </p>
                <p class="left_aligned_p"> <b>Product Owner</b> sept '17- may '18: During a 24 week university group 
                project, we successfully created a POC for indoor navigation using augmented reality. Using 
                the <b><i>agile methodology</i></b>, I took on the role of product owner and gained insight in reconciling 
                the needs of multiple stakeholders and the feasibility of the project. </p>
                </div>
        </div>
        <div class="column">
            <h3>International Background & Languages</h3>
            <div class="skill_content">
            <p class="left_aligned_p"><b>Languages</b>: As part of my international education I was able to
             master the following languages and I am fluent
             in them both written and spoken:</p>
            <ul v-for="t in language_list" :key="t.language">
                <li><b>{{t.language}}</b>: {{t.level}}</li>
            </ul>
            <p class="left_aligned_p">In addition I am also learning the following languages:</p>
            <ul>
                <li><b>Spannish</b>: Beginner</li>
            </ul>
            <p class="left_aligned_p"><b>International diploma '09-'14</b>: I enjoyed an education at 
                the lycée international de Saint-Germain-en-Laye, a French high-school which 
                enables a schooling in multiple languages at a native speaking level. Not only 
                did I acquire linguistic skills, but I also met people from different cultures 
                from all over the world.</p>
            <p class="left_aligned_p">
                <b>Presentation skills</b>: Praised for presentation skills both in form as in delivery. 
                Using skills developed when acting. Next to directing theatrical pieces I have also played
                 in 5 of them. This gave me the experience to perfect my oral presentation skills. 
                 Furthermore I enjoy creating presentations, finding the perfect balance between efficient 
                 information delivery and interesting storytelling.
                 </p>
            </div>
            
        </div>
        <!--div class="vl"></div-->
        <div class="column">
            <h3>Technical</h3>
            <div class="skill_content">
                <p class="left_aligned_p">
                <b>Programming</b>: As part of my bachelors degree I developed programming skills for both 
                academic and software development purposes. I gained a thorough understanding and hands-on
                 experience with <b><i>Java, C, C++, Python Matlab and SQL</i></b>. I also came into contact with 
                 <b><i>javascript, swift, TLA+, Maple and Ruby</i></b>. Topics wherein this skill was developed include 
                 <b><i>machine learning, robotics, software development</i></b> and <b><i>simulations</i></b>.
                 </p>
                 <p class="left_aligned_p">
                <b>Analytical Mindset: </b> Both my engineering degree and my research activities nurtured
                an analytical mindset and demanded a high degree of mathematical reasoning. As such I am able 
                to reason using a broad range of mathematical areas, both on a practical and a theoretical level.
                 </p>
                 <p class="left_aligned_p">
                <b>Engineering: </b> The main focus of my engineering degree is computer science. However, there was
                also a strong presence of other scientific fields in my cirriculum like <b><i>physics</i></b>, <b><i>chemistry</i></b>, <b><i>mathematics</i></b>,  
                which also coincide with my personal interests. 
                In addition there was an introduction to other fields of engineering like <b><i>electrical</i></b>, 
                <b><i>mechanical</i></b> and <b><i>material science engineering</i></b>.
                This allows me to reason on multiple levels of abstraction in my own field: from the physical laws governing 
                electrical circuits and via computer architecture and operating systems up to implementation of algorithms 
                and design of computer systems in high level programming languages.
                 </p>
                </div>
        </div>
    </div>
    <hr>
    <h2>Further Interest</h2>
    <div class="Further_Interest_content">
        <p class="left_aligned_p"> <b>Maker</b>: I like dedicating my spare time to making stuff. 
        The nature of these endavuoers range from short experiments to year long projects. 
        I don’t strive for them to be perfect on the first try. 
        Rather they are opportunities to explore new interests and skills. </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cvDemo',
  props: {

  },
  data(){
    return {
        "experience_list": [
    {
            "place": {
                "name": "Ghent University",
                "link": "https://www.ugent.be/en"
                },
            "title": "PhD Student",
            "time_frame": "September '19 - Present",
            "order": 5
    
    },
        {
            "place": {
                "name": "Uman.ai (ML6)",
                "link": "https://uman.ai"
                },
            "title": "Internship",
            "time_frame": "March '19 - August '19",
            "order": 4
    
    },
    {
            "place": {
                "name": "Ghent University",
                "link": "https://www.ugent.be/en"
                },
            "title": "Master of Computer Science Engineering",
            "time_frame": "'17-'19",
            "order": 3
    
    },
    {
            "place": {
                "name": "Showpad",
                "link": "https://www.showpad.com"
                },
            "title": "Data-science Internship",
            "time_frame": "July '18",
            "order": 2
    
    },
    {
            "place": {
                "name": "Ghent University",
                "link": "https://www.ugent.be/en"
                },
            "title": "Bachelor of Computer Science Engineering",
            "time_frame": "'14-'17",
            "order": 1
    
    },
    {
            "place": {
                "name": "Lycée international de Saint-Germain-en-Laye",
                "link": "https://lycee-international-stgermain.com"
                },
            "title": "Baccalauréat en science (OIB)",
            "time_frame": "'14",
            "order": 0
    
    },
    
    ],

    "language_list": [
        {
            "language": "Dutch",
            "level": "Native speaker"
        },
        {
            "language": "French",
            "level": "French Baccalaureate"
        },
        {
            "language": "English",
            "level": "Cambridge English Advanced (CAE) - C1"
        }

    ]
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
 list-style-type: disc;
  padding: 0;
  display: block;
  text-align: left;
  background-color: #f0f0f0;
}
li {
  /*display: inline-block;*/
  margin-left: 2em;
  display: list-item;
}
.download_pdf.a{
    color: #f2bd83;
}
a {
  color: #2c3e50;
  text-decoration: none;
}

img {
  width: 250px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 25%;
  margin: 1%;
  flex: 1 1 500px;
}

.vl {
  border-left: 1px solid #2c3e50;
  height: 500px;
}

.skill_content {
  margin: 5%;
}

.left_aligned_p {
    text-align: left
}

.Further_Interest_content {
  margin: 5%;
  text-align: left
}

a:hover {
  color: #f2bd83;
}




</style>
