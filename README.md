# OTTO Coding Camp 2018

## HTML (Hypertext Markup Language)

### The main tags

tag|description
---|---
`<!DOCTYPE html>`|Define the document to by of type HTML (an example of an other type would be XML)
`<html lang="en"></html>`|All of the HTML must be inside of these tags
`<head></head>`|Contains tags for meta information of the document
`<body></body>`|Contains tags for visable HTML Elements

### Example tags inside of `<head>`

tag|description
---|---
`<title></title>`|The title visible in the browser's tab
`<description></description>`|Description that for example appears on search engines' search results like Google
`<meta charset="UTF-8">`|A meta tag for setting the charset (UTF-8 supports german characters like `ö`, `ä`, `ü` and `ß`)
`<style></style>`|Style tag for CSS rules
`<link rel="stylesheet" href="main-style.css" />`|Link to a style sheet

### Example tags inside of `<body>`

tag|description
---|---
`<h1></h1>`|The main headline
`<h2></h2>`|A sub headline
`<p></p>`|A paragraph
`<ol></ol>`|An ordered list with numbers
`<ul></ul>`|An unordered list with bullet points
`<li></li>`|A list item inside of `<ol>` or `<ul>`
`<div></div>`|A container to wrap other tags within

### Tag attributes
attribute|description
---|---
`id`|An id to identify a tag that exists only once in the document
`class`|A class that can be used to apply CSS rules or to query for it with JavaScript. This attribute can be repeated without limitations

## CSS (Cascading Style Sheet)

Tags like `<style></style>` contain CSS rules. 
The HTML tag is addressed followed by curly braces that contain the CSS rules for the tag.
```css
h1 {
    color: green;
    font-family: sans-serif;
    font-size: 30px;
}
```

The `class` attribute of HTML tags is helpful to apply CSS rules more specific.
To address HTML tags by its class name, it's prefixed with a dot. 
```css
.hide {
    display: none;
}
```

## JS (JavaScript)

### Variables
To begin, let's take a look at this simple code snippet.
```javascript
var name = 'Alice';
```
What we have here is an _assignment_ which contains these five parts
1. `var`
2. `name`
3. `=`
4. `'Alice'`
5. `;`

The `var` keyword and the semicolon `;` might not be clear, but the rest reads like _Name is Alice_.
You might ask yourself _"But which Alice?!"_, but instead try to not think big. Think small here.
We actually do not have a person here, instead we just put a word _Alice_ into a little container called `name`.

This little container is called a variable. That is why the keyword `var` stands in front of it.

Note: The semicolon `;` is there to tell the JS engine where the assignment ends. That's because in JS Code you do _not_
have to put every statement on its own line, instead you can write lots of code on one line.     

#### `const` and `let`
Note: If you are new to JS, you can skip this section about `const` and `let`. It is totally fine to stick with `var`!

Because the `var` keyword in JavaScript binds variables to function scopes instead of code blocks, `var` has caused
many headaches for developers in the past. Especially in the combination of loops and asynchronous code.
Luckily nowadays we have `const` and `let` that actually are scoped to code blocks. Keep in mind though, these are not
supported in less modern browsers.

### Comments
When programming it is helpful to add some comments where you think that a chunk of code
- is a little complex
- is not self explanatory
- is a bit long without doing a lot
Adding comments can save coworkers and your future self a lot of time when reading it later.

Example:
```javascript
/**
 * Copy a person. The copy is a year older.
 */
function birthday(person) {
    return Object.assign({}, person, { age: person.age + 1 });
}
```
Here it is ok, if someone has trouble remembering what `Object.assign()` does, thanks to the function's helpful comment.

Another common thing developers do, instead of temporary deleting lines of code, they comment them out.

Line comments:
```javascript
var someResult = someFunction();
// console.log(someResult);
someOtherResult = otherFunction(someResult);
// console.log(someOtherResult);
```

Block comments:
```javascript
var someResult = someFunction();
someOtherResult = otherFunction(someResult);
/* console.log(someResult);
console.log(someOtherResult); */
```

This way it is also harder to forget to put existing code back afterwards. 

### Console
To try out a little bit of JS code, the JS Console is your friend. It is part of your browser's _DevTools_.
Chrome's _DevTools_ are very popular as its team involves the JavaScript community.

Right-Click any where on your page and choose _Inspect element_ or _Element untersuchen_ in german.
The DevTools should have opened which might look a bit overwhelming at first, but most of the features can be ignored for now.
Switch to the _Console_ tab.

To try the console, type the statement `1 + 1` in it and press enter. The console should respond with the number `2`.

When you write JavaScript for your page in an editor like _Microsoft's Visual Studio Code_ or _GitHub's Atom.io_
and during development you want to know better what is going on inside of your code, you can write information to
the console. The `console` object for that is available everywhere in your code and it has a method called `log`.

Example: 
```javascript
var user = { name: 'Alice', age: 32 }
var agedUser = birthday(user);

// So what age is the user now?
console.log(agedUser.age); // 33
```

For more details, visit the official docs: https://developers.google.com/web/tools/chrome-devtools/console/ 

### The DOM

When the page is rendered by the browser it uses the document to create an object model out of it.
In short: the **DOM** (Document Object Model)

#### The DOM's API
JavaScript can interact with the DOM via the `document` object, which has an API with useful methods to modify the DOM.

method|description
---|---
`document.querySelector('YOUR_CSS_SELECTOR')`|This is hands down one of the most useful methods. Find the first element matching a given CSS selector
`document.querySelectorAll('YOUR_CSS_SELECTOR')`|The same as `document.querySelector`, but instead of returning the first matching element it returns all
`document.createElement(ELEMENT_TAG_NAME)`|This methods enables us to create new DOM elements  

#### Elements' API
The elements _inside_ of the DOM also have an API with useful methods.

method|description
---|--- 
`YOUR_PARENT_ELEMENT.appendChild(YOUR_ELEMENT)`|Append an element created with `document.createElement` as a child to an other element  

Elements also have properties, that can be manipulated. Here are a few:

property|description
---|---
`YOUR_ELEMENT.style`|This is a reference to the style object of your element. The `.style` property returns the styles as an object. Objects are explained in the _JS Types_ section below.
`YOUR_ELEMENT.classList`|The `class` attribute of elements can contain _multiple_ classes. The `.classList` property returns them as a list (Array type)
`YOUR_INPUT_ELEMENT.value`|Some elements like `<input type="text" />` have special properties like `.value` which returns a word (String type)
`YOUR_INPUT_ELEMENT.checked`|Other input elements like `<input type="checkbox" />` have special properties like `.checked` which returns `true` of `false` (Boolean type)

These properties are _not_ immutable (read only), which means that their values can be changed. 

#### Example: Adding a h1 element to document.body
```javascript
var headline = document.createElement('h1');
headline.innerText = 'Hello World';
document.body.appendChild(headline);
```

