### Add images loader.

I was stuck with similar issue and found that you can use url-loader to resolve "url()" statements in your CSS as any other require or import statements.  

To install it:  

`$ npm install url-loader --save-dev`.  

It will install the loader that can convert resolved paths as BASE64 strings.

In your webpack config file use url-loader in loaders

```sh
// images
{
    test: /\.(png|svg|jpg|gif)$/,
    loader: 'url-loader?limit=100000'
}
```

Also make sure that you are specifying your public path correctly and path of images you are trying to load.


### Add svg loader.

This Webpack loader inlines SVG as module. If you use Adobe suite or Sketch to export SVGs, you will get auto-generated, unneeded crusts. This loader removes it for you, too.  

__Install__. 

`$ npm install svg-inline-loader --save-dev`. 

__Configuration__   

Simply add configuration object to module.loaders like this.  

```sh
{
    test: /\.svg$/,
    loader: 'svg-inline-loader'
}
```

warning: You should configure this loader only once via module.loaders or require('!...'). See #15 for detail.

### Add fonts loader

Install file-loader by running one of the following commands:  
`$ npm install file-loader --save-dev`. 

__webpack.config.js__. 
```sh
{
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader',
  ],
},
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    'file-loader',
  ],
},
```

Add some font files to your project:  
__project__
```sh
  webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- my-font.woff
+   |- my-font.woff2
    |- icon.png
    |- style.css
    |- index.js
  |- /node_modules
```

With the loader configured and fonts in place, you can incorporate them via an @font-face declaration. The local url(...) directive will be picked up by webpack just as it was with the image:  

__src/style.css__ 

```sh
+ @font-face {
+   font-family: 'MyFont';
+   src:  url('./my-font.woff2') format('woff2'),
+         url('./my-font.woff') format('woff');
+   font-weight: 600;
+   font-style: normal;
+ }

  .hello {
    color: red;
+   font-family: 'MyFont';
    background: url('./icon.png');
  }
```

Now run a new build and let's see if webpack handled our fonts:

```sh
npm run build

...
                                 Asset      Size  Chunks                    Chunk Names
5439466351d432b73fdb518c6ae9654a.woff2  19.5 KiB          [emitted]
 387c65cc923ad19790469cfb5b7cb583.woff  23.4 KiB          [emitted]
  da4574bb234ddc4bb47cbe1ca4b20303.png  3.01 MiB          [emitted]  [big]
                             bundle.js    77 KiB       0  [emitted]         main
Entrypoint main = bundle.js
...
```