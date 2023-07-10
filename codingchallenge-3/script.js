/*There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/


// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const KoalasScore1 = 88;
// const KoalasScore2 = 91;
// const KoalasScore3 = 110;

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;
// const KoalasScore1 = 109;
// const KoalasScore2 = 95;
// const KoalasScore3 = 123;

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;
// const KoalasScore1 = 109;
// const KoalasScore2 = 95;
// const KoalasScore3 = 106;

// const avgDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const avgKoalas = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
// console.log(avgDolphins, avgKoalas);

// if(avgDolphins > avgKoalas){
//     console.log("Dolphins won the match");
// }else if(avgDolphins < avgKoalas){
//     console.log("koalas won the match");
// }else if (avgDolphins === avgKoalas){
//     console.log('both teams have same average score');
// }

//bonus-1 

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;
// const KoalasScore1 = 109;
// const KoalasScore2 = 95;
// const KoalasScore3 = 123;

// const avgDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const avgKoalas = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
// console.log(avgDolphins, avgKoalas);

// if(avgDolphins > avgKoalas && avgDolphins >= 100 ){
//     console.log("Dolphins won the match");
// }else if(avgDolphins < avgKoalas && avgDolphins >= 100){
//     console.log("koalas won the match");
// }else if (avgDolphins === avgKoalas){
//     console.log('both teams have same average score');
// }


//bonus-2
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;
const KoalasScore1 = 109;
const KoalasScore2 = 95;
const KoalasScore3 = 106;

const avgDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const avgKoalas = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
console.log(avgDolphins, avgKoalas);

if(avgDolphins > avgKoalas && avgDolphins >= 100 ){
    console.log("Dolphins won the match");
}else if(avgDolphins < avgKoalas && avgKoalas >= 100){
    console.log("koalas won the match");
}else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100){
    console.log('both teams won');
}else {
    console.log('no one wins the trophy');
}
