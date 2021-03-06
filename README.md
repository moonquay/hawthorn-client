# hawthorn-client
This is a React app, and the frontend application for Hawthorn.

## Software dependencies
The following software must be installed prior to running `hawthorn-server`:
* [git](https://git-scm.com/downloads) - This is for version control
* [Node.js](https://nodejs.org/en/) - Node is used for running `hawthorn-client` and installing dependent JavaScript packages using the `npm` command.

## Set up a development environment
The following steps walk you through downloading `hawthorn-client`, installing some last minute packages, and running the server so that you can start coding.  Please [make a pull request](https://github.com/trex/hawthorn-client/pulls) if this process is incomplete or inaccurate, and [open an issue](https://github.com/trex/hawthorn-client/issues) if you cannot get things working.

### Clone `hawthorn-client`
Download the source code and change directories into your freshly cloned `hawthorn-client` directory:
```sh
#If your `git` is configured with SSH:
git clone git@github.com:trex/hawthorn-client.git && cd hawthorn-client
#If your `git` is configured with HTTPS:
git clone https://github.com/trex/hawthorn-client.git && cd hawthorn-client
```

### Create a configuration file
Configuration is managed in a JSON file.

Create `configuration.json` in the `src/configuration` directory:
```
touch src/configuration/configuration.json
```

Paste the following contents into `src/configuration/configuration.json` in your text editor:
```
{
  "graphqlServer": {
    "endpoint": "http://localhost:4000"
  }
}
```

### Install Node and JavaScript packages
The following command installs the required packages that are specified in `package.json`:
```sh
npm install
```

### Run the API server
Finally, start the `hawthorn-client` process:
```
npm start
```

You can verify that the application is running in your browser at [http://localhost:3000/](http://localhost:3000/).

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