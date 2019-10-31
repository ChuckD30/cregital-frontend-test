<template>
  <div class="search-box">
    <input type="text" placeholder="Search for pexel images" v-model="query"/>
  <router-link :to="'/results/' + query"><input type="submit" value="search" @click="searchQuery"></router-link>
  </div>
</template>

<script>

export default {
  name: 'Search',
  data() {
    return {
      query: "",
      searchTerm: ""
    }
  },
  methods: {
    searchQuery() {
        if (this.query != '') { //if the value for searchQuery is not empty then 
         this.$emit('searchResult', this.query); //emit the event searchResult to anywhere in your project
    }
  }
}
}

</script>

<style lang="scss" scoped>
.search-box {
    display: flex;
    align-items: center;
    justify-content: center;
  input {
    width: 350px;
    padding: 15px;
    &[type="submit"] {
      width: 100px;
      color: #f5f4f4;
      font-size: 1.2em;
      margin-left: 10px;
      border-radius: 3px;
      background-color: #20cacae7;
      outline: 0;
      border: 0;
      cursor: pointer;
      display: block;
    }
  }
  a {
    text-decoration: none;
  }
}
</style>