import image1 from "../assets/img/equipment/boisLatte.png";
import image2 from "../assets/img/equipment/boisMdf.png";
import image3 from "../assets/img/equipment/boisHydrofuge.png";
import image4 from "../assets/img/equipment/boisStratifie.png";
import image6 from "../assets/img/equipment/planGranit.png";
import image7 from "../assets/img/equipment/planQuartz.png";
import image8 from "../assets/img/equipment/planSilestone.png";
import image9 from "../assets/img/equipment/planDekton.png";

const equipmentData = {

   bois: [
  {
    category: "bois",
    number: "01",
    id: "bois-latte",
    title: "Bois latté : solidité et durabilité",
    image: image1,
    description:
      "Le bois latté est reconnu pour sa robustesse exceptionnelle et sa stabilité dans le temps. Il est principalement utilisé pour les structures de cuisine comme les caissons.",

    detail: {
      title: "Boiserie Latté – La base solide d’une cuisine durable",
      text:
        "Le latté est un panneau composé d’une âme en lattes de bois massif, assemblées puis recouvertes de faces en panneau technique. Cette structure lui donne une résistance supérieure et une grande stabilité.",
      structure:
        "Cœur : lattes de bois massif. Faces : panneaux techniques. Assemblage : collage et compression haute résistance.",

      caracteristiques_principales: [
        {
          titre: "Solidité exceptionnelle",
          details: [
            "supporte des charges lourdes",
            "usage quotidien intensif",
            "fixations solides",
          ],
          avantage: "Idéal pour cuisine",
        },
        {
          titre: "Stabilité dimensionnelle",
          details: [
            "ne se déforme pas facilement",
            "résiste aux variations de température",
            "limite le gonflement",
          ],
          avantage: "Garde sa forme",
        },
        {
          titre: "Résistance à l’humidité",
          details: [
            "meilleure que MDF standard",
            "adapté aux cuisines",
            "bonne durabilité",
          ],
          avantage: "Usage sécurisé",
        },
      ],

      avantages: [
        "Haute résistance",
        "Excellente durabilité",
        "Bonne tenue des fixations",
        "Stabilité dans le temps",
        "Qualité premium",
      ],

      inconvenients: [
        "Coût plus élevé",
        "Plus lourd",
        "Travail de finition exigeant",
      ],

      utilisations: [
        "Caissons de cuisine",
        "Structures de meubles",
        "Colonnes de rangement",
      ],

      conclusion: [
        "Solidité maximale",
        "Solution haut de gamme",
        "Base d’une cuisine durable",
      ],
    },
  },

  {
    category: "bois",
    number: "02",
    id: "bois-stratifie",
    title: "Stratifié : résistance et praticité",
    image: image4,
    description:
      "Le stratifié est un matériau résistant, pratique et économique, idéal pour les cuisines fonctionnelles.",

    detail: {
      title: "Boiserie Stratifiée – Solution fonctionnelle et équilibrée",
      text:
        "Le stratifié est un panneau à base de particules recouvert d’un revêtement décoratif résistant.",
      structure:
        "Cœur : panneau de particules. Surface : stratifié protecteur. Finition : prête à l’emploi.",

      caracteristiques_principales: [
        {
          titre: "Résistance quotidienne",
          details: [
            "usage domestique normal",
            "bonne stabilité",
            "résistance correcte",
          ],
          avantage: "Usage standard",
        },
        {
          titre: "Résistance à l’humidité",
          details: [
            "surface protégée",
            "limite l’absorption d’eau",
            "bonne durabilité",
          ],
          avantage: "Cuisine adaptée",
        },
      ],

      avantages: [
        "Prix économique",
        "Finition intégrée",
        "Entretien facile",
        "Bon rendu visuel",
      ],

      inconvenients: [
        "Moins robuste que le latté",
        "Sensibilité aux chocs",
        "Durée de vie moyenne",
      ],

      utilisations: [
        "Meubles de cuisine",
        "Caissons standards",
        "Rangements",
      ],

      conclusion: [
        "Bon équilibre qualité/prix",
        "Solution pratique",
      ],
    },
  },

  {
    category: "bois",
    number: "03",
    id: "bois-mdf",
    title: "MDF : finition parfaite et design moderne",
    image: image2,
    description:
      "Le MDF est un matériau économique avec une surface lisse idéale pour les finitions modernes.",

    detail: {
      title: "Boiserie MDF – Solution économique et finition homogène",
      text:
        "Le MDF est composé de fibres de bois compressées offrant une surface uniforme.",
      structure:
        "Cœur : fibres de bois. Liant : résine. Surface : lisse et homogène.",

      caracteristiques_principales: [
        {
          titre: "Surface lisse",
          details: [
            "sans défauts",
            "facile à peindre",
            "rendu moderne",
          ],
          avantage: "Finition parfaite",
        },
        {
          titre: "Facilité de travail",
          details: [
            "découpe facile",
            "usinage précis",
            "installation simple",
          ],
          avantage: "Fabrication rapide",
        },
      ],

      avantages: [
        "Prix économique",
        "Surface uniforme",
        "Facile à travailler",
        "Bon rendu esthétique",
      ],

      inconvenients: [
        "Faible résistance à l’humidité",
        "Moins solide que latté",
        "Durée de vie limitée en usage intensif",
      ],

      utilisations: [
        "Meubles économiques",
        "Façades",
        "Rangements légers",
      ],

      conclusion: [
        "Solution budget-friendly",
        "Bon rendu esthétique",
      ],
    },
  },

  {
    category: "bois",
    number: "04",
    id: "bois-hydrofuge",
    title: "Bois hydrofuge : protection contre l’humidité",
    image: image3,
    description:
      "Le bois hydrofuge est conçu pour résister à l’eau et à l’humidité, idéal pour les zones sensibles.",

    detail: {
      title: "Boiserie Hydrofuge – Protection maximale contre l’humidité",
      text:
        "Le panneau hydrofuge est traité avec des résines spéciales pour résister à l’eau.",
      structure:
        "Cœur : fibres ou particules de bois. Traitement : résine hydrofuge. Surface : protégée et stable.",

      caracteristiques_principales: [
        {
          titre: "Résistance à l’eau",
          details: [
            "faible absorption",
            "résiste aux éclaboussures",
            "limite le gonflement",
          ],
          avantage: "Protection maximale",
        },
        {
          titre: "Durabilité",
          details: [
            "bonne tenue dans le temps",
            "structure stable",
            "résiste à l’humidité",
          ],
          avantage: "Longue durée de vie",
        },
      ],

      avantages: [
        "Très haute résistance à l’humidité",
        "Durabilité renforcée",
        "Structure stable",
        "Idéal zones sensibles",
      ],

      inconvenients: [
        "Prix plus élevé",
        "Plus lourd",
      ],

      utilisations: [
        "Sous évier",
        "Zones humides",
        "Caissons proches de l’eau",
      ],

      conclusion: [
        "Solution sécurisée",
        "Parfait pour cuisines modernes",
      ],
    },
  },
],
  plantravail: [
  {
    category: "Plan De Travail",
    id: "plan-granit",
    title: "Granit : robustesse naturelle",
    description:
      "Le granit est une pierre naturelle reconnue pour sa solidité exceptionnelle et sa résistance à la chaleur. Idéal pour une cuisine durable et élégante.",
    image: image6,

    detail: {
      title: "Plan de Travail Granit – L’élégance naturelle et la résistance absolue",
      text:
        "Le granit est une pierre naturelle formée dans la roche au fil de millions d’années. Chaque dalle est unique, offrant des motifs naturels qui apportent caractère et authenticité à la cuisine.",

      caracteristiques_principales: [
        {
          titre: "Résistance exceptionnelle",
          details: ["supporte les chocs", "résiste aux rayures", "usage intensif"],
          avantage: "Solidité maximale",
        },
        {
          titre: "Résistance à la chaleur",
          details: ["supporte les casseroles chaudes", "ne se déforme pas", "ne brûle pas"],
          avantage: "Cuisine sécurisée",
        },
        {
          titre: "Durabilité dans le temps",
          details: ["très longue durée de vie", "conserve son aspect", "ne perd pas sa valeur"],
          avantage: "Investissement durable",
        },
        {
          titre: "Esthétique naturelle",
          details: ["motifs uniques", "effet luxe", "rendu authentique"],
          avantage: "Design haut de gamme",
        },
      ],

      entretien: [
        "Nettoyage simple au quotidien",
        "Traitement périodique recommandé",
      ],

      avantages: [
        "Solidité maximale",
        "Matériau naturel",
        "Très longue durée de vie",
        "Rendu haut de gamme",
      ],

      inconvenients: [
        "Poids élevé",
        "Nécessite un entretien périodique",
        "Coût plus élevé",
      ],

      conclusion: [
        "Solution ultra durable",
        "Choix premium naturel",
        "Cuisine élégante et résistante",
      ],
    },
  },

  {
    category: "Plan De Travail",
    id: "plan-quartz",
    title: "Quartz : élégance et modernité",
    description:
      "Le quartz offre une finition uniforme et moderne avec une excellente résistance aux taches. Parfait pour un design contemporain.",
    image: image7,

    detail: {
      title: "Plan de Travail Quartz – L’équilibre parfait entre design et performance",
      text:
        "Le quartz est un matériau composé de pierre naturelle et de résines, conçu pour offrir une surface uniforme, résistante et moderne.",

      caracteristiques_principales: [
        {
          titre: "Résistance élevée",
          details: ["résiste aux rayures", "usage quotidien", "bonne durabilité"],
          avantage: "Usage pratique",
        },
        {
          titre: "Surface non poreuse",
          details: ["ne retient pas les liquides", "résiste aux taches", "hygiénique"],
          avantage: "Hygiène optimale",
        },
        {
          titre: "Facilité d’entretien",
          details: ["nettoyage simple", "aucune protection nécessaire", "entretien rapide"],
          avantage: "Confort quotidien",
        },
        {
          titre: "Design maîtrisé",
          details: ["couleurs uniformes", "large choix", "style moderne"],
          avantage: "Esthétique contemporaine",
        },
      ],

      inconvenients: [
        "Sensibilité à la chaleur directe très élevée",
      ],

      avantages: [
        "Entretien facile",
        "Design moderne",
        "Surface uniforme",
        "Bonne résistance globale",
      ],

      conclusion: [
        "Solution pratique et moderne",
        "Excellent rapport design/performance",
      ],
    },
  },

  {
    category: "Plan De Travail",
    id: "plan-silestone",
    title: "Silestone : performance et design",
    description:
      "Silestone combine esthétique et technologie avec une forte résistance aux rayures et aux bactéries. Un choix haut de gamme pour cuisines modernes.",
    image: image8,

    detail: {
      title: "Plan de Travail Silestone – Le quartz haut de gamme par excellence",
      text:
        "Le Silestone est un quartz premium reconnu pour sa qualité supérieure, ses finitions luxueuses et sa durabilité exceptionnelle.",

      caracteristiques_principales: [
        {
          titre: "Résistance avancée",
          details: ["très résistant aux rayures", "durable", "usage intensif"],
          avantage: "Longévité premium",
        },
        {
          titre: "Surface non poreuse",
          details: ["anti-taches", "hygiénique", "facile à nettoyer"],
          avantage: "Hygiène parfaite",
        },
        {
          titre: "Finition premium",
          details: ["textures haut de gamme", "couleurs profondes", "rendu élégant"],
          avantage: "Esthétique luxe",
        },
        {
          titre: "Technologie avancée",
          details: ["protection renforcée", "qualité constante", "innovation matériau"],
          avantage: "Performance supérieure",
        },
      ],

      avantages: [
        "Design luxe",
        "Qualité premium",
        "Très grande durabilité",
        "Finition parfaite",
      ],

      conclusion: [
        "Choix haut de gamme",
        "Esthétique et performance réunies",
      ],
    },
  },

  {
    category: "Plan De Travail",
    id: "plan-dekton",
    title: "Dekton : ultra résistance",
    description:
      "Dekton est un matériau ultra-compact, extrêmement résistant à la chaleur, aux rayures et aux UV. Idéal pour un usage intensif et un design premium.",
    image: image9,

    detail: {
      title: "Plan de Travail Dekton – La performance ultime et la technologie avancée",
      text:
        "Le Dekton est un matériau ultra-compact fabriqué avec une technologie innovante reproduisant la formation naturelle de la pierre.",

      caracteristiques_principales: [
        {
          titre: "Résistance extrême",
          details: ["ultra résistant aux rayures", "supporte les chocs", "usage intensif"],
          avantage: "Solidité maximale",
        },
        {
          titre: "Résistance à la chaleur",
          details: ["supporte chaleur directe", "ne se déforme pas", "usage cuisson intensif"],
          avantage: "Sécurité thermique",
        },
        {
          titre: "Résistance aux UV",
          details: ["ne change pas de couleur", "idéal forte luminosité", "stabilité visuelle"],
          avantage: "Couleur durable",
        },
        {
          titre: "Zéro porosité",
          details: ["ne tache pas", "aucune absorption", "hygiénique"],
          avantage: "Entretien facile",
        },
      ],

      avantages: [
        "Ultra durable",
        "Zéro entretien",
        "Très haute résistance",
        "Technologie haut de gamme",
      ],

      conclusion: [
        "Solution la plus performante",
        "Matériau premium sans contrainte",
      ],
    },
  },
],
 poignee: [
  {
    id: "poignee-classique",
    title: "Poignée classique – Pratique et intemporelle",
    description:
      "Poignée visible traditionnelle disponible en plusieurs styles et finitions, adaptée à toutes les cuisines.",

    detail: {
      title: "Poignée classique – Fonctionnalité et polyvalence",
      text:
        "La poignée classique est une solution traditionnelle et pratique, offrant une grande variété de designs et de finitions pour s’adapter à tous les styles de cuisine.",

      caracteristiques_principales: [
        {
          titre: "Design varié",
          details: ["plusieurs formes", "différentes finitions", "style adaptable"],
          avantage: "Personnalisation",
        },
        {
          titre: "Prise en main facile",
          details: ["ergonomie simple", "utilisation quotidienne", "confort"],
          avantage: "Pratique",
        },
        {
          titre: "Installation simple",
          details: ["montage rapide", "compatibilité universelle", "entretien facile"],
          avantage: "Accessibilité",
        },
      ],

      avantages: [
        "Solution économique",
        "Facile à installer",
        "Grande variété de styles",
      ],

      conclusion: [
        "Choix classique et fiable",
        "Convient à toutes les cuisines",
      ],
    },
  },

  {
    id: "poignee-gola",
    title: "Gola (sans poignée) – Design épuré et moderne",
    description:
      "Système intégré dans le caisson permettant une ouverture sans poignée pour un rendu minimaliste et contemporain.",

    detail: {
      title: "Système Gola – L’élégance minimaliste",
      text:
        "Le système Gola permet d’ouvrir les meubles sans poignées visibles grâce à une intégration dans le caisson, offrant un design épuré et moderne.",

      caracteristiques_principales: [
        {
          titre: "Design sans poignée",
          details: ["surface épurée", "esthétique minimaliste", "absence d’éléments visibles"],
          avantage: "Style moderne",
        },
        {
          titre: "Ouverture intégrée",
          details: ["profil encastré", "prise cachée", "utilisation fluide"],
          avantage: "Confort",
        },
        {
          titre: "Finition haut de gamme",
          details: ["rendu premium", "design contemporain", "intégration parfaite"],
          avantage: "Esthétique luxe",
        },
      ],

      avantages: [
        "Design moderne",
        "Facilité d’utilisation",
        "Esthétique épurée",
      ],

      conclusion: [
        "Solution idéale pour cuisines contemporaines",
        "Minimalisme et élégance",
      ],
    },
  },

  {
    id: "poignee-integree",
    title: "Poignée intégrée – Discrétion et élégance",
    description:
      "Poignée directement intégrée dans la façade pour un rendu moderne, discret et harmonieux.",

    detail: {
      title: "Poignée intégrée – Design discret et raffiné",
      text:
        "La poignée intégrée est usinée directement dans la façade du meuble, offrant un design épuré sans ajout d’éléments visibles.",

      caracteristiques_principales: [
        {
          titre: "Intégration dans la façade",
          details: ["usinage précis", "design uniforme", "absence de poignée externe"],
          avantage: "Esthétique propre",
        },
        {
          titre: "Utilisation confortable",
          details: ["prise discrète", "ouverture facile", "ergonomie"],
          avantage: "Praticité",
        },
        {
          titre: "Design moderne",
          details: ["style minimaliste", "rendu élégant", "finition soignée"],
          avantage: "Esthétique contemporaine",
        },
      ],

      avantages: [
        "Rendu élégant",
        "Bonne ergonomie",
        "Design discret",
      ],

      conclusion: [
        "Solution moderne et harmonieuse",
        "Parfait équilibre entre design et fonction",
      ],
    },
  },

  {
    id: "poignee-ibiza",
    title: "Poignée Ibiza – Style moderne et ergonomique",
    description:
      "Poignée contemporaine avec prise ergonomique, très utilisée dans les cuisines modernes et design.",

    detail: {
      title: "Poignée Ibiza – Modernité et confort d’utilisation",
      text:
        "La poignée Ibiza est conçue avec un design moderne et une forme ergonomique offrant une prise en main confortable et esthétique.",

      caracteristiques_principales: [
        {
          titre: "Design moderne",
          details: ["style contemporain", "formes élégantes", "finition décorative"],
          avantage: "Esthétique",
        },
        {
          titre: "Prise ergonomique",
          details: ["confort d’utilisation", "bonne adhérence", "facilité d’ouverture"],
          avantage: "Confort",
        },
        {
          titre: "Adaptabilité",
          details: ["s’adapte à plusieurs styles", "installation simple", "polyvalence"],
          avantage: "Flexibilité",
        },
      ],

      avantages: [
        "Style contemporain",
        "Bonne ergonomie",
        "Polyvalence",
      ],

      conclusion: [
        "Solution moderne et pratique",
        "Parfait pour cuisines design",
      ],
    },
  },
],
 accessoire: [
  {
    id: "accessoire-poubelle",
    title: "Poubelle intégrée – Discrétion et hygiène au quotidien",
    description:
      "Système de poubelle intégré au meuble permettant un tri discret, pratique et hygiénique dans la cuisine.",

    detail: {
      title: "Poubelle intégrée – Organisation invisible et hygiène parfaite",
      text:
        "La poubelle intégrée est installée à l’intérieur du meuble, généralement sous évier, pour permettre un tri sélectif discret et pratique au quotidien.",

      caracteristiques_principales: [
        {
          titre: "Intégration invisible",
          details: ["cachée dans le meuble", "design discret", "installation sous évier"],
          avantage: "Cuisine épurée",
        },
        {
          titre: "Système coulissant",
          details: ["ouverture fluide", "accès facile", "utilisation pratique"],
          avantage: "Confort quotidien",
        },
        {
          titre: "Tri sélectif",
          details: ["plusieurs compartiments", "gestion des déchets", "organisation optimisée"],
          avantage: "Hygiène améliorée",
        },
        {
          titre: "Fermeture douce",
          details: ["système amorti", "silencieux", "durabilité renforcée"],
          avantage: "Utilisation confortable",
        },
      ],

      avantages: [
        "Cuisine toujours propre",
        "Gain de place",
        "Hygiène améliorée",
        "Organisation discrète",
      ],

      conclusion: [
        "Solution idéale pour cuisine moderne",
        "Organisation invisible et efficace",
      ],
    },
  },

  {
    id: "range-couvert",
    title: "Range-couverts – Organisation parfaite des tiroirs",
    description:
      "Accessoire de rangement permettant de structurer les tiroirs pour une organisation claire et efficace des couverts.",

    detail: {
      title: "Range-couverts – Chaque chose à sa place",
      text:
        "Le range-couverts permet d’organiser les tiroirs de cuisine afin de garder les ustensiles bien rangés et facilement accessibles.",

      caracteristiques_principales: [
        {
          titre: "Compartiments multiples",
          details: ["séparation des ustensiles", "organisation claire", "structure interne"],
          avantage: "Rangement optimisé",
        },
        {
          titre: "Adapté aux tiroirs",
          details: ["installation facile", "formats variés", "compatibilité meubles"],
          avantage: "Utilisation simple",
        },
        {
          titre: "Matériaux résistants",
          details: ["durabilité", "résistance aux chocs", "entretien facile"],
          avantage: "Longue durée de vie",
        },
      ],

      avantages: [
        "Accès rapide",
        "Gain de temps",
        "Organisation optimisée",
      ],

      conclusion: [
        "Accessoire indispensable du quotidien",
        "Cuisine plus organisée",
      ],
    },
  },

  {
    id: "porte-evier",
    title: "Protection sous évier – Sécurité et durabilité",
    description:
      "Protection interne du meuble sous évier contre l’humidité, les fuites et les produits ménagers.",

    detail: {
      title: "Protection sous évier – Protéger l’essentiel",
      text:
        "Cet accessoire protège le meuble sous évier contre l’eau, les fuites et l’humidité afin de prolonger sa durée de vie.",

      caracteristiques_principales: [
        {
          titre: "Surface étanche",
          details: ["bloque l’humidité", "protection efficace", "barrière anti-eau"],
          avantage: "Sécurité renforcée",
        },
        {
          titre: "Résistance à l’eau",
          details: ["supporte les éclaboussures", "matériau durable", "anti-dégradation"],
          avantage: "Durabilité accrue",
        },
        {
          titre: "Facilité de nettoyage",
          details: ["entretien simple", "surface lisse", "hygiène rapide"],
          avantage: "Pratique au quotidien",
        },
      ],

      avantages: [
        "Prolonge la durée de vie du meuble",
        "Évite les dégâts d’eau",
        "Entretien facile",
      ],

      conclusion: [
        "Protection essentielle pour cuisine",
        "Solution durable et intelligente",
      ],
    },
  },

  {
    id: "magic-corner",
    title: "Magic Corner – Optimisation intelligente des angles",
    description:
      "Système coulissant permettant d’exploiter efficacement les coins difficiles d’accès dans la cuisine.",

    detail: {
      title: "Magic Corner – Exploitez chaque centimètre",
      text:
        "Le Magic Corner est un système d’angle coulissant permettant d’optimiser les espaces difficiles d’accès dans les meubles de cuisine.",

      caracteristiques_principales: [
        {
          titre: "Système coulissant",
          details: ["mouvement fluide", "accès facile", "structure mobile"],
          avantage: "Utilisation pratique",
        },
        {
          titre: "Accès total",
          details: ["vision complète", "sortie complète du contenu", "ergonomie"],
          avantage: "Confort d’utilisation",
        },
        {
          titre: "Grande capacité",
          details: ["optimisation de l’espace", "rangement maximal", "volume utile"],
          avantage: "Gain de place",
        },
      ],

      avantages: [
        "Aucun espace perdu",
        "Accès facile",
        "Rangement intelligent",
      ],

      conclusion: [
        "Solution idéale pour angles de cuisine",
        "Optimisation maximale de l’espace",
      ],
    },
  },

  {
    id: "coin-tournant",
    title: "Coin tournant – Accès facile aux angles",
    description:
      "Système de plateaux rotatifs permettant un accès simple et rapide aux coins de cuisine.",

    detail: {
      title: "Coin tournant – La simplicité au service du confort",
      text:
        "Le coin tournant utilise des plateaux rotatifs pour faciliter l’accès aux espaces d’angle dans les meubles de cuisine.",

      caracteristiques_principales: [
        {
          titre: "Plateaux rotatifs",
          details: ["rotation fluide", "accès rapide", "ergonomie"],
          avantage: "Utilisation simple",
        },
        {
          titre: "Mouvement fluide",
          details: ["rotation douce", "confort d’utilisation", "fiabilité"],
          avantage: "Confort quotidien",
        },
        {
          titre: "Optimisation de l’espace",
          details: ["meilleure organisation", "accès amélioré", "rangement pratique"],
          avantage: "Gain d’espace",
        },
      ],

      avantages: [
        "Pratique",
        "Simple d’utilisation",
        "Optimise l’espace",
      ],

      conclusion: [
        "Solution efficace pour angles",
        "Confort et accessibilité",
      ],
    },
  },

  {
    id: "colonne-coulissante",
    title: "Colonne coulissante – Organisation verticale optimale",
    description:
      "Système de rangement vertical coulissant offrant un accès total et une grande capacité de stockage.",

    detail: {
      title: "Colonne coulissante – Maximisez votre espace",
      text:
        "La colonne coulissante permet un rangement vertical optimisé avec un accès total à tous les niveaux du meuble.",

      caracteristiques_principales: [
        {
          titre: "Coulissement total",
          details: ["accès complet", "mouvement fluide", "structure mobile"],
          avantage: "Accessibilité totale",
        },
        {
          titre: "Grande capacité",
          details: ["volume important", "rangement vertical", "optimisation espace"],
          avantage: "Gain de place",
        },
        {
          titre: "Visibilité totale",
          details: ["contenu visible", "organisation claire", "accès rapide"],
          avantage: "Organisation efficace",
        },
      ],

      avantages: [
        "Gain de place",
        "Visibilité totale",
        "Rangement efficace",
      ],

      conclusion: [
        "Solution idéale pour stockage vertical",
        "Organisation optimale de la cuisine",
      ],
    },
  },

  {
    id: "tiroir-anglaise",
    title: "Tiroirs à l’anglaise – Élégance et discrétion",
    description:
      "Tiroirs intérieurs cachés derrière une façade pour un design épuré et un rangement optimisé.",

    detail: {
      title: "Tiroirs à l’anglaise – L’élégance cachée",
      text:
        "Les tiroirs à l’anglaise sont des tiroirs internes dissimulés derrière une façade extérieure pour un rendu élégant et discret.",

      caracteristiques_principales: [
        {
          titre: "Design discret",
          details: ["tiroirs cachés", "façade épurée", "esthétique moderne"],
          avantage: "Style élégant",
        },
        {
          titre: "Organisation interne",
          details: ["double rangement", "structure optimisée", "fonctionnalité"],
          avantage: "Rangement efficace",
        },
        {
          titre: "Fermeture douce",
          details: ["système amorti", "silencieux", "durabilité"],
          avantage: "Confort d’utilisation",
        },
      ],

      avantages: [
        "Esthétique épurée",
        "Rangement optimisé",
        "Effet haut de gamme",
      ],

      conclusion: [
        "Solution élégante et fonctionnelle",
        "Design intérieur raffiné",
      ],
    },
  },

  {
    id: "egouttoir",
    title: "Égouttoir intégré – Praticité au quotidien",
    description:
      "Système intégré permettant de sécher la vaisselle directement dans le meuble de cuisine.",

    detail: {
      title: "Égouttoir intégré – Le confort au quotidien",
      text:
        "L’égouttoir intégré est conçu pour sécher la vaisselle directement dans le meuble tout en optimisant l’espace de la cuisine.",

      caracteristiques_principales: [
        {
          titre: "Intégré au meuble",
          details: ["installation discrète", "design pratique", "optimisation espace"],
          avantage: "Gain de place",
        },
        {
          titre: "Résistant à l’eau",
          details: ["supporte humidité", "matériaux durables", "anti-corrosion"],
          avantage: "Durabilité",
        },
        {
          titre: "Facile à nettoyer",
          details: ["entretien simple", "surface hygiénique", "pratique"],
          avantage: "Hygiène facile",
        },
      ],

      avantages: [
        "Gain de temps",
        "Espace optimisé",
        "Cuisine organisée",
      ],

      conclusion: [
        "Solution pratique du quotidien",
        "Organisation intelligente",
      ],
    },
  },

  {
    id: "range-epices",
    title: "Range-épices – Organisation intelligente",
    description:
      "Accessoire permettant de garder les épices bien organisées et facilement accessibles.",

    detail: {
      title: "Range-épices – Tout à portée de main",
      text:
        "Le range-épices permet de structurer et organiser les épices pour un accès rapide et une meilleure visibilité.",

      caracteristiques_principales: [
        {
          titre: "Compartiments dédiés",
          details: ["organisation claire", "séparation des produits", "structure interne"],
          avantage: "Rangement optimal",
        },
        {
          titre: "Accès rapide",
          details: ["disposition pratique", "visibilité immédiate", "gain de temps"],
          avantage: "Efficacité",
        },
        {
          titre: "Format compact",
          details: ["gain de place", "intégration facile", "optimisation espace"],
          avantage: "Pratique",
        },
      ],

      avantages: [
        "Visibilité",
        "Gain de temps",
        "Rangement pratique",
      ],

      conclusion: [
        "Organisation intelligente de la cuisine",
        "Accès rapide aux épices",
      ],
    },
  },

  {
    id: "range-bouteille",
    title: "Range-bouteilles – Élégance et sécurité",
    description:
      "Système de rangement permettant de stocker les bouteilles de manière stable, sécurisée et esthétique.",

    detail: {
      title: "Range-bouteilles – L’organisation élégante",
      text:
        "Le range-bouteilles permet de stocker et organiser les bouteilles en toute sécurité avec un design esthétique.",

      caracteristiques_principales: [
        {
          titre: "Maintien sécurisé",
          details: ["stabilité", "sécurité anti-chute", "support robuste"],
          avantage: "Sécurité",
        },
        {
          titre: "Design élégant",
          details: ["esthétique moderne", "intégration cuisine", "finition soignée"],
          avantage: "Style",
        },
        {
          titre: "Intégration facile",
          details: ["installation simple", "compatibilité meubles", "adaptabilité"],
          avantage: "Pratique",
        },
      ],

      avantages: [
        "Évite les chutes",
        "Rangement propre",
        "Esthétique",
      ],

      conclusion: [
        "Solution élégante et fonctionnelle",
        "Organisation sécurisée",
      ],
    },
  },

  {
    id: "tiroir-coulissant",
    title: "Tiroirs coulissants – Accès total et confort",
    description:
      "Systèmes de tiroirs permettant un accès complet et fluide au contenu du meuble.",

    detail: {
      title: "Tiroirs coulissants – Le confort absolu",
      text:
        "Les tiroirs coulissants offrent un accès total au contenu avec un système fluide et ergonomique.",

      caracteristiques_principales: [
        {
          titre: "Coulissement total",
          details: ["accès complet", "glissement fluide", "ergonomie"],
          avantage: "Confort",
        },
        {
          titre: "Fermeture douce",
          details: ["système amorti", "silencieux", "durabilité"],
          avantage: "Utilisation agréable",
        },
        {
          titre: "Grande capacité",
          details: ["rangement optimisé", "volume important", "organisation"],
          avantage: "Espace",
        },
      ],

      avantages: [
        "Visibilité complète",
        "Facilité d’utilisation",
        "Confort quotidien",
      ],

      conclusion: [
        "Solution moderne et pratique",
        "Organisation optimale",
      ],
    },
  },

  {
    id: "panier-coulissant",
    title: "Panier coulissant – Rangement pratique",
    description:
      "Système de rangement coulissant idéal pour aliments et accessoires avec ventilation et accès facile.",

    detail: {
      title: "Panier coulissant – Simplicité et efficacité",
      text:
        "Le panier coulissant permet de stocker des aliments et accessoires avec une bonne ventilation et un accès rapide.",

      caracteristiques_principales: [
        {
          titre: "Structure aérée",
          details: ["ventilation", "hygiène", "circulation air"],
          avantage: "Fraîcheur",
        },
        {
          titre: "Coulissement fluide",
          details: ["accès facile", "mouvement stable", "ergonomie"],
          avantage: "Praticité",
        },
        {
          titre: "Accès rapide",
          details: ["organisation efficace", "visibilité", "gain de temps"],
          avantage: "Efficacité",
        },
      ],

      avantages: [
        "Rangement pratique",
        "Visibilité",
        "Bonne ventilation",
      ],

      conclusion: [
        "Solution simple et efficace",
        "Organisation optimisée du quotidien",
      ],
    },
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
  eclerage: [
  {
    id: "led-sous-caisson",
    title: "LED sous caissons hauts – Éclairage discret et moderne",
    description:
      "Éclairage LED installé sous les caissons hauts pour illuminer le plan de travail avec une lumière homogène et élégante.",

    detail: {
      title: "Éclairage LED sous caissons hauts – Confort et élégance",
      text:
        "Les LED sous caissons hauts sont installées sous les meubles suspendus afin d’éclairer directement le plan de travail avec une lumière homogène, discrète et moderne.",

      caracteristiques_principales: [
        {
          titre: "Bande LED discrète",
          details: ["installation invisible", "design épuré", "intégration parfaite"],
          avantage: "Esthétique moderne",
        },
        {
          titre: "Lumière homogène",
          details: ["éclairage uniforme", "réduction des zones d’ombre", "meilleure visibilité"],
          avantage: "Confort visuel",
        },
        {
          titre: "Faible consommation",
          details: ["économie d’énergie", "technologie LED", "longue durée de vie"],
          avantage: "Économique",
        },
        {
          titre: "Installation invisible",
          details: ["intégration sous meuble", "aucun élément apparent", "finition propre"],
          avantage: "Design épuré",
        },
      ],

      avantages: [
        "Confort visuel amélioré",
        "Design moderne et élégant",
        "Économie d’énergie",
        "Longue durée de vie",
      ],

      conclusion: [
        "Solution idéale pour cuisine moderne",
        "Éclairage fonctionnel et esthétique",
      ],
    },
  },

  {
    id: "casquette-spot-led",
    title: "Casquette avec éclairage intégré – Design premium et puissance",
    description:
      "Éclairage intégré dans une casquette avec spots ou LED pour un rendu haut de gamme et une excellente visibilité.",

    detail: {
      title: "Casquette avec éclairage intégré – Performance et design haut de gamme",
      text:
        "La casquette est un élément intégré sous les meubles hauts permettant d’accueillir des spots encastrés ou des bandes LED pour un éclairage puissant et esthétique.",

      caracteristiques_principales: [
        {
          titre: "Structure intégrée",
          details: ["intégration au meuble", "finition propre", "design professionnel"],
          avantage: "Esthétique premium",
        },
        {
          titre: "Éclairage dirigé",
          details: ["lumière ciblée", "zones de travail éclairées", "forte intensité"],
          avantage: "Visibilité optimale",
        },
        {
          titre: "Personnalisation",
          details: ["spots ou LED", "intensité réglable", "température de couleur adaptable"],
          avantage: "Flexibilité",
        },
        {
          titre: "Rendu haut de gamme",
          details: ["effet luxe", "design moderne", "intégration invisible"],
          avantage: "Cuisine élégante",
        },
      ],

      avantages: [
        "Éclairage puissant",
        "Design premium",
        "Grande personnalisation",
        "Intégration parfaite",
      ],

      conclusion: [
        "Solution idéale pour cuisines haut de gamme",
        "Performance et esthétique réunies",
      ],
    },
  },
],
};


export default equipmentData;













