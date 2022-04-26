const app = new Vue ({
    el: '#app',
    data() {
        return {
            titulo: 'Mi primer aplicacion con VueJS',
            a: 10,
            b: 5
        }
    },
    methods: {
        multiplicarAB(){
            return this.a * this.b
        }
    },
    computed: {
        sumarAB(){
            return this.a + this.b
        }
    }
});