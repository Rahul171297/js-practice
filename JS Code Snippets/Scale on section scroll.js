// Scroll effect for the Hero section content
const containerHeight = document.getElementById("main-container").clientHeight;
const blockHeight = document.getElementsByClassName("animated_hero")[0].clientHeight;
const blockPer = Math.round((blockHeight / containerHeight) * 100);
const headerEle = document.getElementsByClassName("animated_cont")[0];
const headerImgEle = document.getElementsByClassName("animated_img")[0];
const headerImg = headerImgEle ? headerImgEle.getElementsByTagName("img")[0] : null;

headerEle.setAttribute("style","opacity:1; transform:scale(1) translateY(0%); transition: all cubic-bezier(0.59, 0.08, 0.88, 0.15);");
headerImg && headerImg.setAttribute("style","object-position: 50% 50%; transform:scale(1); transition: all cubic-bezier(0.59, 0.08, 0.88, 0.15);");

document.addEventListener("scroll", () => {
	let scrollPer = (window.scrollY / containerHeight) * 100;
	let blockScroll_per = (scrollPer / blockPer) * 100;
	if (scrollPer <= blockPer) {
		let opa = 1 - blockScroll_per / 100;
		let tran = (200 / 100) * blockScroll_per;
		let sca = (15 / 1000) * blockScroll_per + 1;
		let scal = (10 / 1000) * blockScroll_per + 1;
		
		headerEle.setAttribute("style",`opacity:${opa}; transform:scale(${sca}) translateY(${tran}%); transition: all cubic-bezier(0.59, 0.08, 0.88, 0.15);`);
		headerImg && headerImg.setAttribute("style",`object-position: 50% 50%; transform:scale(${scal}); transition: all cubic-bezier(0.59, 0.08, 0.88, 0.15);`);
	} else {
		headerEle.setAttribute("style","opacity:0; transform:scale(1.5) translateY(200%); transition: all cubic-bezier(0.59, 0.08, 0.88, 0.15);");
		headerImg && headerImg.setAttribute("style","object-position: 50% 50%; transform:scale(2); transition: all cubic-bezier(0.59, 0.08, 0.88, 0.15);");
	}
});