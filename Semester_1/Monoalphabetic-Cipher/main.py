

# Monoalphabetic Cipher by ARCUS

import string
from sys import exit

class MonoalphabeticCipher:
    '''
        Following constructor method initializes an instance of the class.
        It takes a parameter (key), which is a string of the uppercase alphabet. 
    '''
    def __init__(self, key):
        self.key = key
        self.alphabet = string.ascii_uppercase


    '''
        This method (encrypt) takes a plaintext string as input and returns the encrypted version using the monoalphabetic cipher. 
        It iterates through each character in the plaintext and checks whether it is an alphabet character. If it is, it finds the index 
        of the character in the alphabet and substitutes it with the corresponding character from the key. The case (uppercase or lowercase) 
        is preserved during the substitution.
    '''
    def encrypt(self, plaintext):
        ciphertext = ""
        for char in plaintext:
            if char.isalpha():
                is_upper = char.isupper()
                index = self.alphabet.index(char.upper())
                encrypted_char = self.key[index]
                ciphertext += encrypted_char.upper() if is_upper else encrypted_char.lower()
            else:
                ciphertext += char
        return ciphertext

    '''
        This method (decrypt) takes a ciphertext string as input and returns the decrypted version using the monoalphabetic cipher. 
        It performs the reverse process of encryption by substituting each character in the ciphertext with the corresponding character 
        from the alphabet based on the key.
    '''
    def decrypt(self, ciphertext):
        plaintext = ""
        for char in ciphertext:
            if char.isalpha():
                is_upper = char.isupper()
                index = self.key.index(char.upper())
                decrypted_char = self.alphabet[index]
                plaintext += decrypted_char.upper() if is_upper else decrypted_char.lower()
            else:
                plaintext += char
        return plaintext

def main():
    key = "QWERTYUIOPASDFGHJKLZXCVBNM"  # You can use any permutation of the alphabet as the key
    cipher = MonoalphabeticCipher(key)

    ascii_art = r'''
                   _______       __                 __         
                  / ____(_)___  / /_  ___  _____   / /_  __  __
                 / /   / / __ \/ __ \/ _ \/ ___/  / __ \/ / / /
                / /___/ / /_/ / / / /  __/ /     / /_/ / /_/ / 
                \____/_/ .___/_/ /_/\___/_/     /_.___/\__, /  
                      /_/                             /____/   
                           ___    ____  ________  _______
                          /   |  / __ \/ ____/ / / / ___/
                         / /| | / /_/ / /   / / / /\__ \ 
                        / ___ |/ _, _/ /___/ /_/ /___/ / 
                       /_/  |_/_/ |_|\____/\____//____/
    '''

    print("<------------------------------------------------------------------------------------------------------------------->")
    print(ascii_art)
    print("<------------------------------------------------------------------------------------------------------------------->")

    while True:
        print("\nMonoalphabetic Cipher Program")
        print("1. Encrypt")
        print("2. Decrypt")
        print("3. Exit")
        choice = input("Enter your choice (1, 2, or 3): ")

        if choice == "1":
            plaintext = input("Enter the message to encrypt: ")
            encrypted_text = cipher.encrypt(plaintext)
            print("\nEncrypted message:", encrypted_text)
        elif choice == "2":
            ciphertext = input("Enter the message to decrypt: ")
            decrypted_text = cipher.decrypt(ciphertext)
            print("\nDecrypted message:", decrypted_text)
        elif choice == "3":
            print("\nExiting the program. Goodbye! See Ya !\n")
            exit()
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")

if __name__ == "__main__":
    main()
