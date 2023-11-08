# Practice: NextJS

## Overview

- This training plan helps trainees learn and get familiar with new technical stacks and hands-on practices.

- Refer to the detailed design here: [Figma](https://www.figma.com/file/pDgBCjProHjMl9Yo8fLGam/T-Shirt-Website?type=design&node-id=0-1&mode=design).

## Timeline

- Start Date: 10/20/2023.

- End Date: 11/02/2023.

- Total Date: 9 days.

## Team size

- One developer ([Tuan Phan](tuan.phan@asnet.com.vn)).

## Targets

- Understand and apply knowledge of Next.js to build a website.

- Apply the learned technical stacks.

- Apply Typescript to type-checking.

- TailwindCSS is required.

- Storybook is required.

- Unit test coverage should be greater than 50% (low priority).

- Apply to react hook form (optional).

## Technical Stack

- NextJS (17.1.2)

- React (10.0.2)

- TypeScript.

- Yarn.

- Eslint.

- Prettier.

- CSS:

  - <https://tailwindcss.com/>

- Storybook

- Jest

- Testing library - React

## Task Management

- [Trello](https://trello.com/b/pZtSAbWx/react-training).

## Getting started

- Step 1: Cloning the repo

  - HTTPS: `git clone https://gitlab.asoft-python.com/tuan.phan/nextjs-training.git`

  - SSH: `git clone git@gitlab.asoft-python.com:tuan.phan/nextjs-training.git`

- Step 2: Go to the folder practice `cd nextjs-training`

- Step 3: Checkout branch `git checkout practice`

- Step 4: Run server

  - Go to the folder server `cd server`

  - Install package `yarn install`

  - Run server `yarn start`

- Step 5: Add an .env file in the client configuration:

  - Go to the folder client `cd practice`

  - Add .env file with content:

    `NEXT_PUBLIC_BASE_API_URL = 'http://localhost:3001/'`

- Step 6: Run client

  - Install package `yarn install`

  - Run client `yarn dev`

- Step 7: Open <http://localhost:3000/> in your browser

## Author

[tuanphan@asnet.com.vn](tuanphan@asnet.com.vn)
