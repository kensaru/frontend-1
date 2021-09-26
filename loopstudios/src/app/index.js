import '../css/style.css'
import "external-svg-loader";

//Images

import '../static/images/favicon-32x32.png'

import '../static/images/desktop/image-soccer-team.jpg'

import '../static/images/desktop/image-pocket-borealis.jpg'

import '../static/images/desktop/image-night-arcade.jpg'

import '../static/images/desktop/image-interactive.jpg'

import '../static/images/desktop/image-hero.jpg'

import '../static/images/desktop/image-grid.jpg'

import '../static/images/desktop/image-from-above.jpg'

import '../static/images/desktop/image-fisheye.jpg'

import '../static/images/desktop/image-deep-earth.jpg'

import '../static/images/desktop/image-curiosity.jpg'

// Image Mobile

import '../static/images/mobile/image-soccer-team.jpg'

import '../static/images/mobile/image-pocket-borealis.jpg'

import '../static/images/mobile/image-night-arcade.jpg'

import '../static/images/mobile/image-interactive.jpg'

import '../static/images/mobile/image-hero.jpg'

import '../static/images/mobile/image-grid.jpg'

import '../static/images/mobile/image-from-above.jpg'

import '../static/images/mobile/image-fisheye.jpg'

import '../static/images/mobile/image-deep-earth.jpg'

import '../static/images/mobile/image-curiosity.jpg'

// Icons

new URL('../static/icons/logo.svg', import.meta.url)
new URL('../static/icons/icon-hamburger.svg', import.meta.url)
new URL('../static/icons/icon-facebook.svg', import.meta.url)
new URL('../static/icons/icon-twitter.svg', import.meta.url)
new URL('../static/icons/icon-instagram.svg', import.meta.url)
new URL('../static/icons/icon-pinterest.svg', import.meta.url)
new URL('../static/icons/icon-close.svg', import.meta.url)

const showBar = (state) => {
    const header = document.getElementById("header")
    if (state) return header.classList.add('show-bar')
    header.classList.remove('show-bar')
}

window.showBar = showBar