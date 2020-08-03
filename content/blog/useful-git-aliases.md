---
title: Useful Git Aliases
description: Type less and get more done with Git using aliases!
img: /useful-git-aliases.png
alt: useful git aliases
author: Arsala Grey
---

# Useful Git Aliases

Use Git aliases to type less and get more done on the command line using git!

### Setting Git Aliases

Use the following syntax to set 'co' as the alias to 'checkout'
```
git config --global alias.co checkout
```

### Example Git Aliases

```
co = checkout
c = commit
s = status
ca = commit --amend
aa = add --a
rl = reflog
ri = rebase -i
rc = rebase --continue
p = push
```

Read more about Git aliases [here](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)