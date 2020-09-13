<!--* NOTE! -->
<!--* Use Ctrl+K V to preview the markdown file in VS code-->
<!--* How to write an effective markdown: https://medium.com/echohub/write-simple-and-effective-markdown-tips-8e01fdddd70 -->

# SysAdmin Task-1 Portal


### Tech Stack
#### Front-End
- HTML
- CSS
- JavaScript
- Bootstrap
#### Back-End
- Nodejs  
- Express  
- MongoDB  
(For other dependencies check out package.json file)  

*** 
To run this Web Application on your local device,
- Fork or Clone this repository
- Create a **.env** folder with environment variables **DATABSE_URL** assigned to your MongoDB Atlas or Local Data Base URL 
- Use command **npm install** to get the **node_modules** folder with the required dependencies
- Run the script **npm run devStart** or (any other script of your choice by modifying the package.json file).
- Open **http://localhost:3000** (or set the port of your choice in the app.js file)
***

### Test Users
(for my Cloud Data-Base , will depend on what you keep) 

name: ADMIN  
email : admin@gmail.com  
pass : Stored in an encrypted form in the DB  <!--onlyadminknowsthispassword -->
type - ADMIN  
  
name: TESTUSER   
email : testuser@gmail.com  
pass : Stored in an encrypted form in the DB  <!--onlyadminknowsthispassword -->
type - NON-ADMIN (BASIC)  

***
#### Contributors
- Front-End: [Simha](https://github.com/Simha55) & [Shuvam](https://github.com/coffeeCoder69)
- Back-End: [Shaun](https://github.com/ShadowRnG) & [Vasudev](https://github.com/kinivasu)

