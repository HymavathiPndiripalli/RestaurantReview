### Aim:

## In **Restaurant Reviews** project, converting a static webpage to a mobile-ready web application. Service worker is used To Work pages in Offline .

#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements. The rubric should be a resource you refer to periodically to make sure your project meets specifications.

### What I have did from  here?

1.  In this folder, I have started up a simple HTTP server to serve up the site files on my local computer. In my computer I have already installed python 3.x.

    -   I have checked the version of Python in my computer: `python -V`.I have Python 3.x, I used `python3 -m http.server 8000`.

2.  With my server running, visited the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3.  Responsive Design: for Responsive web design I applied media queries for mobile view and tab view.I placed meta tag in index.html and restaurat.html .
4.  accessibility: I set the language of HTML by using lang Attribute. I implemented alt Attribute for image. Finally I have changed the background and foreground colors for anchor tags, h1 tags.
5.  offline: For offline use I wrote code for service worker.

## Leaflet.js and Mapbox:

I have Created Account in Mapbox .
This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). I replaced `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/) in main.js and restaurat_info.js files.

## manifest.js:

open link(<https://www.favicon-generator.org/>) then choose fevicon image and paste all links in index.html and download the generated fevicon .

## Conclusion:

By using this project:

-   I have learned how to run pages offline.
-   to convert a static web page to a mobile ready application.
-   I have learned how to generate fevicons for web page.
-   I have learned how to use DOM manipulations.
