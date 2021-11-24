<template>
  <div class="home">
    <h1>All Posts</h1>
    <FilterNav @filterValue="current=$event" :current="current"></FilterNav>
    <div v-for="project in filterPost" :key="project.id" >
      <SingleProject :project="project" @delete="deletePost" @complete="completePost"></SingleProject>
    </div>
  </div>
</template>

<script>
import FilterNav from '../components/FilterNav'
import SingleProject from '../components/SingleProject'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
      FilterNav,
      SingleProject,
  },
  data(){
      return{
          projects:[],
          current:"all"
      }
  },
  methods:{
      deletePost(id){
          this.projects=this.projects.filter(project=>{
              return project.id != id;
          })
      },
      completePost(id){
          let findPost=this.projects.find(project=>{
              return project.id === id;
          });
          findPost.complete = !findPost.complete;
      }
  },
  computed:{
    filterPost(){
        if(this.current == 'complete') {
            return this.projects.filter((p)=>{
                return p.complete
            })
        }
        if(this.current == 'uncomplete'){
            return this.projects.filter((p)=>{
                return !p.complete
            })
        }
        return this.projects;
    }
  },
  mounted(){
      fetch('http://localhost:3000/projects')
      .then((response)=>{
          return response.json();
      })
      .then((datas)=>{
          this.projects = datas
      })
      .catch((error)=>{
          return error;
      })
  }
}
</script>
