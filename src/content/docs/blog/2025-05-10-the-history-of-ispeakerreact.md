---
title: The history of iSpeakerReact
date: 2025-05-10
authors:
    - yell0wsuit
---

## How it began

Before iSpeakerReact got its current name, it was called *iSpeaker*.

The tool originally started from the version on the CD-ROM of the *Oxford Advanced Learner's Dictionary 9th edition* in 2015.

![Oxford iSpeaker screenshot](/images/blog/2025-05-10-the-history-of-ispeakerreact-image-01.webp)

The tool is created by Oxford University Press, and it includes a plenty of features that is similar to the current iSpeakerReact. It is written in [AngularJS ↗](https://angularjs.org/) and [jQuery ↗](https://jquery.com/).

Due to its extensive use of Node.js code, it was not possible to run the tool on normal browsers. Therefore, we decided to tweak its code to make it work on browsers. The recording feature was removed because it was not possible to implement it on browsers at that time. The app at that time was also buggy and less user-friendly, especially on mobile devices.

## The first revamp

In 2023, we first made changes to its user interface ([pull request ↗](https://github.com/yllst-testing-labs/ispeakerreact/pull/1)). We used Bootstrap 5 for the design.

![Screenshot of the first revamp](/images/blog/2025-05-10-the-history-of-ispeakerreact-image-02.webp)

Thanks to Bootstrap 5, the app looked much better. It was also responsive, and the user experience was improved. It was also the first time to have dark theme support.

However, while the app looked better, its core was still using AngularJS, which was deprecated in 2022. So we decided to rethink and rebuild the app from scratch.

## Rethinking the app

To address the shortcoming of the old app, we started to think how to rebuild it from scratch.

We first thought about upgrading to [Angular ↗](https://angular.io/), which is a rewrite of AngularJS. We tried learning it, but we found that it was drastically different from AngularJS, which for me was really hard to learn.

Having explored other alternatives, we found [Vue.js ↗](https://vuejs.org/). Learning from scratch was kinda hard as we was not familiar with single-page app development. We did not know how to make the first homepage part, as we kept tweaking the CSS and integrating Bootstrap 5 vanilla JavaScript code 🤦‍♂️🤦‍♂️. Therefore, we gave up on it.

## The second revamp

In March 2024, when we got access to ChatGPT, we asked it to help me build the app in [React ↗](https://react.dev/). It helped me on creating the basic structure of the app, which was a good start. We used [Create React App ↗](https://create-react-app.dev/) to create the project.

In this React version, we was able to implement the recording feature. However, we met a roadblock when we tried to make it work on iOS 16. The audio playback was not working. We kept working on it and searched for solutions for almost a month before giving up.

After taking a break for almost 5 months, we continued working on it. When we found that Create React App was in the process of being deprecated, we switched to [Vite ↗](https://vitejs.dev/). Create React App was a simple tool, but eventually we find Vite more suitable for the project. It was faster and easier to deploy to GitHub Pages.

We started working on implementing the rest of the features in the original app, starting with the Conversation and Exam sections, before finally touching on the Exercise section.

On September 6, 2024, this new version of the app was merged into the main branch. It was a result of constant coding, debugging and asking ChatGPT for help (We did ask Claude for help for some parts).

To reflect the new changes, we renamed the app to *iSpeakerReact*. This new name reflects its refreshed identity and the innovative features that are added, all while preserving and enhancing the core functionalities that was inspired by the original app.

![Screenshot of the second revamp](/images/blog/2025-05-10-the-history-of-ispeakerreact-image-03.webp)

## Electron support

To make the app work offline on desktop, we added Electron support (see [this pull request ↗](https://github.com/yllst-testing-labs/ispeakerreact/pull/13)).

Previously, the original app was available on the Microsoft Store as *iSpeaker: Pronunciation Tool*. It was based on the first revamp of the app, bundled with audio and video files. The downside is that the file size was too large, which made it difficult to update. Therefore, with the Electron support for this revamp, we decided to cut the video files from the app, and implemented a feature to download them from online sources. The file size was significantly reduced from roughly 3GB to just around 700MB.

The Electron app also supports logging to make it easier for users to report issues.

To get the automated release working, we made the script to automatically build and release the app on GitHub Releases. It was a pain at first, because we had to wait for about 15 minutes to see the result, then only met with errors. Asking ChatGPT and Claude back and forth, we finally got it working. Of course, we could manually build and release it, but doing so would not be practical and "trustable", because it would make it hard to verify the authenticity of the release.

## Localization support

When we wrote the app in React, we did not take the localization into account. Everything was hardcoded in English. Therefore, we added localization support (see [this pull request ↗](https://github.com/yllst-testing-labs/ispeakerreact/pull/15)). Thanks to this, it is now possible to use the app in different languages.

The first language to be supported was Chinese, courtesy of [@wekik](https://github.com/wekik).

For the translation platform, we first used Crowdin. Since the app localization strings went over their free tier limit, we applied it for the open-source tier, which increased the limit. But later on, Crowdin, out of the blue, suspended the project without any prior notice. This was a huge setback, as we had to find a new translation platform. For new projects, stay away from Crowdin!

Luckily, we found [Weblate ↗](https://weblate.org/) and it was a perfect fit for the project. It is free and open-source, and it has a generous limit. We did have to apply for the open-source plan to be hosted on weblate's servers, but it was worth it. The inital project setup was a bit of complex, but eventually we got it working. It also integrates well with GitHub, which makes it easy to update the translation strings.

![Weblate project dashboard](/images/blog/2025-05-10-the-history-of-ispeakerreact-image-04.webp)

## The third revamp

While Bootstrap was the foundation of the modern UI for iSpeakerReact, we felt it was too "similar" to other websites that also use Bootstrap.

Bootstrap's limited customization options often constrained me within its predefined design system.

Therefore, using [TailwindCSS ↗](https://tailwindcss.com/) and [daisyUI ↗](https://daisyui.com/), we can finally break free of that, and make the app more customized. We chose green as the primary color palette for its soothing and visually accessible qualities, making it a better choice than the default blue for enhancing user experience and reducing eye strain.

Before going with daisyUI, we just used TailwindCSS for the design. However, its sheer freedom made it hard for me to create a consistent design system. Not only that, it forced me to make repetitive code to style the app. daisyUI streamlined the process, and while it did have some pre-defined design, it was not too restrictive unlike Bootstrap. If we want to customize a Bootstrap component, we have to write a custom CSS/Sass. With daisyUI, we can just use TailwindCSS classes to apply the styles.

![Screenshot of the third revamp](/images/blog/2025-05-10-the-history-of-ispeakerreact-image-05.webp)

The third revamp is the current iteration of the app.

## The Word section

Over time, we have expanded the app with new features that were not available in the original app, or not possible to implement in the previous revamps.

The Word section was the first new feature to be added to the app in [this pull request ↗](https://github.com/yllst-testing-labs/ispeakerreact/pull/33). This section helps learners practice pronunciation of common words from the Oxford 3000™ and Oxford 5000™ lists. Each word is broken down into syllables with highlighted primary and secondary stress, which aids learners in practicing and understanding the stress patterns of English words.

![Word section screenshot](/images/blog/2025-05-10-the-history-of-ispeakerreact-image-06.webp)

A neat feature is real-time syllable highlighting, which helps learners know which syllable to focus on. There is also a slow mode playback, which helps learners practice pronunciation at a slower pace.

## Future plans

We continue to work on the app to make it better. We also try to fix bugs and improve the security of the app if any issues arise.

Please let us know if you have any feedback or suggestions by opening an issue on [GitHub ↗](https://github.com/yllst-testing-labs/ispeakerreact/issues).
