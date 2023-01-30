from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id',
                  'first_name',
                  'last_name',
                  'email',
                  'phone_number',
                  'people',
                  'date',
                  'time',
                  'additional_comments']