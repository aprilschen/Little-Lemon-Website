from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import BookingSerializer
from django.conf import settings
from django.core.mail import send_mail
# Create your views here.

@api_view(['GET', 'POST'])
def BookTime(request):
    if request.method=='GET':
        return Response({"message": "Success!"})
    if request.method=='POST':
        booking = BookingSerializer(data = request.data)
        booking.is_valid(raise_exception=True)
        booking.save()

        subject = 'Little Lemon Reservation'
        message = """Hi {},

Thank you for booking a reservation at Little Lemon. Unfortunately, this restaurant (and by proxy, your booking here) isn't real.
The website and its functionalities was made by Shiwei (https://github.com/aprilschen). Go and follow him/her!


Your reservation information is as follows:
Name: {} {}
Phone number: {}
Number of People: {}
Date: {}
Time: {}
Additional Comments: {}

If you have any questions or comments, feel free to direct them to shiweichen06@gmail.com. Do NOT send any emails to this address, as they will not be read.

best,
Little Lemon Robot <3
""".format(booking.data['first_name'],
           booking.data['first_name'],
           booking.data['last_name'],
           booking.data['phone_number'],
           booking.data['people'],
           booking.data['date'],
           booking.data['time'],
           booking.data['additional_comments'],
    )
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [booking.data['email'],]
        send_mail(subject, message, email_from, recipient_list)

        return Response({"message": 'Email: {}'.format(booking.data['email'])})