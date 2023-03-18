---
title: "TIL: Get an md5sum of a folder"
date: 2023-03-18T20:02:20.998Z
description: "TIL: Get an md5sum of a folder"
---
Very useful if you want to see if a value has changed



```
find </path/to/folder/> -type f -exec md5sum {} \; | sort -k 2 | md5sum
| sed 's/ .*$//'
```