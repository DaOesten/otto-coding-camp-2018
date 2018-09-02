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

