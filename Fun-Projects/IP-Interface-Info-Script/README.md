# IP Interface Info Script

This simple Bash script retrieves information about a specified network interface using the `ip` command. It checks for the existence of an IPv4 address on the provided interface and displays the address if found.

## Prerequisites

- Bash (Bourne Again SHell)
- `ip` command (commonly available on Linux systems)

## How to Use

1. Clone this repository:

   ```bash
   git clone https://github.com/DenialArcus/Projects.git
   cd Projects/Fun-Projects/IP-Interface-Info-Script
   ```
   
2. Give executable permissions to the script:
   ```bash
   chmod +x main.sh
   ```

3. Run the script:
   ```bash
   ./main.sh <interface>
   ```

### Examples

```bash
./main.sh lo
```

```bash
./main.sh eth0
```

```bash
./main.sh enp0s3
```

## Script Explanation

1. **Check for Argument:**

   The script checks if a command-line argument (network interface) is provided. If not, it displays a usage message and exits.

2. **Get Interface Name:**

   The script assigns the provided interface name from the command line argument to a variable.

3. **Retrieve Information:**

   It uses the ip command to obtain information about the specified interface, specifically extracting the IPv4 address.
   
4. **Display Results:**

   If an IPv4 address is found, it displays the address; otherwise, it notifies that no address was found.

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
