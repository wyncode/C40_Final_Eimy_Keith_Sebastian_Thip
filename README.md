# C40 Final - EstateRev

**EstateRev**\_ is an app that depending where you are wanting to buy or rent a home you get an overview of the community around you, the businesses the schools and even the crime that makes your property or rent increase in price.

## Status

The project is currently done from a functional standpoint on a beginer scale. Though more additional features could be added for a more robust application.

## Setup

- `git` clone into it
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `yarn add axios`
- `yarn add react-bootstrap bootstrap`

## Who

We are Keith, Sebastian, Thip, and Eimy. Wyncode students, developers looking forward to better the world with our ideas and new learned skills.

## How

The idea was to have a fully functional app that would help home buyers and renters view their surroundings depending on the location of the home that they are buying or renting. Users to be able to see what makes their home increase or decrease price according to their surrounding as well as offering them easy management for their home needs depending on the local businesses in the area.

We have made use of the CSS, JS, HTML, React, DOM manupulation etc. All the skills we have managed to learn. No specific versions of other software is required to run this app.

## Install

No install or special configuration is necessary for this project to run other than internet connection for this web based application, and a phone or computer to access it.

## API Information

-We have made use of several APIs available to use for this projecct. For the schools we have used the Great Schools API to pull a list of schools in the area, Google Maps API for a view of the map, Cicero API, Realtor API for a listing of forsale and rental houses, Sendgrid API, Yelp API for some businesses in the area, and the FBI Database API to view the crime and violence around.

## How It Works

- The end-user will open up the web-application and land on its landing page which will present a suggestion for us to let them guide the user home.
- The end-user will then type in the City Name of their choosing into the search form.
- After inputting in the city and either hitting the magnifying glass they will be able to to view the choice of buying, renting the community and the manage option directed on the top of the search bar.
- This API feeds us a couple different data points from a selected city depending on the choices made.
- This response data is then sent through several functional components depending on the choices made. If the user choses to view the community of that neighborhood or city or zipcode then the API will give a call and respond with several API endpoints per component in the community page as the map will be the first to show and under it will show the schools the crime and so forth.
- The outputs of several components may be shown in the same page.

## Enjoy and be aware of your property surroundings to see how it may increase or decrease it's value.
