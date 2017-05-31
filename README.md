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

2. What API methods will I need?  I know I'll need Create, but what else?  It seems like displaying all requests will involve an Index call, but the instructions only mention the submit button affecting the list.  So then will the list not remember if the page is refreshed?  All in all I see two options: a) Only build Create, and that's what adds to the list.  b) Build Create and Index, and have the Index call made when the page is loaded.  I'll make both, and see if I end up using Index.

3. Where to host the Rails API?  I've made many front-end applications and thrown them online using Github-Pages, but once there's a full Rails Application involved I'd need to host it somewhere.  I've worked with Heroku in the past, though it's been a while, so I figured this would be my best bet.

# Implementation Time

## Rails API - 45 minutes

This went by quickly.  I decided to use the `--api` flag when generating my API, since it makes the Application Controllers a little skinnier (uses `::API` as a parent instead of `::Base`).  I wouldn't need them to have browser application functionalities anyway.  This also prevents the generators from adding views and helpers that I won't end up using.

I quickly built the Requests Controller, with a simple Create and Index.  Nothing too unique about it, other than Create only returning the `created_at` data.  After running the Rails server, making a quick Post request on PostMan, and a Get request to check, it was time to work on the FrontEnd.

## Building the FrontEnd - 1.5 hours

I went with a simple entry field and submit button.  Since I knew I'd be using a Rails API, I generally prefer adding a JS function to the button's `onclick=` than making it into a submit button for a full form.  I linked the function to an AJAX request to the server.  Unfortunately, I dealt a great deal with CORS request errors when testing.  It's somewhat tough to get a Rails server to accept requests from the browser.  I'd say this took about an hour to get this to work (adding an `allow origins: "*"` to `application.rb` ended up being the solution).  I'll be adding this to my implementation timing.  Meanwhile the AJAX request was being made to `localhost:3000`, so I knew there would be some troubleshooting when this was pushed to Heroku.

I took a break from the CORS errors to style the FrontEnd.  Flexbox made this super easy.

## Deployment - 6 hours

This easily took much longer than actually building the application.  I had my BackEnd running on the local server (tested and working via PostMan), and my FrontEnd looking great.  But getting the two to communicate is something I'm a little rusty on.  CORS requests destroyed me, which was super frustrating.  AJAX requests were not working locally.  Once I finally got those to work, a push to Heroku gave me similar issues.

I had a huge issue with the page being unable to find the CSS and JS folders when pushed to Heroku.  This was very strange, since it was running fine locally.  Just to give it a try, I moved the styling and JS to the actual HTML page and pushed to Heroku, and IT WORKED.  This is a simple, frustrating problem that I've found dozens of differing solutions to (leaving me to experiment).  For the time being however, the application is working properly within a single HTML document.

This is very telling that I need to focus more on deploying Rails applications to completion, so that I'm more familiar with the errors that pop up when pushing to Heroku.

## Additional Work To Do

The specifications mentioned nothing about a "Clear All Requests" button, so I didn't make one.  I can reset the database from my command line if need be.

I wasn't entirely sure if the specs called just for a list of timestamps of the requests, or of the text within the request to be displayed as well.  I just displayed the timestamp for now (it'll be easy to change later if need be).

Also, I was unsure if the Request List was supposed to continue to show previous requests.  I made it persistent, since otherwise the database would serve no purpose.

Finally, all of the scripts and styles are contained on the HTML document.  This looks... bad.  I'm going to break off into a new branch and try to figure out why this is an issue.  I'm keeping the `scripts` and `css` folder, even though they are no longer in use.  Meanwhile, the application is working perfectly (best coding practices notwithstanding).
