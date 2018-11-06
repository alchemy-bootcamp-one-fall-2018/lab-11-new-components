#102918 Lecture Notes 
##New Topics
* Es6 2015, 2016, 2017 refers to the propsals that made it thru the process
* ESNext on deck 

JS ES6 recent builds have built in Module system with more explicit control of variable to import & export 
It also gives us the ability to keep the global scope vars to a minimum.
###var vs. const and let
 ...cause var is function scopped but const and let are blocked scopped.
* cannot reassign const (but you can update the value
* start by defining your variable as const like for arrays, strings 
* switch to let should instantiate a for loop
* use const in the venue of getElementByID is you don't need to make your own method/functions think about this with respect to forms 

###Template Literals
Instead of:
const greeting = `hello ${name}!`;
these are tolerant of multiline spaces where as other multistrings are not. 

###Ternary
Statements perform actions 
Expressions return values
####Conditional Expressions:
syntax | <condition> ? <true-part> : <false-part>
        x >= ? 'positive' : 'negative' |


##Object Literals {key:value}
* describes data
* property dependent
* utility objects - methods that can operate on a state
    1. components data, DOM, & events
    2. service apis - fetch and store data
* Use object literal to gather the data and track it
##CSS considerations for app
* heading, section {padding: 10px} <--creates justified margins so all text is aligned from the same place
* *{box-sizing: border-box }
* Using an inline flex on the fruit cards to keep them flowing in a continuous row

####Given: 
sayHello(){}      =    sayHello: function(name){return 'hello' + name;}};

Rather than having to getElementByID on individual inputs, you can use get ALL form elements by const elements = form.elements;
const fruit = {name: elements.name.value, color: elements.color.value, image:elements.image.value};//get teh values from te form control.   You also have a form.reset which can clear the text inputs from previous entry on submit.


1.Create a template element 
2.assign innHTML property
3.Return the content property which is the DOM as a DocumentFragment
#####He keeps talking about "doing component arch"

to add an additional fruit/list-item/task, etc use method appendChild(dom) 

for the api 
JSON.stringify (obj) --> converts an array to a string 
JSON.parse --> converts the string back to an object
JSON is the utility to turn data into local storage

To remove some kinda of array element:
get's it's index then use splice to take it out of the array














#Digression from Last week's Lab
##Guess or Hangman Lab post Delivery Notes
click event vs submit event: onSubmit supercedes onClick so if you write say a whole bunch of code to validate a user decision and bundle it on an onClick you make it harder than say using an onSubmit which you can add just a couple functions to to prevent fringe cases like not entering in data before submit, and with form controls make sure the user only uses letters and not numbers 

####One group used this for testing correct input:
input.value.charCodeAt

####Regex expression were mentioned: 
/[a-zA-Z]/.test(char)

##Else If the user input is already in the wrong letters array, fire and alert you already entered and stop the turnsTotal engine using .includes()  lie say does array 1 have and element inside it?
console.log(array1.includes(2));
// expected output: true
You can use this for validation of repeated wrong answers

##code review of Paige & me's lab:
break to break out of a loop
anytime you need to change a thing in the DOM stratagize the what and the how 
arrays can not have an innerHTML
design first vs data first data first leads to a lot of rework & thrashing
inline block vs block with this is gonna look different. 

  

###




*complete status which transduces a done statement to a true
*
*