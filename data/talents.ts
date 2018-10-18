import { Talent } from '~/types'

const talents: Talent[] = [
  {
    icons: [
      {
        sizes: '256x256',
        src: require('~/assets/images/avatar/haneru-inaba.png')
      },
      {
        sizes: '512x512',
        src: require('~/assets/images/avatar/haneru-inaba@2x.png')
      },
      {
        sizes: '768x768',
        src: require('~/assets/images/avatar/haneru-inaba@3x.png')
      }
    ],
    id: 'haneru-inaba',
    name: {
      en: 'Haneru Inaba',
      ja: '因幡 はねる'
    },
    mainVisual: require('~/assets/images/main-visual/haneru-inaba.jpg'),
    services: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/Haneru_Inaba'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UC0Owc36U9lOyi9Gx9Ic-4qg'
      }
    ]
  },
  {
    icons: [
      {
        sizes: '256x256',
        src: require('~/assets/images/avatar/hinako-umori.png')
      },
      {
        sizes: '512x512',
        src: require('~/assets/images/avatar/hinako-umori@2x.png')
      },
      {
        sizes: '768x768',
        src: require('~/assets/images/avatar/hinako-umori@3x.png')
      }
    ],
    id: 'hinako-umori',
    mainVisual: require('~/assets/images/main-visual/hinako-umori.jpg'),
    name: {
      en: 'Hinako Umori',
      ja: '宇森 ひなこ'
    },
    services: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/Hinako_Umori'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UChqYnJlFxlBi6DfRz6jRenQ'
      }
    ]
  },
  {
    icons: [
      {
        sizes: '256x256',
        src: require('~/assets/images/avatar/ichika-souya.png')
      },
      {
        sizes: '512x512',
        src: require('~/assets/images/avatar/ichika-souya@2x.png')
      },
      {
        sizes: '768x768',
        src: require('~/assets/images/avatar/ichika-souya@3x.png')
      }
    ],
    id: 'ichika-souya',
    mainVisual: require('~/assets/images/main-visual/ichika-souya.jpg'),
    name: {
      en: 'Ichika Souya',
      ja: '宗谷 いちか'
    },
    services: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/Ichika_Souya'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UC2kyQhzGOB-JPgcQX9OMgEw'
      }
    ]
  },
  {
    icons: [
      {
        sizes: '256x256',
        src: require('~/assets/images/avatar/kuromu-inari.png')
      },
      {
        sizes: '512x512',
        src: require('~/assets/images/avatar/kuromu-inari@2x.png')
      },
      {
        sizes: '768x768',
        src: require('~/assets/images/avatar/kuromu-inari@3x.png')
      }
    ],
    id: 'kuromu-inari',
    mainVisual: require('~/assets/images/main-visual/kuromu-inari.jpg'),
    name: {
      en: 'Kuromu Inari',
      ja: '稲荷 くろむ'
    },
    services: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/Kuromu_Inari'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UCGiFzwdasSAHILrx-DB1pVQ'
      }
    ]
  },
  {
    icons: [
      {
        sizes: '256x256',
        src: require('~/assets/images/avatar/ran-hinokuma.png')
      },
      {
        sizes: '512x512',
        src: require('~/assets/images/avatar/ran-hinokuma@2x.png')
      },
      {
        sizes: '768x768',
        src: require('~/assets/images/avatar/ran-hinokuma@3x.png')
      }
    ],
    id: 'ran-hinokuma',
    mainVisual: require('~/assets/images/main-visual/ran-hinokuma.jpg'),
    name: {
      en: 'Ran Hinokuma',
      ja: '日ノ隈 らん'
    },
    services: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/Ran_Hinokuma'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UCRvpMpzAXBRKJQuk-8-Sdvg'
      }
    ]
  }
]

export default talents
