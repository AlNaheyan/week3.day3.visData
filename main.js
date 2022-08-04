firstOne = data.results[0]; 

let Name = document.getElementById('name');
Name.innerHTML = `Name: ${firstOne.name.title}. ${firstOne.name.first} ${firstOne.name.last}`;

let Gender = document.getElementById('gender')
Gender.innerHTML = `Gender: ${firstOne.gender}`; 

let Age = document.getElementById('age')
Age.innerHTML = `Age: ${firstOne.dob.age}`; 

let PhoneNumber = document.getElementById('phone')
PhoneNumber.innerHTML = `Phone Number: ${firstOne.phone}`; 

let Email = document.getElementById('email')
Email.innerHTML = `Email: ${firstOne.email}`; 

let Photo = document.getElementById('photo')
Photo.src = firstOne.picture.large;
