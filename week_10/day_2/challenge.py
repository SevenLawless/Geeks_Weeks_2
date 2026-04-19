number = int(input("gimme a number : "))
length = int(input("gimme any length : "))

result = []

for i in range(1, length + 1):
    result.append(number * i)

print(result)


##############


word = input("gimme a word : ")

new_word = ""

for letter in word:
    if letter not in new_word:
        new_word += letter

print(new_word)