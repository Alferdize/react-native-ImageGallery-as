# <p align="center" style={font-size:30px;}><b>react-native-ImageGallery-as</b></p>
## Table of contents
- [react-native-image-gallery](#react-native-ImageGallery-as)
    - [Table of contents](#table-of-contents)
    - [Install](#install)
    - [Usage](#usage)
    - [Props](#props)

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
<ImageGallery
  images={[
    { uri: 'http://image1.jpg' },
    { uri: 'http://image2.jpg' },
    { uri: 'http://image3.jpg' }
  ]} title={['Image1','Image2','Image3]}
/>
```
## Props


| Prop          | Description                      | Type          | Default       |
| ------------- | ---------------------------------| ------------- | ------------- |
| `images`      | Your array of images             | `array`       | Required      |
| `title`       | Your array of title              | `array`       | `[]`      |
