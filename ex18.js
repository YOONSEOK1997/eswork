var numbers=[1,2,3,4,5]

var processed=numbers.map(funcition(num){
    return num*num;
});

console.log(processed);

var colors=['red','green','blue','orange'];
colors.map((color,index)=>{
    console.log(color,index);
})