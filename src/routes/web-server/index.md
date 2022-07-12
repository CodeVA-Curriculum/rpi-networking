# Web Server Mini-Project

In this mini-project, you'll work with your group to build a simple web server with some files. Then, you'll work together to consider how your small-scale internet works, and what sorts of norms, guidelines, and rules you would put in place if you wanted other people to use it.

## Step 1: Assign Roles

The "extra" computer (the fourth one that no one in your group has used yet) in your network will be your "homepage", linking together the other websites housed on the other three Pis in your network. Use a sticky note or a piece of tape to indicate which computer is the server so you don't forget!

## Step 2: Create a Webpage on Your Machine

Continue editing your `index.html` file on the Pi. To edit the file, enter the following commands into your terminal (just like before):

```
cd server
nano index.html
```

Be sure to save frequently by pressing `Ctrl+S`. Your webpage can contain whatever information you want, but we suggest that you create a short biography of yourself. Consider including:

* Your name
* Your email address
* Where you teach
* What grade level(s) you teach
* Your favorite thing about teaching computer science

Use the HTML template or the [W3Schools examples](https://www.w3schools.com/html/html_elements.asp), or just write a normal text file if you aren't comfortable writing HTML. Once you've finished, pressed `Ctrl+X` to exit the editor.

## Step 3: Create the "Homepage"

Work collaboratively to create a "homepage" on the fourth Pi. One person should code (probaby someone who has a little HTML experience, if possible), and the others can "co-pilot". Edit the `index.html` file on the "homepage" Pi, and create links to the other pages in your lab network. Your page might look something like this:

```
<html>
    <head>
        <title>The Fabulous Lab Network</title>
    </head>
    <body>
        <h1>Welcome to the Fabulous Lab Network!</h1>
        <p>Here are the webpages you can visit:</p>
        <ul>
            <li>
                <a href="starbuck:3000">Riley's Page</a>
            </li>
            <li>
                <a href="apollo:3000">Jo's Page</a>
            </li>
            <li>
                <a href="boomer:3000">Dakota's Page</a>
            </li>
            <li>
                <a href="helo:3000">Elicia's Page</a>
            </li>
        </ul>
    </body>
</html>
```

...but you can make it however you like. Be sure to test out your links!

### Step 4: Ponder

Now that you've completed the technical work for this project, discuss the following prompt with your group:

> You've created your own private internet! If you were to create this for your family, friends, or community, you might want to invite other people to connect with their own computers and host their own websites. That's how the *real* internet works, after all! What rules would you make for your network to make sure it stays useful and fun? Should you be in charge of setting the rules, or should someone else? Collaborate with your group to decide on some rules and guidelines, and then add them to your homepage.