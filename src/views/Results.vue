<template>
    <div>
        <h1>Showing search results for {{query}}</h1>
        <button>Sort (by views)</button>
        <div v-for="photo in photos" :key="photo.id" class="results">
          <div class="card">
              <img src="photo.src.original" alt="photo.id" style="width:40%">
              <h2>{{photo.id}}</h2>
          </div>
        </div>

        

        <div class="pagination">
            <button>Next</button>
            <button>Previous</button>
        </div>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: this.$route.params.query,
            photos: []
        }
    },
    methods: {
    },
    beforeMount() {
        const PexelsAPI = require("pexels-api-wrapper");

        var pexelsClient = new PexelsAPI(
        "563492ad6f9170000100000190893b5773974d14a69038dc1b3ad4be"
        );

        pexelsClient
        .search(`${this.query}`, 20, 1)
        .then(function(data) {
            console.log(data.photos);
            this.photos = data.photos;
        })
        .catch(function(e) {
            console.err(e);
        });

    }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  cursor: pointer;
  :hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
}

.results {
  margin: 40px 10px 40px 10px ;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285px;
  flex-direction: column;
}

/*.results {
  display: flex;
  flex-direction: row;
}*/

</style>
