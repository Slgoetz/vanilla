#Vanilla
by - Milkshake Studio


##Widths, Margins, and Padding

Width: .width(@col, @gutter);
Inner Width: .innerWidth(@col, @gutter, @parentWidth);

Inner width is used inside a parent element that is not 100%. If the parent element is a width of 94% and you want the inner element to be a column or 4 columns and 3 gutteres you would write 
.innerWidth(4,3,.94);

This concpet flows through to margins and padding.
Left Margin: .ml(@col, @gutter);
Inner Left Margin: .iml(@col, @gutter, @parentWidth);

Right Margin: .mr(@col, @gutter);
Inner Right Margin: .imr(@col, @gutter, @parentWidth);

Left Padding: .pl(@col, @gutter);
Inner Left Padding: .ipl(@col, @gutter, @parentWidth);

Right Padding: .pr(@col, @gutter);
Inner Right Padding: .ipr(@col, @gutter, @parentWidth);


##Vertical Padding & Margins

The global padding and margin helper classes go from 1-10 where 1 = 1vw with fallback to 1 = 10px


Padding Top: .pt1 - .pt10 
Padding Bottom: .pb1 - .pb10

Margin Top: .mt1 - .mt10
Margin Bottom: .mb1 – .mb10



HTML Attributes:

For some people html attributes are easier to use then classes or mixins. This is why you can write the column width straight in the html. For example:

<div col='9' col-t='6' col-p='12'></div>

will set the width of the element to 9 columns width on regular screen sizes 6 columns width on tablet and 12 columns width on phones.

Inner widths are not accessible by this method yet.