<div align="center">
    <h1>SASE GeauxHack 2022</h1>
    <p>A 24-hour hackathon to create a product given a specific prompt. Enjoy your stay..</p>
</div>

## Prerequisites
 * [Node.js](https://nodejs.org)
 * [pnpm](https://pnpm.io)

## Development
To run a development server, open up a terminal window in the root directory of the project and run
```sh
pnpm dev
```

This will open a development webfront at `localhost:3000`.

## Production
To build for production, open up a terminal window in the root directory of the project and run
```sh
pnpm build
```

This will compile all assets to a directory that can be served statically via [NGINX](https://nginx.com).
