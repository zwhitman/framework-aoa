---
title: The front-end framework AoA
subtitle: To upgrade or rewrite - are they even different questions?
date: 27 April 2018
---

On January 26th, 2018 the maintainers of AngularJS announced the release of one final significant release, version 1.7 that will enter a 3 year Long Term Support (LTS) period. The issuance of a LTS period indicates that the AngularJS project will no longer be supported following July of 2021; all development for AngularJS 1.x will cease, and migration strategies to Angular.io (version 2.x) must be developed for AngularJS (1.x) systems.

AngularJS is a javascript framework that assists in developing and maintaining web applications, and is the framework used by the EDDE platform's front-end. Importantly, the EDDE platform currently uses AngularJS version 1.5, and therefore EDDE would be required to upgrade to version 1.7 to ensure the LTS period would be effective for CEDSCI. Consequently for EDDE as a Decennial system responsible for the dissemination of Decennial data in 2021, the announcement of a final AngularJS release and the beginning of a LTS period represents a programmatic risk for CEDSCI as it compromises the maintainability of the EDDE platform.

<!-- ## Risk
Should the EDDE platform not migrate to a supported JS framework, then the EDDE UI will be required to actively maintain the AngularJS framework during the initial release of 2020 data.
 -->
Criticality rationale for upgrading.

Two mitigation strategies are as follows: (1) migrate to an actively maintained front-end framework (Angular.io or mainline alternatives); or (2) continue to support AngularJS past the LTS period through direct contract with Google (AngularJS sponsor) or third-party.

The first mitigation strategy consists of either migrating the EDDE front-end to Angular.io (which is the direct successor of AngularJS) or  a competing javascript framework. The second mitigation strategy only serves to extend the inevitable solution of migrating from AngularJS and should be executed should a suitable migration strategy not be found in time for 2021 data release. Ultimately the imperative question facing the CEDSCI program is what javascript framework should be used to replace AngularJS.

# The approach
To identify the most suitable javascript framework available for EDDE usage, CEDSCI staff will conduct a 3-phase approach:
1. Conduct a market analysis of mainline javascript frameworks and identify the most appropriate replacements available today;
2. Develop 'Hello World' applications that establish the time, tooling, and models required to instantiate an application, ensuring specific EDDE requirements such as componentization is demonstrated; and
3. Produce a series of final recommendations for CEDSCI leadership.

## Landscape Analysis
See Dave's Doc

## Hello World

## Recommendations
