<template>
  <div class="hello">
    <h1>Projects</h1>
    <p>Below you can find a list of the projects</p>
    <br/>
    <h3>Tags</h3>
    <div class=row>
        <div class=column v-for="(t, index) in tags" :key="t">
            <button class= "button" v-show="check_if_render_button()" v-on:click="update_state(index)">
                {{t}}
            </button>
            <button class= "button_pressed" v-show="check_if_render_button_pressed(index)" v-on:click="update_state(index)">
                {{t}}
            </button>
            <button class= "button_not_pressed" v-show="check_if_render_button_not_pressed(index)" v-on:click="update_state(index)">
                {{t}}
            </button>
        </div>
    </div>
    <h3>Projects</h3>
    <div v-for="pr in projects" :key="pr['Title']">
        <ProjectItem :project_item_description="pr" :tags_to_show="tags_to_show"></ProjectItem>
    </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: "Projects",
  data() {
    return { 
        "projects_list":[
        {
            "Title": "ML | Project Management project 1",
            "Description": "Here I would like to talk about ML and project management:    Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played. Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played. Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played. Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played. Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played",
            "Tags": [["ML/AI", 1], ["Project Management", 1]],
            "Visual": {"Type": "img_url", "url": "https://i.imgur.com/G2nlTBu.jpg"},
            "KeyRole": ["First Author", "Presenter"],
            "External":[{"text": "Website UGent", "url": "https://www.ugent.be"}, {"text": "Web UGent", "url": "https://www.ugent.be"}],
        },
        {
            "Title": "Project 2",
            "Description": "This is the second project I want to show you.",
            "Tags": [["Music", 1], ["Project Management", 1]],
            "Visual": {"Type": "b", "url": "https://i.imgur.com/bX2Uk7C.jpg"},
            "KeyRole": ["Second Author"],
            "External":[{"text": "Youtube", "url": "https://www.youtube.com"}],
        },
    ],
    filter: -1,
    /*"relevant_tags": [["ML/AI", false], ["Project Management", false], ["Music", false]]*/
    }
  },

components: {
    ProjectItem
},

computed: {
    
    tags: function(){
        // Get all tags from the project Items
        var to_return = []
        for (var i = 0; i < this.projects.length; i++) {
            for (var j = 0; j < this.projects[i]["Tags"].length; j++) {
                to_return.push(this.projects[i]["Tags"][j][0]);
            }
        }
        // Filter to only get left with the unique tags
        to_return = [...new Set(to_return)]
        return to_return
    },

    tags_to_show: function(){
        if(this.filter==-1){
            return this.tags
        } else {
            return [this.tags[this.filter]]
        }
    },

    projs: function(){
      return this.projects
    },

    ...mapState({
      projects: state => state.projects.projects
    })

},


  methods: {
      do_something(a){
          a
      },

      update_state(index){
        if(index == this.filter){
            this.filter = -1
        } else {
            this.filter = index
        }
        //console.log(index)
      },

      check_if_render_button(){
          return this.filter==-1
      },
      check_if_render_button_pressed(index){
          return this.filter==index
      },
      check_if_render_button_not_pressed(index){          
          return this.filter!=index && this.filter>=0
      },

  },
  created() {
    this.$store.dispatch('projects/getProjects')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.row {
  display: flex;
  flex-wrap: wrap;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}

.column {
    
  /*flex: 10%;
  flex: 1 1 20px;*/
  
}

button{
  background-color: #2c3e50;
  border: solid;
  border-color: #2c3e50;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  border-radius: 12px;
  outline: none;
  border-width: 1px;
  
}

.button_pressed {
  background-color: #2c3e50;
  border: solid;
  border-color: #2c3e50;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  border-radius: 12px;
  outline: none;
  border-width: 1px;
}

.button_not_pressed {
  background-color: white;
  border: solid;
  border-color: #2c3e50;
  color: #2c3e50;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  border-radius: 12px;
  outline: none;
  border-width: 1px;
}

button:hover {
  background-color: #f2bd83; /* Green */
  color: #2c3e50;
}

.button_pressed:hover {
  background-color: #f2bd83; /* Green */
  color: #2c3e50;
  /*border: solid;
  border-color: #f2bd83;
  border-width: 1px;*/
}

.button_not_pressed:hover {
  background-color: #f2bd83; /* Green */
  color: #2c3e50;
}

</style>
