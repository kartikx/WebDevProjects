A web app to display exchange rates between various currencies in the web page.

Instead of hard-coding exchange rates in the front-end, the rates are requested through the [Exchange Rates API](https://exchangeratesapi.io/). These requests are made whenever the user alters any value in the drop-down, and don't require clicking any button. These requests are first sent in the form of AJAX queries to the backend (written in Flask), which then accesses the API and returns the processed result to the front-end.

This (mini) project was based on an idea discussed in CS50's Web Programming with Python and Javascript.