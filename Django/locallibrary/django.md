# Intro
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction
1. Set up url.py, which contains mapping of urls to view methods. Uses path() functions. If url gets matched, then the corresponding view function gets called.
2. views.py contains implementations for these methods. It gets data from models.py and displays it using templates. This architecture is called a Model View Template (MVT) and bears resemblance to MVC (of Qt etc.).
3. Models are defined similar to that in Flask. An interesting parameter that you can pass to models.CharField is `choices` which takes an input of an array consisting of key:value pairs. These get rendered as drop-down boxes.


# Local Library
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/skeleton_website

1. We use the django-admin tool to create the basic template of our project. These don't contain models.py, views.py etc. yet.
2. This also creates a manage.py file, which allows us to instantiate one or multiple applications. Multiple applications may be useful if we want to consider some part of our site as a stand-alone component, this could be then re-used in other projects if desired.
3. Next, you should use manage.py to create an application via `python manage.py startapp catalog`. This leads to a catalog folder, which contains models.py and etc.
4. Add this catalog to the INSTALLED_APPS in settings.py. This registers your app to the project.
5. SQLite is the most basic DB, and has disadvantages for concurrent access.
6. Django makes use of Migrations, to keep track of any changes made to the model, and then makes the necessary changes to the database. You should run makemigrations and migrate form manage.py, whenever you make changes to the Models.

# Models
1. You can decide the order in which the table stores the value, by providing a Meta class, within your model class. This class has an `order` member which takes in a list of fieldnames. You may prefix fieldnames by a - sign, to indicate reverse ordering.

2. Once you've set up your Models, you can register them to your local app admin.py file. Then when you log into the admin route, you'll see the models wherein you can modify contents/add new rows etc.

3. Django provides a pretty nice admin page out of the box, however you can modify it if needed. To do this we make use of ModelAdmin classes. To simply change how the list of rows is displayed, we can modify the list_display field.

4. Similarly, you can use a list_filter, to provide filters based on particular columns.

5. To modify the appearance of the Details page (i.e. a particular row), use the fields member of the ModelAdmin class.

6. Use Inlines if you wanna display Foreign Key tables.

# Generic Views
1. If you want to display a List View for your model, instead of defining a function which parses the Model and then calls a render template, you can use Generic List Based Views that do all that for you.
2. To do this, your URL mapper doesn't map to a function but to a class method, of the type `BookListView.as_view()`.
3. The List View renders a template at `catalog/templates/catalog/(model_name)_list.html`
4. The templates are made available of a context which includes the rows of the table in a variable `(model_name)_list`. This is essentially the entire table, which you can then iterate over.
5. You can modify the View implementation. You could:
* Change the variable name of the Context.
* Change the queryset to filter which rows get passed to template.
* Change which template is accessed.
5. You can also override functions in the View class. For eg. instead of defining a queryset, you could modify the `get_queryset()` method. You could also pass additional variables into the context.

6. Passing variables in urls is similar to that in Flask. Where if you specify catalog/<something>, then the view will have access to the variable something.

7. To get access to the Foreign Key variables from the "many" side of the relationship, you can use the _set method. For eg. to get book_instances from a book variable you would : `bookinstance_set.all`. The object name is the lowercase of the Model name. Not that whenever you call methods from HTML files, you can never invoke them, nor can you pass parameters to them.

8. MDN mentions some problems you may run into if you don't provide any ordering of the model (either in the Class or in the View implementation). Can't seem to reproduce it myself, but keep in mind.

9. Implementing pagination in Generic views is as easy as just adding the member `paginate_by`.

# Sessions
Django makes use of sessions to keep track of which browsers visited the site, and their previous activity. This information is accessible through the session attribute of the request available to the view as well as to the templates it renders. Sessions are present as dictionaries, which allow you to set or get any variable you want. Django uses Cookies to store session ids, however the actual information is stored in the db as it is more secure there.

For most use-cases the session data in the database will get updated, however you might need to manually mark the `request.session.modified` to be true occasionally. See MDN if you face this issue.

# User Authentication

