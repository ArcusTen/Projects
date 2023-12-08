import tkinter as tk
from tkinter import StringVar
from PIL import Image, ImageTk
from tkinter import ttk
import random
import string
import pyperclip


def set_icon(window, icon_path):
    image = Image.open(icon_path)
    photo = ImageTk.PhotoImage(image)
    window.tk.call('wm', 'iconphoto', window._w, photo)

def password_generator(minimum_length, numbers = True, special_characters = True):
    letters = string.ascii_letters
    digits = string.digits
    special = string.punctuation

    characters = letters
    if numbers:
        characters += digits
    if special_characters:
        characters += special

    password = ""

    criteria_met = False
    has_number = False
    has_special = False

    while not criteria_met or len(password) < minimum_length:
        new_character = random.choice(characters)
        password += new_character

        if new_character in digits:
            has_number = True
        elif new_character in special:
            has_special = True

        criteria_met = True
        if numbers:
            criteria_met = has_number
        if special_characters:
            criteria_met = criteria_met and has_special

    return password

def generate_password():
    minimum_length = int(minimum_length_var.get())
    has_number = include_numbers_var.get()
    has_special = include_special_var.get()

    generated_password = password_generator(minimum_length, has_number, has_special)

    generated_password_label.config(text = "Generated Password:\n" + generated_password)



# GUI Setup
window = tk.Tk()

window.title("Password Generator by Arcus")

width = 330
height = 400
windows_dimension = str(width) + "x" + str(height)
window.geometry(windows_dimension)


icon_path = r"<path-to-your-logo>"
set_icon(window, icon_path)


# Displaying text
title_label = ttk.Label(master = window, text = "Enter the minimum length for password: ", font = 'Calibri 12 italic').grid(row = 0, column = 0, padx = 5, pady = 5)

# Minimum Length Entry
tk.Label(window, text = "Minimum Length:").grid(row = 2, column = 0, padx = 5, pady = 5)
minimum_length_var = StringVar()
minimum_length_entry = tk.Entry(window, textvariable = minimum_length_var)
minimum_length_entry.grid(row = 1, column = 0, padx = 10, pady = 10)

# Checkboxes
include_numbers_var = tk.BooleanVar()
include_numbers_var.set(True)
include_numbers_checkbox = tk.Checkbutton(window, text = "Include Numbers", variable = include_numbers_var)
include_numbers_checkbox.grid(row = 2, column = 0, padx = 10, pady = 5)

include_special_var = tk.BooleanVar()
include_special_var.set(True)
include_special_checkbox = tk.Checkbutton(window, text = "Include Special Characters", variable = include_special_var)
include_special_checkbox.grid(row = 3, column = 0, padx = 10, pady = 5)

# Generate Button
go_button = tk.Button(window, text = "Go ...", font = 'Calibri 10 bold italic', command = generate_password, bg = "#01cd67", fg = "white", bd = 5, relief = tk.GROOVE, borderwidth = 5, padx = 10)
go_button.grid(row = 4, column = 0, columnspan = 2, pady = 10)

# Result Label
generated_password_label = tk.Label(window, text = "", font = 'Calibri 12 italic')
generated_password_label.grid(row = 5, column = 0, columnspan = 2, pady = 10)


copy_button = tk.Button(window, text="Copy", command=lambda: pyperclip.copy(generated_password_label.cget("text").split(":")[1].strip()), font = 'Calibri 10 bold italic', bg = "#01cd67", fg = "white", bd=5, relief=tk.GROOVE, borderwidth=5, padx=10)
copy_button.grid(row=8, column=0, columnspan=2, pady=10)


window.mainloop()
