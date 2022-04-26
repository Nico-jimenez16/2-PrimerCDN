const app = new Vue ({
    el: '#app',
    data() {
        return {
            mensaje1: 'default',
            mensaje2: 'default',
            titulo: 'Mi primer aplicacion con VueJS',
            a: 10,
            b: 5
        }
    },
    methods: {
        multiplicarAB(){
            return this.a * this.b
        },
        actualizarEvento(event){
            this.mensaje2 = event.target.value;
        }
    },
    computed: {
        sumarAB(){
            return this.a + this.b
        }
    }
});