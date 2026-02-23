from django.urls import path
from myapp import views

urlpatterns = [
    path('', views.index, name='index'),   # ✅ สำคัญมาก
    path('index/', views.index, name='index_page'),
    path('about/', views.about, name='about'),
    path('form/', views.form, name='form'),
    path('contact/', views.contact, name='contact'),
]