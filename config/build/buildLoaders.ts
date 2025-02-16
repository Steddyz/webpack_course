import { ModuleOptions } from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

import "webpack-dev-server";
import { BuildOptions } from "./types/types";

export default function buildLoaders(
  options: BuildOptions
): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const tsLoader = {
    // ts-loader умеет работать с JXS
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [scssLoader, tsLoader];
}
