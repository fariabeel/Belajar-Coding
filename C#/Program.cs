/*BIBLIOGRAPHY

0.String Study     11
1.Integers         36
2.If               94
3.Loops           149
4.Foreach         207
5.OPP             322
END               384

0 _____________________________________________________________ STRING STUDY _____________________________________________________________ 0


string a = "          wow          "; declare
string b = "    ui    ";
Console.WriteLine($"{a} {b}");

a=a.Trim(); without string because declared

int a=1; cannot cuss a used by string keyword

string c = "The word: " + a.Trim() + " " + b.TrimEnd() + " a";

a.Trim(); useless
instead -> a= a.Trim()

Console.WriteLine(c.Replace("ui","roar"); can but didn't replace in variable
c=c.Replace("ui","roar");
string a= a.Replace("a","b")

Console.WriteLine(c.ToUpper());
Console.WriteLine(c.ToLower());
Console.WriteLine(c.Contains("roar"));
Console.WriteLine(c.Length); Console.WriteLine(c.StartsWith("The"));

1 _______________________________________________________________ Integers _______________________________________________________________ 1

int b = 6;
int a = 18;
int c = a + b;
Console.WriteLine(c);

int a = 2100000000;
int b = 2100000000;
long c = a + b;

int a = 2100000000;
int b = 2100000000;
long c = (long)a + (long)b;
long d = checked(a + b);

int a = (int)42.1;
int b = (int)38.2;
long c = checked(a + b); floor to 80

double a = 42.1;
float b = 38.2F; can f or F
double c = a + b;

decimal a = 42.1M; can use m or M
decimal b = 38.2M;
decimal c = a + b;

can use same declared in all variable to 
one variable example:
double/decimal/float a= 13.1/f/m;
double/decimal/float b= 13.1/f/m;
double/decimal/float c= a+b;
output 26.2

can't save to one variable with variable decralered
with double or float and variable declare with decimal:
double/float a= 13.1/f;
decimal b= 13.1m;
double/float/decimal c= a+b;
output error

can do it:
float a= 13.1f;
double b= 13;
double c= a+b; but cannot float/decimal c= a+b;
output: 26.200000381469728

can't:
decimal a= 13.1m;
decimal b= 13;
double/float c= a+b;

can't
double/decimal/float/int a= 13.1/f/m;
double/decimal/float b= 13.1/f/m;
int c= a+b;

2 __________________________________________________________________ If __________________________________________________________________ 2

int a = 5;
int b = 5;
if (a + b > 10)
{
   Console.WriteLine("The answer is Greater than 10."); 
}
else
{
   Console.WriteLine("Not greater than 10");





           }


bool test = a + b > 10;
if (test)
{
   Console.WriteLine("The answer is greater than 10.");
}
else
{
   Console.WriteLine("Not greater than 10");
}

int a = 6;
int b = 7;
if ((a + b > 10) && (a == b))
{
   Console.WriteLine("The answer is Greater than 10.");
   Console.WriteLine("And it's equal.");
}
else
{
   Console.WriteLine("May be greater than 10");
   Console.WriteLine("And not equal.");
}

int a = 5;
int b = 4;
if ((a + b > 10) || (a == b))
{
   Console.WriteLine("The answer is Greater than 10.");
   Console.WriteLine("Or it's equal.");
}
else
{
   Console.WriteLine("May be not greater than 10");
   Console.WriteLine("Or it's not equal.");
}

3 ________________________________________________________________ Loops ________________________________________________________________ 3

int counter = 0;
counter = counter + 1;
Console.WriteLine(counter);
counter = counter + 1;
Console.WriteLine(counter);
counter = counter + 1;
Console.WriteLine(counter);
counter = counter + 1;
Console.WriteLine(counter);

int counter = 0;
counter++;
Console.WriteLine(counter);
counter++;
Console.WriteLine(counter);
counter++;
Console.WriteLine(counter);
counter++;
Console.WriteLine(counter);

int counter = 0;
while(counter < 5){
   counter++;
   Console.WriteLine(counter);
}

int counter = 0;
do
{
   Console.WriteLine(counter);
   counter++;
}
while (counter < 5);



for (int i = 0; i < 5; i++)
{
   Console.WriteLine(i);
}

for (int i = 0; i < 5; i++)
{
   if(i==4)
   {
       Console.WriteLine(i);
   }
}
for (int row = 1; row < 11; row++)
{
   for (char column = 'a'; column < 'k'; column++)
   {
       Console.WriteLine($"The cell is ({row}, {column})");
   }
}

4 _____________________________________________________________ Foreach _____________________________________________________________ 4

var names = new List<string>  {"Scott", "Ana", "Felipe"};

// Console.WriteLine(names[^2]);

names.Add("David");
names.Add("Damian");
names.Add("Maria");

foreach (var name in names[0..2])
{ 
   Console.WriteLine($"Hello {name.ToUpper()}!");
}
var names = new string[]  {"Scott", "Ana", "Felipe"};

//names.Add("Damian"); //LIST<T>

names = [..names,"Damian"]; adding

foreach (var name in names)
{ 
   Console.WriteLine($"Hello {name.ToUpper()}!");
}
var numbers = new List<int> {54,45,56,54,34,54,12,44,75};

numbers.Sort();

foreach (var number in numbers)
{ 
   Console.WriteLine($"{number}");
}
var numbers = new List<int> {54,45,56,54,34,54,12,99,44,75};

Console.WriteLine($"i found 99 at index {numbers.IndexOf(99)}"); 
IndexOf for searching something

numbers.Sort();
Console.WriteLine($"i found 99 at index {numbers.IndexOf(99)}");
List<int> scores = [97, 92, 81, 60];

for (int i = 0; i < scores.Count; i++)
{
   if(scores[i] > 80)
   {
       Console.WriteLine($"Found a score over 80 {scores[i]}");
   }
}
return;

1. // Specify the data source.
List <int> scores = [97, 92, 81, 60];

// Define the query expression.
IEnumerable<int> scoreQuery =
   from score in scores
   where score > 80
   select score;

// Execute the query.
foreach (var i in scoreQuery)
{
   Console.Write(i + " ");
}
// Output: 97 92 81

2. // Specify the data source.
List<int> scores = [97, 92, 81, 60];

// Define the query expression.
IEnumerable<string> scoreQuery =
   from score in scores
   where score > 80
   orderby score ascending
   select $"The score is {score}";

// Execute the query.
foreach (string i in scoreQuery)
{
   Console.WriteLine(i);
}
// Output: 97 92 81

3. // Specify the data source.
List<int> scores = [97, 92, 81, 60];

// Define the query expression.
IEnumerable<int> scoreQuery =
   from score in scores
   where score > 80
   orderby score ascending
   select score;

List<int> myScores = scoreQuery.ToList();

foreach (var score in myScores)
{
   Console.WriteLine(score);
}

// Output: 97 92 81

using System;

namespace MyNamespace
{
   public class MyApp
   {
       public static void Main()
       {
           Console.WriteLine("hello");
       }
   }
}

5 ____________________________________________________________ OPP ____________________________________________________________5

Console.WriteLine("hello oop");

var p1 = new Person("Scott", "Hanselman", new DateOnly(1970,1,1));
var p2 = new Person("David", "Fowler", new DateOnly(1986,1,1));

p1.Pets.Add(new Dog("Fred"));
p1.Pets.Add(new Dog("Barney"));

p2.Pets.Add(new Cat("Beyonce"));

List<Person> people = [p1,p2];

foreach(var person in people)
{
   Console.WriteLine($"{person}");
   foreach(var pet in person.Pets)
   {   
       Console.WriteLine($"    {pet}");
   }
}

public class Person(string firstname, string lastname, DateOnly birthday)
{
   public string First { get; } = firstname;
   public string Last { get; } = lastname;
   public DateOnly Birthday { get; } = birthday;

   public List<Pet> Pets { get; } = new();

   public override string ToString()
   {
       return $"Human {First} {Last}";
   }

}


public abstract class Pet(string firstname)
{
   public string First { get; } = firstname;
   public abstract string MakeNoise();

   public override string ToString()
{
   return $"{First} and I am a {GetType().Name} and I {MakeNoise()}";
}
}

public class Cat(string firstname) : Pet(firstname)
{
   public string first { get; } = firstname;

   public override string MakeNoise() => "meow";
}

public class Dog(string firstname) : Pet(firstname)
{
   public string first { get; } = firstname;

   public override string MakeNoise() => "bark";
}
*/

