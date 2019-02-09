// import { transform } from '@babel/standalone';
import React, { Component } from 'react';
import {
  render,
  Text,
  ListView,
  View,
  Image,
  Tools,
  StyleSheet,
  Dimensions,
} from 'react-ape';

window.React = React;
window.render = render;
window.Text = Text;
window.View = View;
window.Image = Image;
window.Tools = Tools;
window.Dimensions = Dimensions;
window.StyleSheet = StyleSheet;
window.ListView = ListView;

window.addEventListener('load', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const input = urlParams.get('code');
  let result = Babel.transform(input, { presets: ['es2015', 'react'] }).code;
  eval(result);
});
