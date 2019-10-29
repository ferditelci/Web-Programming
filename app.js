window.addEventListener('load', () => {

    window.vue = new Vue({
        el: '#app',

        data: {
            urunler: [],
            sepet: [],
        },

        methods: {
            sepeteEkle(index){
                const item = this.urunler.splice(index, 1);
                this.sepet.push(item[0]);
            }
        },

        created() {
            fetch('./data.json')
                .then((res) => { return res.json() })
                .then((res) => {
                    this.urunler = res.urunler;
                    this.sepet = res.sepet;
                })
        },
    })

    window.vue = new Vue({
        el: '#app2',

        data: {
            coksatanlar: [],
            
        },

        created() {
            fetch('./data.json')
                .then((res) => { return res.json() })
                .then((res) => {
                    this.coksatanlar = res.coksatanlar;
                })
        }
    })

    window.vue = new Vue({
        el: '#app3',

        data: {
            sepet: []
        },

        methods: {
            sepeteEkle(index){
                const item = this.urunler.splice(index, 1);
                this.sepet.push(item[0]);
            }
        },

        created() {
            fetch('./data.json')
                .then((res) => { return res.json() })
                .then((res) => {
                    this.sepet = res.sepet;
                })
        }
    })

})