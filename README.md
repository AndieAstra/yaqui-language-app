<a name="readme-top"></a>

# Hidaki Practice Language App.

Original project inspired by:

https://github.com/sanidhyy/duolingo-clone

https://www.youtube.com/watch?v=dP75Khfy4s4

===============================================

This is meant to be a private app for those seeking to start
learning Hidaki, and eventually hand-off so that direct devs
involved with the pasqua-yaqui community can have an 
educational and cultural resource to refer to/grow.

================================================

## [	Features	  ]

- Greetings

- Celebrations

- Calendar of Holidays

- Digital Library (of resources/ pdfs)

===============================================

## Steps for Development

Install NextJS Latest package

	npm install next@latest react@latest react-dom@latest
	
Then we're going to install tailwind	
	
	npm install -D tailwindcss
	
	npx tailwindcss init
	
Install Vercel
	
	npm i -g vercel
	
Install PostgreSQL

	npm i pg


Remove Clerk, Neon Database, and Stripe from this project
--------------------
npm remove @clerk/clerk-react @neondatabase/react-client stripe


Oaky, we're going to try to build this now...
------------------------------
npm run build















#### [	Clerk Authentication	   ]

It looks like CLERK is to create user authorization for an app.
Much like Firebase...

I can actually look to generate something that just uses a built specific
username and password to access. No email, just a username and a password

#### [   Neon Database URI	   ]

This looks like the user has the capability to modify their PostgreSQL database
from an easy to use, user interface. Well... that was a wee-bit misleading!

I don't want to have to pay for this kind of feature. 

Just build this into the software as an admin kind of feature for an ADMIN profile that
way it can be handled by admins and NOT just devs. For FREE.

#### [   Other Features to Forgo	   ]

	- Stripe


---------------------------------------


![Lingo - Interactive platform for language learning.](/.github/images/img_main.png "Lingo - Interactive platform for language learning.")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")

[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://lingo-clone.vercel.app/ "Vercel status")

# Table of Contents

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.


6. Specify Public App URL

   1. **Procedure**:
      - Replace `http://localhost:3000` with the URL of your deployed application.

11. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

12. Run the Seed Script:

In the same terminal, run the following command to execute the seed script:

```bash
npm run db:prod
```

This command uses `npm` to execute the Typescript file (`scripts/prod.ts`) and writes challenges data in database.

13. Verify Data in Database:

Once the script completes, check your database to ensure that the challenges data has been successfully seeded.

14. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

## :camera: Screenshots

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Postgresql](https://skillicons.dev/icons?i=postgres "Postgresql")](https://www.postgresql.org/ "Postgresql")

## Acknowledgements

Useful resources and dependencies that are used in Lingo.

- Thanks to CodeWithAntonio: https://codewithantonio.com/
- Special Thanks to Kenney Assets: https://kenney.nl/
- Freesound: https://freesound.org/
- Elevenlabs AI: https://elevenlabs.io/
- Flagpack: https://flagpack.xyz/