Vue.createApp({
    data() {
        return { 
            produit: '',
            listeCourses: [],
            affichage: true,
            btnAfficher: ''
        };
    },
    methods : {
        ajouter(){
            this.listeCourses.push(this.produit);
        },
        supprimerProduit(index){
            this.listeCourses.splice(index, 1)
        },
        afficher(){
            this.affichage = !this.affichage;
        }
    },
}).mount('#monApp');