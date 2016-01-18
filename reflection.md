### Link to my website

[My Website - mrrts.github.io](http://mrrts.github.io)

### What did you learn about CSS padding, borders, and margin by doing this challenge?

I chose to style my nav li's with display:inline-block so that they would appear next to each other horizontally, but I learned that spacing them with a margin-left or margin-right caused the whole list to lose its centeredness relative to the page. So, I used my new knowledge of the :first-child pseudo-element in order to remove the margin from the first li. This allowed me to put spaces only in between the li's, and not on the edges of the parent ul. I also learned that there are some default margin rules applied to h1-h6 elements, so I elected to override them with my own. I also had to research how to make a block element with absolute positioning centered on the page both horizontally and vertically, and I learned that the solution is as follows:

```
position: absolute;
margin: auto;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: [whatever];
height: [whatever];
```

### What did you learn about CSS positioning?

I kept most of the main content elements in their default static positioning, but as discussed above, I made my section.main-content absolutely positioned in the center of the page using the above trick. I also chose to make the nav element fixed at the top of the page: 

```
position: fixed;
height: 4em;
top: 0;
width: 100%;
text-align: center;
font-size: 18px;
```

And I made the footer similarly fixed, but to the bottom. As long as the elements inside the fixed div were set to inline-block, then the div's text-align:center would center those elements as they were treated like any other inline text. 

I also researched how to make a full-screen background image that resizes with the browser window to always cover 100% of the page:

```
background: url('../imgs/desert-dawn-bg.jpg') no-repeat center center fixed;
background-size: cover;
```

### What aspects of your design did you find easiest to implement? What was most difficult?

It was hardest to choose colors that allowed the text to be legible against the transparent background while still being the thinner font-weight that I like so much. I ultimately styled the text-shadow property of the thinner text in order to allow it to stand out against the background. 

```
text-shadow: 1px 1px 4px #000;

/* the four values: offset-x offset-y blur-radius shadow-color */

```

It was also difficult to find the right selectors for the various states of links (:hover, :visited, :link) because I wanted to style them differently depending on whether they were in the nav element or the section.main-content element. This required looking at inheritance and specificity in css in order to make sure my rules were being applied. Ultimately, I ended up using the following:

```
a:link, a:visited {
	color: yellow;
	text-decoration: none;
}

nav a:link, nav a:visited {
	color: #fff;
}

a:link:hover, a:visited:hover {
	text-decoration: underline;
}
```

There may have been a better way to do it, but this worked, at least.

The easiest aspects to implement were the transparency (thanks to the Chrome inspector, I could easily adjust the slider and then copy the rgba() value into my stylesheet) and the spacing since I could add margin, line-height, letter-spacing, and padding rules to whatever elements needed to be spaced.

Transparent background-color, using the rgba color encoding (which has a red, green, blue, and alpha/transparency channel), is declared as follows:
```
.main-content {
    background: rgba(4, 10, 14, 0.77);  
    /* This example has a 0.77, or 77%, opacity */
    /* etc */
}
```


### What did you learn about adding and formatting elements with CSS in this challenge?

I was surprised how much the design process influenced the html structure. I quickly realized that I needed to refactor my html in order to target the elements or page sections I needed to target, and I found myself adding new classes and elements like "class='main-content'" or wrapping the blog meta info in a "header" element. I think it was also valuable to learn the trick for centering an absolutely-positioned div (see question 1) as that seems to be a common design motif and will certainly be needed in the future.

I also learned the limits of my ability to achieve what I want, or to even know what I want, visually speaking. I know that I want something that feels clean and crisp, but it was very hard for me to know what *precisely* needed to be changed in order to progress toward that feeling. I didn't have a visual end product in my mind, but only a feeling, and I didn't quite achieve it yet. I'm hoping to find a better color scheme going forward, particularly for my main content text, as I don't think it's yet quite as breathable/easily legible as I would like.