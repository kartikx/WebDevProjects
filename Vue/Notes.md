1. Directives may either be followed by = or :. Anything that follows : may be considered an argument. Read docs for this.
Eg. v-for="name in names"
    v-on:click=""

2. As a shorthand, v-on may be replaced with @, so it becomes @click="functionName()".

3. We use v-bind to associate attributes of an element, with data. So we could do :
<button v-bind:title='title'>. Here the title attribute of the button, will get associated (reactively) to the 
title member of data. The shorthand for v-bind:title is simply :title.

4. To alter class of particular elements, you could bind the class property to a variable. For eg.
<button :class='btn-class' @click:'btn-clicked'>
and btn-clicked could set btn-class to btn-clicked or btn-normal (which are styles defined in CSS).

However, since this is a commonly used operation, you could also:
<button :class="'clicked' : isClicked" @click:'btn-clicked'>

This means that set button class to clicked if isClicked. The btn-clicked method could set isClicked to true or false as necessary.




    

