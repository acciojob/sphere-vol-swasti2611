function volume_sphere() {
    //Write your code here
  let radius=document.getElementById("radius"). value;
	let volume=document.getElementById("volume")
	let result=(4/3)*(3.14)*radius*radius*radius;
	volume.value=result;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
