<template>
  <div class="channel-search">
      <Search @search="handleSearch" placeholder="搜索频道" />
  </div>
</template>

<script>
import Search from "../components/Search"
export default {
    components:{
        Search
    },
    methods:{
     handleSearch(e){
      console.log(e);
    },
  }
}
</script>

<style scoped>
.channel-search{
    width: 100%;
    box-sizing: border-box;
    padding: 0 18px;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>