import { handleSubmit } from '/xmas/js/password.js'
import { addKey } from '/xmas/js/keys.js'
import { puzzleId } from '/xmas/js/meta.js'
import table from './table.js'

const inflect = n => `${n} ${
  n === 1? 'zlý bod': (n > 1 && n < 5)? 'zlé body': 'zlých bodov'
}`

handleSubmit((correct, password, key) => {
  if (password == correct) {
    window.alert('Gratulujem, úspešne ste vyriešili šifru!')
    addKey(puzzleId(), key)
    window.location = `/xmas/2020/${key}/puzzle.html`
  } else {
    const value = table[password]
    if (value === undefined) window.alert('Toto slovo nepoznám.')
    else if (value === 0) window.alert(
      'Toto slovo sa mi páči. Nedávam mu žiadne zlé body.'
    )
    else window.alert(
      `Toto slovo poznám, ale nepáči sa mi. Dávam mu ${inflect(value)}.`
    )
  }
})
