window.onload = function () {
  let container = document.getElementById('animal-container');
  let btn = document.getElementById('btn');
    btn.addEventListener('click', async function(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json();
      let usersData = [];
      for(let user of users){
        usersData.push(user)
      }
       processUsers(usersData)
    })
  
    function processUsers(users){
      var htmlString = '';

      for(let i = 0; i < users.length; i++){
        htmlString += `<p>The user name ${users[i].name} email is ${users[i].email}.</p>`;
      }
      container.insertAdjacentHTML('beforeend', htmlString)
    }

}