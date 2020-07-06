from django.db import models
from django.urls import reverse

import uuid

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=15, help_text='Enter a book genre: ')

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=100)

    """
    You must use the name of the Object, if it hasn't
    been defined in the file before referencing.
    """
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)

    # The max_length is imposed by the view, not the Database.
    summary = models.TextField(max_length=1000, help_text='Enter a summary about the book')

    # Providing the first parameter to specify how isbn will be represented in View, default
    # would be Isbn
    isbn = models.CharField('ISBN', max_length=13, help_text='13 character <a href="https://www.isbn-international.org/content/what-isbn">ISBN number </a>')

    genre = models.ManyToManyField(Genre, help_text='Select a genre for this book')

    language = models.ForeignKey('Language', on_delete=models.SET_NULL, null=True, help_text='Select the language for this book')

    def __str__(self):
        return self.title

    """
    Here book-details is the name provided in the URL mapper to the
    URL that displays details of books.
    If the URL accepts arguments, you can pass those in the args
    parameter.
    """
    def __get__absolute__url(self):
        return reverse('book-details', args=[str(self.id)])
