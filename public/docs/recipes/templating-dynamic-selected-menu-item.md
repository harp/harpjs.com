# How to create a menu with a dynamically selected item

This recipe shows you how to have a menu item selected depending on the page that your visitors are currently in.

## Setup

This recipe is a snippet that you can copy and paste to a new or an already existing file. It uses the `current` object to tell which page is being requested. For example, when the current page equals `home` then add the class `selected` to this item.

Let’s get started with the HTML structure:

    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>

Your HTML structure will most likely be different than this one, but you should be able to transfer the same technique to your own HTML.

In the HTML above we have a list of links that go to three different pages. We want to add the `selected` class to the home item when the current page is `/`, to the about item when the current page is `/about` and to the contact item when the current page is `/contact`.

To be able to generate dynamic HTML, we need to use an `EJS` or a `Jade` template. The `current` variable is always available in both (EJS and Jade).

The final code will look something like this, if you're using EJS:

    <ul>
      <li class="<%= current.source=='index'?'selected':'' %>">
        <a href="/">Home</a>
      </li>
      <li class="<%= current.source=='about'?'selected':'' %>">
        <a href="/about">About</a>
      </li>
      <li class="<%= current.source=='contact'?'selected':'' %>">
        <a href="/contact">Contact</a>
      </li>
    </ul>

Now each `li` tag has a class attribute that will output `selected` if the `current.source` variable is in certain page. And, that’s it!

Now, add some styles to your CSS to show the `selected` class differently than the other elements without that class:

    ul > li.selected {
      background: red;
      color: white;
      border-bottom: purple solid 3px;
    }

Have any question about this recipe? [Let us know on GitHub!](https://github.com/sintaxi/harp/issues)