## Inspiration

After speaking with representatives from Servus, we learned that the company excels at member rentention but wants to improve the online experience for young demographics.
We also noticed that the company's blog posts provide excellent financial advice relevant to young people who are beginning to manage their own finances.
Our hack leverages the company's strength in retaining members by providing sound financial advice with an intuitive interface for new and existing members to request more information.
If such a solution is implemented in production, it could lead to increased sales revenue by increasing the number of individuals entering the sales funnel.

## What it does

Our hack is a browser extension that demonstrates proof-of-concept improvements to the company's website.
By injecting interactive elements into the company's informative blog posts, users can seamlessly consult with Servus's financial experts without navigating away from the page.
In the intuitive widget strategically placed between paragraphs in a blog post, the user can specify their name, email, and the general subject they are inquiring about before providing additional context for their question.

## How we built it

Using the [plasmo extension framework](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle#terminologies), we injected react components. 

## Challenges we ran into

- Coming up with an idea. We knew we wanted to solve the Servus challenge, but struggled to come up with a viable solution.
After consulting with the Servus representative over Discord, we gained invaluable context that enabled us to envision new, more creative ideas.
- Injecting the components in a predictable way.
By following a logical debugging process and carefully reading the [plasmo documentation](https://docs.plasmo.com/), we were able to resolve the issue and proceed with development.

## Accomplishments that we're proud of

- Finishing the project early!
We applied lessons we've learned in past projects and hackathons to work efficiently as a team.

## What we learned

- Ask for help! When we were stuck coming up with an idea, 
- We extensively used [excalidraw](https://excalidraw.com/) to design the extension before diving into the implementation.
This immensely helped with organizing our thoughts and undoubtedly prevented us from running into dead-ends later on.
- Plasmo is a great way to build browser extensions.
If we want to build an extension in the future, we intend to go with plasmo.

## What's next for Servus Call To Action

- calculators...
