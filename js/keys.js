import { year } from '/js/meta.js'

const storage = window.localStorage

export const getKey = number => storage[`key-${year()}-${number}`]

export const addKey = (number, key) => {
  storage[`key-${year()}-${number}`] = key
}
