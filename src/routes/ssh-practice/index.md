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

:::textimage{src="TODO:"}
...where `[hostname]` is replaced with the hostname of your target machine. For example, if I wanted to shell into the machine labeled `apollo` in the lab network displayed here, I would enter the following command into my terminal:

```
ssh pi@apollo.local
```
:::

Then, type in the password for the machine: **csta2022**. You won't see a cursor when you enter the password--that's totally normal. Just type in the password and hit `Enter`, even though you can't see little dots or a cursor. 

It's a security problem to publicize our SSH password like this--don't do it! It's just for ease-of-use today during the session; we promise to change them to a secret password afterward.

When you connect to a machine for the first time over SSH, you'll see the following message:

```
TODO:
```

Type `y` and hit `Enter`. Once you've successfully "shelled" into your target machine, you'll see something like this:

```
TODO:
```

This means you're in control of the machine! To stop controlling the machine, type `exit` and hit `Enter`. Exit your session and try reconnecting to practice SSH!

## Light Check

Now that you're controlling the Pi remotely, you can manipulate it in all sorts of interesting ways. We've hooked a light up to the Pi to help demonstrate the connection in a more "real" way. Follow the steps below to play with the light!

### 1. Start the Python REPL

We'll control the light with Python, a popular programming language. Don't worry if you don't know how to code with Python--we aren't going to do anything that requires prior knowledge. First, type the following command into your SSH terminal:

```
python3
```

You'll see something like this:

```
TODO:
```

This is the Python REPL, which allows you to type commands written in the Python language to control your computer. It's a lot like the terminal! First, you need to load up the `led` object. Type in the following command:

```
from pi import led
```

...and hit `Enter`. Just like with the terminal, if no error appears you're good to go! Now that you've `import`ed the `led`, you can manipulate it! Try out the commands below by entering them into the terminal one at a time:

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

### 3. Edit the File

### 4. Reload the Site

---

Now that you've had some practice with SSH, it's time to do a project with your group! Check out the [next tutorial](/web-server) to get started on the  *[Web Server Mini-Project](/web-server)*.