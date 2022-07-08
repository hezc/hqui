export function normalizeName(name: string) {
  return name.toLowerCase().replace(/\s+/g, '')
}

export function getHero(name: string) {
  return `/images/resource/${normalizeName(name)}-hero.jpg`
}

export function getLogo(img: string, flip: boolean | undefined) {
  if (flip) img = img.replace(/(\.\w+$)/, '-dark$1')
  return `/images/resource/${img}`
}
