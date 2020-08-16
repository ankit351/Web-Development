const age = 12;
if(age <=8)
{
    console.log("Child");
}
else if(age >= 20)
{
    console.log("Adult");
}
else
{
    console.log("Teen")
}
switch (age) {
    case 12:
        console.log("Child");
        break;
    case 20:
        console.log("Adult");
        break;
    default:
        console.log("Teen")
        break;
}