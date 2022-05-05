function test() {
  console.log("start testing");

  let name = "Seth LaFountain";
  console.log("name");
  console.log(name);
}
function sayHi(name, lastName) {
  console.log("Hi " + name + " " + lastName);
}
function sum(num1, num2) {
  if (!num1) {
    //if num1 does NOT exist
    console.log("Error: Num1 cannot be empty");
    return; //STOP the execution, the return here is not returning a value, its just a way to get out of the function and end it.
  }
  let result = num1 + num2;
  return result;

  //after a function returns, nothing gets executed after that
}

function arrayTest(){
    //arrays are ways to hold multiple values within a single variable
    let nums=[1,3,451,123,3456,1234,457,967,235,235,567,2345,1,234,567,6789
    ];

    //get a value by the index (position)
    console.log(nums[0]); // 0 = first
    console.log(nums);

    //iterate over the array
    for(let i=0; i<nums.length;i++){
        let num = nums[i];
        console.log(num);
    }

    console.log("------------------------");

    // 1: print numbers lower than 500
        //travel array first (for loop)
    for(let i=0;i < nums.length; i++){
        let num = nums[i];
        if(num<500){
            console.log(num)
        }
    }
console.log("-----------------------");
    // 2: print the numbers from 0 to 20
    // for(let i=0; i<nums.length; i++){
    //     let num = nums[i];
    //     if (num>=0 && num<20){
    //         console.log(num);
    for(let i=0; i<21; i++){
        console.log(i);
    }

    // 3: print all numbers from 1-21 except 13
    for(let i=1;i<22;i++){
        if (i !=13){ //this reads as if I is not equal to 13
            console.log(i);
        }
    }

    //4: except 13 and 7
    for(let i=1;i<22;i++){
        if (i !=13 && i !=7){
            console.log(i);
        }
    }

    //5: print the sum of all numbers in the array
    //start with a total (variable) of 0, then travel the array, and add each element to your running total.
    let total=0;
    for(let i=0;i<nums.length;i++){
        let num = nums[i]; //gets every number in the array
        total = total + num;
    }
    console.log(total); //keeping this inside the for loop will show each consecutive total instead of the final total
    
}

function init() {
  console.log("Intro Page");

  //hook events

  //load data
  test();

  sayHi("Joseph"); // Hi Joseph
  sayHi("Rose");

  let myName = "Seth";
  sayHi(myName, "LaFountain");

  let result = sum(21, 21);
  console.log(result);

  arrayTest();
}

//we should not have commands or functions being placed here that would end up being executed before the HTML is fully rendered, this could cause errors

// when the browser finish rendering the html
//execute init function
window.onload = init; //we aren't using the () at the end of init here because that would execute the function immediately.
