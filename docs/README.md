---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: eYY-XXX-project-template
title:
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Postgraduate Student Management System
![s](https://user-images.githubusercontent.com/73387606/176441317-5bc0ae9e-75ff-4313-b2f0-fdfe32851b7b.png)


## Problem

* Currently the system we use for managing the postgraduate students is not suitable , because the system is not user friendly.

   ![Screenshot_2022-06-29_151736-removebg-preview](https://user-images.githubusercontent.com/73387606/176407296-fbc7a165-0cdf-4a07-961f-e01787952b34.png)
   
* Submission and processing delays (Synchronization effects with submissions)
* Difficulties in managing multiple platforms
* Delaying graduation and program completion.
* There should be a place to publish the students' reports and thesis.   

## Solution

* So we decided to implement interactive <code><i>Web Application</i></code>. This system consists of ,
    * Student Registration System
         * The main role is to register users on the system and store their sensitive information in the database 
         * Secure than G-sheets
         * Easy to manage user data (G-sheets, G-forms replaced)
    * User Management Facility System
         * Different user roles, only the admin can  Insert, delete and update data
    * Progress and Performance Monitorin System
         * Allows supervisors, and examiners to monitor the progress of the students
         * Coordinators can get a better idea about students' performance
         * Also students can get an idea about their progress in postgraduate program
    * Automated Event Management System
         * A most important part G-Sheets and G-forms can't do automated events
         * It- Easier for coordinators to get a reminder as well as students
         * Automated Email and Notification System is developed in this part
         * This prevents submission and processing delays
         
## Technology Stack

![Screenshot 2022-06-29 185918](https://user-images.githubusercontent.com/73387606/176448500-d963a59a-89cf-4df7-a3c4-7a316e9b20cb.png)

* ReactJS
   * Improves the quality of user interface
   * Open source and easy to use
   * Less coding and gives more functionality
   * Performance Enhancement by using virtual DOM

* Express JS
   * Can handle a higher level of requests efficiently
   * Can integrate several third-party applications and services with ExpressJS.
   * fast application development in a limited time
 
* MongoDB
   * Mongo DB is one of the most useful database layers
   * The database allows modern apps to be easily developed, tested, and hosted on the cloud

## Team
-  E/18/028, Ariyawansha P.H.J.U., [e18028@eng.pdn.ac.lk](mailto:name@email.com)
-  E/18/173, Kasthuripitiya K.A.I.M., [e18173@eng.pdn.ac.lk](mailto:name@email.com)
-  E/18/285, Ranasinghe S.M.T.S.C., [e18285@eng.pdn.ac.lk](mailto:name@email.com)

## Table of Contents
1. [Introduction](#introduction)
2. [Other Sub Topics](#other-sub-topics)
3. [Links](#links)

---

## Introduction

 description of the real world problem and solution, impact

## Other Sub Topics

.....

## Links

- [Project Repository](https://github.com/cepdnaclk/{{ page.repository-name }}){:target="_blank"}
- [Project Page](https://cepdnaclk.github.io/{{ page.repository-name}}){:target="_blank"}
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
