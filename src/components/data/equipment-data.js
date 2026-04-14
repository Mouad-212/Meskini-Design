
import image1 from "../assets/img/equipment/boisLatte.png";
import image2 from "../assets/img/equipment/boisMdf.png";
import image3 from "../assets/img/equipment/boisHydrofuge.png";
import image4 from "../assets/img/equipment/boisStratifie.png";
import image6 from "../assets/img/equipment/planGranit.png";
import image7 from "../assets/img/equipment/planQuartz.png";
import image8 from "../assets/img/equipment/planSilestone.png";
import image9 from "../assets/img/equipment/planDekton.png";

const equipmentData = {

    bois : [ 
        { category: 'bois',
             number: '01', 
             id: 'bois-latte',
              date: '10', 
              comment: '2',
               title: 'Bois latté : solidité et durabilité', 
               image: image1, 
               description: 'Le bois latté est reconnu pour sa robustesse exceptionnelle et sa stabilité dans le temps. Il est principalement utilisé pour les structures de cuisine comme les caissons, garantissant une excellente résistance au poids et à l’usage quotidien.', 
               delay: '0.4', }, 
               { 
                category: 'bois',
                 number: '02', 
                 id: 'bois-mdf', 
                 date: '12',
                  comment: '3', 
                  title: 'MDF : finition parfaite et design moderne',
                   image: image2, 
                   description: 'Le MDF offre une surface lisse idéale pour des finitions élégantes et contemporaines. Il est particulièrement adapté aux façades et permet une grande variété de styles et de couleurs.', 
                   delay: '0.7', }, 
                   { 
                    category: 'bois',
                     number: '03',
                      id: 'bois-stratifie',
                       date: '13', 
       comment: '6', 
         title: 'Stratifié : résistance et praticité',
        image: image4, 
        description: ' Le stratifié est un matériau très résistant aux rayures et facile à entretenir. Il est parfait pour les cuisines modernes nécessitant durabilité et esthétique.',
         delay: '1', }, 
        {
             category: 'bois',
            number: '04', 
            id: 'bois-hydrofuge',
            date: '15',
            comment: '7', 
            title: 'Bois hydrofuge : protection contre l’humidité',
            image: image3, 
            description: 'Le bois hydrofuge est spécialement conçu pour résister à l’eau et à l’humidité. Il est idéal pour les zones sensibles comme sous évier, garantissant une meilleure durabilité.', delay: '0.4', }, 
  ],
  plantravail: [
    {
        category: 'Plan De Travail',
        id: 'plan-granit',
        title: 'Granit : robustesse naturelle',
        description:'Le granit est une pierre naturelle reconnue pour sa solidité exceptionnelle et sa résistance à la chaleur Idéal pour une cuisine durable et élégante.' ,
         image: image6,

    },
    {
        category: 'Plan De Travail',
        id: 'plan-quartz',
        title : 'Quartz : élégance et modernité',
        description: 'Le quartz offre une finition uniforme et moderne avec une excellente résistance aux taches. Parfait pour un design contemporain.' ,
        image:image7 ,

    },
    {
        category: 'Plan De Travail',
        id:'plan-silestone' ,
        title :'Silestone : performance et design',
        description:'Silestone combine esthétique et technologie avec une forte résistance aux rayures et aux bactéries. Un choix haut de gamme pour cuisines modernes.',
        image: image8,

    },
    {
        category: 'Plan De Travail',
        id: 'plan-dekton',
        title: 'Dekton : ultra résistance',
        description:'Dekton est un matériau ultra-compact, extrêmement résistant à la chaleur, aux rayures et aux UV. Idéal pour un usage intensif et un design premium.' ,
        image:image9 ,

    },
  ],
  poignee :[
    {
        id:'poignee-classique',
        title:'Poignée classique',
        description:'Poignées visibles traditionnelles, pratiques et disponibles dans plusieurs styles et finitions pour s’adapter à toutes les cuisines.',
        // image:,
    },
    {
        id:'poignee-gola',
        title:'Gola (sans poignée)',
        description:'Système intégré dans le caisson pour un design épuré et moderne sans poignées visibles.',
        // image:,
    },
    {
        id:'poignee-integree',
        title:'Poignée intégrée',
        description:'Poignée directement intégrée dans la façade pour un rendu discret et élégant.',
        // image:,
    },
    {
        id:'poignee-ibiza',
        title:'Poignée Ibiza',
        description:'Style moderne avec prise ergonomique, très utilisé dans les cuisines contemporaines.',
        // image:,
    },
    
  ],
  accessoire: [
    {
        id:'accessoire-poubelle',
        title:'Poubelle intégrée',
        description:'Système discret intégré au meuble pour un tri pratique et hygiénique.',
        // image: ,
    },
    {
        id:'range-couvert',
        title:'Range-couverts',
        description:'Organisation parfaite des tiroirs pour un accès rapide et efficace.',
        // image: ,
    },
    {
        id:'porte-evier',
        title:'Protection sous évier',
        description:'Protège le meuble contre l’humidité et prolonge sa durée de vie.',
        // image: ,
    },
    {
        id:'magic-corner',
        title:'Magic Corner',
        description:'Système coulissant pour exploiter les coins difficiles d’accès.',
        // image: ,
    },
    {
        id:'coin-tournant',
        title:'Coin tournant',
        description:'Plateaux rotatifs pour un accès facile dans les angles.',
        // image: ,
    },
    {
        id:'colonne-coulissante',
        title:'Colonne coulissante',
        description:'Rangement vertical avec accès total pour optimiser l’espace.',
        // image: ,
    },
    {
        id:'tiroir-anglaise',
        title:'Tiroirs à l’anglaise',
        description:'Tiroirs intérieurs discrets pour un rangement élégant.',
        // image: ,
    },
    {
        id:'egouttoir',
        title:'Égouttoir intégré',
        description:'Système pratique pour sécher la vaisselle directement dans le meuble.',
        // image: ,
    },
    {
        id:'range-epices',
        title:'Range-épices',
        description:'Organisation intelligente pour garder vos épices à portée de main.',
        // image: ,
    },
    {
        id:'range-bouteille',
        title:'Range-bouteilles',
        description:'Solution élégante pour stocker vos bouteilles en toute sécurité',
        // image: ,
    },
    {
        id:'tiroir-coulissant',
        title:'Tiroirs coulissants',
        description:'Accès total au contenu pour un confort d’utilisation optimal.',
        // image: ,
    },
    {
        id:'panier-coulissant',
        title:'Panier coulissant',
        description:'Rangement pratique pour aliments et accessoires.',
        // image: ,
    },
  ],
  quincaillerie:[
    {
        id:'charniere-softclose',
        title:'Charnières avec amortisseur',
        description:'Systèmes de charnières équipés d’amortisseurs pour une fermeture douce, silencieuse et durable.',
        // image: ,
    },
    {
        id:'tiroir-premium',
        title:'Tiroirs coulissants premium',
        description:'Tiroirs robustes avec glissières haut de gamme, offrant une ouverture fluide et un accès total.',
        // image: ,
    },
    {
        id:'coulisse-metallique',
        title:'Coulisses métalliques',
        description:'Glissières de qualité supérieure garantissant un mouvement précis, silencieux et durable.',
        // image: ,
    },
    {
        id:'push-open',
        title:'Système push-open',
        description:'Ouverture sans poignée par simple pression, idéale pour les cuisines modernes et minimalistes.',
        // image: ,
    },
    {
        id:'verin-relevable',
        title:'Vérins et systèmes relevables',
        description:'Systèmes facilitant l’ouverture des meubles hauts avec sécurité, confort et fluidité.',
        // image: ,
    },
    {
        id:'soft-close',
        title:'Système soft-close',
        description:'Fermeture amortie évitant les chocs, protégeant les meubles et améliorant le confort.',
        // image: ,
    },
    {
        id:'rails-coulissants',
        title:'Rails et systèmes coulissants',
        description:'Composants essentiels assurant la stabilité et la fluidité des éléments coulissants.',
        // image: ,
    },
    {
        id:'fixations-supports',
        title:'Fixations et supports',
        description:'Éléments techniques garantissant une installation solide, durable et sécurisée.',
        // image: ,
    },
  ],
};

export default equipmentData;