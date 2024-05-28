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
    const mapData = {
        ardabil: 16,
        isfahan: 20,
        alborz: 11,
        ilam: 14,
        eastAzerbaijan: 10,
        westAzerbaijan: 20,
        bushehr: 15,
        tehran: 35,
        chaharmahalandBakhtiari: 6,
        southKhorasan: 19,
        razaviKhorasan: 11,
        northKhorasan: 19,
        khuzestan: 12,
        zanjan: 12,
        semnan: 9,
        sistanAndBaluchestan: 3,
        fars: 7,
        qazvin: 25,
        qom: 22,
        kurdistan: 24,
        kerman: 23,
        kohgiluyehAndBoyerAhmad: 20,
        kermanshah: 7,
        golestan: 18,
        gilan: 14,
        lorestan: 7,
        mazandaran: 18,
        markazi: 25,
        hormozgan: 6,
        hamadan: 19,
        yazd: 14,
    };
    return (
        <>
            <IranMap data={mapData} />
        </>
    );
}

export default App;
```

## Props

Here are the props that can be passed to the `<IranMap />` component:

| Name   | Type     | Required | Description                                         |
| :----- | :------- | :------- | :-------------------------------------------------- |
| `data` | `object` | True     | An object that has 'Data schema' items as provinces |

## Authors

-   [@mohsensami](https://github.com/mohsensami)

## Contributing

If you want to contribute to this project and make it better, your help is very welcome. Create an issue or submit a pull request.
