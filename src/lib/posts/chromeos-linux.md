---
title: Chrome-Os to Linux
date: "2026-05-08"
description: ChromeOs Laptop to Linux
---

I've ditched ChromeOS on my Lenovo Thinkpad Chromebook and replace it with CachyOS which is an Arch-based Distro of Linux.

<b style="font-size: 24px;">Why i did it</b>

It's because ChromeOS is just for casual use and it didn't really fit for me, it felt limited and the performance wasn't that good since, the laptop is only limited by 8gb of ram so it had me always being conscious on my ram usage so, i had to switch to a lighter environment which made me want to install CachyOS and it was definitely a good experience for me.

<b style="font-size: 24px;">The Process</b>

First of all, before I started tinkering my laptop i searched through <a href="https://docs.mrchromebox.tech/docs/supported-devices.html">MrChrombox Supported Devices</a> if my laptop is supported and what method it required to disable the Write Protection(WP) which i found you can disable it by either battery disconnection or SuzyQ which was a complicated process so picked the battery connection which was easier.

![WP](/blog/WP.png)

<b>But Before disabling the battery</b> I've followed this <a href="https://docs.mrchromebox.tech/docs/getting-started.html">guide</a> made by MrChromebox on their official website.

![guide](/blog/guide.png)

So by following this guide. The first step was enabling Developer Mode on the Chromebook by pressing Esc + Refresh + Power, then Ctrl+D to confirm. This wipes the device and takes a few minutes, but it's necessary to gain access to the terminal.

![bat-guide](/blog/battery-guide.png)

Next is disabling the Write Protection. I opened the back panel of laptop and disconnected the battery connector from the motherboard. This disables the hardware write protection so the firmware can be flashed.

<img src="/blog/battery.webp" alt="battery" width="300" style="display: block; margin: 0 auto;">

After reassembling, I booted into ChromeOS, opened a terminal with Ctrl+Alt+F2, logged in as chronos(Admin), and ran the MrChromebox firmware utility script. So i just followed all the steps on the MrChromebox <a href="https://docs.mrchromebox.tech/docs/getting-started.html">guide</a> and before i replaced the os. I made sure to Backup the ChromeOS firmware in case i want to go back. It's just a nice thing to have a backup.

After backing up the stock firmware to a USB drive, the flash completed successfully. With the new UEFI firmware installed, the Chromebook now boots like a regular laptop. I plugged in my CachyOS USB, booted from it, and went through the installer.

<img src="/blog/cachy-install.png" alt="cachy" width="500" style="display: block; margin: 0 auto;">

One problem I ran into was the installer failing to create a partition table due to ChromeOS's LVM volume group still being active on the drive. I fixed this by deactivating it manually in the terminal and wiping the drive with wipefs and sgdisk before retrying the installer. After that, the installation went smoothly

<b style="font-size: 24px;">The Result</b>

Cachyos is running great on my Lenovo Thinkpad and it was worth it to do since, i don't have to worry about high ram usage and restricting environment, while there are minor problems i encountred after installation like an audio problem, The documentation had the fix for the audio. <b>It was definitely a worthwile experience.</b>
