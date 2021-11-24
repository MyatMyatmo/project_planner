<template>
    <h1>Edit Post</h1>
    <form @submit.prevent="updatePost">
        <label>Post Title</label>
        <input type="text" v-model="title" @mousedown="hideTitleError()">
        <p v-if="titleRequired==true" class="error-message">Title is Required</p>
        <label>Post Detail</label>
        <textarea v-model="detail" @mousedown="hideDetailError()"></textarea>
        <p v-if="detailRequired==true" class="error-message">Detail is Required</p>
        <div class="flexing">
            <a :href="'/'" class="cancel">Cancel</a>
            <!-- <a href="#" class="cancel" @click.prevent="cancelUpdateBtn">Cancel</a> -->
            <button class="update">Update Post</button>
        </div>
    </form>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            title:"",
            detail:"",
            titleRequired: false,
            detailRequired: false,
        }
    },
    mounted(){//get data
        fetch('http://localhost:3000/projects/'+this.id)
        .then((res)=>{
            return res.json();
        })
        .then((datas)=>{
            this.title = datas.title,
            this.detail = datas.detail
        })
        .catch((err)=>{
            console.log(err);
        })
    },
    methods:{//update data
        hideTitleError(){
            this.titleRequired = false;
        },
        hideDetailError(){
            this.detailRequired = false;
        },
        // cancelUpdateBtn(){
        //     this.$route.push({name:"Home"});
        // },
        updatePost(){
            if(!this.title && this.detail) {
                this.titleRequired = true;
            } else if (!this.detail && this.title){
                this.detailRequired = true;
            } else if (!this.title && !this.detail) {
                this.titleRequired = true;
                this.detailRequired = true;
            } else {
                fetch('http://localhost:3000/projects/'+this.id, {
                    method:"PATCH",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({
                        title:this.title,
                        detail:this.detail,
                    })
                })
                .then(()=>{
                    this.$router.push({name:"Home"})
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
}
</script>

<style scoped lang="css" src="@/assets/editPost.css"></style>