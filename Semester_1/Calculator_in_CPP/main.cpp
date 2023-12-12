#include <iostream>
#include <windows.h>
using namespace std;

int main()
{
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    int input1;
    int input2;
    char operation;
    
    SetConsoleTextAttribute (hConsole, 1);

    cout << "Please Enter Your First Number: ";
    cin >> input1;
    
    SetConsoleTextAttribute (hConsole, 2);
    
    cout << "Declare an Operator(+,-,x,/,%): ";
    cin >> operation;
    
    SetConsoleTextAttribute (hConsole, 4);
    
    cout << "Please Enter Your Second Number: ";
    cin >> input2;
    
    system("color 2");

    if (operation =='+')
    {
        SetConsoleTextAttribute (hConsole, 13);
        cout << (input1 + input2);
    }
    else if (operation == '-')
    {
        SetConsoleTextAttribute (hConsole, 6);
        cout << (input1 - input2);
    }
    else if (operation == 'x')
    {
        SetConsoleTextAttribute (hConsole, 5);
        cout << (input1 * input2);
    }
    else if (operation == '/')
    {
        SetConsoleTextAttribute (hConsole, 8);
        cout << (input1 / input2);
    }
    else if (operation == '%')
    {
        SetConsoleTextAttribute (hConsole, 11);
        cout << (input1 % input2);
    }
    else 
    {
        SetConsoleTextAttribute (hConsole, 12);
        cout << "Syntax Error"<<endl;
        cout << "Operator Unknown";
    }
    return 0;
}
