from django.shortcuts import render
from django.views import generic
from .models import Book, BookInstance, Author, Genre

# Create your views here.

def index(request):
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    num_authors = Author.objects.all().count()

    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1 

    context = {
        'num_books' : num_books,
        'num_instances' : num_instances,
        'num_instances_available' : num_instances_available,
        'num_authors' : num_authors,
        'num_visits' : num_visits
    }

    return render(request, 'index.html', context=context)

# This searches for template in templates/catalog/book_list.html
class BookListView(generic.ListView):
    model = Book
    paginate_by = 2

# This is passed in for a single object.
class BookDetailsView(generic.DetailView):
    model = Book