import image1 from "../assets/img/service/services-1.jpg";
import image2 from "../assets/img/service/services-2.jpg";
import image3 from "../assets/img/service/services-3.jpg";
import image4 from "../assets/img/service/services-4.jpg";
import image5 from "../assets/img/service/services-5.jpg";
import image6 from "../assets/img/service/services-6.jpg";
import cuisineL from "../assets/img/service/cuisineL.png";
import cuisineI from "../assets/img/service/cuisineI.png";
import cuisineU from "../assets/img/service/cuisineU.png";
import cuisineILOT from "../assets/img/service/cuisineILOT.png";
import cuisineOuvert from "../assets/img/service/cuisineOuvert.png";
import cuisinePetite from "../assets/img/service/cuisinePetite.png";


const servicesData = [
    {
        id: 'cuisineI',
        icon: <img src={cuisineI}/>,
        title: 'Cuisine linéaire',
        description: 'Idéale pour les espaces en longueur la cuisine linéaire offre une organisation simple élégante et pratique Elle convient parfaitement aux intérieurs modernes et optimisés',
        number: '1',
        details:'',
        image: image1,
    },
    {
        id: 'cuisineL',
        icon: <img src={cuisineL}/>,
        title: 'Cuisine en L',
        description: 'La cuisine en L permet un aménagement fluide et convivial. Elle exploite intelligemment les angles et favorise une belle circulation dans l’espace.',
        number: '2',
        avantages: [
        'Exploitation optimale des angles',
        'Circulation fluide',
        'Adaptée aux petits et grands espaces',
        'Possibilité d’ajouter un îlot',
        'Design moderne et personnalisable'],
        valeurs:[
            'Conception sur mesure',
            'Matériaux haut de gamme',
            'Finition premium',
            'Accompagnement complet',
            'Optimisation intelligente'],
       faq: [
  {
    question: "Est-ce adapté aux petits espaces ?",
    answer: "Oui, c’est une solution idéale pour optimiser l’espace."
  },
  {
    question: "Peut-on ajouter un îlot ?",
    answer: "Oui, si la surface le permet."
  },
  {
    question: "Est-ce moderne ?",
    answer: "Oui, c’est un style très tendance."
  }
],
        details:'La cuisine en L est l’un des agencements les plus populaires au Maroc grâce à son équilibre parfait entre design et fonctionnalité. Elle permet d’exploiter intelligemment les angles tout en offrant une circulation fluide et confortable. Chez Meskini Design, chaque cuisine en L est conçue sur mesure, en fonction de votre espace et de vos besoins. Nous travaillons les volumes, les matériaux et les finitions pour créer une cuisine élégante, pratique et durable.',
        image: image2,
    },
    {
        id: 'cuisineU',
        icon: <img src={cuisineU}/>,
        title: 'Cuisine en U',
        description: 'Fonctionnelle et généreuse, la cuisine en U offre un maximum de rangements et de surface de travail. C’est un excellent choix pour les familles et les grands espaces.',
        number: '3',
        details:'La cuisine en U est idéale pour maximiser l’espace et le rangement. Elle utilise trois murs pour créer un espace de travail complet et ergonomique. Chez Meskini Design, nous concevons des cuisines en U sur mesure, alliant design moderne, praticité et durabilité.',
        image: image3,
        avantages: [
        'Maximum de rangement',
        'Surface de travail importante',
        'Organisation optimale',
        'Idéale pour familles',
        'Confort élevé'],
        valeurs:[
            'Conception sur mesure',
            'Matériaux haut de gamme',
            'Finition premium',
            'Accompagnement complet',
            'Optimisation intelligente'],
faq: [
  {
    question: "Est-ce adapté aux grandes cuisines ?",
    answer: "Oui, c’est le meilleur choix."
  },
  {
    question: "Est-ce pratique ?",
    answer: " Très pratique au quotidien."
  },
  {
    question: "Peut-on personnaliser ?",
    answer: "Oui, entièrement sur mesure."
  }],
        
    },
    {
        id: 'cuisineIlot',
        icon:  <img src={cuisineILOT}/>,
        title: 'Cuisine avec îlot central',
        description: 'Moderne et conviviale, la cuisine avec îlot central crée un véritable espace de vie. Elle apporte du caractère à votre intérieur tout en améliorant le confort d’utilisation au quotidien.',
        number: '4',
        details:'La cuisine avec îlot central est un symbole de modernité et de convivialité. Elle transforme la cuisine en un espace de vie central. Chez Meskini Design, nous concevons des îlots sur mesure adaptés à votre espace et à vos besoins.',
        image: image4,
        avantages: [
        'Espace supplémentaire',
        'Multifonction',
        'Design moderne',
        'Convivialité',
        'Valorisation de l’espace'],
        valeurs:[
            'Conception sur mesure',
            'Matériaux haut de gamme',
            'Finition premium',
            'Accompagnement complet',
            'Optimisation intelligente'],
       faq: [
  {
    question: "Faut-il un grand espace ?",
    answer: "Oui, un minimum est recommandé."
  },
  {
    question: "Peut-il servir de table ?",
    answer: " Oui, parfaitement"
  },
  {
    question: " Est-ce moderne ?",
    answer: "Oui, très tendance."
  }]
    },
    {
        id: 'cuisineOuvert',
        icon: <img src={cuisineOuvert}/>,
        title: 'Cuisine ouverte',
        description: 'Parfaite pour les espaces contemporains, la cuisine ouverte relie harmonieusement la cuisine au salon ou à la salle à manger.Elle favorise la luminosité, l’échange et la convivialité.',
        number: '5',
        details:'La cuisine ouverte relie harmonieusement la cuisine au salon. Elle offre luminosité, espace et convivialité. Chez Meskini Design, nous créons des cuisines ouvertes parfaitement intégrées à votre intérieur.',
        image: image5,
         avantages: [
        'Luminosité',
        'Sensation d’espace',
        'Convivialité',
        'Design moderne',
        'Intégration parfaite'],
        valeurs:[
            'Conception sur mesure',
            'Matériaux haut de gamme',
            'Finition premium',
            'Accompagnement complet',
            'Optimisation intelligente'],
       faq: [
                {
                    question: "Est-ce adapté aux petits espaces ?",
                    answer: "Oui, cela agrandit visuellement."
                },
                {
                    question: "Est-ce moderne ?",
                    answer: "Oui, très recherché."
                },
                {
                    question: "Est-ce pratique ?",
                    answer: "Oui, très fonctionnel."
                }]
    },
    {
        id: 'cuisinePetite',
        icon: <img src={cuisinePetite}/>,
        title: 'Petite cuisine optimisée',
        description: 'Même les petits espaces peuvent devenir pratiques et élégants.Nous concevons des solutions sur mesure pour maximiser chaque centimètre avec intelligence.',
        number: '6',
        details:'La petite cuisine optimisée permet de transformer un espace réduit en cuisine fonctionnelle et élégante. Chaque centimètre est exploité intelligemment. Chez Meskini Design, nous concevons des cuisines compactes mais complètes.',
        image: image6,
         avantages: [
        '',
        '',
        '',
        '',
        ''],
        valeurs:[
            'Conception sur mesure',
            'Matériaux haut de gamme',
            'Finition premium',
            'Accompagnement complet',
            'Optimisation intelligente'],
       faq: [
  {
    question: "",
    answer: ""
  },
  {
    question: "",
    answer: ""
  },
  {
    question: "",
    answer: ""
  }]
        
    },

    
];

export default servicesData;