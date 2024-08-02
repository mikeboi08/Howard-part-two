let username = prompt("Welcome to GC mini golf! What is your name?")
console.log(username)
let number_of_holes = prompt("Hi, " + username + ". Would you like to play 3 or 6 holes?")
while (number_of_holes != 3 && number_of_holes != 6) {
    number_of_holes= Number(prompt("do you want want to play 3 or 6 holes?"))
}  
total_putts=0
let currenthole=0
for (let step = 0; step < number_of_holes; step++){
     currenthole = step+1
total_putts += Number(prompt("How many putts for hole " + currenthole + "? (par: 3)"))
console.log("current total: " + total_putts )
}
console.log(total_putts)
let final_score =  Number(total_putts-(number_of_holes*3))
console.log(final_score)
if (final_score >0){
    
    console.log("Nice try," + username +"... Your total par was: +" + final_score)
} 
else if (final_score ===0){
    console.log("Good game," + username + "! Your total par was: " + final_score)
} 
else if (final_score < 0){
    console.log("Great job," + username + "! Your total par was: " + final_score)
} 