window.addEventListener('load', () => {

    window.vue = new Vue({
        el: '#app',

        data: {
            urunler5: [],
        },

        methods: {},

        created() {
            fetch('./data5.json')
                .then((res) => { return res.json() })
                .then((res) => {
                    this.urunler5 = res.urunler5;
                })
        },
    })

})