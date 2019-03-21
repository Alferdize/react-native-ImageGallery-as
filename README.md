# <p align="center" style={font-size:30px;}><b>react-native-ImageGallery-as</b></p>
## Table of contents
- [react-native-image-gallery](#react-native-ImageGallery-as)
    - [Table of contents](#table-of-contents)
    - [Install](#install)
    - [Usage](#usage)

A Javascript image gallery for React-Native apps with common gestures like pan supporting both iOS and Android.

This component works on react-native **0.57.8+**.

## Install

`npm install --save react-native-ImageGallery-as` 

## Usage
[1]: Add an import to the top of your file
```
import ImageGallery from 'react-native-ImageGallery-as';
```
[2]: At a minimal, declare the component in the render method prividing data for images
```
<Masonry
  sorted // optional - Default: false
  columns={4} // optional - Default: 2
  bricks={[
    { uri: 'http://image1.jpg' },
    { uri: 'http://image2.jpg' },
    { uri: 'http://image3.jpg' }
  ]}
/>
```
