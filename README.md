# Vue Setup
Beginner friendly user guide on how to use vue and start making awesome apps!

## Setup
Setting up vue is pretty simple, for starting a project you can append this line inside of the head tag. `<script src=“https://cdn.jsdelivr.net/npm/vue/dist/vue.js” defer></script>` This will give us access to the vue library 

Next you may have an app.js file that will create a vue app for us to use within our project.
```
const app - new Vue({
	el: '#app'
})
```
The `el` key specifies which element in our html that we will connect with our vue app. Note how it uses css selector style to select the html element.

In vue, everything is passed into one object which makes it easier to keep track of, this object is called the options object.

After you created this .js file you will need to also connect it with the corresponding html file, to do so you can add this line below the script tag we appended earlier. `<script src=“./js/app.js” defer></script>`

## Accessing information
The options object will have another key `data`, this key could have an object as its value and then you’d be able store your information there. For now, I am only going to talk about hard coded data as retrieving data from a db will be covered later. 

The object that the data key has will be accessible to the html file by using the `{{}}` mustache or double curly brace syntax. If the data object has a key named `username` I can access that value by the `{{username}}` wherever I need to in the html file. This is templating. 

### Directives
The syntax for this will look like an html class but it actually allows us to connect javascript with our html elements and then be able to conditionally render info, add info. 
Here is a link with all the directives: [directives doc](https://vuejs.org/v2/api/#Directives), Note that if there is a directive that you need but does not exist you can create your own. 

### Components 
You can make one in a different file with the syntax
```
const Tweet = Vue.component('tweet', {
	props: ['message', 'author']
	template: 'div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p></div>'
});
```
This is how you create a component in vue, now inside of your html file you will use your custom component since it is named tweet you will use `<tweet></tweet>`

Where do the values in the `props` key come from? You will need to use another directive to bind the incoming data from the vue options object to this component. 
```
<tweet v-for="tweet in tweets" 
             v-bind:message="tweet"
             v-bind:author="username"></tweet>
```
In our options object we have keys labeled `tweets` and `username`, here we use the bind directive to connect it with the value of `author` which is what we use in the component.

Note that we are using `tweet` but we have a `tweets` key, we are able to use `tweet` because we are using the for directive that will iterate over the `tweets` array and create the corresponding tweet elements and we called it tweet so that we are able to bind `tweet` with message. 