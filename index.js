window.onload = function () {
  let container = document.getElementById('animal-container');
  let btn = document.getElementById('btn');
    btn.addEventListener('click', async function(){
      let clicked = true;
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let users = await response.json();
      let usersData = [];
      
      for(let user of users){
        usersData.push(user)
      }
      
      if(clicked){
        processUsers(usersData);
        btn.classList.add("hide-me");
      }
       
    })
  
    function processUsers(users){
      var htmlString = '';

      for(let i = 0; i < users.length; i++){
        htmlString += `<p>${users[i].name} username is ${users[i].username} and lives in ${users[i].address.street} street ${users[i].address.city} city</p>`;
        
      }

      container.insertAdjacentHTML('beforeend', htmlString)
    }

}