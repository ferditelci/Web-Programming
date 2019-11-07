window.addEventListener('load', () => {

    window.vue = new Vue({
        el: '#app',

        data: {
            urunler3: [],
        },

        methods: {},

        created() {
            fetch('./data3.json')
                .then((res) => { return res.json() })
                .then((res) => {
                    this.urunler3 = res.urunler3;
                })
        },
    })

})