#Vanilla
######Milkshake Studio
<hr>


##Widths, Margins, and Padding
**Width:** `.width(@col, @gutter);`<br>
**Inner Width:** `.innerWidth(@col, @gutter, @parentWidth);`<br>

Inner width is used inside a parent element that is not 100%.  If the parent element is a width of 94% and you want the inner element to be a column or 4 columns and 3 gutteres you would write <br>
`.innerWidth(4,3,.94);`<br>

This concpet flows through to margins and padding.  
**Left Margin:** `.ml(@col, @gutter);`<br>
**Inner Left Margin:** `.iml(@col, @gutter, @parentWidth);`<br>

**Right Margin:** `.mr(@col, @gutter);`<br>
**Inner Right Margin:** `.imr(@col, @gutter, @parentWidth);`<br>

**Left Padding:** `.pl(@col, @gutter);`<br>
**Inner Left Padding:** `.ipl(@col, @gutter, @parentWidth);`<br>

**Right Padding:** `.pr(@col, @gutter);`<br>
**Inner Right Padding:** `.ipr(@col, @gutter, @parentWidth);`<br><br>


##Vertical Padding & Margins
The global padding and margin helper classes go from 1-10 where 1 = 1vw with fallback to 1 = 10px

<br>
**Padding Top:** `.pt1` - `.pt10` <br>
**Padding Bottom:** `.pb1` - `.pb10`

**Margin Top:** `.mt1` - `.mt10`<br>
**Margin Bottom:** `.mb1` – `.mb10`

<br>

##HTML Attributes:

For some people html attributes are easier to use then classes or mixins.  This is why you can write the column width straight in the html.  For example:

`<div col='9' col-t='6' col-p='12'></div>`<br>

will set the width of the element to 9 columns width on regular screen sizes 6 columns width on tablet and 12 columns width on phones.

Inner widths are not accessible by this method yet.

