import html from "@rollup/plugin-html";
import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import css from "rollup-plugin-css-only";

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/bundle.js',
		format: 'es',
    sourcemap: true
	},
  plugins: [
    copy({
      targets: [
        {
          src: "src/assets/**/*",
          dest: "dist/assets"
        }
      ]
    }),
    css({
      output: "bundle.css"
    }),
    typescript(),
    html(),
    image(),
  ]
};