# Burger

[Burger](https://radiant-peak-47487.herokuapp.com/) 

**Object**

*The Application [Burger](https://radiant-peak-47487.herokuapp.com/) hosted on Heroku is created has a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Therefore, the application follows the MVC design pattern; uses Node and MySQL to query and route the data in the app, and Handlebars to generate the HTML. Buger `Eat-Da-Burger!` is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page `waiting to be devoured.` Each burger in the waiting area has a `Devour it! button`. When the user clicks it, the burger will move to the right side of the page. The app will store every burger in a database, whether devoured or not.*

`index handlebars Page`

<a href="#"><img src="https://github.com/fpinder/burger/blob/master/public/assets/images/eat_the_burger_Readme.JPG" alt="Home Page"></a>

*The application also has an error checking process `(express-validator)` before the page is submitted to ensure that the user has entered a burger name to prevent empty fields in the database*

`Error Checking`

<a href="#"><img src="#" alt="error checking"></a>

**The application Burger is organized with the following structure:** 

```
Burger
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars


```


**_Technology used_**

*This app uses JavaScript, Node.js, Mysql and 5 NPM packages: Express, Express-handlebars, express-validato, Body-parser, dotenv and Nodemon*

 Files Used   |  Role in the App                                                                  |
| ------------ | -------------------------------------------------------------------------------------- |
| node_modules | node modules includes the  NPM packages |
| express         | used to handle routing |
| .gitignore   | This will tell git not to track these files, and thus they won't be committed to Github |
| package.json | JSON Source file the has all the dependencies.                    |
| bodyParser  | Used to sets up the Express app to handle data parsing. |
| Dotenv  |Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. | 
| Express | A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.  |
| Express-handlebars | Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.  |
| Nodemon | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. | 
| express-validator | Express middleware for the validator module. |

**Config Setup:** *`connection.js` setup the code to connect Node to MySQL. `orm.js` methods that will execute the necessary MySQL commands in the controllers. These methods will be used to retrieve and store data in your database* 

**Model Setup:** *`burger.js` the code that will call the ORM functions using burger specific input for the ORM*

**Controller Setup:** *`burgers_controller.js` control the routers for the app*

**View Setup:** *`index.handlebars` file used by Handlebars and `index.handlebars` to have the template that Handlebars can render onto* 

**DB Setup/excerpts** *The application's data is stored in MySql via the `schema.sql.` and `seeds.sql`* 

**Schema.sql**
 ```
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

```

**Seeds.sql**

```
INSERT INTO burgers  (burger_name, devoured) VALUES ('Beef Burgers', false);
INSERT INTO burgers  (burger_name, devoured) VALUES ('Turkey Burgers', false);
INSERT INTO burgers  (burger_name, devoured) VALUES ('Veggie Burgers', false);
```

#
Lincense by <a href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow">CC-BY</a>
