---
layout: post
title:  "Git and GitHub: Git With It."
date:   2016-01-02 10:56:33 -0600
categories: git github
---

#### The Situation

It's exciting to work on a project you enjoy and then to see it evolve piece by piece into something you're proud of. But when you're working on something in a digital environment, you may find yourself hesitant to make changes that you'll later regret, wishing you had stuck with your earlier idea and avoided this new, complicated mess. Even worse, if you're collaborating on a project with others, how will you keep the potential chaos at bay, keeping clear who made changes, and why, and to which version of the file? And what if something goes completely wrong? Will you be able to retrace your steps back to when things were fine?

#### The Benefits of Version Control Systems Like Git

Version control will be your best defense against these legitimate worries. Using version control tools like Subversion and Git, you can keep a traceable record of every change and version that your project goes through, and you can revert to any of those versions whenever you want. You can also branch off in a new direction, making changes to a copy (in Git, a "branch") of the project, without affecting the original. If the changes work out well, great! You can incorporate (or "merge") them into the official version. If not, you can just delete your branch and let it go, while the official ("master") branch remains untouched.

And along the way, no matter what big or small changes you've made, you can take frequent snapshots of the entire project (known as "commits"), which act as milestones in your history of changes. You can revert back to any specific commit at any time, as well as keep track (through "commit messages") of what the purposes of your committed changes were. With this safety net, you can be creative and experimental throughout the development of your project and not worry about breaking something. Version control minimizes the risk of losing your work, or not being able to recover from a mistake.

#### GitHub: People Using Git Together

If everyone on a team is contributing to the same project, the potential for confusion is high, but perhaps one of the greatest advantages of organizing your project workflow with version control is that it facilitates a worry-free collaborative environment. GitHub is a popular online host for Git repositories that makes such collaboration possible. Having a project ("repository") and its history in the cloud makes long-distance collaboration much simpler, and if the project is public, then any interested volunteer may contribute their own ideas to it. Every contributor can create their own copy ("clone") of the master branch on their own computer and then create and switch to (or "checkout") a new branch in which they will make their changes. When their changes are ready, they can add them and commit them to their branch. Then, they may request that the project leader incorporate ("pull") their customized branch into the main ("master") branch.

Git makes version control simple and organized, and with GitHub, a group of people can use Git together to create something new in an organized, systematic way.