from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product, Order

from .serializers import (
    ProductSerializer,
    OrderSerializer
)


# GET ALL PRODUCTS

@api_view(['GET'])
def get_products(request):

    products = Product.objects.all()

    serializer = ProductSerializer(
        products,
        many=True
    )

    return Response(serializer.data)


# GET SINGLE PRODUCT

@api_view(['GET'])
def get_product(request, id):

    product = Product.objects.get(id=id)

    serializer = ProductSerializer(
        product
    )

    return Response(serializer.data)


# CREATE ORDER

@api_view(['POST'])
def create_order(request):

    serializer = OrderSerializer(
        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response(serializer.data)

    return Response(serializer.errors)