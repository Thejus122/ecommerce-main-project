from django.urls import path

from .views import (
    get_products,
    get_product,
    create_order
)

urlpatterns = [

    path(
        'products/',
        get_products
    ),

    path(
        'products/<int:id>/',
        get_product
    ),

    path(
        'orders/',
        create_order
    ),

]