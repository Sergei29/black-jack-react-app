# to Deploy on Heroku:

- heroku git:remote -a black-jack-react-app
- git add .
- git commit -m "my commit message"
- git push heroku master

# black-jack-react-app

- Production version deployed to : https://black-jack-react-app.herokuapp.com/

- Development version can be cloned from github public repo.

# Development version:

( you will need Node.js and git installed locally; Chrome browser is recommended)

- git clone https://github.com/sergejs-basangovs-ingresso/black-jack-react-app.git
- cd black-jack-react-app
- npm i

# The BlackJack React Application:

- created with create-react-app
- basic styling accomplished with css-in-js `styled-components` library
- Global state managed on client side accomplished by using Context API/hooks
- Flux architectural pattern used for data flow: Component->Action->Reducer->Store->Component
- Directories:

  - /.circleci
    config.yml - configuration for ci/circleci to run automation tests on remote branch update

  - /public

  - /src

  - /components: re-usable presentational components (eg. Buttons, Card, CardsList etc.)

  - /containers: BlackJack, GameControls, Dealer, Player - components connected to context

    - /BlackJack: Application container, applying context provider HOC for children components
    - /GameControls: Operating the game and displaying game current output, connected to store (state)/ useContext hook
    - /Dealer: Dealer current status displayed / useContext hook (later can be changed into presentational component)
    - /Player: Player current status displayed / useContext hook (later can be changed into presentational component)

  - /context: store, store provider HOC, reducer, action types and actions

    - store: store initialized with createContext, store provider - StoreProvider HOC
    - reducer: reducer pure function returning new state based on fired actions
    - actions.types: types of actions required for app to calculate
    - actions: actions creator functions returning actions objects, if any calculation 'heavy lifting' needs - it is done here
      so the action is sent to reducer with ready-to-process data.
    - utils: utility functions (eq. manipulate cards deck, shuffle deck, calculate points etc.)

  - /data: game related data (deck of playing cards etc. )

# Additional Info

- unit testing: basic tests accomplished by using jest and enzyme library
- ci/circleci running unit tests on github repository branch update
- production version deployed to Heroku.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
