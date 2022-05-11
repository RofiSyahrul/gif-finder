This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is a proof of concept for Progressive Web Apps (PWA) with Next.js.

[Demo](https://gif.rofisyahrul.com).


## Getting Started

First, create `.env.local` file by copying `.env.example` file content

```bash
cp .env.example .env.local
```

Then, create your Giphy Api Key [here](https://developers.giphy.com/dashboard/). Use the api key as a value of env variable `NEXT_PUBLIC_GIPHY_API_KEY` in `.env.local` file.

Run the development server:

```bash
yarn dev
```

Open [http://localhost:2805](http://localhost:2805) with your browser to see the result.


## Try PWA Functionality

1. Build the app using this command:

```bash
yarn build
```

2. Run the production server on your local:

```bash
PORT=2905 yarn start
```

3. Open [http://localhost:2905](http://localhost:2905) with your browser.
4. Try to move to search page by hitting enter on the text field.
5. Open network tab on your browser devtools and simulate the network condition to offline.
6. Refresh the search page.
7. Try to move back to homepage by clicking the header `"Back to Home"`.
8. Input a search keyword on the text field and hit enter. The app will move to search page with the inputted search keyword.
9. Refresh the search page. It should show  `"No internet connection."`.
