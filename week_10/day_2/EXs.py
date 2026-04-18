print("Hello world\nHello world\nHello world\nHello world")

print((99 ** 3) * 8)

my_name = "Zakaria"
name = input("What is your name? ")

if name == my_name:
    print("Fchkeeel")
else:
    print("Nope")


height = int(input("Whats your height in cm ? "))

if height > 145:
    print("tall enough")
else:
    print("grow some more to ride")


my_fav_numbers = {1, 3, 4, 7}
my_fav_numbers.add(9)
my_fav_numbers.add(11)
my_fav_numbers.pop()

friend_fav_numbers = {2, 5, 8, 10}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(my_fav_numbers)
print(friend_fav_numbers)
print(our_fav_numbers)



# No


basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

print(basket.count("Apples"))

basket.clear()
print(basket)



sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}")