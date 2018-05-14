---
title: hello worlds
subtitle: let's see what's good with what
date: 3 May 2018
---

# Process
Stood up hello worlds form the docs for: 1) Angular; 2) React; and 3) Vue using the recommended defaults outlined in each frameworks' respective docs. All three recommended using some type of cli that appear to be officially supported and in various states of development. For Vue, the [vue-cli](https://github.com/vuejs/vue-cli) was recommended in the docs and appears to be supported by Vue developers, although is currently in beta. For Angular, the [angular-cli](https://github.com/angular/angular-cli) was used and is supported by Ng developers. React documentation recommended using the [create-react-app CLI](https://github.com/angular/angular-cli), which is currently officially maintained.

All applications were built with defaults and each application includes one component. Any framework specific media or assets were removed for consistency. Further, prod builds can be found in /dist for ng and vue and /build in react.

## Application requirements
1. Basic component integration
2. State mgmt
3. Router

# HelloWorlds

## Vue

log:

requirements
1. base vue.js install
2. vue-router <- routing
3. vuex <- state mgmt

### Install process
[vue docs](https://github.com/vuejs/vue-cli)

```
npm install -g @vue/cli
vue create my-project
npm install vue-router --save
npm install vuex --save
```
[vue package.json](./vue/vue-hello/package.json)

## React
[reactjs install docs](https://reactjs.org/docs/add-react-to-a-new-app.html)

```
npm install -g create-react-app
create-react-app my-app
cd my-app
yarn add react-redux react-router-dom redux
npm start
```

[reactjs package.json](./react/react-hello/package.json)

## Angular
[ng install docs](https://angular.io/guide/quickstart)

```
npm install -g @angular/cli
ng new my-app
cd my-app
npm install @ngrx/core @ngrx/store  --save
ng serve --open
```

[ng package.json](./ng/ng-hello/package.json)
# Results
tbd

## prod builds <- defaults (no tuning):
1. react
  - no cache: 365 KB
  - reload no cache: 3.3 KB
  - reload w/ cache: 0 KB
2. vue
  - no cache: 106 KB
  - reload no cache: 106 KB
  - reload w/ cache 2.6 KB
3. ng:
  - no cache: 314 KB
  - reload no cache: 314 KB
  - reload w/ cache: 799 B

# Appendix A
![results](./shared-assets/user-guide.gif)
