## Project : TODO APP USING REACT

## Author : GURAJAPU CHAITANYA DEEPIKA.

This project is mainly to list out various tasks in our day-to-day life. 
It makes our works easier, helps to maintain work-life balance and also reduces chaos in our lifes as it acts as a remainder for all the tasks. 

This app is build using react and styles using css.
These are the following steps to how to run the app after extracting the files.


## How to setup the files?
 =>select a folder and install react. (npm istall react -g) [Install react gloablly].
 => Create a react app using npx create-react-app <appname>
 => It creates a recat app with several files and modules.
 =>In the src directory, Create a folder of the name of your choice ['components' in my case].
 => place todo.js, edittodoform.js, todocontainer.js and todoform.js in the components folder.
 => Replace the existing code in index.js , App.js , App.css with the files available.
 => Delete unncessary files (The files such as index.css, Appsetup.js etc.)
 => Refer to the image for better understanding of the flow of the files.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


#### Files included in this Project.

 => `Index.js` renders the whole application by rendering the <App/> component.
The project contains `App.js` file which is used to render the outcome of the whole project.
There is a component folder that contains 
 => `Todo.js` contains the structure and components inside a todo item.
 => `TodoForm.js` contains the form structure such as the input and list items button.
 => `EditTodoForm.js` contains the code related to editing of a task that makes an todoitem to an input item with a
 update button to modify the tasks.
 => `TodoContainer.js` contains all the contents of the above described files including the heading and the clear button. 

### Features of the project.

 => Responsive layout. The project is responsive and can be adaptable to small and large devices respectively.
 => Add tasks. We can add multiple tasks in the application.
 => Delete tasks. We can delete tasks.
 => Modify the tasks. We can also modify the tasks accordingly.
 => Mark the tasks. We can save the state of the tasks by marking them complete.
 => Saving the tasks. The tasks are automatically saved even you refresh the page.
 => Clear the tasks. You can clear all the tasks at once using clear button.

 ![Output](image-1.png)


## Other commands related to the project:

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)