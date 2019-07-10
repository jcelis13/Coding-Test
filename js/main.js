var btn = document.getElementById("btn").addEventListener("click", getPost);
var con = 0;
var div = document.getElementById("card");

var holder = 0;
var tbody = document.getElementById("tbody");
var user_btn =  document.getElementById("user_btn").addEventListener("click", getUser);

function getPost(){
	fetch('https://jsonplaceholder.typicode.com/photos')
	.then((res)=>{
		return res.json();
	})
	.then((post)=>{
		for(let index = 0; index < 1; index++){
			div.innerHTML+=`
			<div class="card col-3 m-1 mx-auto">
				<img class="card-img-top" src="${post[con].thumbnailUrl}">
					<div class="card-body">
						<h5 class="card-title">${post[con].id}</h5>
						<p class="card-text">${post[con].title}</p>
					</div>
			</div>



			`
			

		con=con+1;

		}
	})
}
function getUser(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then((res)=>{
		return res.json();
	})
	.then((post)=>{
		for(let index = 0; index < 1; index++){
			tbody.innerHTML+=`
						<tr>
							<th>${post[holder].id}</th>
							<th>${post[holder].name}</th>
							<th>${post[holder].username}</th>
							<th>${post[holder].email}</th>
						</tr>
			`
			holder = holder+1;
		}
		
	})
}
