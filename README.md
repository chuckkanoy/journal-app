# Jot It: Journaling App

---
This application allows the user to create, store, edit, and view journal entries following different UI guidelines.
*Created for CSCI 488: Human-Computer Interaction*

[Demo](https://youtu.be/TxZp-A1nkaQ)

## Reading

The app can be broken down into five areas: the main app component, the screen components folder (i.e. pages), the internal components (i.e. constants), the context component, and the style component.

- **App** - contains the navigation logic and initializes context variables and methods to be used by other components

- **Pages** - contain the logic to parse the information for and display each of the different screens appropriately

- **Constants** - contain the logic for different display components that have internal logic to be displayed on multiple screens

- **Context** - contains the logic for providing and consuming the context amongst different components and declares the entries array to be used throughout the application

- **Styles** - contains a react native style sheet to be used by the different components displayed

## Running

To run the app, npm must be installed on the computer, a smartphone must be connected to the computer, and Expo must be installed on the smartphone.
*Alternatively, the expo window that opens allows for simulating in a web environment*

### Setting up the environment

- Install npm on your computer using the following commands: 
`cd JournalProject`
`npm install`

- Install [Expo](https://expo.io/) through the appropriate app store

- Connect the smartphone using its charging cord

- Allow development permission through pop up on phone

### Start the app

- Run the app using the following commands:

`cd JournalProject`

`npm start`

  - If `This command requires Expo CLI` appears, install globally using `Y` or `y`

- In the expo window that appears in browser, click the option you'd like (Android, iOS, or browser simulator)
