# Repository list app

This is a repository list React Native Mobile application.

## Getting Started

1. Clone this repository and run `npm install` or `yarn install` to install all dependencies in the `repository-list-app` directory.

2. Execute `npm run start` or `yarn start` to initialize the application

3. You can run this aplication on your mobile device whit [expo go](https://expo.dev/client)

4. Also, you can run this application on your web browser, pressing the W key to show the preview app

![Screenshot from 2023-09-09 15-19-08](https://github.com/alexismunoz1/repository-list-app/assets/77214476/0565e185-e617-4ca6-8573-cc033b720bef)

## Abuout this application

#### With this application you can see a list of repositories, filter by category and search by name.

![527shots_so](https://github.com/alexismunoz1/repository-list-app/assets/77214476/f03f4d43-e5e2-4be0-ac3a-9b4f2e337015)

#### You can also create and delete reviews

![465shots_so](https://github.com/alexismunoz1/repository-list-app/assets/77214476/ecfc60a2-219d-4c78-843f-b3e8f0dc9981)

## api

For our server we can clone this repository which is a graphQL api to simulate our backend and consume the repositories.
The rate-repository-api server meets all the API needs of the application.
It uses SQLite database which doesn't need any setup and provides an Apollo GraphQL API along with a few REST API endpoints.

set up the rate-repository-api server by following the setup instructions in the repository's README. Note that if you are using an emulator for development it is recommended to run the server and the emulator on the same computer. This eases network requests considerably.

[https://github.com/fullstack-hy2020/rate-repository-api](https://github.com/fullstack-hy2020/rate-repository-api)

The rate-repository-api server provides an endpoint for returning a paginated list of reviewed repositories. Once the server is running, you should be able to access the endpoint at http://localhost:5000/api/repositories (unless you have changed the port). The data is paginated in a common [cursor based pagination format](https://graphql.org/learn/pagination/). The actual repository data is behind the node key in the edges array.

![26new](https://github.com/alexismunoz1/repository-list-app/assets/77214476/09522ed4-f521-48c8-a809-07d313c9b0a5)

Unfortunately, we can't access the server directly in our application by using the http://localhost:5000/api/repositories URL. To make a request to this endpoint in our application we need to access the server using its IP address in its local network. To find out what it is, open the Expo development tools by running `npm start`. In the console you should be able to see an URL starting with exp:// below the QR code, after the "Metro waiting on" text:

Copy the IP address between the exp:// and :, which is in this example 192.168.1.33. Construct an URL in format http://<IP_ADDRESS>:5000/api/repositories and open it in the browser. You should see the same response as you did with the localhost URL.

## Enviorment variables

Create a `.env.local` file and set the `APOLLO_URI` variable with your `IP_ADDRESS` like this:
```
    APOLLO_URI=http://<IP_ADDRESS>:5000/graphql
```
