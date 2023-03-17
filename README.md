# Meet App


It's a serverless Application, to filter events in your city to see what’s happening around you. 
User can show/hide event details, specify number of events to view, use it offline…

## Techinical Specifications

REACT, TDD Technique, GOOGLE Calendar API, Oauth2 flow, AWS Lambda.

## Serverless Functions

- User Authentication;
- Real-Time Communication;
- Deployment;

The Meet app is an example of how serverless functions can be used to build scalable, efficient, and cost-effective web applications. By leveraging the power of AWS Lambda, API Gateway, Cognito, SNS, and SQS, the app is able to provide a high-quality video conferencing experience for users while minimizing infrastructure costs and complexity.


# User Stories

###### Feature 1: Filter event by city
As a USER,  

I should be able to filter events by city. 
So that I can see a list of events in the upcoming days in the city. 

###### SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events


######  SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they’ve typed


###### SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
- Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

###### Feature 2: Show/hide an event’s details

As a USER,  

I should be able to show and hide events by city. 
So that I can see details of events may I’m keen. 

###### SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT
- Given an event’s info has been loaded
- When a user first gets an event list
- Then the event’s details will be collapsed


###### SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS
- Given an event’s details have been loaded
- When a user clicks on a collapsed event
- Then the details become visible


###### SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS
- Given visible events details
- When a user clicks to hide
- Then the event’s details will be collapsed

###### Feature 3: Specify number of events 
As a USER,

I should be able to specify how many events are returned on the search 
So that I can choose how many events to look at

###### SCENARIO 1: WHEN USER HASN’T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER
- Given a user has not specified a minimum number of events to load
- When a user opens the app and runs a search
- Then a total of 32 events will be loaded


###### SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE
- Given a user can define the number of events to load in the application
- When a user defines the number of events
- Then the number of events selected by the user will be the number of events returned

###### Feature 4: Use of application when offline 

As a USER,

I should be able to use my application when offline
So that I don’t need to rely always with an internet connection to use the application 

###### SCENARIO 1: SHOW CACHED DATA WHEN THERE’S NO INTERNET CONNECTION
- Given a user has once on-line opened the application upon an internet connection
- When the user opens the application with no internet connection
- Then it will be displayed the cached data of the last access


###### SCENARIO 2: SHOW ERROR WHEN USER CHANGES SETTINGS
- Given no internet connection
- When a user attempts to update a setting that requires data loading such as city or time
range
- Then will be displayed a message indicating that an internet connection is required for the
action


###### Feature 5: Data visualization 
As a USER,

I should be able to have an overview data
So that I can see all the events, the type of event, and where they are happening

###### SCENARIO 1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY
- Given there are listed events for a city
- When a user searches for a event in the specified city
- Then will be displayed the upcoming events in the specified city categorized by type
