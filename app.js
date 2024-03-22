                            //  QUESTION-NO-01
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + " " + lastName;
// document.write("Your fullName is: " + fullName);


                            //   QUESTION-NO-02
// var favphone = prompt("Enter your favorite mobile & mobile model: ");
// document.write("Your favorite phone is: "+ favphone +"<br>"+"Length of string: "+favphone.length);


                                //   QUESTION-NO-03
// var input = prompt("Enter any thing I found 'N'")
//       var text = input.toLowerCase();
// for(var i = 0; i<text.length;i++)
// {
//     if(text.slice(i,i+2) === "n"){
//         alert("Found 'N'")
//     }
// }

                                    // QUESTION-NO-07
// var text1 = "City: Hyderabad";


// for(var i =0;i<text1.length;i++)
// {
//     if(text1.slice(i,i+5)=== "Hyder"){
//         text = text1.slice(0,i) + "Islamabad";
//         document.write(text1 + "<br>"+"After replacement: "+text)
//     }
// }

                                //    QUESTION-NO-10

// var userinput = prompt("Enter your name");
// var userinputLC = userinput.toLowerCase();
// var userinputUC = userinput.toUpperCase();

// document.write("To LowerCase: "+ userinputLC + "<br>" + "To UpperCase: " + userinputUC)

                                                    // QUESTION-NO-11

// var userinput = prompt("Enter your name");
// var userinputLC = userinput.toLowerCase();
// var userinputUC = userinput.toUpperCase();

// document.write("User Input: "+ userinputLC + "<br>" + "Title Case: " + userinputUC)

                            //  QUESTION-NO-12

var num = 35.36
for(var i= 0;i<num.length;i++){
    if(num.slice(i,i+1)=== "."){
        tums=num.slice(0,i)+"3536";
        document.write( tums);
    }
}

