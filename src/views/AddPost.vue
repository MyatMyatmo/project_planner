<template>
<h1>Add Post</h1>
    <form @submit.prevent="addPost">
        <label>Post Title</label>
        <input type="text" v-model="title">
        <p v-if="titleRequired==true" class="error-message">Title is Required</p>
        <label>Post Detail</label>
        <textarea v-model="detail"></textarea>
        <p v-if="detailRequired==true" class="error-message">Detail is Required</p>
        <div class="flexing">
            <button @click="cancelBtn" class="cancel">Cancel</button>
            <button class="add">Add Post</button>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return{
            title:"",
            detail:"",
            titleRequired: false,
            detailRequired: false,
        }
    },
    methods:{
        cancelBtn(){
            this.$router.push({name:"Home"});
        },
        addPost(){
            let addPostRoute = 'http://localhost:3000/projects';
            if(!this.title && this.detail) {
                this.titleRequired = true;
            } else if (!this.detail && this.title){
                this.detailRequired = true;
            } else if (!this.title && !this.detail) {
                this.titleRequired = true;
                this.detailRequired = true;
            } else {
                fetch(addPostRoute, {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json" //let json format
                    },
                    body:JSON.stringify({
                        title:this.title,
                        detail:this.detail,
                        complete:false
                    })
                })
                .then(()=>{
                    this.$router.push({name:'Home'});
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
}
</script>

<style scoped lang="css" src="@/assets/addPost.css"></style>