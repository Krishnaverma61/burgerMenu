

const hamburger = document.querySelector(".lines");
const content = document.querySelector(".content");
const slideContent = document.querySelector(".slide-menu");
const closer = document.querySelector(".closer");

hamburger.addEventListener('click' , function(){
	content.style.marginLeft = "250px";
	slideContent.style.width = "250px";
});

closer.addEventListener('click' , function(){
	content.style.marginLeft = "0px";
	slideContent.style.width = "0px";
});


