# Optimistic Mutations

The code in this repository has been used as example in my [React Norway](https://reactnorway.com) talk.
Please find the slides at: [Optmistic Web](https://slides.com/atilaio/optimistic-web)

## How to run this locally

1. You will need a Xata workspace, follow the `./xata/schema.json` to create the proper databases.
2. Add your API token for your Xata workspace in the `.env`
3. install the Xata CLI:
```
npx @xata.io/cli
```
4. run `xata init` to link the project to the right database and run the codegen for the first time
5. run `npm run dev`
