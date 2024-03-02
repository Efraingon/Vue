Vue.createApp({
    data(){ return {tareas: [], 
        valor:''
                }
    },
    methods:{ 
        agregartarea(){
            this.tareas.push(this.valor);
            this.valor ='';
          

        } 
    }

}).mount('#app');