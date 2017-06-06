---
title: ATX Hack for Change
date: 06-06-2017
updated:
blurb: Bounti @ ATX Hack for Change
type: article
draft: false
keywords:
tags: startup, waste, food, hackathon
---

A lot has happened in the past three weeks. I had the opportunity to talk to Lisa, the program manager for [Keep Austin Fed](http://keepaustinfed.org/) and my project was selected for [ATX Hack for Change](http://atxhackforchange.org/)! So here's an update on all that's happened:

### Keep Austin Fed

On May 19th, I met with Lisa from Keep Austin Fed (KAF). KAF is an organization that coordinates donations between food donors (grocers, caterers, restaurants) and recipient organizations (food banks, homeless shelters, etc). They have 60-80 volunteers of all demographics. The donation matching is currently done manually by a group of volunteers that form their "SWAT" team. They are looking for donation matching software that will allow them to match donors and recipient organizations algorithmically. They are also looking for more volunteers and funding for their food recovery efforts.

#### Current Food Recovery Landscape

There are a number of food recovery apps around the US. [Copia](https://www.gocopia.com), perhaps the most well-known, charges donors. The software tracks all the food that a donor has given for charitable deduction purposes and then keeps 30% of deduction receipts. However, right now their operations are confined to the San Francisco / Bay Area. There's also [Food Cowboy](http://www.foodcowboy.com/) in Washington D.C., [Spoiler Alert](https://www.spoileralert.com/) in Boston, [412 Food Rescue](https://412foodrescue.org) in Pittsburgh, and [Zero Percent](https://www.zeropercent.us/) in Chicago. There are [numerous other](https://foodtank.com/news/2016/07/fighting-food-loss-and-waste/) companies and organizations involved in food recovery organizations in the US and worldwide. However, these solutions are all business to business or business to non-profit.

In talking to Lisa, there are a few under-served demographics when it comes to hunger: Teens / College Students and Refugees. Teens are less likely to use programs like the Supplemental Nutrition Assistance Program (SNAP) or the National School Lunch Program (NSLP) due to social stigma and concerns about being judged by peers. Teens and college students are also more likely forego meals to save food for their younger siblings and parents, believing that they are young and fit so they can afford to skip meals. Meanwhile, refugees tend not to be as informed about nutritional assistance programs. In addition, refugees are less likely to trust and eat prepared foods, which are the majority of foods you encounter when you enroll in food programs.

In the Austin area, food donations are missed during off hours where the food bank is not open, because there aren't facilities to refrigerate and store surplus food for transit. This means that a lot of food donations are missed at night or during the weekends. Moreover, sending volunteers to pickup and deliver food requires a lot of time, so smaller, but significant amounts of food waste are often left ignored.

### Bounti

Bounti addresses the gaps that occur in the current food recovery landscape. As a peer-to-peer network, we want to get everyone involved and benefiting from reducing food waste. We also want to lower the barriers in gaining access to surplus food. We hope to address the needs of teens / college students by eliminating the stigma of getting free food. We hope to address the gaps that occur in the refugee population by making a food marketplace that is easily accessible to all. By focusing on the connections between people, we hope to save wasted food that is often missed by existing food recovery networks.

#### ATX Hack for Change

When we started this weekend, Bounti, was just an idea.

<img src="https://raw.githubusercontent.com/currychern/bounti/master/public/assets/app_mockup.png" width="100%" height="100%" />

During ATX Hack for Change we worked on:
  - Defining a clear, long-term view of what we are building.
  - Figuring out the challenges to adoption and how we can address them.
  - Conceiving a plan for rollout and user adoption.
  - Implementing the basic features that I had outlined.
  - Creating mockups for future features of the app.

__Here's what we accomplished:__

We identified our three largest challenges to growing our network: trust, safety, and market balance. We found ways to address all these issues through our app design and rollout plan.

__Trust__: Donors need to feel comfortable meeting recipients in person and recipients need to feel confident that the food is they're receiving is safe to eat. To foster trust we will do the following:
  1. Start the network through an invitation basis only.
  2. A chat feature that allows you to communicate with others before meeting them in person.
  3. A review system to rate your interactions with other users.
  4. A reporting system to flag malicious actors on the network.
  5. A way to change your meeting location to somewhere you feel comfortable meeting a stranger.


__Safety__: Aside from personal safety, which is largely addressed through the trust system we outlined above, food safety is also a concern.
  1. A comprehensive food safety resource guide that is available for people to reference.
  2. A FAQ that outlines general food safety questions.
  3. A terms agreement that acknowledges users have received and read the food safety resource guide and agree to take the appropriate steps to make sure the food they are sharing is safe.
  4. A brief (5 min) quiz on food safety to hit the most important points.
  5. A message informing users of where they can find food safety resources the first time they donate.
  6. A special badge for donors that are food-handler certified.


__Balance__: We need to have balance in our network to make sure there are enough people in a neighborhood to exchange. Moreover, we also need to balance out the supply and demand in our marketplace.
  1. Start the network on an invitation only basis in a defined neighborhood.
  2. Collect information about those interested in the app and expand when there is enough mass to service a new neighborhood.
  3. Slowly introduce food recovery organizations to the network if the supply allows for it.
  4. Approach local cafes and farmers markets about using the app as a platform for advertising to up the supply of food.

We started implementing the idea by creating an app using [React Native](https://facebook.github.io/react-native/) and [Firebase](https://firebase.google.com/). We got Facebook authentication working and most components in the three basic views up and running.

<img src="https://raw.githubusercontent.com/currychern/bounti/master/public/assets/hackathon_final.png" width="100%" height="100%" />

We still need to work on passing data from Firebase, beautifying the application, and adding a few more components. And there's now some tests to write and some documentation to be done.

We also have mockups of what our app will look like going forward:

<img src="https://raw.githubusercontent.com/currychern/bounti/master/public/assets/mockup_hackathon_final.png" width="100%" height="100%" />

<img src="https://raw.githubusercontent.com/currychern/bounti/master/public/assets/mockup_hackathon_final_2.png" width="100%" height="100%" />

<img src="https://raw.githubusercontent.com/currychern/bounti/master/public/assets/mockup_hackathon_final_3.png" width="100%" height="100%" />

I had a great time this weekend and learned a ton! I had the opportunity to lead a team and also get over some jitters around public speaking. Here's my one minute pitch to get hackers to join my team:

> Hi! My name is Curry and I'm a software engineer. I became aware of the issue with wasted food when I was traveling abroad for a year. And when I got back, I was shocked at how much food we, as Americans, waste each year. Here in the US, we waste about 40% of the food we produce. And it's not just junk food. A recent study showed that the food we waste is enough to feed 2/3 of all Americans a nutritious, well balanced diet. Meanwhile, 1 in 6 households here in Texas suffers from food insecurity. My goal is to create an app that allows neighbors to share surplus food in order to foster community and help end food waste. I'm looking for developers who might be interested in working with React Native and Firebase. And also UI/UX designers. But most importantly, I'm just looking for people who are excited about the project. So if you're interested, please come talk to me. Thanks!

I want to thank my amazing team for all their hard work this weekend!
  - John Dowd
  - Kristin Faner
  - Jimmy Hsu
  - Jennifer Jiang
  - Aunteek Naser
  - Christina Nick

To find out more and to keep updated about this project, follow us on [github](https://github.com/currychern/bounti)!
