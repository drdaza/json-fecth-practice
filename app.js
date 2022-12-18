const Users = {
    categories: [],
    
  };
fetch('https://jsonplaceholder.ir/users')
  .then(res => res.json()) 
  .then(data => {
    console.log(data);
    printTitles(data);
    console.log(Users.categories);
    printUsers();
    
    });
  function printTitles(data){
    data.forEach(element => {
      if(Users.categories.length <20){
        Users.categories.push(element)
        
      }
      
    });   
}
function printUsers(){
  let container = document.getElementById('user-table');
    Users.categories.forEach(element => {
    container.innerHTML += /* html */  `<tr>
                                        <td>${element.name}</td>
                                        <td>${element.id}</td>
                                        <td>${element.email}</td>
                                      </tr>`
  })
} 
function getUser(){
  let button = document.getElementById('search-btn');
  
  button.addEventListener('click', ()=>{
    let input = document.getElementById('input-request').value;
    console.log(input);
    fetch(`https://jsonplaceholder.ir/users/${input}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.id);
      let space = document.getElementById('info-answer');
      space.innerHTML += /* html */`
        <h4>name user</h6>
        <p>${data.name}</p>
        <h4>nuber of phone user</h6>
        <p>${data.phone}</p>
                                    `
    })
  })
}

getUser();
