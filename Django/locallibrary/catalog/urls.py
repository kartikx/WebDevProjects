from django.urls import path
from . import views

"""
When this urlpatterns is checked,
the url has already been matched for catalog/.
Hence all paths in this are catalog/$
"""

urlpatterns = [
    path('', views.index, name='index'),
    path('books', BookListView.as_view(), name='books')
]