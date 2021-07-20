# Main Website Usage 
Located at https://cgsmathclub.herokuapp.com
There are 3 (nesting) tiers of access to the website
- Anonymous (unregistered users)
- Normal registered users
- Superusers

### Anonymous users can:
- Access the cumulative global leaderboard (intended to be yearly)
- Access home page feed of blog content

### Normal registered users can:
- Take Quizzes which are set as visible in the admin interface
- View submissions for already submitted quizzes

### Superusers can:
- Access the SABER (Secure admin backdoor editor remote)
- Access the normal django admin system which can manage users
- In particular, this means ability to:
	- Add and edit quizzes and associated information
	- Select problems for quizzes
		- Quiz questions should be clicked to be selected/deselected
		- Selected questions are shaded
	- Add and edit questions 
		- Use $ $ for inline maths and $$ for display maths equations
	- View Admin Quiz specific leaderboards with detailed stats. 
		- Leaderboards also contain simple system to erase user quiz data
	- Manage quiz visibility
		
# Static repository
 
### Core Points
 - The static blog posts are hosted at # **[Maths-Club.github.io](https://github.com/Maths-Club/Maths-Club.github.io)** via github pages
 - An Atom Feed https://github.com/jekyll/jekyll-feed is used to generate an XML file https://maths-club.github.io/feed.xml which is observed by relevant sites (including the dynamic heroku site) to pull post summaries as well as links to the blog posts




### Write a blog post 

- Place all posts in _post file (upload)
- Name each file YYYY-MM-YY-title.md e.g [2021-06-03-TestPost.md](https://github.com/Maths-Club/Maths-Club.github.io/blob/main/_posts/2021-06-03-TestPost.md "2021-06-03-TestPost.md")
- Start each file with the following structure
```
---
excerpt: A brief description of your post
---
{% include header.html %}
```
 - Jekyll also allows for Liquid (system name) (django like) templating, and the header allows inline maths with $ and display maths with $$ via katex
 - Save the post and things should update automatically

## Technical details of the static component
### Usage
- The script https://maths-club.github.io/loadFeed.js is used to read the xml file and edit the current page to include blog summaries. 
- It is included in body as ```<script  src="https://maths-club.github.io/loadFeed.js"  type="text/javascript"></script>```
- It uses an GET request to retrieve the XML (by the way, debug console.log XML files give a monstrosity), which is parsed to extract the key tags
- It requires rosella-textbox CSS class to work
- For further documentation, read https://www.w3schools.com/xml/dom_element.asp

### Jekyll: The _config.yml file
Jekyll autorenders all files not in a folder with a _ beginning
```
theme: jekyll-theme-slate

title: Maths Club

description: EARLY ALPHA //header for each md page

markdown: kramdown 

collections: //regarding how to render each folder with _ beginning

posts: //the _posts folder

output: true //whether or not to output

permalink: /posts/:title //where to output i.e url to page

plugins:

- jekyll-feed //the atom (RSS) like feed

kramdown:

math_engine: katex

feed:

posts_limit: 50 //only keep last 50 posts in feed, roughly 1 year

excerpt_only: true //only keep post excerpts
```
### Future investigation
 - Templating: https://www.ralismark.xyz/posts has good examples of this
 - Tags
 - Read Jekyll documentation: https://jekyllrb.com/docs/posts/#the-posts-folder https://jekyllrb.com/docs/front-matter/ etc
