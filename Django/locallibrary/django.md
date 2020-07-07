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