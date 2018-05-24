$(document).ready(function () {
    //Exercise 1 button click (Numbers)
    $("#btnEx1").click(function () {
        //collect the data
        var num1 = Number($('#ex1num1').val());
        var num2 = Number($('#ex1num2').val());
        var num3 = Number($('#ex1num3').val());
        var num4 = Number($('#ex1num4').val());
        var num5 = Number($('#ex1num5').val());
        //Perform Math Equations
        var sum = num1 + num2 + num3 + num4 + num5;
        var max = Math.max(num1, num2, num3, num4, num5);
        var min = Math.min(num1, num2, num3, num4, num5);
        var mean = (num1 + num2 + num3 + num4 + num5) / 5;
        var product = num1 * num2 * num3 * num4 * num5;
        //Output a result to the results area
        $('#ex1Out').text("1) Sum: " + sum);
        $('#ex1Out2').text("2) Largest Number: " + max);
        $('#ex1Out3').text("3) Smallest Number: " + min);
        $('#ex1Out4').text("4) Mean: " + mean);
        $('#ex1Out5').text("5) Product:" + product);

    });


    //Exercise 2 button click (Factorial)
    $('#btnEx2').click(function () {
        // Input the number
        var value = Number($('#ex2num1').val());
        //If loop to determine if factorial possible
        tempvalue = 1;
        for (i = value; i > 0; i--) {
            tempvalue *= i;
        }
        //Output the results
        $('#ex2Out').text(value + " Factorial is: " + tempvalue);

    });

    $('#btnEx3').click(function () {
        //Retrieve the Numbers
        var fizz = Number($('#ex3num1').val());
        var buzz = Number($('#ex3num2').val());
        var fizzbuzz = '';

        if (fizz < 1) {
            fizz = 1;
            alert("Value less than 1, please try again.");
        }
        else if (fizz > 100) {
            fizz = 100;
            alert("Value greater than 100, please try again.");
        }
        else if (buzz < 1) {
            buzz = 1;
            alert("Value less than 1, please try again.");
        }
        else if (buzz > 100) {
            buzz = 100;
            alert("Value greater than 100, please try again.");
        }
        //This is where the magic happens!
        //output results straight from the for/if loops
        //compose a string, then at the end display the results
        for (var i = 1; i <= 100; i++) {
            if (i % fizz === 0 && i % buzz === 0) {
                //Look for the condition fizz and buzz together, a multiple of fizz and buzz together
                fizzbuzz = fizzbuzz + "Fizz-Buzz, ";
            }
            else if (i % fizz === 0) {
                //Look for the condition of fizz, a multiple of the first number selected
                fizzbuzz = fizzbuzz + "Fizz, ";
            }
            else if (i % buzz === 0) {
                //Look for the condition of buzz, a multiple of the second number selected
                fizzbuzz = fizzbuzz + "Buzz, ";
            }
            else {
                fizzbuzz = fizzbuzz + i + ", ";
            }
            var fb = fizzbuzz;
            fb = fb.slice(0, -2);
            $('#ex3Out').text(fb);
        }

    });

    //Exercise 4 button click (Palindrome)
    $('#btnEx4').click(function () {
        // retrieve word
        var palindrome = $('#ex4word').val();
        //take spaces out of word
        palindrome = palindrome.replace(/\s/g, '');

        //using built in functions I will reverse the word or phrase
        var test = palindrome.split('');
        var test2 = test.reverse();
        test2 = test2.join('').toLowerCase();
        palindrome = palindrome.toLowerCase();

        if (test2 === palindrome) {
            $('#ex4Out').text("This word is a Palindrome");
        }
        else {
            $('#ex4Out').text("These word is NOT a Palindrome");
        }
    });

    //This section is the section that limits elements to numbers or non-negative numbers only
    //Example 1
    var number = document.getElementById('ex1num1');
    // This is for Example 1 number 1
    number.onkeydown = function (e) {
        if (!(e.keyCode > 95 && e.keyCode < 106
            || e.keyCode > 47 && e.keyCode < 58
            || e.keyCode === 8
            || e.keyCode === 189
            || e.keyCode === 109)) {
            return false;
        }
    };
    var number1 = document.getElementById('ex1num2');
    // This is for Example 1 Number 2
    number1.onkeydown = function (e) {
        if (!(e.keyCode > 95 && e.keyCode < 106
            || e.keyCode > 47 && e.keyCode < 58
            || e.keyCode === 8
            || e.keyCode === 189
            || e.keyCode === 109)) {
            return false;
        }
    };
    var number2 = document.getElementById('ex1num3');
    // This is for Example 1 Number 3
    number2.onkeydown = function (e) {
        if (!(e.keyCode > 95 && e.keyCode < 106
            || e.keyCode > 47 && e.keyCode < 58
            || e.keyCode === 8
            || e.keyCode === 189
            || e.keyCode === 109)) {
            return false;
        }
    };
    var number3 = document.getElementById('ex1num4');
    // This is for Example 1 Number 4
    number3.onkeydown = function (e) {
        if (!(e.keyCode > 95 && e.keyCode < 106
            || e.keyCode > 47 && e.keyCode < 58
            || e.keyCode === 8
            || e.keyCode === 189
            || e.keyCode === 109)) {
            return false;
        }
    };
    var number4 = document.getElementById('ex1num5');
    // This is for Example 1 Number 5
    number4.onkeydown = function (e) {
        if (!(e.keyCode > 95 && e.keyCode < 106
            || e.keyCode > 47 && e.keyCode < 58
            || e.keyCode === 8
            || e.keyCode === 189
            || e.keyCode === 109)) {
            return false;
        }
    };
    //Example 2
    var number5 = document.getElementById('ex2num1');
    // This is for Example 2 Number 1
    number5.onkeydown = function (e) {
        if (!(e.keyCode > 95 && e.keyCode < 106
            || e.keyCode > 47 && e.keyCode < 58
            || e.keyCode === 8)) {
            return false;
        }
    };
    //Example 3
    var number6 = document.getElementById('ex3num1');
    // This is for Example 3 Number 1
    number6.onkeydown = function (e) {
        if (!(e.keyCode > 95 && e.keyCode < 106
            || e.keyCode > 47 && e.keyCode < 58
            || e.keyCode === 8)) {
            return false;
        }
    };
    var number7 = document.getElementById('ex3num2');
    // This is for Example 3 number 2
    number7.onkeydown = function (e) {
        if (!(e.keyCode > 95 && e.keyCode < 106
            || e.keyCode > 47 && e.keyCode < 58
            || e.keyCode === 8)) {
            return false;
        }
    };

    $(".modal-header").load(function () {
            SyntaxHighlighter.highlight();
    });
});