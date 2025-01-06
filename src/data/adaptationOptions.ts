import type { AdaptationOption } from '../types/adaptation';

export const climateAdaptations: AdaptationOption[] = [
  {
    id: 'urban-greening',
    title: 'Végétalisation urbaine intensive',
    description: 'Programme de végétalisation des espaces urbains pour réduire les îlots de chaleur',
    implementation: 'Création de corridors verts, toits végétalisés et jardins communautaires dans les zones urbaines denses',
    resources: {
      financial: 'Budget initial de 2M€ sur 3 ans',
      human: 'Équipe de 10 paysagistes et 30 jardiniers',
      material: 'Plants, systèmes d\'irrigation, substrats spécialisés'
    },
    feasibility: {
      technical: 'Réalisable avec expertise locale existante',
      economic: 'Retour sur investissement en 5-7 ans (réduction coûts climatisation)'
    },
    timeline: '2024-2027 : Déploiement progressif par quartier',
    stakeholders: [
      'Services espaces verts',
      'Urbanistes',
      'Associations de quartier',
      'Propriétaires immobiliers'
    ],
    challenges: [
      {
        obstacle: 'Maintenance à long terme',
        solution: 'Formation d\'équipes locales et implication citoyenne'
      },
      {
        obstacle: 'Coût initial élevé',
        solution: 'Partenariats public-privé et subventions régionales'
      }
    ]
  },
  {
    id: 'water-management',
    title: 'Gestion intelligente de l\'eau',
    description: 'Système de récupération et gestion optimisée des eaux pluviales',
    implementation: 'Installation de citernes souterraines et création de zones de bio-rétention',
    resources: {
      financial: 'Investissement de 3M€',
      human: 'Équipe d\'ingénieurs hydrauliques et techniciens',
      material: 'Citernes, pompes, systèmes de filtration'
    },
    feasibility: {
      technical: 'Nécessite expertise spécialisée mais technologie éprouvée',
      economic: 'Rentable sur 10 ans avec économies d\'eau'
    },
    timeline: '2024-2026 : Installation progressive',
    stakeholders: [
      'Services techniques municipaux',
      'Experts en hydraulique',
      'Entreprises de BTP',
      'Agence de l\'eau'
    ],
    challenges: [
      {
        obstacle: 'Complexité technique',
        solution: 'Partenariat avec bureaux d\'études spécialisés'
      },
      {
        obstacle: 'Perturbations pendant travaux',
        solution: 'Phasage optimisé et communication renforcée'
      }
    ]
  },
  {
    id: 'energy-transition',
    title: 'Transition énergétique locale',
    description: 'Développement de micro-réseaux d\'énergie renouvelable',
    implementation: 'Installation de panneaux solaires communautaires et systèmes de stockage',
    resources: {
      financial: 'Budget de 5M€',
      human: 'Experts en énergies renouvelables et techniciens',
      material: 'Panneaux solaires, batteries, infrastructure réseau'
    },
    feasibility: {
      technical: 'Technologies matures disponibles',
      economic: 'Rentable après 8 ans d\'exploitation'
    },
    timeline: '2024-2028 : Déploiement par phases',
    stakeholders: [
      'Collectivité locale',
      'Fournisseurs d\'énergie',
      'Habitants',
      'Entreprises locales'
    ],
    challenges: [
      {
        obstacle: 'Acceptabilité sociale',
        solution: 'Concertation publique et démonstration bénéfices'
      },
      {
        obstacle: 'Intégration au réseau existant',
        solution: 'Collaboration étroite avec gestionnaire réseau'
      }
    ]
  }
];