# Iran Map React

The Iran Map React Component is a versatile and customizable map component that displays all cities of Iran. Designed specifically for React.js applications, this package allows developers to easily integrate an interactive map of Iran into their projects.

## Features

-   Comprehensive Coverage: Displays all cities in Iran with precise locations.
-   Customization: Easily customize the appearance, including colors, labels, and styles to match your application's design.
-   Interactivity: Supports interactive features such as tooltips, hover effects, and click events to enhance user engagement.
-   Responsive Design: Ensures optimal display and performance across various devices and screen sizes.
-   Lightweight: Minimal dependencies to keep your application fast and responsive.
-   Easy Integration: Simple and straightforward setup to get the map up and running quickly.

## Demo

[**Live Demo**](https://mohsensami.github.io/iran-map-react/)

![iran-map](https://raw.githubusercontent.com/mohsensami/iran-map/main/assets/iranMap.png?token=GHSAT0AAAAAABSIPJTLCSJBLUIPUKUYUXNKZSUY3ZQ)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install iran-map-react --save
```

## Usage

React Component:

```javascript
import { IranMap } from './lib/IranMap';

function App() {
    return (
        <>
            <IranMap />
        </>
    );
}

export default App;
```

## Props

Here are the props that can be passed to the `<IranMap />` component:

| Name                      | Type       | Required | Description                                                                                              |
| :------------------------ | :--------- | :------- | :------------------------------------------------------------------------------------------------------- |
| `data`                    | `object`   | True     | An object that has 'Data schema' items as provinces                                                      |
| `colorRange`              | `string`   | True     | It defines the range of color based on it's value and it should be rgb color like this : `"30, 70, 181"` |
| `width`                   | `number`   | False    | Width of the map                                                                                         |
| `textColor`               | `string`   | False    | Color of map texts                                                                                       |
| `defaultSelectedProvince` | `string`   | False    | You can set one of the provinces from 'Data schema' as default selected province                         |
| `deactiveProvinceColor`   | `string`   | False    | It set color of the provinces with `0` value                                                             |
| `selectedProvinceColor`   | `string`   | False    | Color of the clicked province                                                                            |
| `tooltipTitle`            | `string`   | False    | You can add a name for the value in tooltip                                                              |
| `selectProvinceHandler`   | `function` | False    | You can define a function like example above to get selected province name                               |

## Authors

-   [@mohsensami](https://github.com/mohsensami

## Contributing

If you want to contribute to this project and make it better, your help is very welcome. Create an issue or submit a pull request.
