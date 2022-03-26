# Project & Portfolio VI

- **RESEARCH - Understanding Your Production App**
- **Horace Bramwell**
- **03/27/2022**

<br>

## Creating a Production Build

While I was aware that you could create a production build of a React app, I didn't quite know what each of the static assets was. This resource describes how the static assets are broken down and what each of them contains. This was helpful because it gave me a better understanding of what each of the static assets does and their importance.

- **main.[hash].chunk.js**: This is the main JavaScript file that contains all of the code for the application.
- **[number].[hash].chunk.js**: This is the JavaScript file that contains the code for the vendor libraries.
- **runtime-main.[hash].js**: This is a small chunk of webpack runtime logic that is used to load and run your application.

The article also talks about static file caching, which I explore a little more independently.

<br>

## Why do I need a staging environment? Let me tell you

This article discusses some important reasons why you should have a staging environment. While the article seems to be speaking more to the site owner, you can gather from the scenarios presented in the article just how important staging is. They are a great way to test your site before you deploy it to the live server. This way, you can avoid any downtime and ensure that your site is working as intended.

<br>

## Reference Links

**Resource 1: Heroku Logs – The Complete Guide**
[coralogix.com](https://coralogix.com/blog/heroku-logs-the-complete-guide/)

This article is essentially a guide to how to use Heroku Logs. I ran into a couple of issues deploying the demo app on the production server. I found this article helpful in learning the best practices for making the most out of Heroku Logs. This article covers topics such as log severity levels, types of logs, and how to use the Heroku Logs inside of the dashboard and CLI.

**Resource 2: Caching best practices & max-age gotchas**
[jakearchibald.com](https://jakearchibald.com/2016/caching-best-practices/)

This article was a decent introduction to caching and its best practices. I had a general idea of what caching was but I didn't know how it worked specifically or how to implement it. In short, **caching** is a way to speed up your website or application by storing data that doesn't change in the browser. This is useful for things like static assets, images, and other files that don't change often.

**Cache-Control** is a header that allows you to set the caching policy for a resource. It is an HTTP header that is used to specify how long a resource should be cached. It is also helpful in preventing the browser from making multiple requests to the server for the same resource. This will provide a better user experience and improve the performance of your website.

**Resource 3: Staging Environments are Too Important to be Overlooked: Here's Why**
[hackernoon.com](https://hackernoon.com/staging-environments-are-overlooked-heres-why-they-matter-5jp2gm0)

This article goes into a bit more detail about the reasons why staging is important and speaks directly to the developer. One main reason is that rollouts and rollbacks in a production environment directly impact end-users. This is something that can be avoided with staging environments. There are also other reasons why staging environments are important.

Without a staging environment, you may run into the following issues:

- **Downtime in Production**: You may need to take downtime in production to fix a bug or to make changes to the code.
- **Poor user experience**: Users may not be able to access your site because of downtime. This may deter them from returning to your site.
- **Loss of revenue & customer satisfaction**: As a result of the two issues above, this can result in a loss of revenue and customer satisfaction.
- **Loss of brand loyalty & reputation**: Another outcome caused by the issues above.

All of these can be avoided by having a staging environment. Deploying your site to a staging environment gives you more freedom to experiment and make changes without impacting users.
