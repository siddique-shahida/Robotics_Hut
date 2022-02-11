//Creating an array of Dummy Blogs...
let B1 = {
	ID: 1,
	title: "Blog Title 1",
	author:"Sohaib",
	category:"Dummy",
	image:"/images/Blog.jpg",
	text: "This is our dummy text for our Blog",
	link: "/blog1.html"
};
let B2 = {
	ID: 2,
	title: "Blog Title 2",
	author: "Annie",
	category: "Dummy",
	image: "/images/MicrosoftTeams-image-(3).png",
	text: "This is the second Blog",
	link: "/blog2.html"
};
let B3 = {
	ID: 3,
	title: "Blog Title 3",
	author: "Sid",
	category: "Dummy",
	image: "/images/MicrosoftTeams-image-(7).png",
	text: "This is the third Blog",
	link: "/blog3.html"
};
let B4 = {
	ID: 4,
	title: "Blog Title 4",
	author: "Sid",
	category: "Dummy",
	image: "/images/MicrosoftTeams-image-(8).png",
	text: "This is the fourth Blog",
	link: "/blog4.html"
};
dummyBlogs = [B1, B2, B3, B4];


/*Functions involved in our Home Page...*/

let requestDummyBlogs = (blogs) => {
	//Append all the dummy blogs from here.
	let content = [];
	blogs.forEach(blog => {
		console.log(blog);
		content.push('<div class="col">' +
			'<div class="card">' +
			'<img src="' + blog.image + '" class="card-img-top" alt="...">' +
			'<div class="card-body">' +
			'<h5 class="card-title">' + blog.title + '</h5>' +
			'<p class="card-text">Created by: ' + blog.author + '</p>' +
			'<div class="card-action">' +
			'<a href="' + blog.link + '">Read Now</a>' +
			'</div></div></div></div>');
	});
	$("#blogs-generate").append(content);
}


$(document).ready(function () {
	console.log("Creating cards on the blogs-generate ID...")
	requestDummyBlogs(dummyBlogs);
})