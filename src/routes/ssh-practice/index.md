# SSH Practice

In this activity, you'll take control of one of the computers on your network using a technique called **secure shell**, or **SSH** for short. SSH is a very, very common system administration technique (one might even say essential!) and people who work in IT and computer science use it all the time for different tasks ranging from software development to cybersecurity.

When you SSH to another computer, you use your terminal to "take over" the terminal on that machine. It's a sort of remote control, where you get access to the target computer's terminal through your personal computer's terminal window. Once you have successfully "shelled" into the target computer, you can control it in the same way you can control your personal computer with the terminal. Our Pis don't have screens, mice, or keyboards, so SSH is the only way we can control them (you *could* hook a monitor up to a Pi, but we didn't have enough room in our luggage and SSH is an important concept to learn anyway).

Follow the steps below to shell into a Pi and control it remotely from your computer!

## Starting the Shell

The first thing to do is to make an SSH connection to one of the machines on your lab network. Once you successfully log in via SSH, you'll be able to control the Pi in a couple of interesting ways.

### 1. Pick a Target

First, decide which Pi you want to take control of. Make sure each person in your group is shelling into a different Pi--you don't want to accidentally end up controlling the same machine! Write your name on the sticky note associated with your Pi in the unplugged topology diagram you made earlier.

### 2. Run the SSH Command

To start an SSH session, type the following command into your terminal:

```
ssh pi@[hostname].local
```

...where `[hostname]` is replaced with the hostname of your target machine. For example, if I wanted to shell into the machine labeled `apollo` in a lab network, I would enter the following command into my terminal:

```
ssh pi@apollo.local
```
:::

The first time you connect, you'll see a scary message that looks like this:

```
ssh pi@starbuck.local
The authenticity of host 'starbuck.local (10.0.0.120)' can't be established.
ECDSA key fingerprint is SHA256:DAW68oen42TdWDyrOycDZ1+y5ZV5D81kaVoi5FnpvoM.
Are you sure you want to continue connecting (yes/no)?
```

This is a security notification--if the machine is suspicious, it won't let you log in. Type `yes` and hit `Enter`.

Finally, type in the password for the machine: **csta2022**. You won't see a cursor when you enter the password--that's totally normal. Just type in the password and hit `Enter`, even though you can't see little dots or a cursor. 

It's a security problem to publicize our SSH password like this--don't do it! It's just for ease-of-use today during the session; we promise to change them to a secret password afterward.

Once you successfully connect, you'll see `pi@[hostname]` in green in your terminal. This means you're in control of the machine! To stop controlling the machine, type `exit` and hit `Enter`. Exit your session and try reconnecting to practice SSH!

## Light Check

Now that you're controlling the Pi remotely, you can manipulate it in all sorts of interesting ways. We've hooked a light up to the Pi to help demonstrate the connection in a more "real" way. Follow the steps below to play with the light!

### 1. Start the Python REPL

We'll control the light with Python, a popular programming language. Don't worry if you don't know how to code with Python--we aren't going to do anything that requires prior knowledge. First, type the following command into your SSH terminal:

```
python3
```

You'll see something like this:

```
pi@starbuck:~$: python3
Python 3.6.8 (tags/v3.6.8:3c6b436a57, Dec 24 2018, 00:16:47) [MSC v.1916 64 bit (AMD64)] on bullseye
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

This is the Python REPL, which allows you to type commands written in the Python language to control your computer. It's a lot like the terminal!

### 2. Import the LED

Next, you need to load up the `led` object. Type in the following command:

```
from pi import led
```

...and hit `Enter`. Just like with the terminal, if no error appears you're good to go!

### 3. Control the Light

Now that you've `import`ed the `led`, you can manipulate it! Try out the commands below by entering them into the terminal one at a time:

| Command | Description |
| ------- | ----------- |
| `led.on()` | Turn the LED on |
| `led.off()` | Turn the LED off |
| `led.toggle()` | Toggle the LED on or off |
| `led.red()` | Set the LED color to red |
| `led.blue()` | Set the LED color to blue |
| `led.green()` | Set the LED color to green |
| `led.white()` | Set the LED color to white |
| quit() | Exit the REPL and return to the terminal |

This works by using CircuitPython a set of Python libraries designed to control electronic components. You can do lots of cool things with it; check it out if you're interested!

## Finding Your Server

After playing with your computer's light, it's time to do some more advanced work. As you may already know, your Pi is currently serving a website that you can access via the network! If you can find the files the Pi is serving over the network, you can change what the website looks like.

### 1. Connect to Your Website

If you have not done so already, visit your Pi's website by opening your internet browser and typing in `[hostname]:3000`, where `[hostname]` is replaced with the hostname for your Pi. This website is being stored on your Pi! If you change the HTML code in the files on your Pi, the website will change as well.

### 2. Find the File

The file that has the HTML code you're looking for is called `index.html`, and it's in a folder called `server`. Follow the steps below to find the file using the terminal:

1. First, look at the available folders and files by entering the `ls` command
2. Make sure you see the folder `server` in the list. If you do, type `cd server` to "enter" the folder with the terminal
3. Once you've entered the folder, enter the `ls` command to list the files and folders available in the new location--you're looking for a file called `index.html`
4. If you see the file, you're good to go!

### 3. Edit the File

To edit the file, you'll use a terminal-based text editor called `nano`. Follow the steps below to edit the `index.html` file:

1. From inside the server folder (that's where you went in step #2), type `nano index.html` to open the file in your editor
2. Make some changes! Add your name and something about yourself.
3. When you've finished making your changes, press `Ctrl+S` to save your work, and then `Ctrl+X` to exit the editor

Check out the [HTML Tutorial](https://www.w3schools.com/html/html_elements.asp) on W3Schools, or just type words without HTML formatting if you don't want to write HTML code today (no worries!).

### 4. Reload the Site

Go to your browser, make sure you're looking at the `[hostname]:3000` page, and then hit refresh to see your changes! Then, visit other folks' websites on your lab network.

---

Now that you've had some practice with SSH, it's time to do a project with your group! Check out the [next tutorial](/web-server) to get started on the  *[Web Server Mini-Project](/web-server)*.