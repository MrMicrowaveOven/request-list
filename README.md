# Request List

This is a simple Ruby on Rails application that stores requests in a database, and displays them on the same page.

# Instructions

Goal : Make a Ruby on Rails application.

1. Main page divided into two parts: the left part of the window is a text input field with a button. On the right — Display a text "0 requests", and below is an empty div with a height of 300 pxand width in the right part of the page.

2. The left and right side of the page are of the same width. Text inside them are all centered. Elements are placed close to each other, not glued for a valid visual result

3. When you press the button on the left side, the text entered in the input field is transmitted(without reloading the page). Then the input field is cleared.

4. The server creates a new instance of the model with this text.

5. In the response from the server comes the time of creation of this instance of model text, which (in any format) are added to the div in the right side of the page. Also updated the text on top of div "N queries", where N is the number of requests for the button, which handled the server to this point (where they keep or how to calculate to think independently). The word "request" should be inclined, depending on the number N. Of course to calculate the number of queries it is better not to use count on a table.

6. div on the right side to which the creation time of the next record is added should not growdown (fixed height) and you should see a scroll bar on the side. For frontend — javascript ( jquery or any other). You don't have to style buttons and boxes. That screen/browser window may be 1024 pixels wide. When everything is ready and tested, send the project to a public repo in github with a readme file detailing the time spent to implement and share the link with us.

# Early Decisions

I had a few early decisions to make before I even started coding.

1. Should I make a full Rails application with html.erb frontend?  Or just make a Rails API with HTML frontend?  This was primarily answered by the "without reloading the page" comment in Step 3.  In my experience html.erb is better for one-request-per-page, where a request tends to refresh the page.  I'm guessing this can be bypassed, but I'd probably be better off making an HTML form that simply makes an AJAX request to the Rails API.

2. What API methods will I need?  I know I'll need Create, but what else?  It seems like displaying all requests will involve an Index call, but the instructions only mention the submit button affecting the list.  So then will the list not remember if the page is refreshed?  So all in all I see two options: a) Only build Create, and that's what adds to the list.  b) Build Create and Index, and have the Index call made when the page is loaded.  I'll make both, and see if I end up using Index.
