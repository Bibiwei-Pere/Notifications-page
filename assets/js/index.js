const mark = document.getElementById("mark");
const angela = document.getElementById("angela");
const jacob = document.getElementById("jacob");
const button = document.getElementById("request");

button.addEventListener("click", getinput);

function getinput(){
    mark.style.borderColor ='hsl(0, 0%, 86%)'
    angela.style.borderColor ='hsl(0, 0%, 86%)'
    jacob.style.borderColor ='hsl(0, 0%, 86%)'

    const myLabel = document.querySelector('mark');
    const myLabe2 = document.querySelector('angela');
    const myLabe3 = document.querySelector('jacob');

    myLabel.style.color = 'hsl(0, 0%, 8%)'
    myLabe2.style.color = 'hsl(0, 0%, 8%)'
    myLabe3.style.color = 'hsl(0, 100%, 8%)'
}