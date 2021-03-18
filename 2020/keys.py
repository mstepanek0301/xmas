from hashlib import sha256

def get_hash(password):
    return sha256(bytes(password, encoding = 'utf-8')).hexdigest()[:8]

lower, upper = [], []

for puzzle in range(1, 11):
    password = input(f'{puzzle}. ')
    lower.append(get_hash(password))
    upper.append(get_hash(password.upper()))

with open('keys.md', 'w') as file:
    print('# Checksums', file = file)
    for puzzle, key in enumerate(lower, 1):
        print(f'{str(puzzle).rjust(2)}. {key}', file = file)

    print(file = file)
    print('# Keys', file = file)
    for puzzle, key in enumerate(upper, 1):
        print(f'{str(puzzle).rjust(2)}. {key}', file = file)
