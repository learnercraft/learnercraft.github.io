---
title: iSpeakerReact development history
date: 2025-05-10
authors:
  - yell0wsuit
---

## How it began

Before it was known as *iSpeakerReact*, the project was called *iSpeaker*.

It originated from the version included on the CD-ROM of the *Oxford Advanced Learner's Dictionary 9th edition* in 2015.

![Oxford iSpeaker screenshot](/images/blog/2025-05-10-ispeakerreact-development-history-image-01.webp)

Developed by Oxford University Press, the tool came packed with features that were transfered to today’s iSpeakerReact. It was built using [AngularJS ↗](https://angularjs.org/) and [jQuery ↗](https://jquery.com/).

However, due to its reliance on Node.js, it couldn't run in standard web browsers. So we modified its code to make it browser-compatible. Unfortunately, there were some compromises that we had to make. For example, the recording feature had to be removed, as we didn't know how to implement it at that time. The app was also quite buggy and not user-friendly, especially on mobile devices.

<!-- excerpt -->

## The first revamp

In 2023, we gave the interface its first major redesign ([pull request ↗](https://github.com/learnercraft/ispeakerreact/pull/1)). We adopted Bootstrap 5 to modernize the UI.

![Screenshot of the first revamp](/images/blog/2025-05-10-ispeakerreact-development-history-image-02.webp)

Thanks to Bootstrap 5, the app became more visually appealing and responsive on mobile, and we introduced dark theme support for the first time.

Despite the visual improvements, the core of the app still relied on AngularJS, which had been deprecated in 2022. It became clear that a complete rebuild was necessary.

## Rethinking the app

To address the shortcomings of the old app, we began considering a complete rewrite.

Our first thought was to migrate to [Angular ↗](https://angular.io/), the modern successor to AngularJS. But we found it quite difficult to learn, as it differed significantly from AngularJS.

We then explored [Vue.js ↗](https://vuejs.org/). But learning single-page app (SPA) development from scratch proved to be a challenge. We struggled even with building the homepage, constantly tweaking CSS and trying to integrate Bootstrap’s vanilla JavaScript 🤦‍♂️. Eventually, we gave up on Vue.

## The second revamp

In March 2024, after gaining access to ChatGPT, we asked it to help us rebuild the app using [React ↗](https://react.dev/). ChatGPT helped us create the project’s basic structure, which was a great starting point. We used [Create React App ↗](https://create-react-app.dev/) to scaffold the project.

In this React version, we successfully implemented the recording feature. However, we ran into issues with audio playback on iOS 16. Despite spending nearly a month troubleshooting, we couldn’t resolve it at the time.

Five months later, we resumed work. By then, Create React App was being deprecated, so we switched to [Vite ↗](https://vitejs.dev/). While CRA was beginner-friendly, Vite proved faster and better suited for our needs—especially for deploying to GitHub Pages.

We began implementing the key features from the original app, starting with the Conversation and Exam sections, followed by the Exercise section.

On September 6, 2024, the new version was merged into the main branch—after months of coding, debugging, and consulting both ChatGPT and Claude.

To reflect the changes, we renamed the app to *iSpeakerReact*, representing both its modern tech stack and the enhanced features inspired by the original tool.

![Screenshot of the second revamp](/images/blog/2025-05-10-ispeakerreact-development-history-image-03.webp)

## Electron support

To make the app work offline like normal desktop apps, we added [Electron](https://www.electronjs.org/) support ([pull request ↗](https://github.com/learnercraft/ispeakerreact/pull/13)).

The original version, *iSpeaker: Pronunciation Tool*, was once available on the Microsoft Store. It was based on the first revamp and bundled with audio/video files. However, the file size—around 3GB—made it difficult to distribute and update.

With Electron support, we removed the bundled video files and added a feature to download them from online sources, reducing the size to about 700MB.

We also implemented logging in the Electron version to help users report bugs more easily.

To automate releases, we wrote a script that builds and publishes the app to GitHub Releases. Getting this working was tough—we waited ~15 minutes each time just to see an error 😫. After much trial and error (and help from both ChatGPT and Claude), we got it working. Manual builds were an option, but they weren’t as secure or verifiable, which goes against [our missions](/about/#our-mission).

## Localization support

Initially, all UI text was hardcoded in English. We later added localization support ([pull request ↗](https://github.com/learnercraft/ispeakerreact/pull/15)), allowing the app to be translated into different languages.

The first supported language was Chinese, thanks to [@wekik](https://github.com/wekik).

For translation management, we started with Crowdin, but quickly hit its free-tier limit. After applying for the open-source plan, we continued for a while—until Crowdin abruptly suspended our project without notice. That was a huge setback. (Note to future projects: don't use Crowdin.)

We then switched to [Weblate ↗](https://weblate.org/), which turned out to be a perfect fit. It’s open-source, has generous limits, and integrates smoothly with GitHub. While the setup was initially complex, it was worth it in the long run.

![Weblate project dashboard](/images/blog/2025-05-10-ispeakerreact-development-history-image-04.webp)

## The third revamp

While Bootstrap gave iSpeakerReact a solid foundation, we felt it made the UI look too similar to other Bootstrap-based websites.

Its rigid design system also limited our customization options.

So we adopted [TailwindCSS ↗](https://tailwindcss.com/) and [daisyUI ↗](https://daisyui.com/). This combo allowed us to create a more unique and flexible design system. We chose green as our primary color for its calming, eye-friendly appeal—better than the default blue.

Before daisyUI, using Tailwind alone was challenging. Its flexibility made it difficult to maintain consistent styling, and we had to write a lot of repetitive code. daisyUI streamlined the process while still offering the flexibility Tailwind is known for. Unlike Bootstrap, we didn’t need custom CSS/Sass to override styles—we just used Tailwind classes.

![Screenshot of the third revamp](/images/blog/2025-05-10-ispeakerreact-development-history-image-05.webp)

This third revamp is the app’s current iteration.

## The Word section

Over time, we began adding new features that weren’t present in the original app—or simply weren’t feasible before.

The first major addition was the Word section ([pull request ↗](https://github.com/learnercraft/ispeakerreact/pull/33)). It helps learners practice pronunciation of common words from the Oxford 3000™ and 5000™ lists. Each word is broken into syllables, with primary and secondary stress clearly highlighted.

![Word section screenshot](/images/blog/2025-05-10-ispeakerreact-development-history-image-06.webp)

A standout feature is real-time syllable highlighting, showing learners exactly where and how to pronouce each syllable. There’s also a slow playback mode to help learners practice at a more comfortable pace.

## Future plans

We’re continuously improving the app—fixing bugs, adding features, and improving security as needed.

If you have feedback or suggestions, feel free to [open an issue on GitHub ↗](https://github.com/learnercraft/ispeakerreact/issues).
