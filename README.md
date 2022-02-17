# SIT725 - Group Project: Robotics_Hut

## Introduction

Hello there! This is our group project, which is a web application called "The Robotics Hut". 
This website will serve as an educational platform for all sorts of Robotics Projects.
This project was developed with Nodejs, MongoDB Database, and the MailGun Platform. 

## Features:

If you want to have a look of the features which the web application 
have explained over my video pitch. Please have a look at my link
from [YouTube](https://www.youtube.com/watch?v=vNkUR0e0r0k).

## Software Required:

The following program works with the help of the following software platforms: 
1. We have developed our code using the [Visual Studio 2019](https://visualstudio.microsoft.com/downloads/). Please follow the instructions from [this link](https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2022#:~:text=1%20Make%20sure%20your%20computer%20is%20ready%20for,button%20to%20get%20started%20developing%20with%20Visual%20Studio.).
2. We have used [Nodejs](https://nodejs.org/en/download/) for our Server Framework. Please refer to [this link](https://www.geeksforgeeks.org/installation-of-node-js-on-windows/#:~:text=Installation%20of%20Node.js%20on%20Windows%201%20Installing%20Node,your%20PC.%20Double%20click%20on%20the%20.msi%20installer.) for the installation process. 
3. Please also install [GitHub Desktop](https://desktop.github.com/) for making things much much easier! This will automatically provide you the download for your PC.
4. For saving your Dockers, please download [Docker Desktop](https://hub.docker.com/). In case you are new to the platform, make sure to sign up from the very same link!
5. Finally, also join the MailGun Platform to avail their Automated Email Service using their [Sign Up Link](https://signup.mailgun.com/new/signup). 

## Instructions:

Please follow these instructions to set up your repository on your device:
1. Clone the Repository by clicking the "Code" Button in the top corner.
2. Click on the "Open with GitHub Desktop" which will automatically link the repository to the application. Please also refer [this link](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop) as well.
3. Go to Documents --> GitHub (A folder will be created automatically on Installation). The repository you are looking for will be available.
4. Go into the repository and right-click for selecting the "Open with Visual Studio" option. This will open up the application in your Visual Studio.
5. Once open, please ensure that you have the the Solutions Explorer Tab present on the right of your screen.
6. If you don't have the tab present, please click from the Menubar on the top, "View" --> "Solution Explorer".
7. You would also need a Terminal, so again from the Menubar on the top, "View" --> "Terminal". A window should open from the bottom of the screen.
8. For setting up the MailGun Platform, please refer to this link under the ["Creating mail.js" Heading](https://dev.to/umekalu/submit-a-form-and-receive-email-using-express-nodejs-nodemailer-and-mailgun-complete-guide-nl1). Add in your API Key and Sandbox Domain as directed from this link.

## Installing Dependencies on the Terminal
Now you are to install a couple of dependencies for your project to be fully functional. Please refer to the commands for the Terminal below:

```bash
  npm install --save body-parser chai express express-session
  npm install --save fs-extra mocha mongodb node-fetch 
  npm install --save nodemailer nodemailer-mailgun-transport nodemon
  npm install --save request
```

After Installation, please ensure from your Package.json file for the Dependencies. This is how it will look (versions can differ) like:

```bash
  "dependencies": {
    "body-parser": "^1.19.0",
    "chai": "^4.3.4",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "fs-extra": "^10.0.0",
    "mocha": "^9.1.4",
    "mongodb": "^4.3.0",
    "node-fetch": "^3.2.0",
    "nodemailer": "^6.7.2",
    "nodemailer-mailgun-transport": "^2.1.3",
    "nodemon": "^2.0.15",
    "request": "^2.88.2"
  }
```

## Creating scripts for the Terminal:
On the same file, we will now create a few scripts from the commands we already have (kinda...). 
Please ensure that these changes are available on the Package.json file:

```bash
  "scripts": {
    "start": "node server.js",
    "start-dev": "nodemon server.js",
    "test": "mocha --reporter spec"
  }
```

We can now use these commands to run our application. This is how it is done:

```bash
  npm run start
```

In case you want to test the application. This is the command for the Terminal:

```bash
  npm run test
```

In case you want to contribute the application. This is the command for the Terminal:

```bash
  npm run start-dev
```

## Dockerize:
Now, let's proceed to the Dockerfile and now we will run the following commands to create an image from our dockerfile:

```bash
  docker build -t [name_of_your_docker]
```

Once the image gets created successfully, please test the image by running it with this command:

```bash
  docker run -d -p 6000:8080 [name_of_directory]
```

## Test your Application:
Now you will finally run the command for starting your application. Please head afterwards to the 
browser and type in the URL:

```bash
  http://localhost:8080/
```


## License

This is the license we have for our Repository

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [Muhammad Sohaib bin Kashif](https://github.com/M-S-Kashif)
- [Shahida Siddique](https://github.com/siddique-shahida)
- [Anika Farha](https://github.com/anikafarha)


