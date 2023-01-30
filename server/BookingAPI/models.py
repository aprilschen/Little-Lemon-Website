from django.db import models
from django.core.validators import MinLengthValidator, MaxLengthValidator

# Create your models here.
class Booking(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=250)
    phone_number = models.CharField(max_length=25)
    people = models.PositiveIntegerField(default=1)
    date = models.DateField()
    time = models.TimeField()

    class occasion(models.TextChoices):
        NONE = "None"
        BIRTHDAY = "Birthday"
        ANNIVERSARY = "Anniversary"
        ENGAGEMENT = "Engagement"
        OTHER = "Other"
    class seating_preferences(models.TextChoices):
        NONE = "None"
        INDOORS = "Indoors"
        PATIO = "Outdoor (Patio)"
        SIDEWALK = "Outdoor (Sidewalk)"

    additional_comments = models.TextField(default='If none, leave field as is', max_length=3000)

    def __str__(self):
        return str(self.date) + ":" + str(self.time)