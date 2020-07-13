# Making Shadows Look Good
* Don't use Shadow Spread as a means to reduce opacity. Reduce opacity using the rgba values. Using Shadow Spread will make your shadow bigger, which you might not always want.
* The key takeaway from the video is that you should use Shadows as a subtle enhancement. Don't work with huge spreads with really opaque shadows. Also, remember that when working with shadows, you're essentially trying to depict elevations. How a particular componenent is rising up from the rest, so you should define the blur accordingly.
* Things that are at a higher elevation will have more blur.

# Hacks with Shadows
* You can use multiple shadows to act as if your componenent has multiple borders. One thing to take care of while doing this (as a matter of fact, while using Shadows in general) is that shadows don't get added to the calculation of box-sizes, hence it's possible that your shadow starts appearing over other items. To avoid this you could set all your shadows as inset (as you intend to use as borders and not shadows anyway).

* You can use negative spread to first displace the shadow inwards, and then offset it. Doing this multiple times can lead to a nice stepped layer effect as demo-ed at 5:05.