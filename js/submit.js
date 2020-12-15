import { handleSubmit } from '/js/password.js'
import { addKey } from '/js/keys.js'
import { puzzleId, year } from '/js/meta.js'

handleSubmit((correct, password, key) => {
  const id = puzzleId()
  if (password == correct) {
    window.alert('Gratulujem, úspešne ste vyriešili šifru!')
    addKey(id, key)
    window.location = `/${year()}/${key}/${
      id === '10'? 'outro': 'puzzle'
    }.html`
  } else {
    window.alert('Bohužiaľ, toto nie je správne heslo.')
  }
})
