# Working with the Raspberry Pi

This is a brief introductory tutorial on how to work with the Raspberry Pi. If
not mentioned otherwise, the material here is valid for all models of the
Raspberry Pi. Some Raspberry Pi 3 specific topics will be marked as such.

![Raspberry Pi 3](images/bare.jpg)

## Overview

In contrast to a regular computer the Raspberry Pi (*RPi*) does not have a built in hard drive or SSD. Therefore we have to provide the operating system (*OS*) and all persistent data as an image on an SD card. In the first part of this tutorial we will see how to build such an image, get the RPi running and connect it to a computer so we can control it.

Once we can access the RPi remotely, we will install *NodeJS* and write some JavaScript to verify that NodeJS is working correctly. This enables us to install *raspio* and *johnny-five* via *npm* to take control over the RPi's GPIO pins. After a classic LED-blinking tutorial, we will turn towards some more specialized capabilities of the RPi 3 and send out HTTP(S) requests via WiFi.

>:information_source: For the study group we will provide SD cards with prebuilt images that already contain the software stack for various tasks. If you are not planning to setup a RPi yourself, you can thus skip sections TODO.

## Requirements

First, we will install the Raspbian operating system for the Raspberry Pi. You can download the zip file [https://www.raspberrypi.org/downloads/raspbian/](here). Raspberrypi.org also provides an [https://www.raspberrypi.org/documentation/installation/installing-images/README.md](excellent installation guide) for Linux, MacOS and Windows.


>:information_source: We will stick to the plain foundation's officially supported OS Raspbian as opposed to others. While installing Rapsbian as described above should not pose any problems, it might be even easier for beginners to start out with NOOBS (which contains Raspbian).

Now we should have a (micro) SD card with the Raspbian image that we can insert into the RPi's card slot and are ready to go. Of course, to make use of the RPi we need some input and output capabilities. The first way is to operate the RPi more or less like a regular computer.

## The RPi as a Regular Computer

The RPi comes equipped with plentiful interfaces precisely for this mode of operation. For example, all models have an HDMI and at least two USB ports. Simply connect a keyboard and a mouse via USB as well as a montior via HDMI before you connect the RPi to the power supply. As soon as you provide power via the micro USB port, the RPi will boot up. It can now be used just like a regular computer. The RPi will recognize most of the common keyboards and mice during the boot process. If you have worked on a Linux machine before everything will be familiar, as Raspbian is based on Debian.

While this is a very convenient and intuitive way to interact with the RPi, it is not the approach we want to take here. Thus we are not going into more detail at this point. Typical use cases for the RPi do not involve it being hooked up to a monitor, keyboard and mouse all the time. We want to operate it as a standalone embedded device, but still be able to control it remotely. Let us discuss this mode of operation in the next section.

>:exclamation: Make sure that the power supply delivers sufficient current for your model. Of course, the power requirements depend heavily on the model, the peripherals and the task. The official homepage recommends the following specifications
| Product   | Recommended | Max. USB Draw | Bare-Board |
| --------- | ----------- | ------------- | ---------- |
| Model A   | 700mA       | 500mA         | 200mA      |
| Model B   | 1.2A        | 500mA         | 500mA      |
| Model A+  | 700mA       | 500mA         | 180mA      |
| Model B+  | 1.8A        | 600mA/1.2A    | 330mA      |
| 2 Model B | 1.8A        | 600mA/1.2A    |            |
| 3 Model B | 2.5A        | 1.2A          | ~400mA     |

## Remote Control -- The RPi as an Embedded Device

To communicate with the RPi remotely we first need a connection. We will establish this connection via a physical Ethernet cable. In terms of network protocols prehaps _the_ standard way to login on a machine remotely is `ssh` (**S**ecure **Sh**ell).

### Assigning an IP address
Many online tutorials on remote access of the RPi assume that the the RPi is already connected to the internet or that we know it's IP address in the local network which apparently requires some configuration. Because start from scratch with an RPi that was never hooked up to a monitor and keyboard for prior configuration, we have to initialize all necessary settings right in the image on the SD card.

To this end put the SD card back into your computer and navigate to the root directory. There is a file named `cmdline.txt`. Open this file in your favorite editor, it should read something like

```
dwc_otg.lpm_enable=0 console=serial0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait
```

Do not worry if it is not exactly the same, this is just for illustration purposes. This file contains some commands that will be called upon start up of Raspbian. This allows us to perform configurations. Specifically we will assign a unique IP adress to the RPi. Therefore, at the end of the last line in `cmdline.txt` add `ip=192.168.1.XXX`, where `XXX` is some number that should be unique in the network, in particular this should differ from the IP address of your computer. The whole `cmdline.txt` should then read for example

```
dwc_otg.lpm_enable=0 console=serial0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait ip=192.168.1.32
```

>:exclamation: Be careful not the add or remove any empty lines.

You can now eject the SD card and put it back into the RPi.

>:information_source: If you encounter any problems in this step, check out [https://pihw.wordpress.com/guides/direct-network-connection/](this tutorial) for a more detailed description.

### Connecting via SSH

After the SD card is back in the RPi's card slot, connect an Ethernet cable to both your computer and the RPi's Ethernet port. Then connect the RPi to a power supply via the micro USB port.

>:exclamation: The default username is `pi` and the default password is `raspberry`.


## Step-By-Step

## Conclusions

## References
