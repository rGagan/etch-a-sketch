const heading = document.querySelector('h1')
heading.style.textAlign="center";
heading.style.paddingTop="20px";

const container = document.querySelector(".container")
container.style.width="500px"
container.style.height="500px"
container.style.display="grid";
container.style.border="1px solid"
container.style.margin="50px auto"
container.style.marginTop="30px"

const button = document.querySelector('button');
button.style.marginLeft="40px"
button.style.padding="6px"

function grid(dimension=16)
{
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }

    for(let i =1; i<=dimension; i++)
    {
        for(let j=1; j<=dimension; j++)
        {
            const content = document.createElement('div');
            content.classList.add('content');
            content.style.border="1px solid"
            container.appendChild(content);
        }
    }
    
    container.style.gridTemplateRows=`repeat(${dimension}, 1fr)`
    container.style.gridTemplateColumns=`repeat(${dimension}, 1fr)`

}
// const content=document.querySelectorAll(".content")
// console.log(content)
// content.forEach(cont=>{
//     console.log(cont)
//     cont.addEventListener('mouseenter', ()=>{
//     cont.style.backgroundColor="black";
// })
// })

const changeColor = (e)=>
{
    if(e.target.className==="container")
        return;
    e.target.style.background="black";
}

container.addEventListener('mouseover', changeColor)

button.addEventListener('click', ()=>{
    let dim = prompt("Enter the number of cols/rows:");
    if(dim>=100)
        dim= prompt("Please enter a number less than 100:");
    grid(dim);
})

document.addEventListener('readystatechange', ()=>grid(16));