# The terrible typescript webpack repo for evelyn

You asked me this at just the right time since ive been fucking with this stuff lately but ignoring how it worked. Turns out it's mostly simple.

## How To!
- after cloning, run `npm install`
- to build the browser-ready file in `dist/bundle.js` run `npx webpack`
- then open up `index.html` in your browser, should work fine and hear the beep!
- you can also run `npx webpack --watch` to have it autorecompile on saved changes. still gotta reload the browser tho

So this turned out to be pretty 'easy'. obviously full of details you know from experience but that's life i guess.

## Webpack 101
To start off with, i just focused on making my own simple demo code that used modules to test out webpack. Thats the index.js and the otherModule.js.
I just did a regular import statement from one to the other. This works fine if you run it on the cli with node, but obviously this is the part that doesnt work in browsers.

I ran `npm install --save webpack webpackcli` to get the webpack stuff we'd need.

For this starter example i followed the guide on the webpack site. Its just a few lines of config in `webpack.config.js` and running the command `npx webpack`. It builds whatevers in `src/` into a `dist/bundle.js`

The html file `index.html` is something i made manually, it just has a script tag to bring in the bundle.js just like a regular old javascript file. This part was very very easy.

Apparently webpack even assumes these defaults, with source in `src/index.js` and building to the `dist/` folder, you could run it without any config file if this was all you need! they really tried to make it friendly and defualt sane.

## Typescript

The rub here is that webpack only 'packs' all of our js modules into one big file, since you cant do require() or import in the browser. it doesnt know shit about future js features or typescript or anything else. So when i first webpacked the module importing of tone.js, it worked fine on the CLI but nothing worked in the browser. its basically just copying the guts of the referenced files into one main file, blindly. So!

we need to teach webpack how to speak typescript and translate it on the fly. I followed this guide (with one tiny annoying change***) https://masteringjs.io/tutorials/webpack/typescript

We `npm install typescript ts-loader` obviously, so we can work with typescript. Then i modified the webpack config to tell it a rule for ts files, that it should use the `ts-loader` module to transform it. (no idea how this works, but it makes sense that this would be necessary). Last thign was that typescript in general wants a tsconfig.json file, so i created the really minimal one like they show in the tutorial. Just some headpats to make it behave.

Now we can re-run `npx webpack` and it translates our ts and barfs it all into our one big `bundle.js` file! woo hoo! reload the `index.html` in the browser and hear the beep of life in your heart.


***the one annoying change i had to make to the webpack ts tutorial was they assumed the code was just in the top level directory, i had to change the path to `src/index.js`. also notice they assumed our starting file was `.ts`, because thats what you do for typescript. we dont really give a fuck about using typescript features, so i left the index.js file as regular js. this was a pretty easy error to figure out, when i ran the tutorial code verbatim webpack complained about not finding the file and i saw the path was wrong.