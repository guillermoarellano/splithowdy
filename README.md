# Splithowdy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Purpose

This project is meant to showcase the outcomes of various different tutorials created for the [The Nomad Programmer YouTube](https://www.youtube.com/channel/UCsybtddeV8e5LoCHphjc5LA) channel. Select each one of the tags from the project to see the code history of the work done in the tutorial.

### Tutorial 1: Code Splitting Angular UI Library using CLI v9

In [this code showcase](https://github.com/guillermoarellano/splithowdy/tree/code-split-library), an Angular Library's components are split into separate JavaScript bundles during build time. We use the Angular CLI's ng-packagr to create our bundles. Through the use of independent `package.json` files in each of the component modules, we are able to indicate to the packager which modules need code splitting.

Repository Tag comparison: <https://github.com/guillermoarellano/splithowdy/compare/initial-code...code-split-library>

See the [video tutorial](https://www.youtube.com/playlist?list=PLcmxQITOQb2XCIEcMIzc5SptjxmHdZVHc) on YouTube.

### Tutorial 2: Moving Import Location of Angular Component Modules to Root Library Level

In [this code showcase](https://github.com/guillermoarellano/splithowdy/tree/move-to-root), we move the import location of component modules for an Angular Library up to the root level of the import hierarchy. This will make it easier to organize, to use, and to maintain. This showcase leverages the work that was done previously in the first tutorial.

Repository Tag comparison: <https://github.com/guillermoarellano/splithowdy/compare/code-split-library...move-to-root>

See the [video tutorial](https://www.youtube.com/playlist?list=PLcmxQITOQb2Wm_aOdMMOiaEvnDVp3J79s) on YouTube.

## Other Resources

To read other material on doing front-end projects for companies using Angular, please visit [The Nomad Programmer.com](https://thenomadprogrammer.com) website.
