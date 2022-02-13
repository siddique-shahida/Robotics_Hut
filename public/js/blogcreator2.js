/*Functions involved in our Blogs Page...*/

//Creating a new HTML File for the Blog to Link with...
let createNewBlogPage = (blog) => {
	//Sending the new newblog to the server to the Controller Layer...
	$.ajax({
		url: '/student/newblog',
		contentType: 'application/json',
		data: JSON.stringify(blog),
		type: 'POST',
		success: function (result) {
			console.log("Project submitted for the DB...");
		}
	})
}

//Creating a new Blog Card...
let createNewBlogCard = (blog) => {
	let content = '<div class="col">' +
		'<div class="card">' +
		'<img src="' + blog.image + '" class="card-img-top" alt="...">' +
		'<div class="card-body">' +
		'<h5 class="card-title">' + blog.title + '</h5>' +
		'<p class="card-text"> Created by:' + blog.author + '</p>' +
		'<div class="card-action">' +
		'<a href="' + blog.link + '">Read Now</a>' +
		'</div></div></div></div>';

	$("#newblogs-generate").append(content);

	//Once the card is made, we will create a new file as well...
	console.log(blog);
	createNewBlogPage(blog);
}

//Function for adding a new project...
let newBlog = () => {
	let ID = Math.floor(Math.random() * 100) + 4;
	let author = $('#blog-name').val();
	let title = $('#blog-title').val();
	let category = "Newly Published"
	let image = $('#blog-image').val();
	let description = $('#blog-description').val();
	let link = "/newblogs/blog" + ID + ".html";


	//Sending a new project to the website...
	let newblog = { ID, author, title, category, description, image, link };
	console.log("New Project created: ", newblog.ID, newblog.author, newblog.link, newblog.category);

	//Ajax Call to the Database...
	$.ajax({
		url: '/student/blogs',
		contentType: 'application/json',
		data: JSON.stringify(newblog),
		type: 'POST',
		success: function (result) {
			console.log("Project successfully submitted...");
		}
	});

	alert("Blog successfully submitted...");

	//Creating a new blog card...
	createNewBlogCard(newblog);
};


//Function for requesting all blogs from the MongoDB database...
let requestAllDBBlogs = () => {
	$.get('/student/blogs', (blogs) => {
		if (blogs.length > 0) {
			console.log("All blogs found from DB...")
			console.log(blogs);

			//Append all the DB blogs from here.
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
			$("#newblogs-generate").append(content);
			console.log("All Blogs appended from MongoDB...");
		}
	});
}

$(document).ready(function () {
	console.log("Creating cards on the blogs-generate ID...");
	requestAllDBBlogs();
})