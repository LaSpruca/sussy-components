export * from "./components/SussyTiddies.svelte";
import type SussyTiddies from "./components/SussyTiddies.svelte";

declare global {
  interface HTMLElementTagNameMap {
    'sussy-tiddies': SussyTiddies
  }
}