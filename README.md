## Introduction:

[Dashboard] is a tool used for information management and business intelligence build in single-page.
The goal of this project was to create a dashboard using and implementing different APIs to make widgets.
For this project we choose to develop our app in angular, a framework for building single-page client applications using HTML and TypeScript.

## Summary:
* [Requirements](#user-content-requirements) 
* [Installation](#user-content-installation) 
* [Usage](#user-content-usage) 
* [Features](#user-content-features) 
* [Authors](#user-content-authors) 

## Requirements:

- Node.js
- npm package manager
- Angular CLI
- angular material

## Installation:

#### Get Node.js and npm:
**Fedora**

```sh
sudo dnf install nodejs
```
**Arch Linux**

```sh
pacman -S nodejs npm
```
**Ubuntu**

```sh
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Get Angular CLI:
```sh
npm install -g @angular/cli
```

#### Get Angular Material:
```sh
ng add @angular/material
```

## Usage:

**Run App with:**
```sh
npm install
ng serve --open
```

## Features:

The app will offer the following features: [Register](#New-user), [Login](#Authentication / Identification), [Services](#each-service-offers-widgets), [Configure](#configure-each-widgets)
You must click on a service to have access to the widgets and add it to the dashboard and you have the possibility to move the widget and delete it.

### Login:
 - You can Register via a form
 - Authentication via a username /password
 - Identifying users via OAuth2(Google)

### Service Youtube:
 - Widget statistics: you can see the statistic of your channel
 - Widget subscriptions: you can see the number of youtube channel subscriptions and the channel name
 - Widget liked videos: you can see the last 20 videos you liked, with their title and their channel owner name

### Service City:
 - Widget weather: you can see the weather in any city
 - Widget location: you can see the location

### Service Currency:
 - Widget converter: you can convert your money to have it in usd

## Authors:

Delesan Srineevasan / Quentin MAILLARD
