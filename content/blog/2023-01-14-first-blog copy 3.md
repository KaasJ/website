---
title: Welcome!
date: 2023-01-14T16:03:19.444Z
description: "TIL: Broken logs "
---
I have had this issue for a while with broken logs when using sam (see below). I found that adding 2>&1 | tr "\r" "\n" to the sam command solves the issues. 

![](/img/screenshot_2022-12-01_at_09.45.05.png)

More