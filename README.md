# github-project-count-hours
Bookmarlet to show counted hours worked, for each project's column.

## Why
To keep track of the time a task took to get done (estimated and real), we use the following convetion: 
`<task_name> [estimated][real]`. where `estimated` and `real` are decimal numbers.
In our case, the numbers represent hours, but story points or wharever is fine, (as long as they are numbers).

## How to use
The simplest way is to open the [index.html](https://tomyo.github.io/github-project-count-hours/) page, and bookmark the link.

You can also grab the raw js code from [count-hours.js](https://tomyo.github.io/github-project-count-hours/count-hours.js) and run it in a console, while having the project page of your repo open.

## Notes
If only one `[]` is used, it's considered as real time tracking only.
So, `[x] == [][x]`
