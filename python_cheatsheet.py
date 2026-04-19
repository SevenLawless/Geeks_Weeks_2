# PYTHON CHEATSHEET

# =========================
# 1) VARIABLES AND INPUT
# =========================
name = "Zakaria"
age = 22
price = 19.99
is_ready = True

user_name = input("Name: ")
user_age = int(input("Age: "))
user_price = float(input("Price: "))


# =========================
# 2) STRINGS
# =========================
text = "  hello world  "

print(text.lower())
print(text.upper())
print(text.strip())
print(text.replace("world", "python"))
print(len(text))

name = "Zakaria"
age = 22
print(f"Hello {name}, you are {age} years old")
print("Hello {}, you are {} years old".format(name, age))


# =========================
# 3) LISTS
# =========================
fruits = ["apple", "banana", "orange"]

print(fruits[0])
print(fruits[-1])
print(fruits[0:2])

fruits.append("kiwi")
fruits.insert(1, "mango")
fruits.remove("banana")
last_item = fruits.pop()
first_item = fruits.pop(0)
fruits.extend(["grape", "melon"])

print(len(fruits))
print(fruits.count("apple"))
print(fruits.index("orange"))

fruits.sort()
fruits.reverse()
fruits.clear()


# =========================
# 4) TUPLES
# =========================
point = (10, 20)

print(point[0])
print(point[-1])

x, y = point
print(x)
print(y)

point = point + (30,)
print(point)


# =========================
# 5) SETS
# =========================
numbers = {1, 2, 3, 3, 4}

print(numbers)

numbers.add(5)
numbers.remove(2)
numbers.discard(10)
removed_item = numbers.pop()

more_numbers = {4, 5, 6, 7}
print(numbers.union(more_numbers))
print(numbers.intersection(more_numbers))
print(numbers.difference(more_numbers))


# =========================
# 6) DICTIONARIES
# =========================
person = {
    "name": "Zakaria",
    "age": 22,
    "city": "Casablanca"
}

print(person["name"])
print(person.get("age"))

person["age"] = 23
person["job"] = "developer"
del person["city"]

print(person.keys())
print(person.values())
print(person.items())

for key, value in person.items():
    print(key, value)


# =========================
# 7) IF / ELIF / ELSE
# =========================
age = 20

if age > 18:
    print("adult")
elif age == 18:
    print("exactly 18")
else:
    print("minor")

fruits = ["apple", "banana", "orange"]

if "apple" in fruits:
    print("found")

if "kiwi" not in fruits:
    print("not found")


# =========================
# 8) LOOPS
# =========================
for i in range(5):
    print(i)

for fruit in ["apple", "banana", "orange"]:
    print(fruit)

for index, letter in enumerate("hello"):
    print(index, letter)

count = 1
while count <= 5:
    print(count)
    count += 1


# =========================
# 9) BREAK / CONTINUE / PASS
# =========================
for i in range(10):
    if i == 5:
        break
    print(i)

for i in range(10):
    if i % 2 == 0:
        continue
    print(i)

for i in range(3):
    pass


# =========================
# 10) FUNCTIONS
# =========================
def greet(name):
    print(f"Hello {name}")


def add(a, b):
    return a + b


def introduce(name, country="Morocco"):
    print(f"{name} is from {country}")


greet("Zakaria")
result = add(5, 3)
print(result)
introduce("Zakaria")
introduce("Zakaria", "Canada")
introduce(name="Zakaria", country="Morocco")


# =========================
# 11) *args
# =========================
def total_sum(*args):
    print(args)
    return sum(args)


print(total_sum(10, 20, 30))


# =========================
# 12) **kwargs
# =========================
def show_profile(**kwargs):
    print(kwargs)
    for key, value in kwargs.items():
        print(f"{key}: {value}")


show_profile(name="Zakaria", age=22, country="Morocco")


# =========================
# 13) LAMBDA
# =========================
square = lambda x: x * x
add_two = lambda a, b: a + b

print(square(4))
print(add_two(3, 7))


# =========================
# 14) MAP
# =========================
numbers = [1, 2, 3, 4]
squared_numbers = list(map(lambda x: x * x, numbers))
print(squared_numbers)


# =========================
# 15) FILTER
# =========================
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)


# =========================
# 16) REDUCE
# =========================
from functools import reduce

numbers = [1, 2, 3, 4]
total = reduce(lambda a, b: a + b, numbers)
print(total)


# =========================
# 17) LIST COMPREHENSIONS
# =========================
numbers = [x for x in range(5)]
squares = [x * x for x in range(5)]
evens = [x for x in range(10) if x % 2 == 0]

print(numbers)
print(squares)
print(evens)


# =========================
# 18) DICTIONARY COMPREHENSION
# =========================
ages = {"lea": 12, "mark": 25, "george": 50}
new_ages = {name: age + 1 for name, age in ages.items()}
print(new_ages)


# =========================
# 19) ZIP
# =========================
keys = ["Ten", "Twenty", "Thirty"]
values = [10, 20, 30]
result = dict(zip(keys, values))
print(result)


# =========================
# 20) COMMON PATTERNS
# =========================
word = "ppoeemm"
new_word = ""

for letter in word:
    if new_word == "" or letter != new_word[-1]:
        new_word += letter

print(new_word)

word = "dodo"
letter_indexes = {}

for index, letter in enumerate(word):
    if letter not in letter_indexes:
        letter_indexes[letter] = []
    letter_indexes[letter].append(index)

print(letter_indexes)
