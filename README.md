# LibraryDB
A library database for tracking multiple forms of physical and potentially digital media for Multiple users, enabling loans bwtween users 

Currently working on: Login page. Basic HTML in place, need to connect it to a table to store credentials

Future tasks:
- Create a table that all users can see, but one user owns and can write to.
- Create a table that only one user can access
- Create a table that a user can grant read permissions to other users for.

At this point Minimum Viable Product is achieved.

Further Tasks:
- Create a user registration workflow
- make a system that generates new tables for each user both after registration, and on request.
- allow addition of new data utilizing scraped sources like the ISBN database
- allow users to define permissions to thier collections such that they can designate some as public, some as semi-private, which makes them visible to users they share the collection with, and some to private which cannot be shared without changing the collection type.
- build an android client that utilizes a barcode scanner to gather information about the media in question
- make a logging and error utility that helps me diagnose and fix future issues, and the user to solve issues as they arise.
- create a system for loan requests, approval or denial, and tracking

At this point the database will be feature complete.

extras:
- Fable integration?
