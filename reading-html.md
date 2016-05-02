## `<html>`

the main enchilada, the whole `document`, that which wraps all the others... except for [`<!DOCTYPE>`](#doctype), for some reason.

* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!

### Attributes

* `class` -- a space-separated list of category names
* . . .

. . .

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Content][1], palpable content (WTF?)
* _display_: `block`

## `<!-- -->`

 Comments are there for you/other developers to understand the code more thoroughly and are not displayed in the browser or read as active code.

* _parents_: none?
* _content_: what you put into it.
* _display_: only in the inspector/code.


## `<head>`

The *head* element provides general information (metadata) about the document, such as its title, links to and definitons of scripts, and stylesheets.

* _parents_: an `<html>` element, (as first child)
* _content_: metadata content, in most cases at least one element, which must be a `<title>`
* _display_: this does not display in the browser, but instead allows the browser to access metadata content.

## `<body>`

The *body* element represents the content of an HTML document.  There can only be one in each document.  It is basically the highlander of elements.

* _parents_: Must be the second element of an `<html>` element.
* _content_: Section root for [flow content]
* _display_: This element exposes the `<HTMLBodyElement>` interface. It's accessible through the `document.body` attribute.

## `<style>`

The *style* element contains style information for a document/a part thereof.  By default, style instructions inside this element are meant to be CSS.

* _parents_: If not scoped, it is placed where metadata is expected or in a `<noscript>` element that is itself the child of a `<head>` element.
* _content_: text content matching the `type` attribute that is `text/css`.
* _display_: This content is metadata and part of the `HTMLStyleElement` that does not display in the browser.

## `<title>`

The *title* element defines the title of the document, shown in a browser's title bar or the page's tab.  It can only contain text, and any contained tags are ignored.

* _parents_: A `<head>` element that contains no other `<title>` element.
* _content_: Text that is not inter-element whitespace.
* _display_: Metadata, part of the `HTMLTitleElement`.

## `<dl>`

A *description list*: this element encloses a list of pairs of terms and descriptions.  It is commonly used to implement a glossary or display metadata.

* _parents_: Any element that accepts flow content.
* _content_: Zero or more `<dt>` elements, each followed by one or more `<dd>` elements.
* _display_: `block`

## `<dd>`

A *description element*: this element describes a term in a `<dl>`.  This element must appear as a child element of a `<dl>` and it must follow a `<dt>` element.

* _parents_: After a `<dt>` or `<dl>` element, inside a `<dl>`.
* _content_: Flow content.
* _display_: `block`

## `<dt>`

A *Definition Term* element, it identifies a term in a definition list. Multiple `<dt>` elements in a row indicate several terms that are all defined by the immediated next `<dd>` element.

* _parents_: Before a `<dt>` or a `<dd>` element, inside a `<dl>`.
* _content_: Flow content, but with no `<header>`, `<footer>`, sectioning content or heading content descendants.
* _display_: `block`

## `<ul>`

An *unordered list* element, it represents an unordered list of items, namely a collection of items that do not have numerical ordering, and their order in the list is meaningless.  Typically displayed with a bullet, which is described by the CSS `list-style-type` property.  There is no limit to the depth of unordered lists.

* _parents_: any element that accepts flow content.
* _content_: zero or more `<li>` elements, eventually mixed with `<ol>` and `<ul>` elements.
* _display_: `block`

## `<ol>`

An *ordered list*, it represents an ordered list of items.  This item is typically displayed with a preceding numbering, which can be of any form (numerals, letters, roman numerals, etc.).  The number styling is defined by the CSS `list-style-type` property.

* _parents_: any element that accepts flow content.
* _content_: Zero or more `<li>` elements.
* _display_: `block`

## `<li>`

A *list item element* is used to represent an item in a list.  It displays with either a bullet point or numeral depending upon whether its in an unordered or ordered list.

* _parents_: An `<ul>`, `<ol>`, or `<menu>` element.  It can also be present int the `<dir>` element, though that is obsolete usage.
* _content_: Flow content.
* _display_: `block`
<
## `<button>`

The *button* element represents a clickable button.

* _parents_: Any element that accepts phrasing content.
* _content_: Phrasing content.
* _display_: `inline`

## `<datalist>`

The `datalist` element contains a set of `<option>` elements that represent the values available for other controls.

* _parents_: Any element that accepts phrasing content.
* _content_: Either phrasing content or zero or more `<option>` elements.
* _display_: `block`


## `<form>`

A *form* element represents a document section that contains interactive controls to submit information to a web server.

* _parents_: Any element that accepts flow content.
* _content_: Flow content, but not containing `<form>` elements.
* _display_: `block`

## `<input>`

The *input* element is used to create interactive controls for web-based forms in order to accept data from the user.  How it works varies greatly depending on its' `type` attribute.

* _parents_: Any element that accepts phrasing content.
* _content_: None.  It's an empty element.
* _display_: `inline`

## `<keygen>`

DEPRECATED ELEMENT.  USE IS DISFAVORED.
The *keygen* element

* _parents_:
* _content_:
* _display_:

## `<label>`

* _parents_:
* _content_:
* _display_:

## `<legend>`

* _parents_:
* _content_:
* _display_:

## `<meter>`

* _parents_:
* _content_:
* _display_:

## `<optgroup>`

* _parents_:
* _content_:
* _display_:

## `<option>`

* _parents_:
* _content_:
* _display_:

## `<output>`

* _parents_:
* _content_:
* _display_:

## `<progress>`

* _parents_:
* _content_:
* _display_:

## `<select>`

* _parents_:
* _content_:
* _display_:
>
###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)

----->All definitions and info provided by the HTML5 docsets available on dash.app!!!!<-----


Content_categories:

Metadata: Elements belonging to the metadata content category modify the presentation or the behavior of the rest of the document, set up links to other documents, or convey other out of band information.

Flow: Elements belonging to the flow content category typically contain text or embedded content.

Sectioning: Elements in the sectioning content model create a section in the current outline that defines the scope of `<header>` elements, `<footer>` elements, and heading content.

Phrasing: Phrasing content defines the text and the mark-up it contains. Runs of phrasing content make up paragraphs.

Embedded: Embedded content imports another resource or inserts content from another mark-up language or namespace into the document.

Interactive: Interactive content includes elements that are specifically designed for user interaction.

Form-associated: Form-associated content comprises elements that have a form owner, exposed by a form attribute. A form owner is either the containing `<form>` element or the element whose id is specified in the form attribute.
