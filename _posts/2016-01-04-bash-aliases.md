---
layout: post
title:  "Command Line Shortcuts with Bash Aliases"
date:   2016-01-04 10:56:33 -0600
categories: bash
---

### Intro

As we develop our command line skills, I thought I'd share a cool trick I know that will make your command line experience even zippier. You may have noticed that changing to a frequently used directory can require a pretty lengthy command.

Wouldn't it be nice if instead of typing `cd ~/Documents/Dropbox/dev-bootcamp`, you could simply type `dbc`?

### The Solution: Bash Aliases (Linux and Mac)

Bash aliases are essentially custom keyboard shortcuts for your command line.

Navigate to your home folder ( `cd ~`), and once you're there, you can view the contents by typing `ls`, as you know. But did you know you can also include the invisible files (those beginning with a dot `.`) by typing `ls -a`?

We will be editing one of the invisible files in your home folder, which is named `.bash_profile`

### Adding an Alias

Once you're in your home directory (`~`), open your `.bash_profile`.

*Dev Bootcamp students can type `subl .bash_profile` to open it for editing. This file was modified with [supertopher's dotfiles](https://github.com/supertopher/dotfiles) during Phase 0, Week 0, so you'll already see some custom codes in this file.

Add an alias by typing (on its own line), for example: `alias dbc="cd ~/Documents/Dropbox/dev-bootcamp"` (don't put spaces around the `=` sign). This is just an example alias, using the folder location for my own dev-bootcamp folder on my own computer. You can change the `dbc` to whatever shortcut you'd like to type (just make sure it's not already an existing bash command), and then you can put whatever command you want after the `=` sign.

If you want the alias to execute two or more commands, just separate the commands with a semicolon. For instance, if I want to navigate to my Dev Bootcamp folder and ALSO display the contents, with hidden files included, I would make my alias like this: `alias dbc="cd ~/Documents/Dropbox/dev-bootcamp; ls -a"` Then, make sure to save your `.bash_profile` when you're done editing it. You may notice that your new alias/shortcut doesn't work in your shell yet. That's because your current shell session is still using the old version of your `.bash_profile`. You have to reload it like this: `source ~/.bash_profile`. Now you can try typing your new alias in your command line, and watch it execute your command(s)!