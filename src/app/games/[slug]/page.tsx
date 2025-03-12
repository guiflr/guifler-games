import Game, { GameTemplateProps } from '@/templates/Game'

export const dynamicParams = true

const descriptionHTML = `
<img src="https://items.gog.com/not_a_cp/ENG_product-page-addons-2020_yellow_on_black.png"><br>
* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
<hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png"><br><br>
Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-City-of-the-Future.png"><br><br>
Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Eternal-Life.png"><br><br>
Take the riskiest job of your life and go after a prototype implant that is the key to immortality.


<p class="description__copyrights">
CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
</p>`

const gameCardSlider = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    $promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    $promotionalPrice: 'R$ 215,00'
  }
]

export async function generateStaticParams() {
  return [{ params: { slug: 'cyberpunk-2077' } }]
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const query = await params

  const data: GameTemplateProps = {
    cover:
      'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
    gameInfo: {
      title: 'Cyberpunk 2077',
      price: '59.00',
      description:
        'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
    },
    gallery: [
      {
        src: '/img/games/cyberpunk-1.jpg',
        label: 'Gallery Image 1'
      },
      {
        src: '/img/games/cyberpunk-2.jpg',
        label: 'Gallery Image 2'
      }
    ],
    description: descriptionHTML,
    details: {
      developer: 'CD PROJEKT RED',
      releaseDate: '2020-12-10T23:00:00',
      platforms: ['windows'],
      publisher: 'CD PROJEKT RED',
      rating: 'BR18',
      genres: ['Action', 'Role-playing']
    },
    upcommingGames: gameCardSlider,
    upcommingHighlight: {
      title: 'Read Dead is back!',
      subtitle: 'Come see John’s new adventures',
      $backgroundImage: '/img/red-dead-img.jpg',
      buttonLabel: 'Buy now',
      buttonLink: '/games/rdr2'
    },
    recommendedGames: gameCardSlider
  }

  return <Game {...data} />
}
