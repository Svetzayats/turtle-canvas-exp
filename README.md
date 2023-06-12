# canvas
It's just playground for my learning of canvas and some other things. 

## Turtle graphic 
Simple exercise from "The Pragmatic Programmer" by Andy Hunt and Dave Thomas. We need to implement syntactic analysis for commands and I use canvas for drawing. 
- it validate and displays invalid commands from input 
- it drawing by commads p, u, d, n, s, w, e 
- user can clear canvas and start again 
- it doesn't remember previous input and result

**Commands**

<code>p [number from 1 to 8]</code> - pick color 

<code>d</code> - down - lower the pen 

<code>u</code> - up - raise the pen 

<code>n [number]</code> - nord - draw upward 

<code>s [number]</code> - south - draw downward 

<code>w [number]</code> - west - draw to the left 

<code>e [number]</code> - east - draw to the right

## Popover API 
First acquaintance with experimental API for popovers. 

Why is it cool: 
- you don't need scripting for opening / closing, positioning 
- accessible and work with keyboards bindings from the box 
- easy to use, could be customized 

Use popover and popovertarget attributres + ::backdrop and :popover-open for styling.

Now works only in experimental mode of Chrome Beta (you need to go to chrome://flags and switch on Experimental Web Platform features flag). 

[Popover API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
[Popover API on dev chrome](https://developer.chrome.com/blog/introducing-popover-api/)
[Article about Popover API + anchor for positioning](https://dev.to/link2twenty/future-of-css-popover-api-3ba0)

**TODO**

[x] Add popup with command's instruction. 
