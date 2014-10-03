# CornerCase

A super-heroic modern web interface for XBMC/Kodi based on ngbp.

What is CornerCase?
-------------------

Not much yet. This is a hobby project for me to gain experience in AngularJS and Grunt. That being said, the master branch should always be working and have some functional pages.

What will CornerCase be?
------------------------

 - **Well Routed** - One of my goals for CornerCase is to have the URL accurately represent the current page. This allows fun things like bookmarks and refreshing the page without losing your state. Sounds simple but a lot of sites/apps screw this up.

 - **Supporting Mobile** - I'm not going to go as far as saying ["Mobile First" like Twitter's Bootsrap](http://getbootstrap.com/) but this app will use Bootstrap and the plan is to support major mobile browsers but honestly all the development is happening on a laptop.

 - **Modern UI** - Recently someone at Microsoft decided that computer UIs should be simple and flat rather than realistic and as an unartistic software developer I couldn't be happier. All credit for this goes to Bootstrap 3
 
 - **Play in the Browser** - There have recently been some advances in playing video in the browser via HTML5 so hopefully I will get around to playing with that at some point.
 
 - **Fast** - CornerCase will always load the page first and then do the slow job of loading library data in the background, adding chunks of data as they're received.


What will CornerCase not be?
----------------------------

 - **Supporting Every Browser** - As much as I'd love to support IE6 on WinXP, this often comes at the cost of overall maintainability. More importantly, I don't have every system that exists to test on. I plan to primarily support Chromium, then Firefox, then mobile android and safari. Hopefully supporting these will be enough to support other well behaving browsers. If you're reading this and you can make a small change to keep compatibility with your obscure browser of choice by all means submit a PR.

 - **Dependent on a incompatible technologies** - CornerCase will use simply AngularJS, HTML, and CSS in production. Developers will need to use node.js, grunt, and bower but minimal knowledge is needed (After all, I only have minimal knowledge of these parts). CornerCase will not rely on PHP, Ruby/Rails, Groovy/Grails, Python, JQuery, Silverlight, or Flash Player.

Can I try it?
-------------

Of course! You will first need to install [Node.js](http://nodejs.org) then:

```sh
$ git clone https://github.com/kmb32123/CornerCase.git
$ cd CornerCase
$ sudo npm -g install grunt-cli karma bower
$ npm start
```

You can find some more information on running and developing from the base project [ngbp](https://github.com/ngbp/ngbp/blob/v0.3.2-release/README.md#detailed-installation).

What is ngbp and why is this a forked from it?
----------------------------------------------

ngBoilerplate is the starting point of CornerCase. From ngbp's page:

>`ngBoilerplate` is designed to make life easy by providing a basic framework
with which to kickstart AngularJS projects. It contains a best-practice
directory structure to ensure code reusability and maximum scalability.
ngBoilerplate also comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com),
[Angular UI](http://angular-ui.github.io),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap),
[Font Awesome](http://fortawesome.github.com/Font-Awesome), and
[LESS](http://lesscss.org). Lastly, it contains a sophisticated
[Grunt](http://gruntjs.org)-based build system to ensure maximum productivity.

By forking ngbp, CornerCase can easily pull in new updates and modifications to ngbp. I can also do fun things like this:

```
$ git merge remotes/upstream/pr/276
```

About
--------

###Namesake

The project is written in AngularJS; angular leads to corner and the intention of this project is to handle a lot of obscure cases; CornerCase.

###License

The source is released under the [MIT-License](http://opensource.org/licenses/MIT).
