---
title: the cagematch
subtitle: only the strong survive
date: 8 May 2018
---

# Purpose:
To leave this meeting with a decision regarding:

0. Identify the business case for the js framework/library
1. To document the pros/cons of ng, vue, and react
2. To leave with a decision on how the EDDE project should proceed

# Assessment criteria:
Aspects critical to the assessment:

0. development paradigm/tools and lifecycle
  -
1. learning curve
2. components
3. templates
4. css management
5. performance

helloworlds: https://github.com/zwhitman/framework-aoa

# Minutes

1. Node question
  - build env and tooling
  - npm vs. yarn
    + we're leaning towards yarn


brian question:
1. who's backing vue
  - alibaba
  - 80% of the contributions are coming from the corporate sponsors
2. security around grabbing packages


# Business case
1. Widgets that are self-contained

## Pros/Cons
### dev paradigm

- Prescriptive vs descriptive
  + ng is much more prescriptive
  + react and vue is more flexible
- typescript
  + must be used for ng/ could be used vue/react
- state mgmt
  + redux is the most powerful state manager today
  + redux can be picked up relatively but it is low level
- Vue in terms of paradigm
  - choice is a double-edged source


#### Outcome

### Tooling

Typescript
  - preference for typecasting
  - Pro of ng is that typescript is required


CLIs
  - all have robust clis

Testing
  - ava, jasmin, jest, protractor




# concerns about vue
1. the lack of architecture
   - you have to have a clearly defined arch/template strategy/mixins
2.

# Business Cases:
1. stable
2. performant
4. low network cost
  - we have about 130kb gzipped
5. reusable components <- atomic design
6. easy to onboard and maintain w/ fluid resources
  - vue is easiest > react > ng

# Probing questions
0. Do we prefer a prescriptive or descriptive approach?
1. Can multiple people work on a component at the same time easily?
2. Can devs focus on markup or style or js separately?
3. How interoperable is the framework?  

4. Who has the best docs?
5. How often have we observed breaking changes w/o notice?
  - ng not semver and rc's have breaking changes as well
6. How many open issues
  - ng: 2004
  - vue: 119
  - react: 370
7. License - quick note: until sept 2017, react used to have an especially dickish bsd license
8. What is the business case for the framework?
