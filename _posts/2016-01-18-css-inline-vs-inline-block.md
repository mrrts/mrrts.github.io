---
layout: post
title:  "CSS Concepts: Inline vs. Inline-Block"
date:   2016-01-18 10:56:33 -0600
categories: css
---

#### Block elements and inline elements

All renderable HTML elements are classified as either "block" elements or "inline" elements. Inline elements, semantically, are considered part of the flow of the content; most browsers render them by default in the _same line_ as their surrounding text. An example of an inline element is the anchor (`<a>`). It appears as an inline link [like this](#), without disrupting the flow of the text. Other inline elements include `span`, `kbd`, `abbr`, and even `img`.

A block element always starts on a new line and will stretch to the greatest width available within its parent container element. This text is inside a paragraph (`p`), which is one of the block elements. Unless styled otherwise, it will display on its own line and take up 100% of the parent container's width (in this case, my `section` element with the class "main-content". In addition to these default renderings, block elements will also have box-model dimensions like height, width, margin, border, and padding.

#### The "display" property

One may change an element's default display from one to the other by setting the display property in CSS.

`display: block; /* OR */ display: inline;`

#### Inline vs inline-block

Any block element that is set to display as inline will join the flow of the content but will not retain its box-model dimensions. If you set the `display: inline-block` property, an element will have height/width/margin/padding/border properties that can be styled, but it will not start on its own new line, and it will set its width according to whatever content it has, rather than 100% of the parent container width.

#### Example usage

Using the `display: inline-block` display mode is very helpful in many situations, including whenever you want a block element's width to hug its content automatically rather than expanding to 100%, without losing the box dimensions.

On my DBC student website, I styled the list items inside the unordered list of navigation links located in my `nav` element with the `display: inline-block` property. This allowed the list items, which are block elements by default, to appear next to each other on the same line, rather than as a vertical bullet list. (I also set the `list-style-type: none` to get rid of the actual bullets.) I could then set box-related properties on each `li` element, like `margin-right`, while not needing to set the `width` to a specified value (`inline-block` allowed the width to automatically adjust to the text length).

One interesting thing to note is that, though the `img` element displays as inline by default, it seems to function as though it were set to `display: inline-block`by default as without specifying inline-block display one can still set box-related properties on the `img` in most browsers, like `height`, `width`, `margin`, and `padding`. But these values are fundamental properties of images to begin with, so it could be said that the `img` element is a special case.