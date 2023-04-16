---
title: "TIL: How to fetch file from remote linux server with SCP via bastion server"
date: 2023-04-16T11:36:15.445Z
description: "TIL: How to fetch file from remote linux server with SCP via bastion server"
---


```
> scp -o "proxycommand ssh -W %h:%p -i PATH/TO/SSH/KEY username@bastion-linux-server-ip" -i PATH/TO/SSH/KEY username@linux-server-ip:/path/to/file/filename.txt /PATH/LOCAL/MACHINE
```

Note: If you use the root folder ('/') as the destination you will get a Read-only file system error.