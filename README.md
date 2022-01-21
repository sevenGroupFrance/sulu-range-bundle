# sevengroupfrance/sulu-range-bundle

Inspired by [this pull request](https://github.com/sulu/sulu-demo/pull/66).

## What is this bundle's goal?
Importing a custom fonctionality into [sulu](https://github.com/sulu/sulu), in this example, a custom content type.
This bundle will import a range input. The range input used is from [react-range](https://www.npmjs.com/package/react-range).

![How the range input looks in sulu's admin](assets/img/range-1.png)

## Installation
1. Go to your `assets/admin` folder and install the react-switch npm package `npm i react-range`.
2. Download the [package](https://packagist.org/packages/sevengroupfrance/sulu-range-bundle) in your project with the following command line:\
`composer require sevengroupfrance/sulu-range-bundle`.
3. In `config/bundles.php` add the following code:\
`SevenGroupFrance\SuluRangeBundle\SuluRangeBundle::class => ['all' => true]`.

4. In `assets/admin/package.json`, add the following line in the "dependencies" object:\
`"sulu-range-bundle": "file:node_modules/@sulu/vendor/sevengroupfrance/sulu-range-bundle/src/Resources/js"`.

5. In `assets/admin`, `npm install` to initialize the bundle's symlink directory.
6. In `assets/admin/index.js`, add this line:\
`import 'sulu-range-bundle'`.

7. In `assets/admin`, `npm run watch` or `npm run build`


## Use in your template files
Once installed, to use this new content type, you'll have to create a new property with the type `sulu_range`.
```
<property name="size" type="sulu_range">
  <meta>
    <title lang="en">Block size</title>
  </meta>
</property>
```

## Setting the step, min and max values
For now, you'll have to modify them directly in your `SuluRange.js` file where the `STEP` `MIN` and `MAX` constants are.
For further settings, please refer to the react-range github's [readme](https://github.com/tajo/react-range)
