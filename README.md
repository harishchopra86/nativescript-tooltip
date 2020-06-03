# Tooltop {NS} ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

## Installation

Ideally it would be something like:

```javascript
tns plugin add nativescript-tooltip-ns
```

## Screenshot

<img alt="Android" src="https://res.cloudinary.com/dem02bcqj/image/upload/v1591193248/WhatsApp_Image_2020-06-03_at_9.06.52_AM.jpg" width="550" height="100">

## Usage

```ts
import { TooltipNs } from "nativescript-tooltip-ns";

var tooltip = new TooltipNs();
var button = this.page.getViewById("label");

tooltip.show({
  message: "Hello! this is my tooltip...",
  view: button,
  ios: {
    hasInterval: false,
    shadow: true,
    cornerRadius: 0,
    margin: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    color: "yellow",
  },
  android: {
    position: "bottom",
    style: "ToolTipLayoutCustomStyle",
  },
});

setTimeout(() => {
  tooltip.dismiss();
}, 1500);
```

In .html:

```html
<GridLayout>
  <!-- Ref id button -->
  <button
    id="button"
    text="Clickme"
    backgroundColor="black"
    color="white"
    (tap)="onShow()"
    height="40"
  ></button>
</GridLayout>
```

Custom Style(Only Android)

In App_Resources/Android/src/main/res/values/styles

```xml
<style name="ToolTipLayoutCustomStyle">
    <item name="ttlm_padding">25dip</item>
    <item name="ttlm_backgroundColor">#000000</item>
    <item name="android:textAppearance">@style/TextAppearanceCustom</item>
</style>

<style name="TextAppearanceCustom" parent="TextAppearance.AppCompat.Inverse">
    <item name="android:textColor">@android:color/white</item>
</style>
```

## API

```ts
export interface Options {
  message: string;
  view: any;
  ios?: {
    hasInterval?: boolean;
    interval?: number;
    shadow?: boolean;
    cornerRadius?: number;
    padding: Array<any>;
    margin: Array<any>;
    color: string;
  };
  android?: {
    position?: ToolTipPosition;
    viewType?: ToolTipViewType;
    duration?: number;
    fadeDuration?: number;
    width?: number;
    delay?: number;
    hideArrow?: boolean;
    style?: string;
  };
}

export declare type ToolTipPosition =
  | "left"
  | "up"
  | "right"
  | "down"
  | "top"
  | "bottom";
export declare type ToolTipViewType = "native";
```

## License

Apache License Version 2.0, January 2004
