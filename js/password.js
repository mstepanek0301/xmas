const normalize = string => string
	.normalize('NFD')
	.toLowerCase()
	.split('')
	.filter(char => 96 < char.charCodeAt(0) && char.charCodeAt(0) < 123)
	.join('')

const hexdigest = byteArray => byteArray.reduce(
  (result, item) => (result +
		(item >>> 0).toString(16).padStart(8, 0)
	), ''
).substr(0, 8)

const computeHash = string => hexdigest(sjcl.hash.sha256.hash(string))

const input = document.getElementById('password')
const submitBox = document.getElementById('submit-box')

export const handleSubmit = handler => submitBox.addEventListener(
	'submit', event => {
	  event.preventDefault()
	  const correct = input.dataset.key
		const password = normalize(input.value)
		const passwordHash = computeHash(password)
		const key = computeHash(password.toUpperCase())
	  handler(correct, passwordHash, key)
		input.value = ''
		input.blur()
	}
)
