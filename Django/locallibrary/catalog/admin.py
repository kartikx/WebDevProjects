from django.contrib import admin
from .models import Book, Author, BookInstance, Genre, Language

# Register your models here.
# admin.site.register(Book)
# admin.site.register(Author)
# admin.site.register(BookInstance)
admin.site.register(Genre)
admin.site.register(Language)

"""
Admin Classes enable adding custom functionality
to the Admin Page for these Models.
"""

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'date_of_birth', 'date_of_death')

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    """
    You can't directly invoke Genre, as it is
    a many-to-many relation, and prevented by Django.
    Hence we define a callable object.
    """
    list_display = ('title', 'author', 'display_genre')



@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

