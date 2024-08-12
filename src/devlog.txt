# 07/12
## Page designer buttons and reusability

Okay my goal for today is to get the data link going between front and backend for the designer, decide on the database & set up connection. 
Gone and done the above, not devided on the db though, but I am thinking yeah maybe normal relational & prisma or vercels own

May do more today but for now Imma play some dark souls 3


# 06/12
## Page designer buttons and reusability
Productive day, had a bunch of shit going against me to begin with, couldnt figure out a simple state thing between components, kept getting infitity loop errors whatever that means

Really worked out the dynamic input buttons and preview shit works absolutely fantastic apart from a few tailwind issues, I did it by specifying certain inputs such as number, input, textarea etc and then build and map props against my static component setting file, this allows for easy access to adding new forms. 

All you need to do is update the static file & match it to the defined fields, there are definitively more work to be done in this area to allow for much more flexibility but at the moment it is working like a charm for simple things such as text input, color changes etc.

Happy with progress

# 05/12

## Page designer
Decide upon page desinger component setting data structure, can currently be passed in as anything within reason to the edit component

Will need to think of something that will allow for dynamic rendering of inputs for the preview, maybe direct onchange value that updates the array? 
Like a temporary array, then on saving I pass it back and replace the original one, that way I'll always maintain sane data

In any case most important is to ensure that I dont have to build fucking input fields every damn component, they should be dynamic
type bool, type str etc



# To Do:

- Create the form that sends the data
- Create the endpoint that accepts the data-
- decide on database
- Set up mongo/prisma schema
- Display page
- Create template type
- Create Page based on template, drag and drop?
- Render page based on template
- Publish pages instantly? 
- CRON job publish? 
- Authentication
- Image storage
- Menu styles
- Header Styles
- More design options
- Vertical & Horizontal Layouts
- FORM DESIGNER (ugh.........)
- dynamic theme colors
- Social icons
- Footer styles
- Reformat for readability and reusability
- Componentize
- Write docs
- Comment code, If i drop this for more than one day I will be lost in the fog


# Bugs:

- Opacity slider does not change opacity levels... YOU HAVE ONE JOB
- Max & Min values of form fields are not applied, this may be due to me being tired and using the wrong attributes but needs investigation
- Excesive but consistent 3 second load time on page designer, why? And why always 3 seconds?



