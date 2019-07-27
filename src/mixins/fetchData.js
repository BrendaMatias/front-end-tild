export default {
    data() {
        return {
            apiData: null,
            loaded: false,
        }
    },
    methods: {
        fetchData(urlApi) {
            fetch(`https://desafio.tild.com.br/api/${urlApi}`)
                .then(response => response.json())
                .then(response => {
                    this.apiData = response;
                    this.posts = response.data;
                    console.log(this.posts.data)
                    this.loaded = true;
                });
        }
    }
}