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


<hr>
# HelloWorlds

## Vue

log:

requirements
1. base vue.js install
2. vue-router <- routing
3. vuex <- state mgmt

### Install process
```
npm install -g @vue/cli
# or
yarn global add @vue/cli

vue create my-project

npm install vue-router --save

npm install vuex --save


```

## React

## Angular

# Results
tbd

## modules

## prod builds <- defaults (no tuning):
1. react: 3.4 kb
2. vue: 65.1 kb
3. ng: 2.5 mb

# notes

jsx with the className bullshit might be the most annoying thing. or i'm just hungry

# Appendix A
![results](./shared-assets/user-guide.gif)
