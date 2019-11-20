
 let Counter = 0;
 let Counter2 = 0;


// var div = document.createElement('div');
// div.id='Cat1';
//var img = document.createElement("img");
//  img.src='img/cat1.jpg';
// var Count = document.createElement("h3");
// Count.textContent='Number Of Click: '+ Counter;
// var name1 = document.createElement("h3");
// name1.textContent='Cat1';
// div.appendChild(img);
// div.appendChild(Count);
// div.appendChild(name1);


// var div2 = document.createElement('div');
// div2.id='Cat2';
//  var img2 = document.createElement("img");
//  img2.src='img/cat2.jpg';
// var Count2 = document.createElement("h3");
// Count2.textContent='Number Of Click:  '+ Counter2;
// var name2 = document.createElement("h3");
// name2.textContent='Cat2';
// div2.appendChild(img2);
// div2.appendChild(Count2);
// div2.appendChild(name2);




// var Perant = document.getElementById("Catsimg");
// Perant.appendChild(div);
// Perant.appendChild(div2);
// /////  jQuery way

// $('#Cat1').click(function(e) {

//     Counter++
//     console.log(Counter);
//     Count.textContent='Number Of Click: '+ Counter;
//     //the element has been clicked... do stuff here
//   });

//   $('#Cat2').click(function(e) {

//     Counter2++
//     console.log(Counter2);
//     Count2.textContent='Number Of Click:  '+ Counter2;
//     //the element has been clicked... do stuff here
//   });

var Perant = document.body.innerHTML = '';

var nums = [1];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var div = document.createElement('div');
    
    var img = document.createElement("img");
    img.src='img/cat'+num+'.jpg';
    
        var board = document.createElement('div');
        board.className = "blah";
    
        document.getElementById('board').appendChild(board);
    
    var Count = document.createElement("h3");
    Count.textContent='Number Of Click: '+ Counter;
    var name = document.createElement("h3");
    name.textContent='Cat1';
    div.appendChild(img);
    div.appendChild(Count);
    div.appendChild(name);
// img2.src='img/cat2.jpg';
    // ... and when we click, alert the value of `num`
    div.addEventListener('click', (function() {
       
        Counter++
    })(num));

    Perant.appendChild(div);
};