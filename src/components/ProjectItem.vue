<template>
  <div class="project_item_pane" v-show="appears_in_tags">
    <div class="row">
        <div v-if="is_image" class="column_image">
            <img :src="project_item_description.Visual.url" alt="Hallo">
        </div>
        <div v-else-if="is_embedded_yt_video" class="column_video">
            <iframe :src="project_item_description.Visual.url" allowfullscreen="allowfullscreen"></iframe>
        </div>
        <div v-else class="column_video">
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" allowfullscreen="allowfullscreen"></iframe>
        </div> 

        <div class= "column_description">
            <h4>{{project_item_description.Title}}</h4>
            <div class="keyroles">
                <b>Key Role: </b>
                <div class="inline" v-for="(pr, index) in project_item_description.KeyRole" :key="pr">
                    <span v-if="index != 0">, </span>
                    {{pr}}
                </div>
            </div>
            <p>{{project_item_description.Description}}</p>
            <div class="external">
                <div class="inline" v-for="(pr, index) in project_item_description.External" :key="pr.text">
                    <span v-if="index != 0">, </span>
                    <a :href=pr.url target="_blank"> {{pr["text"]}}</a>
                </div>
            </div>
            <br>
            <div class="keyroles">
            <b>Tags: </b>
            <div class="inline" v-for="(pr, index) in project_item_description.Tags" :key="index">
                <span v-if="index != 0">, </span>
                <i>{{pr[0]}}</i>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProjectsItem",
  props: {
      project_item_description: {
          type: Object,
          required: true
      },
      tags_to_show: {
          type: Array,
          required: true
      }
      },
  data() {
    return {}
  },

  methods: {
  },

  computed: {
      is_image: function(){
          return this.project_item_description.Visual.Type == "img_url"
      },
      is_embedded_yt_video: function(){
          return this.project_item_description.Visual.Type == "yt_url"
      },

      appears_in_tags: function(){
          for(var i=0; i<this.project_item_description.Tags.length; i++){
              let t = this.project_item_description.Tags[i][0]
              if(this.tags_to_show.includes(t)){
                  return true
              }

          }

      }

  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row {
  background-color: white;
  border: solid;
  border-color: #2c3e50;
  border-width: 2px;
  border-radius: 5px;
  margin: 10px;
  margin-left: 20vw;
  margin-right: 20vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  /*align-items: baseline;*/
}


.keyroles{

text-align: left;
}

.external{

text-align: left;
}

.inline{
    display: inline-block;
}

.column_image {
    flex: 30%;
    /*margin: 5px;*/
}

.column_video {
    flex: 30%
}

.column_description {
  margin: 2%;
  flex: 60%;
  flex: 1 1 30em
}

h4 {
  text-align: left;
}

p {
  text-align: left;
}

.project_item_pane{
}

img {
    width: 100%;
    height: 100%;
    /*width: 30%;*/
    /*height: 100%;*/
    /*float: left;*/
    border-radius: 3px 2px 2px 3px;
    object-fit: cover;

}

iframe {
    width: 100%;
    height: 100%;
    border-radius: 3px 2px 2px 3px;
    border: none;

}

.tag_row {

}

.tag_column {

}

</style>
