<template>
    <h1>Edit Post</h1>
    <form @submit.prevent="updatePost">
        <label>Post Title</label>
        <input type="text" v-model="title">
        <label>Post Detail</label>
        <textarea v-model="detail"></textarea>
        <button>Update Post</button>
    </form>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            title:"",
            detail:"",
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
        updatePost(){
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
</script>

<style>
    form {
        background: white;
        padding: 20px;
        border-radius: 10px;
    }
    label {
        display: block;
        color: #bbb;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        margin: 20px 0 10px 0;
    }
    input {
        padding: 10px;
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 100%;
        box-sizing: border-box;
    }
    textarea {
        border: 1px solid #ddd;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        height: 100px;
    }
    form button {
        display: block;
        margin: 20px auto 0;
        background: #00ce89;
        color: white;
        padding: 10px;
        border: 0;
        border-radius: 6px;
        font-size: 16px;
    }
</style>