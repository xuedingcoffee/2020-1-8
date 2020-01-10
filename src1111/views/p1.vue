<template>
  <div>
    <h1>p1</h1>
  </div>
</template>

<script>
  export default {
    created(){
      console.log('p1');
    },
    //离开组件的时候触发
    beforeRouteLeave(to,from,next){
        const b = confirm('你舍得丢下我离开吗?');
        if(b){
            next();
        }else{
            next(false);
        }
        // console.log(b);
    },

  }
</script>

<style scoped>

</style>