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


class BookInstance(models.Model):

    """
    By default the primary key is set to be an 
    AutoField, however you can explicitly set
    using UUIDField.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for this particular book, across the whole library')
    book = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)
    
    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']
    
    def __str__(self):
        return f('{self.id} ({self.book.title})')
    

class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['first_name', 'last_name']

    def get_absolute_url(self):
        return reverse('author-details', args=[str(self.id)])

    def __str__(self):
        return f('{self.first_name},{self.last_name}')

class Language(models.Model):
    LANGUAGE_LIST = (
        ('eng', 'English' ),
        ('fre', 'French'),
        ('jap', 'Japanese')
    )

    # Set up choices when working.
    # choices=LANGUAGE_LIST,
    # blank=True,
    # default='eng',

    language = models.CharField(max_length=30,
                help_text='Book language')

    def __str__(self):
        return (self.language)