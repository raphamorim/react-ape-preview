# React Ape Previe

Read and parse code to render a preview:

Code:

```jsx
class FixedDimensionsBasics extends React.Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

render(<FixedDimensionsBasics />, document.getElementById('root'));
```

Usage:

```js
http://0.0.0.0:9000/?code=class%20FixedDimensionsBasics%20extends%20React.Component%20{%20render()%20{%20return%20(%20%3CView%3E%20%3CView%20style={{width:%2050,%20height:%2050,%20backgroundColor:%20%27powderblue%27}}%20/%3E%20%3CView%20style={{width:%20100,%20height:%20100,%20backgroundColor:%20%27skyblue%27}}%20/%3E%20%3CView%20style={{width:%20150,%20height:%20150,%20backgroundColor:%20%27steelblue%27}}%20/%3E%20%3C/View%3E%20);%20}%20}%20render(%3CFixedDimensionsBasics%20/%3E,%20document.getElementById(%27root%27));
```

Result:

![preview](preview.png)

