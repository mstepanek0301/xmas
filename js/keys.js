import { year } from '/xmas/js/meta.js'

const version = '5dcca1e2'
const storage = window.localStorage

export const getKey = number => storage[`key-${year()}-${number}`]

export const addKey = (number, key) => {
  storage[`key-${year()}-${number}`] = key
}

if (storage['version'] !== version) {
  storage.clear()
  storage['version'] = version
}
