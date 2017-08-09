<h1 align="center">Next.js + Cloud Functions ⛅️</h1>

<p align="center">
  <strong>Going serverless with next.js</strong></br>
</p>


## Why?
You want server-side rendering with react and you don't want to worry about your server.

Let Firebase set up, maintain, and scale your back-end automatically. You don't have to worry about server configuration, provisioning new servers, or decommissioning old ones. Also the deployment process is simple and easy with `firebase deploy`.


## Quick Start

#### Clone this repo

```bash
$ git clone https://github.com/epilande/next-cloud.git
$ cd next-cloud
```

#### Install dependencies

```bash
$ npm install
```

#### Launch dev environment

```bash
$ npm run dev
```

#### Launch app with local Firebase Cloud Functions

```bash
$ npm run serve
```

#### Deploy app to Firebase
*Before you deploy, make sure you update [.firebaserc](https://github.com/epilande/next-cloud/blob/master/.firebaserc#L3) to match your app's project name.*

```bash
$ npm run deploy
```

