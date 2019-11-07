window.addEventListener('load', () => {

    window.vue = new Vue({
        el: '#app',

        data: {
            urunler2: [],
        },

        methods: {},

        created() {
            fetch('./data2.json')
                .then((res) => { return res.json() })
                .then((res) => {
                    this.urunler2 = res.urunler2;
                })
        },
    })

})