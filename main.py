# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
print("Recipe Finder App")

print("Updates 11/6/2023: added zucchini and lamb as acceptable ingredient options\n")

print("Press 'U' to login or create your account or Press enter to continue without logging in")
input("Having an account will allow you to save recipes that you like: ")

print("\nHello and welcome to the recipe finder, where we can help you decide what to cook today")

print("Please select an option by pressing the corresponding number: ")
response = input("1: Look at your saved recipes if logged in \n2: Look at popular recipes \n3: Get new recipes from ingredients\n4: Make suggestions for new recipes or ingredients to add\nOption chosen: ")

if response == '3':
    print("Step 1:\n")
    print("First we will need a list of your ingredients, with each separated by a space. For example, you can enter bacon lettuce tomato\n")
    ingredients = input("Now enter a list of your chosen ingredients with each separated by a space and press enter: ")

    list = ingredients.split()
    print("Your ingredient list is: " + str(list))
    response = input("Enter 'Y' to confirm or press 'N' if the list is incorrect or if you want to change it: ")
    if response == 'Y':
        print("\nStep 2: \n Now we will generate a list of 10 recipes with your chosen ingredients")







# Press the green button in the gutter to run the script.
#if __name__ == '__main__':

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
