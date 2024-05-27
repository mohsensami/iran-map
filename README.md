# Iran Map React

The Iran Map React Component is a versatile and customizable map component that displays all cities of Iran. Designed specifically for React.js applications, this package allows developers to easily integrate an interactive map of Iran into their projects.

## Features

-   Comprehensive Coverage: Displays all cities in Iran with precise locations.
-   Customization: Easily customize the appearance, including colors, labels, and styles to match your application's design.
-   Interactivity: Supports interactive features such as tooltips, hover effects, and click events to enhance user engagement.
-   Responsive Design: Ensures optimal display and performance across various devices and screen sizes.
-   Lightweight: Minimal dependencies to keep your application fast and responsive.
-   Easy Integration: Simple and straightforward setup to get the map up and running quickly.

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

Here are the props that can be passed to the `<ReactTransition />` component:

| Prop Name      | Type       | Default Value | Description                                                           |
| -------------- | ---------- | ------------- | --------------------------------------------------------------------- |
| `color`        | `String`   | `blue`        | (optional): Customize the color scheme of the date picker.            |
| `isDark`       | `Boolean`  | `false`       | (optional): Enable dark mode for the date picker.                     |
| `setDateRange` | `Function` | `undefiend`   | A function to update the selected date range.                         |
| `dateRange`    | `Array`    | `undefiend`   | An array representing the selected date range.                        |
| `elementId`    | `String`   | `''`          | (optional): The ID of the input element to attach the date picker to. |
| `isVisible`    | `Boolean`  | `true`        | (optional): Control the visibility of the date picker.                |
| `setIsVisible` | `String`   | `undefiend`   | (optional): A function to update the visibility of the date picker.   |

## Authors

-   [@mohsensami](https://github.com/mohsensami

## Contributing

If you want to contribute to this project and make it better, your help is very welcome. Create an issue or submit a pull request.
