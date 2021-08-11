 # Project 3 with General Assembly: MERN web app.
 ## Overview
A 10 day project with three other team members, where we planned, designed and built a CRUD app using MERN stack.
My contributions in this project were the Index page and Navbar coding and styling, and copy on front and index pages. The back-end was team-coded.

 ### Tools used: 
 * MongoDB & Mongoose
 * Express
 * ReactJS 
 * Bootstrap
 * Node.js
 * Git & GitHub
 
 
Our team loves teas and coffees, and to celebrate our course cohort and our diverse backgrounds, we built a service to introduce and celebrate different types and preparation methods of teas and coffees from around the world.


 ## The app: “Heiss Drinks” 
![https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-03/main/client/src/styles/images/project02screenshot01.png](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-03/main/client/src/styles/images/project02screenshot01.png)

![https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-03/main/client/src/styles/images/project02screenshot02.png](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-03/main/client/src/styles/images/project02screenshot02.png)

You can check it out here >>> [http://sei56-heiss.herokuapp.com/](http://sei56-heiss.herokuapp.com/)

Our team loves teas and coffees, and to celebrate our course cohort and our diverse backgrounds, we built a service to introduce and celebrate different types and preparation methods of teas and coffees from around the world.

## Approach
On this we project there were 4 contributors and everything was managed with daily standups and Trello. 

The team decided to go with the ideas I suggested for the type and design of the app (inspired by the [Weezy frontpage](https://weezy.co.uk/)).
One of the teammembers made a wireframe 

![home page wirefarme](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-03/main/client/src/styles/images/HomePage.png)
![index page wireframe](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-03/main/client/src/styles/images/Index%20page.png)

We pair-coded the backend set-up for CRUD functionality, and split taskts up and posted them onto the task board and cracked on with the front-end.

![project 3 taskboard](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-03/main/client/src/styles/images/project3taskboard.png)

My main responsibilities were the Navbar, Index page to show and filter the different drinks, copy for index and frontpage.


## Challenges
* When displaying the drinks on the index page, couldn't get filtering to be both on the type of drink as well as its origin. After spendin a full day on it, I had decided to limit the filtering options:

![Screenshot of commented out code](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-03/main/client/src/styles/images/Screenshot%202021-08-10%20at%2016.15.39.png)

* Our team had some trouble working on styling. We chose to all work on the `main.scss` file, but didn't forsee just how accurate we would need to get with tags and class names, so ended up overwriting each other's styling.
After a couple of days to allow everyone to sort their targeting in the styling file, we nominated one person to edit and amend the file, while having everyone together on Zoom and making sure everytone understands the changed and is happy with them.
Thankfuly, SASS allows nesting!

```index-wrapper.container {
  .sorting-row-wrapper.container {
    margin: 0 30px;
    display: flex;
  }
  .sorting-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
    button {
      padding: 5px 10px;
      width: 100px;
      border: none;
      background-color: white;
      color: $primaryBrown;
      border-right: $primaryBrown;
      font-family: 'raleway', sans-serif;
      font-size: 1.2em;
    }
    button:hover {
      // text-decoration: underline;
      border-bottom: 2px solid $primaryBrown;
      transition: all 0.2s ease-out;
    }
```


## Individual Wins
* Successfully advocated for overall idea and design while making sure all contributors were happy and felt heard.
* To lead during standups to make sure individual tasks are clear and team members are meeting self-imposed deadlines. 
* Fixed a design element that's been stumping the team for a few days (changed from jpg file to svg):

![Screenshot of horizontal brake bar too short](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-03/main/client/src/styles/zigzagshort.jpg)


## Bugs
to be added ...

## Future features
* Filter drinks by origin.
* more to be added...

## Acknowledgements
[Bex Jones](https://github.com/simplythebex) 🧡
[Victoria Olanipekun](https://github.com/victoriaolanipekun) 🧡
[Ole Nascimento](https://github.com/eintrittfrei)
