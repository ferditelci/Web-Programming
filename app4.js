window.addEventListener('load', () => {

    window.vue = new Vue({
        el: '#app',

        data: {
            urunler4: [],
        },

        methods: {},

        created() {
            fetch('./data4.json')
                .then((res) => { return res.json() })
                .then((res) => {
                    this.urunler4 = res.urunler4;
                })
        },
    })

})