# Drinkrater
Drinkrater is a website that allows you to find different drinks and read / write reviews about them. Whether you're looking for a new recommendation or seeing how your favorite drink compares, Drinkrater is there to help you!

**Link to site:** http://drinkrater.vercel.app

## How It's Made:

**Tech used:** Typescript, React, Next.js, Tailwind, Mongodb

The frontend is built using React and Tailwind design principles -- size responsive CSS. Custom components were designed for special user interactivity, such as the search bar, filter bar on the browse page, review button, and review information display (stars, comments). 

The backend uses a Mongodb database to store all of the information. There are two collections in the database -- the static drink catalog (what drinks are available to be rated), and then a reviews collection. Currently the drink collection stores documents of the drink name, brand, type, total stars, total reviews. Each drink page is dynamically loaded in with the drink name in its parameters. The corresponding data is then fetched server side using the drink name, specifically the total stars and reviews which are used to calculate the average stars for the page. 

Reviews store the automatically generated Mongodb id (time of submission / creation), drink name, stars, and comment (also likes, but unused for now). Currently the top three most recent reviews are fetched server side and displayed when the page loads in. When a review is submitted, the router will refresh causing the displayed stars and reviews to be updated to the most recent data upon submission. 

## Optimizations

I did my best to keep my server and client side logic separated as much as possible. When components needed to use client side, they were kept in their own component file and at the most bottom layer of the HTML tree as possible. All data was fetched server side and then passed into components via props, even client side components, using the use hook to await the server data. For better user experience, I tried to add suspense components with fallbacks around components that relied on server data so that they could see something on their end while the page loads in. I have plans to update this with loading pages and skeletons to improve this design principle as I continue to work on the website. 

## Lessons Learned:

This was my first ever full stack project I ever built -- with very little knowledge at the beginning besides basic typescript. I was eager to jump into a project, as I am a hands-on learner, and learned about different design challenges as I implemented different features. The very first published iteration of this project was done very poorly -- little optimizations as I did not know what was going on or how to implement some backend logic. 

Eventually I took a break working on this project for a few months and decided to come back and improve on it. I did a major user interface redesign across the site, especially the browse page, which had previously been individual buttons to display a set of drinks for each brand / type. I learned a tremendous amount about fetching data server side vs. client side and what were the best design principles according to the Next.js framework. I think this was the biggest turning point as my website navigated and loaded much faster than before. A huge trouble I had before was reloading the review data when a new review was submitted. The second time around I discovered I could refresh the router, causing all the server components to refetch their data and reload the UI. Other than that, I've learned to use React hooks for interactivity, making API calls, using Next.js framework tools (routes, useSearchParams, server searchParams, etc.), Tailwind size responsive CSS design, and practically everything else in this project from scratch!

## Moving Forward

This started out as a passion project because I love finding a new drink at my local Asian supermarkets and I hope this can help anyone out there with similar interests, so I do have plans to continue this side project and add more features!

- more drinks + more pages to view drinks on
- searching by types and brands
- liking comments
- more reviews button - that lets you see popular / most recent reviews
- daily drink recommendation
- personal accounts / authentication that let you keep track of all the drinks you've reviewed
