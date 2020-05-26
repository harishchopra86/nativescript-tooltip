import { Options } from "./tooltip-ns.common";
import * as app from "tns-core-modules/application";

declare const android: any, it: any, Math, java;

export class TooltipNs {
  private builder: any;
  private tip: any;

  public show(options: Options) {
    const id = Math.floor(Math.random() * 1000 + 1);
    this.builder = new it.sephiroth.android.library.tooltip.Tooltip.Builder(id);

    let pos;
    switch (options.android.position) {
      case "left":
        pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.LEFT;
        break;
      case "right":
        pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.RIGHT;
        break;
      case "bottom":
        pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.BOTTOM;
        break;
      case "top":
        pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.TOP;
        break;
      default:
        pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.CENTER;
        break;
    }

    if (options.android.viewType && options.android.viewType === "native") {
      this.builder.anchor(options.view, pos);
    } else {
      this.builder.anchor(options.view.android, pos);
    }
    this.builder.text(options.message);

    if (options.android.duration) {
      this.builder.closePolicy(
        new it.sephiroth.android.library.tooltip.Tooltip.ClosePolicy()
          .insidePolicy(true, false)
          .outsidePolicy(true, false),
        options.android.duration
      );
    } else {
      this.builder.closePolicy(
        new it.sephiroth.android.library.tooltip.Tooltip.ClosePolicy()
          .insidePolicy(true, false)
          .outsidePolicy(true, false),
        java.lang.Integer.MAX_VALUE
      );
    }

    if (options.android.fadeDuration) {
      this.builder.fadeDuration(options.android.fadeDuration);
    }
    this.builder.fitToScreen(false);

    if (options.android.width) {
      this.builder.maxWidth(options.android.width);
    }
    if (options.android.delay) {
      this.builder.showDelay(options.android.delay);
    }
    this.builder.withOverlay(false);
    if (options.android.hideArrow) {
      this.builder.toggleArrow(false);
    } else {
      this.builder.toggleArrow(true);
    }

    if (options.android.style) {
      this.builder.withStyleId(
        TooltipNs.getResource("style", options.android.style)
      );
    }

    this.tip = it.sephiroth.android.library.tooltip.Tooltip.make(
      app.android.foregroundActivity,
      this.builder.build()
    );

    this.tip.show();
  }

  public dismiss() {
    this.tip.hide();
  }

  static getResource(type, name) {
    return app.android.context
      .getResources()
      .getIdentifier(name, type, app.android.context.getPackageName());
  }
}
