# # Project 4: Evaluate a News Article with Natural Language Processing 

## Overview

This project is part of Udacity's Front End Development Nanodegree. From the course:

> This project requires you to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. 

The goal of this project is to get get used to:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

In addition to being able to analyze news articles and blogs through URLs, in my project users can also enter their own text to analyze. 

## Instructions

### Install node_modules
Clone or download the zip file locally, then navigate to the project directory to install the dependencies.

```
cd <project directory>
npm install
```

### Signup for an API key with MeaningCloud
Go to [MeaningCloud](https://www.meaningcloud.com/developer/) and register for an account in order to get an API key.

### Create an .env file

At the root of the project, create an ```.env``` file to store your API key.

```bash
API_KEY= '**************************`
```

### Run Dev-Server

```bash
npm run build-dev
```

### Run production server 

Run this command first : 

```bash
npm run build-prod
```

This command tells webpack to create a `dist` folder in the root directory. It runs on `localhost:3000`.

Use this command to start the server : 

```bash
npm run start
```

If you would like to know more about the results of the text analysis, check out the [MeaningCloud API documentation](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)