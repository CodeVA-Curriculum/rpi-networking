# Terminal Basics Activity

In this activity, you'll use a application called the **terminal** (or **command line** if you're on Windows) to investigate the devices on your network! You might not be familiar with the terminal, but it's a very common tool (pretty much every computer has one) and it's particularly useful for completing some basic networking tasks.

## What Is the Terminal?

The "terminal" is a software program on your computer. To use it, you'll type in commands to make the computer do things. It's sort of like coding, but instead of typing many commands and running them all at once, you type one command at a time. You can use your terminal for all sorts of things that you might normally do using a mouse and the normal graphical user interface of your operating system; for example:

* Make a folder
* Make a file
* Edit a file
* Delete a folder
* Delete a file
* Navigate the directory structure of your computer

You can learn these basic skills by checking out the *[Terminal Basics](/appendix/terminal-basics)* tutorial in the [Appendix](/appendix), but you don't have to--this tutorial walks you through each step one at a time and tells you what to type at each stage.

## Testing Your Lab Network with the Terminal

In this activity, you'll connect your computer to your lab network and test out the connections using some terminal commands! Follow the steps below to get connected and test things out.

### 1. Open Your Terminal

Opening your terminal is different depending on what operating system you're using:

:::textimage{src='TODO:' classList='box'}
### Windows

1. Click the `Start` menu 
2. Type `cmd`; you'll see an option pop up called "Command Line"
3. Click "Command Line" to open the terminal application
:::

:::TextImage{src='TODO:' classList='box'}
### Mac

1. Open "Spotlight Search" by pressing `Cmd + Space`
2. Type `terminal`. You'll see the "Terminal" option come up
3. Click "Terminal" to open the Terminal application.
:::

### 2. Connect Your Computer

Next, you need to connect your computer to the network. Do this by plugging in the USB-to-Ethernet adapter. Plug the USB side into your computer, and then connect the Ethernet side to one of your switches.

![The USB-to-Ethernet adapter you'll use to connect your device to the network](TODO:)

The lab network doesn't have internet, so it might take a minute for your computer to connect and you might see some warnings that you don't have internet access--that's fine! We don't need it to use the network and learn the basics. You might want to turn off the Wi-Fi on your personal computer during this activity so it doesn't automatically change over the conference Wi-Fi to get internet signal back.

### 3. Find Your IP Address

Every time you connect to a network, your computer is assigned an IP address. This is the "location" of your computer on the network, and it's what other computers would use to communicate with your computer. You can find your IP address by running the following command in your terminal:

* **Windows:** `ifconfig`
* **Mac/Linux:** `ip a`

:::textimage{src="TODO:"}
Type the appropriate command based on which operating system you are using, and hit `Enter`. When you run the command, you'll see a lot of information pop up in the terminal. You don't need very much of this info at all, really--you're looking for the `eth0` address buried in the wall of text that poppoed up. Check out the image for an example:
:::

When you've found your IP address, write it on the sticky note associated with your computer in the topology diagram you made during the *[Unplugged Topology](/unplugged-topology)* activity!

### 4. Ping the Devices on Your Network

To make sure the network is working properly, you can try to communicate with the other computers on your network. Each computer has a name--check out the labels on the lab network to see the names for the computers in your lab. This name is called a **hostname**, and it's a special substitute for an IP address that we can use to communicate over the network.

To test the network, you need to "ping" each of the computers connected to it. "Pinging" involves using a terminal command to send a very small amount of data to a specificed IP address or hostname on the network. If it succeeds, then te network is working correctly! If it fails, it means there's something wrong. To "ping" an address, type the following command:

```
ping [hostname]
```

...replacing `[hostname]` with one of the hostnames in your lab. You should see something like this:

```
TODO:
```

If you see something like this:

````
TODO:
```

...it means your network isn't set up correctly. Let us know and we will come over to help troubleshoot! Once you've successfully `ping`ed a device, try:

1. Pinging the other devices on the network
2. Pinging another session attendee's computer
3. Pinging yourself!

If you don't know the hostname, you can use an IP address in its place.

---

Once you've tested the network, you're ready for the next step! Check out the *[SSH Practice](/ssh-practice)* tutorial next.