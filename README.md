# GitHunt

The Apollo Server backend shared by all Apollo client example apps.

[![Get on Slack](https://img.shields.io/badge/slack-join-orange.svg)](http://www.apollostack.com/#slack)
[![Build Status](https://travis-ci.org/apollostack/GitHunt-API.svg?branch=master)](https://travis-ci.org/apollostack/GitHunt-API)

Demonstrates:

1. GraphQL schema, resolvers, models, and connectors to read from two different data sources, GitHub REST API and SQL
2. Web server with authentication and basic authorization using Express, Passport, and Apollo Server

Please submit a pull request if you see anything that can be improved!

## Running the server locally

1. **Install Node/npm.** Make sure you have Node.js 4 or newer installed.
2. **Clone and install dependencies.**
  Run the following commands:

  ```
  git clone https://github.com/apollostack/GitHunt-API.git
  cd GitHunt-API
  npm install
  ```

3. **Run migrations.** Set up the SQLite database and run migrations/seed data with the following commands:

  ```
  npm run migrate
  npm run seed
  ```

4. **Get GitHub API keys.**
  1. Go to [OAuth applications > Developer applications](https://github.com/settings/developers) in GitHub settings
  2. Click 'Register a new application' button
  3. Register your application like below
  4. Click 'Register application' button at the bottom. [It should look like this screenshot of the app setup page.](screenshots/github-oath-setup.png)
  5. On the following page, grab the **Client ID** and **Client Secret**, as indicated in [this screenshot of the GitHub OAuth keys page.](screenshots/github-oauth-keys.png)

5. **Add Environment Variables.** Set your Client ID and Client Secret Environment variables in the terminal like this:
  ```
  export GITHUB_CLIENT_ID="your Client ID"
  export GITHUB_CLIENT_SECRET="your Client Secret"
  ```

  Or you can use `dotenv`, to do this `cp .env.default .env` and edit with your Github keys.

6. **Run the app.**

  ```
  npm start
  ```

7. **Open the app.** Open http://localhost:3010/ to see what to do next.

## Running the server on Heroku

*Limitations:* This configuration is very limited and intended only as a quick way to deploy the Githunt API to the internet. Websockets won't work for subscriptions and since we're using SQLite, the database will be reset every time you re-deploy.

1. Install the Heroku CLI tool, and by using the `config:set` command, set the `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` environment variables that you obtained for local development.
2. Deploy the GitHunt API either by setting up a repository webhook or by using the Heroku CLI tool.
