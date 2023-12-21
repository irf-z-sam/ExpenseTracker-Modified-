let form=document.querySelector("form");
let main=document.querySelector(".main");
let call=document.querySelector("#cAll");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
   let expenseamount=event.target.expenseamount.value;
   let description=event.target.description.value;
   let category=event.target.category.value;

   let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
   userData.push({
    'expenseamount': expenseamount,
    'description': description,
    'category': category,
})

localStorage.setItem("userDetails",JSON.stringify(userData));
event.target.reset();
console.log(userData);
displayData();
});

//displayData();

let displayData=()=>{
    let userData=JSON.parse(localStorage.getItem("userDetails")) ?? []; 
   // console.log(userData);
   let finalData='';
   userData.forEach((element,i) => {
   // console.log(element);
    finalData+=`<div class="items">
    <span onclick='removeData(${i})'>&times;</span>
    <h5>Expense</h5>
    <div>${element.expenseamount}</div>

    <h5>Description</h5>
    <div>${element.description}</div>

    <h5>Category</h5>
    <div>${element.category}</div>
</div>`
   });
  // console.log(finalData);
  main.innerHTML = finalData;
}

let removeData=(index)=>{
    // alert(index);
    let userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
    // console.log(userData);
    userData.splice(index,1);
    localStorage.setItem("userDetails",JSON.stringify(userData));
    displayData();
 }
 call.addEventListener("click",()=>{
     localStorage.clear("userDetails");
     displayData();
 })
 
 displayData();