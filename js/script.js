/*Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/

//Inizializzo vue
var app= new Vue({
    el:'#root',
    data:{
        //Creo l'array vuoto 
        //al quale si aggiungerà ad ogni chiamata della funzione 
        //di uno fino a 10
        randomEmail:[],
    },
    methods:{
        //imposto la funzione
        getEmailRandom(){
            //Imposto il ciclo for per chiedere 10 volte l'inserimento della mail
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                this.randomEmail.push(response.data.response) ;
            });
            }
        },
    },
    //imposto la tempistica 
    //Immediata  generazione di mail
    mounted(){
       this.getEmailRandom();
    }
})