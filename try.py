import phonenumbers
from phonenumbers import timezone
from phonenumbers import geocoder
from phonenumbers import carrier

# Enter phone number along with country code
number = input("Enter phone number with country code: ")

# Parsing string to phone number
phoneNumber = phonenumbers.parse(number)

# Printing the timezone of the given number using the timezone module
timeZone = timezone.time_zones_for_number(phoneNumber)
print("Time: " + str(timeZone))

# Printing the geolocation of the given number using the geocoder module
geolocation = geocoder.description_for_number(phoneNumber, "en")
print("Location: " + geolocation)

# Printing the service provider of the given number
service = carrier.name_for_number(phoneNumber, "en")
print("Service provider: " + service)