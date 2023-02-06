---
title: "TIL: Postgresql union vs union all"
date: 2023-01-16T16:03:19.444Z
description: "TIL: Postgresql union vs union all"
---
**union all** returns all rows.\
**union** removes duplicates. All columns must have to same values to be considered a duplicate.

B﻿oth union as union all require equal column names.

```
CREATE TABLE t1(
    v1 INT,
    v2 text
);

INSERT INTO t1(v1, v2)
VALUES(1,'test'),(2, 'test1'),(3, 'test');
CREATE TABLE t2(
    v1 INT,
    v2 text
);

INSERT INTO t2(v1, v2)
VALUES(1, 'test'),(2, 'test'),(3, 'test3');

SELECT v1
  FROM t1
union 
SELECT v1
  FROM t2;
```