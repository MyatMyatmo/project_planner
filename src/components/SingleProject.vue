<template>
    <div class="project" :class="{complete:project.complete}">
        <div class="flexing">
            <div>
                <h3 @click="showDetail=!showDetail">{{project.title}}</h3>
            </div>
            <div>
                <span class="material-icons" @click="deletePost">
                delete
                </span>
                <router-link :to="{name:'EditPost',params:{id:project.id}}">
                    <span class="material-icons">
                        edit
                    </span>
                </router-link>
                <span class="material-icons" @click="completePost">
                done
                </span>
            </div>
        </div>
        <p v-if="showDetail">{{project.detail}}</p>
        {{project.complete}}
    </div>
</template>

<script>
export default {
    props:["project"],
    data(){
        return{
            showDetail: false,
            api:'http://localhost:3000/projects/',
        }
    },
    methods:{
        deletePost(){
            let deleteRoute = this.api+this.project.id
            fetch(deleteRoute,{method:"DELETE"})
            .then(()=>{
                this.$emit('delete',this.project.id) // data parse to parent vue
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        completePost(){
            let completeRoute = 'http://localhost:3000/projects/'+this.project.id;
            fetch(completeRoute,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json" //let json format
                },
                body:JSON.stringify(
                    {
                       complete:!this.project.complete
                    }
                )
            })
            .then(()=>{
                this.$emit('complete',this.project.id);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>

<style scoped lang="css" src="@/assets/singleProject.css"></style>

//filter, map (array function)  => return new array

// find() not like filter, map  => return existing object

// not update all data in one object (use patch)