import { getKey } from '/xmas/js/keys.js'

const items = Array.from(document.getElementsByClassName('locked'))
const pattern = /\$\d+/

for (let i = 0; i < items.length; i++) {
  const item = items[i]
  const link = item.href
  const match = pattern.exec(link)[0]
  const key = getKey(match.slice(1))
  if (key == undefined) continue
  item.href = link.replace(pattern, key)
  item.classList.remove('locked')
}
