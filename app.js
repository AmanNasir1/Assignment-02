                        // Chapter-3


// ----Question-1----

// var age = 21;
// alert("I am "+ age +" Years Old")


// ----Question-2----


// var visit = 14;
// alert("You Have Visited this site " +visit+ " times");


// ----Question-3----


// var birthyear = 21;
// document.writeln("My Birthyear is " + birthyear + "<br> Data type of my declared variable is number");
// document.writeln();


// ----Question-4----


// var name = "John Doe",product = "T-shirt",quantity = "5";
// document.write(name + " ordered " + quantity +" "+ product + " on XYZ Clothing Store");


                 // CHAPTER-4

// ----Question-1----

// var variable1 = "Hello World !",variable2 = "Hello World 2 !" ,variable3 = "Hello World 3 !;

// ----Question-2----


// Illegal Variables


// var my name = "hello";
// var my-name = "hello";
// var alert = "hello";
// var 2 = "a";
// var fifth var = "hello";

// Legal Variables

// var MyName = "hello";
// var my_name = "hello";
// var CAR = "car";
// var $dd = "hello";
// var car3 = "d";

// ----Question-3----

// 1-Letter,Numbers,Dollar Sign , underscores
// 2- letter, dollar sign , underscores


                 // CHAPTER-5

// ----Question-1----

// var num1 = 3;
// var num2 = 4;
// var result = num1 + num2;
// document.write("Sum of "+num1+" and "+num2+" is "+result);

// ----Question-2----
// var num1 = 3;
// var num2 = 4;
// var result = num1 - num2;
// document.write("Sum of "+num1+" and "+num2+" is "+result);

// var num1 = 3;
// var num2 = 4;
// var result = num1 * num2;
// document.write("Sum of "+num1+" and "+num2+" is "+result);

// var num1 = 3;
// var num2 = 4;
// var result = num1 / num2;
// document.write("Sum of "+num1+" and "+num2+" is "+result);

// ----Question-3----

// var num1 = 3;
// document.write("Value after variable declaration is: "+num1+ "<br>");
// num1++;
// document.write("Value after increment is "+num1+"<br>");
// var res = num1 + 7;
// document.write("Value after addition is "+res+"<br>");
// num1--;
// document.write("Value after decrement is: "+num1+"<br>");
// var result = num1 % 3;
// document.write("The remainder is: "+result);

// ----Question-4----

// var cost = 500;
// var total = cost*5;
// document.write("Total Cost to buy 5 tickets is "+total);

// ----Question-5----

// var number = +prompt("Enter Your Number: ");
// for (let i = 1; i <= 10; i++) {
//    console.log(number + "*" + i + "=" + number * i);
//  }

// ----Question-6----

// var cel = "25";
// var far = ((cel * (9/5))+32);
// document.write(cel+"C is "+far+"F");

// var far = "25";
// var cel = ((far - 32) * 5/9);
// document.write(far+"F is "+cel+"C");

// ----Question-7----

// var price1 = 650;
// var price2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var charges = 100;
// document.write("Total Cost Of Your Order is " + ((price1*quantity1)+(price2*quantity2)+charges));


// ----Question-8----

// var totalMarks = 980;
// var obtMarks = 804;
// document.write((obtMarks/totalMarks)*100);

// ----Question-9----
// var usd = 104.80;
// var q1 = 10;
// var riy = 28;
// var q2 = 25
// document.write("Total Currency in PKR "+ ((usd*q1)+(riy*q2)));

// ----Question-10----

// var num = 10;
// document.write(((num+5)*10)/2);

// ----Question-11----



// Chapter 6-9

// ----Question-1----

// var a = 10;
// document.write("The value of a is "+a+ "<br>");
// ++a;
// document.write("The value of ++a is "+a+"<br>" );
// a++;
// document.write("The value of a++ is "+a+"<br>");
// --a;
// document.write("The value of --a is "+a+"<br>");
// a--;
// document.write("The value of a-- is "+a);


// ----Question-2----

// var a=1,b=2;
// document.write("a is " + a + "<br>");
// document.write("--a is"+ --a +"<br>");
// document.write("--a - --b is" + (--a - --b) +"<br>");
// document.write("--a - --b + ++b "+ (--a - --b + ++b)+"<br>");
// document.write("--a - --b + ++b + b-- = "+ (--a - --b + ++b + b--));

// ----Question-3----

//  var name = prompt("Enter Your Name: ");
//  document.write("Hello "+name);

// ----Question-4----

// ----Question-5----

// var number = +prompt("Enter Your Number: ");
// for (let i = 1; i <= 10; i++) {
//    console.log(number + "*" + i + "=" + number * i);
//  }

// ----Question-6----
// var sub1 = prompt("Enter First Subject: ");
// var sub2 = prompt("Enter Second Subject: ");
// var sub3 = prompt("Enter Third Subject: ");
// var total = 100;
// var obt1 = prompt("Enter Obtained Marks of First Subject: ");
// var obt2 = prompt("Enter Obtained Marks of second Subject: ");
// var obt3 = prompt("Enter Obtained Marks of third Subject: ");
// var per1 = (obt1/total)*100;
// var per2 = (obt2/total)*100;
// var per3 = (obt3/total)*100;
// document.write("You Got "+per1+"% in "+sub1+"<br>");
// document.write("You Got "+per2+"% in "+sub2+"<br>");
// document.write("You Got "+per3+"% in "+sub3);

// var num1 = +prompt("Enter Your First Number: ");

// var num2 = +prompt("Enter Your Second Number: ");

// var op = prompt("Enter Your Operator: ");

// if(op === "+" ){
//    var res = num1 + num2;
// }
// if(op === "-"){
//    var res =  num1 - num2;
// }
// if(op === "*"){
//    var res =  num1 * num2;
// }
// if(op === "/"){
//    var res =  num1 / num2;
// }
// document.write(res);