---
layout: post
title:  "Accessibility: Consider Your Visitors"
date:   2016-01-21 10:56:33 -0600
---

#### Considering Your Visitors

One great principle in designing and building websites is that you should make the kind of website you would want to visit. However, it’s easy to take this approach too far and forget that not every visitor is capable of accessing the information in the same way you do. Not every visitor has normal vision, for example; in fact, some visitors to your website may be functionally blind and using an assistive screen reader. Other visitors may not be able to hear, and still others may not be able to operate a mouse or a keyboard due to limited mobility. You must also consider that there is still a wide range of internet connection speeds, and many in your audience may have slow dial-up access, especially in developing countries or rural areas. You always want to design for your audience, and while your own user experience is a terrific guide, it may not represent the whole user base for your website.

As technology has evolved, there have always been innovators who have made sure that the latest, greatest advances could be shared by all, regardless of ability. To name a few, Louis Braille’s tactile writing system opened written communications to many blind people, and TTY devices and closed captioning have enabled many deaf people to use telephones and televisions, respectively. While accessories and third-party tools are available to help the disabled experience the internet, it is also incumbent upon developers and designers to build websites with accessibility as a foundational principle rather than as an afterthought.

#### Techniques to Make your Website Accessible

Fortunately, there are many ways to make sure your website will reach your entire audience. I’ll only mention techniques related to disabilities and connection speed, although accessibility can also be [very] broadly interpreted to include internationalization (including translations, converted measurements, alphabets, and cultural signals) and device-specific design (altering the design and/or functionality depending on the browsing device).

*   Use a simple, consistent layout. Not only does this improve the experience for those with a physical disability, but it also helps any visitors who may have a learning disability or any other cognitive disability that may hinder easy navigation.
*   Every image should have an `alt` attribute defined. The `alt` attribute stands for alternative text that will display in a text-only browser or in any other case where the image is not loaded. It should be short and descriptive, like a caption: `alt="Mark Smith, owner of Mark's Pizzeria, converses with a customer at the cash register"` or `alt="A pair of lionesses resting in the grass"`. If the image is not conveying any information and can be ignored if needed, you can make this explicit by setting an empty value: `alt=""`.
*   Offer the option for your visitor to change the font (especially the size).
*   Make sure that there is enough contrast between any text and its background, and keep backgrounds simple.
*   Make sure that the html is properly and semantically structured. This will help any assistive technologies parse the document and locate any important information, such as the main article (`<article>`) or the navigation links (`<nav>`).
*   Provide transcripts for any audio or video resources
*   Make sure your site is easy to understand with styling/CSS disabled and with images turned off (perhaps to reduce phone data usage).
*   Use `<noscript>` tags to provide alternate content if a user cannot, or does not want to, view the site with javascript. If your javascript shows hidden information after a “Show more” link is clicked, for example, it may create a challenge for someone with limited mobility or interactive ability.
*   Ensure that your website can be used by a keyboard or, by extension, a voice-controlled input technology. The use of a mouse can present a struggle for some limited-mobility users.
*   Use ARIA attributes in your HTML. ARIA stands for Accessible Rich Internet Applications and is a set of W3C specifications and recommendations to help define the role, structure, and behavior of elements in your web page in order to help assistive technologies make appropriate transformations. Perhaps you have a list of clickable tabs that show and hide their own panel of content. You could include `role="tablist"` on your `ul` element, and `role="tab"` on your `li`s. The initial, visible panel’s tab `li` could also have `aria-selected="true"` to indicate that this is the active tab. The W3C has documented the rules for [how to use these attributes appropriately](https://www.w3.org/TR/2016/WD-html-aria-20160115/).

#### Conclusion

It’s important to consider your audience as early and completely as possible when you build your websites. You may know what the audience wants, but you need to make sure that they are able to access it in the first place. Using the above recommendations is a good starting point toward ensuring that your website will be accessible, and there are also terrific tools, including [browser plugins](https://chrome.google.com/webstore/search/accessibility?_category=extensions), that will help you achieve best practices.

#### References

*   [http://www.washington.edu/doit/world-wide-access-accessible-web-design](http://www.washington.edu/doit/world-wide-access-accessible-web-design)
*   [https://www.w3.org/standards/webdesign/accessibility](https://www.w3.org/standards/webdesign/accessibility)
*   [https://www.w3.org/TR/2016/WD-html-aria-20160115/](https://www.w3.org/TR/2016/WD-html-aria-20160115/)
*   [http://heydonworks.com/practical_aria_examples/](http://heydonworks.com/practical_aria_examples/)
