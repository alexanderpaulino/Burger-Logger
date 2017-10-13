# The Burger Diary

Have you ever needed to make a log of the burgers you've eaten? Then this is the app for you! The Burger Diary allows you to track the hamburgers you've eaten through an app utilizing MySQL, Node, Express, Handlebars and a homemade ORM. Please see below for examples of the app's functionality.

<h3>Logging Burgers</h3>

As the GIF below demonstrates, burgers entered into the field at the bottom of the app are added onto the database and simultaneously populate the HTML on the left side of the page.

<img src=".\public\assets\images\logging-burger.gif">

<h3>Devouring Burgers</h3>

Similarly, clicking on the 'Devour it!' button updates the database and changes the value of the burger's 'eaten' column to true and moves it to the right of the page while graying it out.

<img src=".\public\assets\images\devouring-burger.gif">

<h3>User Input Validation</h3>

Finally, the app won't accept just any text. Blank entries won't be accepted, nor will exceptionally long entries. Additionally, if the new entry doesn't contain the string "burger", it won't be accepted.

<img src=".\public\assets\images\user-input-validation.gif">

<hr>

Heroku Link: https://burger-diary-ap.herokuapp.com/

Powered by body-parser, express, handlebars, and the mysql NPM packages.