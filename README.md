# War3Keys

[![Build Status](https://travis-ci.com/drdgvhbh/War3Keys.svg?branch=master)](https://travis-ci.com/drdgvhbh/War3Keys)

[![snapcraft](https://file.globalupload.io/6QPqD5pi9x.png)](https://snapcraft.io/war3keys)

War3Keys is an Electron application that allows you to set *custom* hotkeys in [Warcraft III: The Frozen Throne](https://en.wikipedia.org/wiki/Warcraft_III:_The_Frozen_Throne) without having to manually edit the `CustomKeys.txt` file.

## Releases

You can find the latest release on the [releases](https://github.com/drdgvhbh/War3Keys/releases) tab. Mac is untested because I don't have a Mac. You can try building from source.

## Motivation

Having hotkeys on the left side of the keyboard is a necessity for any *real-time strategy* game. When [Blizzard](https://en.wikipedia.org/wiki/Blizzard_Entertainment) made Warcraft III back in the early 2000s, they did not consider this and place their hotkeys all over the keyboard.

Only recently has Blizzard put in native support for custom hotkeys without having users to rely on third-party software through a `CustomKeys.txt` file. However, this is a really cumbersome approach to set hotkeys because its literally just editing a plain text file.

Example:

```txt
[anfa]
Tip=(|cffffcc00W|r) Frost Arrows - [|cffffcc00Level 1|r],(|cffffcc00W|r) Frost Arrows - [|cffffcc00Level 2|r],(|cffffcc00W|r) Frost Arrows - [|cffffcc00Level 3|r]
UnTip=|cffc3dbffRight-click to activate auto-casting.|r
Researchtip=(|cffffcc00W|r) Learn Frost Arrows - [|cffffcc00Level %d|r]
Hotkey=W
Researchhotkey=W
Buttonpos=1,0
Unbuttonpos=1,0
Researchbuttonpos=1,0
```

There are a number of problems with this. Namely, its not user friendly and its a one massive file (1000+ lines). War3Keys solves all these problems by giving users a graphical interface to set custom hotkeys..

## Building From Source

```sh
nvm use 12
yarn # You must use yarn
npx ts-node ./scripts/regenerate-database.ts
yarn dist:all
```
