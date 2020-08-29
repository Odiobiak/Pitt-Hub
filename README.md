# D4BL Pitt-Hub

**This is the repo for creating our website.**

## Note on Software used
**This site was created with Gastby.**
It is a frame work of Reactjs mostly used for Static website.
You would need to set up your enviroment.

## Installation

**First, you will need to download Npm and Node.js if you don't already have it.**
download npm https://www.npmjs.com/get-npm

Windows Instructions:
Download and install the latest Node.js version from the official Node.js website https://nodejs.org/en/

Mac instructions: (using homebrew, else download from https://nodejs.org/en/)
Install Node:
<br/>
    Open your Terminal
    type `brew install` node

Confirm it worked by typing: 
<br>
    `npm --version`
    `node --version` on your terminal.
    if there is a version number, it means you have the needed packages.

**Next make sure Git is installed on your computer**
Install Git on macOS https://www.atlassian.com/git/tutorials/install-git#mac-os-x
Install Git on Windows https://www.atlassian.com/git/tutorials/install-git#windows

**Next Install Gastby Cli**
The Gatsby CLI is available via npm and should be installed globally by running:
    `npm install -g gatsby-cli` 

Install this starter (assuming Gatsby is installed) by running from your CLI:
<br/>
`gatsby new gatsby-starter-forty https://github.com/codebushi/gatsby-starter-forty`

Run `gatsby develop` in the terminal to start the dev site.

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```
