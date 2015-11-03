var doc=document.querySelector('header nav ul li a');
var pop=document.querySelector('.popup');
var count=1;
var body=document.getElementById("wrap");
doc.addEventListener("click",function () {
	// body..

	count++;
	popup("Great!, i am currently looking for internships, shoot me a mail at hello@sarabpreet.in :) ");
});


pop.addEventListener("click",function () {

	pop.style.display="none";
	doc.innerHTML="hire";
	pop.className="popup";
	body.style.opacity="1";
	count--;

});




function popup(abc){
pop.innerHTML=abc;

if(count%2==0) {


	pop.style.display="block";
	doc.innerHTML="close";
	pop.className="popup ani";
	body.style.opacity=".2";

}

else {

pop.style.display="none";
doc.innerHTML="hire";
pop.className="popup";
	body.style.opacity="1";


}


}