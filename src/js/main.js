import init from './init'
import { scroll } from './scroll'
import './initSidebar'
import { initMobile } from './mobile'
import InitSidebarLink from './tag'
import fancybox from './fancybox'

// print custom info
const logStyle =
  'color: #fff; background: #f75357; padding: 1px; border-radius: 5px;'
console.info('%c 🎯 1in-blog ⬇️ ', logStyle)
console.info('%c 🏷 Version: 1.0.0 ', logStyle)
console.info('%c 📅 Version date: 20230528 ', logStyle)
console.info('%c 📦 https://github.com/Code-LinPromise ', logStyle)

window.addEventListener('load', function (event) {
  console.log('All resources finished loading!!')
})

// init site base
init()

// init mobile
initMobile()

// scroll event
scroll()

// init sidebar link
const metas = new InitSidebarLink()
metas.addTab({
  metaName: 'tags',
  labelsContainer: '.sidebar-tags-name',
  postsContainer: '.sidebar-tags-list',
})

metas.addTab({
  metaName: 'categories',
  labelsContainer: '.sidebar-categories-name',
  postsContainer: '.sidebar-categories-list',
})

// fancybox
fancybox()
