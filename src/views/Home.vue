<template>
  <div class="home">
    <header id="showcase">
      <h1>Download high quality images for free!</h1>
      <p>Search Here</p>
    </header>
    <div class="search-filter-container">
      <app-search></app-search>
    </div>  
  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
    data: function() {
      return {
    }
  },
  name: 'home',
  components: {
    'app-search':Search,
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#showcase{
    // background-image: url('../assets/community.jpg');
    background: #000;
    height: 80vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px; 
    h1 {
    font-size: 40px;
    line-height: 1;
    color: #fff;
    }
    p{
      color:#fff;
      font-size:24px;
    }
}

.search-filter-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-box input {
    margin: 10px auto;
    display: flex;
}
</style>