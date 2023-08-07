# Archive: Discovery Projects for GoogleUdacityScholars
Discovery Projects for Google Udacity Scholars Front End Web Developer program | Also on Instagram [@thejackyso](https://instagram.com/thejackyso)

> [!NOTE]  
> JSo 2023-08-07: This repo is old and is based on exploring projects in the [Frontend dev program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011). Repos related to this will stay public in case it helps serve as context or a reference for anyone else.
> Good suggestion would be to use this code as a resource for walking through how html, css, js files + Third Party APIs work together for anyone who wants to get started. The code is not very dense, so it would be relatively straightforward to use and encourage someone to try their own version.


# Final Project for Front End - Neighborhood Map (React)
# Building upon the lessons from mws-restaurant-stage-1
---
#### _Neighborhood Map React Project - Using Google Maps API_

## Project Overview:
### Project Submission
You will develop a single-page application using React featuring a map of your neighborhood or a neighborhood you would like to visit.
You will then add additional functionality to this application, including:
1. map markers to identify popular locations or places you’d like to visit,
2. a search function to easily discover these locations, and
3. a list view to support simple browsing of all locations.

You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).

### Evaluation
Your project will be evaluated by a Udacity reviewer according to the Neighborhood Map (React) Project Rubric. Be sure to review it thoroughly before you submit. All criteria must "meet specifications" in order to pass.

### Submission
1. The node_modules directory may contain thousands of files and should not be contained in the submission. If your project code is on GitHub, you may need to remove tracking from these files (and remove them from your repository) before submitting.
2. Your project must include a README with clear instructions for setting up and running your project application code.
3. The master branch is the default Github repository branch. If you wish to submit another branch, you'll need to set it as the new default branch inside your Github repository.

---
#Project Rubric
Your project will be evaluated by a Udacity code reviewer according to the Neighborhood Map (React) project rubric. Please review for detailed project requirements.

### Interface Design

CRITERIA
1. Responsiveness
All application components render on-screen in a responsive manner.

2. Usability
All application components are usable across modern desktop, tablet, and phone browsers.

### Application Functionality

CRITERIA
1. Location Filter
Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free.

2. List View
A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.

Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)

List functionality is responsive and runs error free.

3. Map and Markers
Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.

Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an infoWindow).

Any additional custom functionality provided in the app functions error-free.

### Asynchronous Data Usage

CRITERIA
1. Asynchronous API Requests
Application utilizes the Google Maps API or another mapping system and at least one non-Google third-party API. Refer to this documentation
#### Using Google Maps API and Foursquare API

All data requests are retrieved in an asynchronous manner using either the Fetch API or XMLHttpRequest.

2. Error Handling

Data requests that fail are handled gracefully using common fallback techniques (i.e. AJAX error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an API doesn’t load there should be some visible indication on the page that it didn’t load.

### Documentation

CRITERIA
1. README

A README file is included detailing all steps required to successfully run the application.

2. Comments

Comments are present and effectively explain longer code procedures.

### Location Details Functionality

CRITERIA
1. Additional Location Data

Functionality providing additional data about a location is provided and sourced from a 3rd party API. Information can be provided either in the marker’s infoWindow, or in an HTML element in the DOM (a sidebar, the list view, a modal, etc.)

Provide attribution for the source of additional data. For example, if using Foursquare, indicate somewhere in your UI and in your README that you are using Foursquare data.

2. Error Free

Application runs without console errors.

3. Usability

Functionality is presented in a usable and responsive manner.

### Accessibility

CRITERIA
1. Focus

Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

2. Site elements are defined semantically

Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

3. Accessible Images

All content-related images include appropriate alternate text that clearly describes the content of the image.

### Offline Use

CRITERIA
1. Service Worker

When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

### Application Architecture

CRITERIA
1. Proper Use of React

React code follows a reasonable component structure.

State control is managed appropriately: event handlers are passed as props to child components, and state is managed by parent component functions when appropriate.

There are at least 5 locations in the model. These may be hard-coded or retrieved from a data API.

There are no errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

---

# TODOs - Development Strategy
It's very important that you plan your project before you start writing any code. Break your project down into small pieces of work and plan out your approach to each one. It's much easier to debug and fix an issue if you've only made a small change. It becomes much harder if you wait longer to test your code. You don't build a house all at once, but brick-by-brick.

Feel free to implement your own design workflow, but if you get stuck -- here are some quick tips to get started. The following verbiage reflects usage of the Google Maps API, but note that you may use another Map API system aside from Google Maps (e.g., Leaflet) for this project (please provide an explanation of which mapping system you used, and how you are using in in your project with comments or in your README).

### Obtain a Google Maps API key.
Be sure to include it as the value of the key parameter when loading the Google Maps API.
You may have some initial concerns with placing your API key directly within your JavaScript source files, but rest assured this is perfectly safe. All client-side code must be downloaded by the client; therefore, the client must download this API key (it is not intended to be secret). Google has security measures in place to ensure your key is not abused. Note that it is not technically possible to make anything secret on the client-side.
Add a full-screen map to your page using the Google Maps API.
## Restrict the API key access via the console after creating it for specific projects
Using my own IP address for development, then will lift it for submission so reviewer can review


### For the sake of efficiency, the map API should be called only once.
With your Google Maps API key and a props object, how can you generate a valid URL to a static Google Maps image? Would writing a function work well for this? What would that function return?

### Write code required to display map markers identifying at least 5 locations that you are interested in within this neighborhood.
Your app should display those locations by default when the page is loaded.
Implement a list view of the set of locations you have defined.

### Provide a filter option (e.g., a text field or dropdown menu) that uses an input field to filter both:
1. The list view
2. The map markers displayed by default on load. The list view and the markers should update accordingly in real time.

Note: Providing a search function through a third-party API is not enough to meet specifications.

### Add functionality using third-party APIs to provide information when a map marker or list view entry is clicked (e.g., Yelp reviews, Wikipedia, Flickr images, etc).
StreetView and Places do not count as an additional 3rd party API because they are libraries included in the Google Maps API
If you need a refresher on how to make Ajax requests to third-party servers, check out Intro to Ajax

### Please provide attribution to the data sources and/or APIs you use (e.g., if you are using Foursquare, indicate somewhere in your interface and in your README that you used Foursquare's API)

### Be sure that all application components (i.e., a search box, a list view, and the map) render on-screen in a responsive manner.

The design is completely up to you regardless of the viewport size (e.g., maybe the list view is viewable from a hamburger menu on mobile) -- but all components must still render and be fully functional.

Any additional components added to the project must also render and be fully functional.

Overall, the application's interface should be intuitive to use. Here are a few examples of how to make the experience straightforward for your user:

### The input text area to filter locations should be easy to locate.
##It should be simple to understand which set of locations is being filtered.
##Selecting a location via list item or map marker should cause the map marker to bounce, or in some other way animate. This indicates that the location has been selected, and an associated info window should open above the map marker with additional information

### Asynchronicity and Error Handling
All data API's used in the application should load asynchronously, and errors should be handled gracefully. In case of error (e.g., a situation in which a third party API does not return the expected result), we expect your webpage to do one of the following:

A message is displayed that notifies the user that the data cannot be loaded
There are no negative repercussions to the UI
Note: You should handle errors if the browser has trouble initially reaching the third-party site as well. For example, consider a user using your Neighborhood Map, but the user's firewall prevents him/her from accessing the Instagram servers.

---

# STEPS TO CREATE AND RUN THIS APP
1. Get boilerplate code for react app
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# use npm install
npm init react-app <YOUR APP NAME>
(this will install all of your packages)
# cd to switch directories into <YOUR APP NAME>
# Run 'npm start' to start your new app
#### In terminal, you'll see a message like:

Compiled successfully!

You can now view 'neighborhood-map' in the browser.

Local:            http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use 'npm run build'.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# CONTINUING STEPS TO CREATE AND RUN THIS APP
(Recap step 1)
Create and start react app as described above, from https://github.com/facebook/create-react-app


2. Decide what 5 map locations you want
#### Mount Sinai locations in Florida
Mount Sinai Health System (MSHS) hospitals are all over the place, with the HQ in NYC. However, there are a plethora of locations in Florida. I'm interested in non-NY Mount Sinai hospital locations. https://www.mountsinai.org/locations
Helpful for lat long: http://www.lat-long.com/Latitude-Longitude-287319-Florida-Mount_Sinai_Hospital.html


3. Get Google Maps API key
https://developers.google.com/maps/documentation/javascript/get-api-key
#### Make sure to set limit. Google Maps requires setting up billing, but you get $200/month credit for map loads. This comes out to ~28,500 map loads. SKU: Dynamic Maps
A web page or application that displays a map using the Maps JavaScript API. A map is created with the google.maps.Map() class. Effective July 16, 2018.

If you don't want to set up billing, use Mapbox (Leaflet).
Compare dev reasons here: https://stackshare.io/stackups/google-maps-vs-mapbox
Code switching how-tos here: https://www.mapbox.com/help/google-to-mapbox/

4. Add Google Maps API key to code
 resource: https://developers.google.com/maps/documentation/javascript/tutorial
 https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
 Udacity Neighborhood Map Key - AIzaSyCB2xjqXIDoQTCybiOeYjAJSX80VmGsT4w
#### If map doesn't show in localhost, change map height from '100%'' to '100vh'
Also specify window.google.maps.Map to App.js file to get map to display in window

5. How to call map API only once?
#### Use async + defer, or jQuery
Simplest way is to use async and defer call. Make a function to set script.async = true and script.defer = true. Remember to add both 'async' and 'defer' before closing '</script>' tag.

6. Add dynamic map markers
Resource to guide how to add markers for Google Map: https://developers.google.com/maps/documentation/javascript/markers
Make sure latitude and longitude matches
#### Write loop to add markers for each location
Render map _after_ looping for each venue info (place 'this.renderMap()' under axios.get)

6. Make map markers responsive
https://developers.google.com/maps/documentation/javascript/infowindows
#### Add event listener for info window display
When a user clicks on the marker, execute a function to change content and open new content

7. Add location search function
#### Filter results
https://www.youtube.com/watch?v=OlVkYnVXPl0

8. Add simplified list view for quick browsing of all locations
#### List view
https://hashnode.com/post/how-can-i-add-items-to-object-lists-reactjs-cj8lu9fsu02gd00wuqkss1ixf

9. Ensure responsiveness for phone, tablet, and desktop views
#### Breakpoints to use
Good guides -
phone - @media only screen and (max-width: 480px) {}
tablet - @media only screen and (max-width: 768px) {}
desktop - @media only screen and (max-width : 1200px) {}
large display - @media only screen and (min-width : 1520px) {}

https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
Use grid system as practiced in course and in email dev projectsL
https://ux.mailchimp.com/patterns

10. Use Foursquare API (satisfy requirement of using at least one 3rd Party, non-Google API)
https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
https://foursquare.com/developers/apps
#### Make Foursquare Developer account
Will need to make new project, get client_id, client_secret, API endpoint, object parameters for location of interest (either "near" or "ll" for latitude longitude), get venues (Foursquare term), invoke new function in componentDidMount, and use version (v:YYYYMMDD)

11. Store data in a state
#### State called venues in App.js for array of data to use for map
Venue info found in response.data.response.groups[0].items
State will take these results and save it in a dynamic array

11. Asynchronous manner using either the Fetch API or XMLHttpRequest
#### Use Axios to fetch APIs via XMLHttpRequest
https://github.com/axios/axios
Supports using promises (Promise based HTTP client for browser and node.js)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
### npm install axios
Then, don't forget to import axios into your App.js file

11. Data requests that fail have a fallback message to alert user

12. Add focus and ARIA elements
#### Accessibility Resources
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets

13. Check Semantics

14. Make images accessible
#### Add alt text to images - optional? If use image, need to include alt text.
No images used (foursquare api free developer account)

15. Add Service Worker to cache data when offline
#### Resource guide: https://hacks.mozilla.org/2016/03/debugging-service-workers-and-push-with-firefox-devtools/
If using Mozilla Firefox Developer Edition, page to start service worker for debugging app: about:debugging#workers

For more reading - https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle

16. Add and refine style
#### Color story to use:
	bold pink: #fc519c
	flamingo crimson: #e93a6a
	tan: #e2cbb6 or #ccc or #fdfdfd
	peru gold: #d89f3e
	dark olive green: #4b452e or #333 or #252831;

_Decided not to use_ _17. Hamburger Menu_
#### npm install react-burger-menu --save
#### npm install escape-string-regexp --save

_Decided not to use_ _18. Install Knockout to make dependencies cleaner_ https://github.com/knockout/knockout
#### npm install knockout

19. Install React Google Maps
npm install --save google-map-react
https://www.npmjs.com/package/google-map-react
or (this is the one I used:)
#### npm install --save react-google-maps
https://tomchentw.github.io/react-google-maps/#installation

20. npm install recompose --save
https://github.com/acdlite/recompose

21. npm i sort-by
https://www.npmjs.com/package/sort-by/v/1.2.0

22. npm install --save escape-string-regexp
https://github.com/sindresorhus/escape-string-regexp

#TROUBLESHOOTING - Console Errors Fix
### React Naming
#### Use PascalCase for React components, or lowercase for HTML elements.
1. mapContainer --> MapContainer
Fixed this, and now map displays as intended.

2. searchContainer --> SearchContainer
Fixed this, and now search bar displays as intended.

3. index.js:1452 Warning: <markersContainer /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
    in markersContainer (at mapContainer.js:13)
    in div (created by GoogleMap)
    in GoogleMap (at mapContainer.js:28)
    in MapContainer (created by withGoogleMap(MapContainer))
    in div (created by withGoogleMap(MapContainer))
    in div (at App.js:122)
    in withGoogleMap(MapContainer) (created by withScriptjs(withGoogleMap(MapContainer)))
    in withScriptjs(withGoogleMap(MapContainer)) (at App.js:112)
    in div (at App.js:105)
    in App (at src/index.js:7)

Fixed this, and now all of the other error messages disappeared.

#### Invalid DOM property `tabindex`. Did you mean `tabIndex`

### Proper spacing matters for string interpretation
Received `true` for a non-boolean attribute `id`.
If you want to write it to the DOM, pass a string instead: id="true" or id={value.toString()}.
    in div (at App.js:137)
    in div (at App.js:136)
    in div (at App.js:105)
    in App (at src/index.js:7)

#### Fixed spaces from _<div id = "main">_ -->  _<div id="main">_

### Responsive Design
1. At 599 px, the list width does not match up with the header, map, and footer
Display order (top to bottom) - header, map, search bar, list, footer
#### search-container width at 96% matches header, map, and footer widths
This resolved the mismatch issue.

2. At 600 px, the search bar ("filter by...") and list moves to the left, with the map on the right. This looks good. Good breakpoint.

3. There was an odd spacing issue below the map.
#### Change padding from px --> em --> %
padding: 2% allows inherited property of padding.
This resolved the gap.

4. At 862px, the footer-container cut-off the footer info.
#### Adjust footer-container to 50%
This resolved the display issue and looks clean.

# Preparing for Commit
Not committing node_modules folder (lots of files)
